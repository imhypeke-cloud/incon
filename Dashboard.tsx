
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { User, ModuleType, AuditLog, Title, HumanResource, Equipment, SupplyItem, UserRole } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import UploadModal from './components/UploadModal';
import { INITIAL_TITLES, INITIAL_HR, INITIAL_EQUIPMENT, INITIAL_SUPPLY, DATA_VERSION, INITIAL_TITLE_ALLOCATION } from './constants';

// Lazy load modules
const GeneralStatus = lazy(() => import('./modules/GeneralStatus'));
const TitlesModule = lazy(() => import('./modules/TitlesModule'));
const HRResources = lazy(() => import('./modules/HRResources'));
const EquipmentModule = lazy(() => import('./modules/EquipmentModule'));
const ExecutionSummary = lazy(() => import('./modules/ExecutionSummary'));
const Subcontractors = lazy(() => import('./modules/Subcontractors'));
const AdminPanel = lazy(() => import('./modules/AdminPanel'));
const LiveModule = lazy(() => import('./modules/LiveModule'));
const SupplyRegistry = lazy(() => import('./modules/SupplyRegistry'));
const Handbook = lazy(() => import('./modules/Handbook'));
const GenStructure = lazy(() => import('./modules/GenStructure'));
const ProjectManagers = lazy(() => import('./modules/ProjectManagers'));
const WorkPlan = lazy(() => import('./modules/WorkPlan'));

// Loading component
const ModuleLoader = () => (
  <div className="flex items-center justify-center h-full">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-[#007AFF]/20 border-t-[#007AFF] rounded-full animate-spin"></div>
      <p className="text-subhead text-[#86868B] animate-pulse">Загрузка модуля...</p>
    </div>
  </div>
);

interface DashboardProps {
  user: User;
  onLogout: () => void;
  auditLogs: AuditLog[];
  setAuditLogs: React.Dispatch<React.SetStateAction<AuditLog[]>>;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout, auditLogs, setAuditLogs }) => {
  const [activeModule, setActiveModule] = useState<ModuleType>(() => {
    const saved = localStorage.getItem('activeModule');
    return (saved as ModuleType) || 'GENERAL_STATUS';
  });
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  
  // Sidebar State
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dynamic State
  const [titles, setTitles] = useState<Title[]>(() => {
    try {
      const saved = localStorage.getItem('titles');
      return saved ? JSON.parse(saved) : INITIAL_TITLES;
    } catch (e) {
      console.error('Error parsing titles from localStorage', e);
      return INITIAL_TITLES;
    }
  });
  const [hrData, setHrData] = useState<HumanResource[]>(() => {
    try {
      const saved = localStorage.getItem('hrData');
      return saved ? JSON.parse(saved) : INITIAL_HR;
    } catch (e) {
      console.error('Error parsing hrData from localStorage', e);
      return INITIAL_HR;
    }
  });
  const [equipmentData, setEquipmentData] = useState<Equipment[]>(() => {
    try {
      const saved = localStorage.getItem('equipmentData');
      return saved ? JSON.parse(saved) : INITIAL_EQUIPMENT;
    } catch (e) {
      console.error('Error parsing equipmentData from localStorage', e);
      return INITIAL_EQUIPMENT;
    }
  });
  const [supplyData, setSupplyData] = useState<SupplyItem[]>(() => {
    try {
      const saved = localStorage.getItem('supplyData');
      return saved ? JSON.parse(saved) : INITIAL_SUPPLY;
    } catch (e) {
      console.error('Error parsing supplyData from localStorage', e);
      return INITIAL_SUPPLY;
    }
  });

  const [titleAllocation, setTitleAllocation] = useState<any[]>(() => {
    let parsed;
    try {
      parsed = JSON.parse(localStorage.getItem("titleAllocation") || "null");
    } catch (e) {
      console.error('Error parsing titleAllocation from localStorage', e);
      parsed = null;
    }
    const safeTitleAllocation = parsed ?? INITIAL_TITLE_ALLOCATION ?? [];
    return safeTitleAllocation;
  });

  // Check data version and reset if needed
  useEffect(() => {
    const savedVersion = localStorage.getItem('dataVersion');
    if (savedVersion !== DATA_VERSION) {
      setTitles(INITIAL_TITLES);
      setHrData(INITIAL_HR);
      setEquipmentData(INITIAL_EQUIPMENT);
      setSupplyData(INITIAL_SUPPLY);
      setTitleAllocation(INITIAL_TITLE_ALLOCATION ?? []);
      localStorage.setItem('dataVersion', DATA_VERSION);
    }
    
    // Specific check for supply data to ensure it updates from file
    const savedSupplyVersion = localStorage.getItem('supplyDataVersion');
    if (savedSupplyVersion !== '1.1') {
      setSupplyData(INITIAL_SUPPLY);
      localStorage.setItem('supplyDataVersion', '1.1');
    }
  }, []);

  // Persist state changes
  useEffect(() => {
    localStorage.setItem('activeModule', activeModule);
  }, [activeModule]);

  useEffect(() => {
    localStorage.setItem('titles', JSON.stringify(titles));
  }, [titles]);

  useEffect(() => {
    localStorage.setItem('hrData', JSON.stringify(hrData));
  }, [hrData]);

  useEffect(() => {
    localStorage.setItem('equipmentData', JSON.stringify(equipmentData));
  }, [equipmentData]);

  useEffect(() => {
    localStorage.setItem('supplyData', JSON.stringify(supplyData));
  }, [supplyData]);

  useEffect(() => {
    localStorage.setItem('titleAllocation', JSON.stringify(titleAllocation));
  }, [titleAllocation]);

  // Determine read-only status based on role
  // ADMIN: Can edit
  // LEADERSHIP (inconshym) & VIEWER: Read Only
  const isReadOnly = user.role !== UserRole.ADMIN;

  // Auto-collapse sidebar on tablet screens initially
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        setIsSidebarCollapsed(true);
      } else if (window.innerWidth >= 1280) {
        setIsSidebarCollapsed(false);
      }
    };

    // Set initial state
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuClick = React.useCallback(() => {
    if (window.innerWidth >= 1024) {
      // Desktop: Toggle collapse
      setIsSidebarCollapsed(prev => !prev);
    } else {
      // Mobile: Toggle drawer
      setIsMobileMenuOpen(true);
    }
  }, []);

  const handleUpdateTitle = React.useCallback((updatedTitle: Title) => {
    // Double check just in case
    if (isReadOnly) return;

    setTitles(prev => prev.map(t => t.id === updatedTitle.id ? updatedTitle : t));
    
    // Log change
    const newLog: AuditLog = {
      id: Math.random().toString(36).substr(2, 9),
      user: user.name,
      role: user.role,
      timestamp: new Date().toLocaleString(),
      action: `Редактирование титула: ${updatedTitle.number}`
    };
    setAuditLogs(prev => [newLog, ...prev]);
  }, [isReadOnly, user.name, user.role, setAuditLogs]);

  const handleUploadSuccess = React.useCallback((module: ModuleType, newData: any) => {
    const timestamp = new Date().toLocaleString();
    const action = `Загрузка данных в модуль: ${module}`;
    
    // Update local state based on module
    if (module === 'TITLES') setTitles(newData);
    if (module === 'HR_RESOURCES') setHrData(newData);
    if (module === 'EQUIPMENT') setEquipmentData(newData);
    if (module === 'SUPPLY') setSupplyData(newData);

    // Update Audit Logs
    const newLog: AuditLog = {
      id: Math.random().toString(36).substr(2, 9),
      user: user.name,
      role: user.role,
      timestamp,
      action
    };
    setAuditLogs(prev => [newLog, ...prev]);
    setIsUploadModalOpen(false);
  }, [user.name, user.role, setAuditLogs]);

  const renderModule = () => {
    switch (activeModule) {
      case 'GENERAL_STATUS': return <GeneralStatus onNavigate={setActiveModule} titles={titles} hr={hrData} equipment={equipmentData} />;
      case 'TITLES': return <TitlesModule user={user} titles={titles} onUpdateTitle={handleUpdateTitle} />;
      case 'HR_RESOURCES': return <HRResources />;
      case 'EQUIPMENT': return <EquipmentModule data={equipmentData} />;
      case 'EXECUTION_SUMMARY': return <ExecutionSummary />;
      case 'SUBCONTRACTORS': return <Subcontractors />;
      case 'ADMIN_PANEL': return <AdminPanel />;
      case 'LIVE': return <LiveModule />;
      case 'SUPPLY': return <SupplyRegistry data={supplyData} auditLogs={auditLogs} />;
      case 'HANDBOOK': return <Handbook />;
      case 'GEN_STRUCTURE': return <GenStructure />;
      case 'PROJECT_MANAGERS': return <ProjectManagers />;
      case 'WORK_PLAN': return <WorkPlan />;
      default: return <GeneralStatus onNavigate={setActiveModule} titles={titles} hr={hrData} equipment={equipmentData} />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#F5F5F7] text-[#1D1D1F] overflow-hidden relative">
      <Sidebar 
        activeModule={activeModule} 
        setActiveModule={(m) => {
          setActiveModule(m);
          setIsMobileMenuOpen(false);
        }} 
        userRole={user.role} 
        isCollapsed={isSidebarCollapsed}
        toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        isMobileOpen={isMobileMenuOpen}
        closeMobileMenu={() => setIsMobileMenuOpen(false)}
      />
      
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isSidebarCollapsed ? 'lg:pl-[80px]' : 'lg:pl-[280px]'}`}>
        <Header 
          user={user} 
          onLogout={onLogout} 
          activeModule={activeModule} 
          onUploadClick={() => setIsUploadModalOpen(true)}
          onMenuClick={handleMenuClick}
        />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          <div className="container-grid h-full">
            <Suspense fallback={<ModuleLoader />}>
              {renderModule()}
            </Suspense>
          </div>
        </main>
      </div>

      <UploadModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
        onSuccess={handleUploadSuccess}
        userRole={user.role}
      />
    </div>
  );
};

export default Dashboard;
