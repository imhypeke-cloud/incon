
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
          <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50 shadow-lg">
            <span className="block sm:inline">{loginError}</span>
            <button className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setLoginError(null)}>
              <span className="text-xl">&times;</span>
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
