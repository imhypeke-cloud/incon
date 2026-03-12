
export enum UserRole {
  LEADERSHIP = 'LEADERSHIP',
  VIEWER = 'VIEWER',
  ADMIN = 'ADMIN'
}

export interface User {
  login: string;
  role: UserRole;
  name: string;
}

export enum ProjectStatus {
  IN_SCHEDULE = 'В графике',
  RISK = 'Риск',
  DELAY = 'Отставание',
  COMPLETED = 'Завершено'
}

export enum Status {
  ON_TRACK = 'В графике',
  RISK = 'Риск',
  DELAYED = 'Отставание',
  COMPLETED = 'Завершено',
  NOT_STARTED = 'Не начато'
}

export enum Section {
  KZH = 'Раздел КЖ',
  KZH2 = 'Раздел КЖ.2',
  KM = 'Раздел КМ',
  AR = 'Раздел АР',
  AS = 'Раздел АС',
  TX = 'Раздел ТХ',
  VK = 'Раздел ВК',
  OV = 'Раздел ОВ'
}

export interface VolumeData {
  total: number;
  done: number;
  residual: number;
  startDate?: string;
  deadline?: string;
}

export interface SubSection {
  id: string;
  name: string;
  progress: number;
  startDate: string;
  endDate: string;
}

export interface Title {
  id: string;
  number: string;
  name: string;
  manager: string;
  contractor: string;
  progress: number;
  status: ProjectStatus | string;
  lastUpdate: string;
  rc?: VolumeData; // Раздел КЖ
  sc?: VolumeData; // Раздел КМ
  sections?: SubSection[]; // Детализация разделов
  startDate: string;
  deadline: string;
  subcontractor?: string;
  totalVolume: number;
  completedVolume: number;
  section?: Section | string;
  unit?: string;
  comment?: string;
}

export type TitleData = Title;

export enum EquipmentCategory {
  TRUCKS = 'Грузовая',
  LIFTING = 'Подъемная',
  EARTHMOVING = 'Землеройная',
  ROAD = 'Дорожная',
  SPECIAL = 'Специальная',
  TRANSPORT = 'Транспортная'
}

export interface Equipment {
  id: string;
  type: string; // Наименование (напр. Самосвал HOWO)
  model: string;
  plateNumber: string; // Госномер
  operator: string; // Водитель/Оператор
  phone: string;
  category: EquipmentCategory;
  ownerType: 'GEN' | 'SUB'; // Генподряд / Субподряд
  ownerName: string; // ТОО Integra или Субподрядчик
  status: 'ACTIVE' | 'MAINTENANCE' | 'IDLE';
  location?: string;
  total: number; // Для совместимости с GeneralStatus
  genPodryad: number; // Для совместимости
  subPodryad: number; // Для совместимости
}

export interface HumanResource {
  subcontractor: string;
  total: number;
  itr: number;
  workers: number;
  lastUpdate: string;
}

export interface WeeklyRecord {
  weekId: string;
  titleId: string;
  taskName: string;
  unit: string;
  plan: number;
  fact: number;
  problems: string;
  manager: string;
}

export interface AuditLog {
  id: string;
  user: string;
  role: string;
  timestamp: string;
  action: string;
  module?: string;
  status?: string;
  fileName?: string;
  details?: string;
}

export interface WorkforceData {
  id: string;
  organization: string;
  role: string;
  type: 'ИТР' | 'Рабочие';
  count: number;
}

export interface MachineryData {
  id: string;
  name: string;
  count: number;
  location?: string;
  notes?: string;
  category?: string;
}

export interface MapObject {
  id: string;
  type: 'rect' | 'circle';
  x: number;
  y: number;
  width?: number;
  height?: number;
  r?: number;
  rotation?: number;
}

export type ModuleType = 
  | 'GENERAL_STATUS' 
  | 'EXECUTION_SUMMARY' 
  | 'TITLES' 
  | 'HR_RESOURCES' 
  | 'SUBCONTRACTORS' 
  | 'EQUIPMENT' 
  | 'HANDBOOK' 
  | 'SUPPLY' 
  | 'GEN_STRUCTURE' 
  | 'LIVE'
  | 'ADMIN_PANEL'
  | 'PROJECT_MANAGERS'
  | 'WORK_PLAN';

export interface WorkPlanPeriod {
  id: string;
  name: string;
  type: 'month' | 'week';
  plan: number;
  fact: number;
  diff: number;
}

export interface WorkPlanRecord {
  id: string;
  responsible: string;
  contractor: string;
  subcontractor?: string;
  title: string;
  name: string;
  gprDate: string;
  unit: string;
  totalProject: number;
  total?: number;
  itr?: number;
  workers?: number;
  lastUpdate?: string;
  done?: number;
  remainder: number;
  periods: WorkPlanPeriod[];
}

export interface WorkPlanMonth {
  id: string;
  name: string;
  isArchived: boolean;
  records: WorkPlanRecord[];
  periodHeaders: { id: string; name: string; type: 'month' | 'week' }[];
}

export interface SupplyItem {
  id: string;           // Номер заявки
  date: string;         // Дата заявки
  material: string;     // Наименование
  unit: string;         // Ед. изм.
  qty: string | number; // Кол-во
  note: string;         // Примечание (из дока)
  responsible: string;  // Ответственное лицо
  status: string;       // Статус (1-4)
  supplier: string;     // Поставщик
  comment: string;      // Комментарии
  deliveryDate: string; // Дата поставки
  daysInWork: string | number; // Количество дней в работе
  title: string;        // Титул (объект)
}

export enum Type {
  TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED',
  STRING = 'STRING',
  NUMBER = 'NUMBER',
  INTEGER = 'INTEGER',
  BOOLEAN = 'BOOLEAN',
  ARRAY = 'ARRAY',
  OBJECT = 'OBJECT',
  NULL = 'NULL',
}
