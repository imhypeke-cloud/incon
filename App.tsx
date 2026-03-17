
import React, { useState, useEffect } from 'react';
import { User, UserRole, AuditLog } from './types';
import Login from './components/Login';
import Dashboard from './Dashboard';
import { USERS } from './constants';
import { DataProvider } from './services/DataContext';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [logs, setLogs] = useState<AuditLog[]>(() => {
    try {
      const savedLogs = localStorage.getItem('auditLogs');
      return savedLogs ? JSON.parse(savedLogs) : [];
    } catch (e) {
      console.error('Error parsing auditLogs from localStorage', e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('auditLogs', JSON.stringify(logs));
  }, [logs]);

  // Local authentication logic
  const handleLogin = (login: string, pass: string) => {
    const found = USERS.find(u => u.login === login && u.password === pass);
    if (found) {
      const newUser = { login: found.login, role: found.role, name: found.name };
      setUser(newUser);
      
      // Log access
      const log: AuditLog = {
        id: Math.random().toString(36).substr(2, 9),
        user: found.name,
        role: found.role,
        timestamp: new Date().toLocaleString(),
        action: 'Вход в систему'
      };
      setLogs(prev => [log, ...prev]);
      setLoginError(null);
    } else {
      setLoginError('Неверный логин или пароль');
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return (
      <div className="relative">
        <Login onLogin={handleLogin} />
        {loginError && (
          <div className="fixed top-4 right-4 bg-[#FF3B30]/10 border border-[#FF3B30]/20 text-[#FF3B30] px-4 py-3 rounded-xl z-50 shadow-sm backdrop-blur-md flex items-center animate-in slide-in-from-top-2 duration-300">
            <span className="block sm:inline text-sm font-medium">{loginError}</span>
            <button className="ml-4 text-[#FF3B30] hover:text-[#D70015] transition-colors" onClick={() => setLoginError(null)}>
              <span className="text-xl leading-none">&times;</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <DataProvider>
      <Dashboard user={user} onLogout={handleLogout} auditLogs={logs} setAuditLogs={setLogs} />
    </DataProvider>
  );
};

export default App;
