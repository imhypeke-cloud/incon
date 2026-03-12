import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, "data");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}

// Helper to read data
const readData = (filename: string, defaultData: any) => {
  const filePath = path.join(DATA_DIR, filename);
  if (fs.existsSync(filePath)) {
    try {
      return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    } catch (e) {
      console.error(`Error parsing ${filename}`, e);
      return defaultData;
    }
  }
  return defaultData;
};

// Helper to write data
const writeData = (filename: string, data: any) => {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '50mb' }));

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Generic endpoint for any module data
  app.get("/api/data/:module", (req, res) => {
    const moduleName = req.params.module;
    const data = readData(`${moduleName}.json`, null);
    if (data === null) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json(data);
  });

  app.post("/api/data/:module", (req, res) => {
    const moduleName = req.params.module;
    writeData(`${moduleName}.json`, req.body);
    res.json({ success: true });
  });

  app.post("/api/logs", (req, res) => {
    const logs = readData("auditLogs.json", []);
    logs.unshift(req.body); // Add new log to the beginning
    writeData("auditLogs.json", logs);
    res.json({ success: true });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
