
import { Title, ProjectStatus, HumanResource, Equipment, UserRole, EquipmentCategory, WorkforceData, MachineryData, Section, WorkPlanRecord, SupplyItem } from './types';
import { SUPPLY_DATA } from './supply_data';

const MOCK_SECTIONS: Title[] = [
  { 
    id: 's1', number: 'S1', name: 'Общестроительные работы', manager: 'Попивнухин Н.В.', contractor: 'INTEGRA', progress: 100, status: ProjectStatus.COMPLETED, lastUpdate: '2026-03-10',
    startDate: '2025-01-01', deadline: '2025-02-15', totalVolume: 100, completedVolume: 100, section: Section.KZH
  },
  { 
    id: 's2', number: 'S2', name: 'Монтаж основных конструкций', manager: 'Попивнухин Н.В.', contractor: 'INTEGRA', progress: 85, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-10',
    startDate: '2025-02-16', deadline: '2025-03-10', totalVolume: 100, completedVolume: 85, section: Section.KM
  },
];

// Helper to convert DD.MM.YYYY to YYYY-MM-DD
const d = (dateStr: string) => {
  if (!dateStr || dateStr === '?' || dateStr === '') return '';
  const [day, month, year] = dateStr.split('.');
  return `${year}-${month}-${day}`;
};




export const DATA_VERSION = '10.0';

export const INITIAL_TITLE_ALLOCATION = [
  { id: 'rebar-shop', title: 'Арматурный цех тит 50 и площадка ОГ', itr: 0, workers: 8, workType: 'Загатовка: ОГ, арматурных изделий, уборка по всей площадке', subcontractor: 'INTEGRA' },
  { id: '0.0-blitz', title: 'Титул 0.0 (КЖ1) ТОО Блиц-Монтаж', itr: 1, workers: 15, workType: 'Устройство армирования', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: 'doosan', title: 'Склад Doosan', itr: 1, workers: 8, workType: 'Вывоз материалов со склада на строй площадку', subcontractor: 'INTEGRA' },
  { id: '1.1-stroy', title: 'Титул 1.1 (Stroy Consulting 2050)', itr: 1, workers: 9, workType: 'Монтаж М/К', subcontractor: 'Stroy Consulting-2050' },
  { id: '1.1-sst', title: 'Титул 1.1 (SST Building)', itr: 1, workers: 21, workType: 'Монтаж оборудования', subcontractor: 'SST Building' },
  { id: '1.1-sarens', title: 'Титул 1.1 (Sarens)', itr: 0, workers: 2, workType: 'Монтаж', subcontractor: 'Sarens' },
  { id: '1.1-kj45-blitz', title: 'Титул 1.1 Кж4.5 (Блиц-Монтаж)', itr: 1, workers: 14, workType: 'Устройство армокаркаса, устранение замечаний, монтаж опалубки', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '1.1-blitz', title: 'Титул 1.1 (КЖ 2, 6, 7, 8, 16) Блиц-Монтаж', itr: 1, workers: 41, workType: 'Устройство армокаркаса, чипинг колонн', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '1.1-baibol', title: 'Титул 1.1 (КЖ15) ТОО Baibol', itr: 1, workers: 24, workType: 'Устройство армирования', subcontractor: 'ТОО Baibol' },
  { id: '1.2-ancon', title: 'Титул 1.2 (ТОО Ancon)', itr: 2, workers: 70, workType: 'Устройство армирования', subcontractor: 'ТОО Ancon' },
  { id: '1.2-blitz', title: 'Титул 1.2 (ТОО Блиц-Монтаж)', itr: 1, workers: 43, workType: 'Устройство армирования', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '1.3-sst', title: 'Титул 1.3 (SST Building)', itr: 1, workers: 11, workType: 'Устройство армирования', subcontractor: 'SST Building' },
  { id: '1.3-blitz', title: 'Титул 1.3 (ТОО Блиц-Монтаж)', itr: 2, workers: 46, workType: 'Устройство армирования', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '3-blitz', title: 'Титул 3 (ТОО Блиц-Монтаж)', itr: 1, workers: 7, workType: 'Устройство армирования', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '5.1-5.4-blitz', title: 'Титул 5.1 - 5.4 (ТОО Блиц-Монтаж)', itr: 1, workers: 17, workType: 'Устройство армирования', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '6.1-blitz', title: 'Титул 6.1 (ТОО Блиц-Монтаж)', itr: 0, workers: 6, workType: 'Устройство армирования', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '8.1', title: 'Титул 8.1 (Квант)', itr: 1, workers: 4, workType: 'Инженерные сети / Installation of sandwich panels', subcontractor: 'Квант' },
  { id: '8.2', title: 'Титул 8.2 (ТОО NUR-AKHMED GROUP)', itr: 1, workers: 3, workType: 'Инженерные сети / Installation of sandwich panels', subcontractor: 'ТОО NUR-AKHMED GROUP' },
  { id: '9-blitz', title: 'Титул 9 (0.0 Кж1) (ТОО Блиц-Монтаж)', itr: 0, workers: 8, workType: 'Устройство армирования', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '10.11', title: 'Титул 10.11 (ТОО Блиц-Монтаж)', itr: 1, workers: 6, workType: 'Монтаж опалубки', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '12.1', title: 'Титул 12.1 (Квант)', itr: 2, workers: 6, workType: 'Подготовительные работы к монтажу ФБц панелей', subcontractor: 'Квант' },
  { id: '12.2-12.3', title: 'Титул 12.2-12.3 (KBP)', itr: 1, workers: 8, workType: 'Монтаж резервуаров в проектное положение', subcontractor: 'KBP' },
  { id: '13.4', title: 'Титул 13.4 (Stroy Consulting-2050)', itr: 1, workers: 12, workType: 'Монтаж М/К', subcontractor: 'Stroy Consulting-2050' },
  { id: '15.1', title: 'Титул 15.1 (ТОО QPARK group)', itr: 1, workers: 4, workType: 'Устройство армокаркаса', subcontractor: 'ТОО QPARK group' },
  { id: '16', title: 'Титул 16 (ТОО Блиц-Монтаж)', itr: 2, workers: 28, workType: 'Монтаж опалубки', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '24', title: 'Титул 24 (ТОО QPARK group)', itr: 4, workers: 11, workType: 'Устройство армокаркаса', subcontractor: 'ТОО QPARK group' },
  { id: '25-atameken', title: 'Титул 25 (ТОО АТАМЕКЕН-ҚС)', itr: 1, workers: 23, workType: 'Устройство армокаркаса, демонаж и монтаж опалубки, монтаж лесов', subcontractor: 'АТАМЕКЕН-ҚС' },
  { id: '25-sst', title: 'Титул 25 (SST Building)', itr: 6, workers: 26, workType: 'Монтаж перегородочного газоблока', subcontractor: 'SST Building' },
  { id: '25-mega', title: 'Титул 25 (Мега Мост)', itr: 1, workers: 9, workType: 'Устройство армокаркаса', subcontractor: 'Мега Мост' },
  { id: '25-blitz', title: 'Титул 25 (Блиц-Монтаж)', itr: 1, workers: 10, workType: 'Устройство армокаркаса', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '27-blitz', title: 'Титул 27 (Блиц-Монтаж)', itr: 0, workers: 6, workType: 'Устройство армокаркаса', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '32', title: 'Титул 32 (TOO Q17 CONSTRUCTION)', itr: 1, workers: 7, workType: 'Монтаж М/К', subcontractor: 'TOO Q17 CONSTRUCTION' },
  { id: '34', title: 'Титул 34 (Блиц-Монтаж)', itr: 1, workers: 7, workType: 'Устройство армокаркаса', subcontractor: 'Блиц-Монтаж' },
  { id: '33.1', title: 'Титул 33.1 (Блиц-Монтаж)', itr: 1, workers: 3, workType: 'Устранение замечаний', subcontractor: 'Блиц-Монтаж' },
  { id: '38', title: 'Титул 38 (ТОО Адал Жарық Құрылыс)', itr: 1, workers: 8, workType: 'Устройство армокаркаса', subcontractor: 'ТОО Адал Жарық Құрылыс' },
  { id: '39', title: 'Титул 39 (ТОО Блиц-Монтаж)', itr: 1, workers: 10, workType: 'Загатовка опалубки', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '42', title: 'Титул 42 (ТОО Ancon)', itr: 2, workers: 18, workType: 'Устройство армокаркаса', subcontractor: 'ТОО Ancon' },
  { id: '0.0-blitz-2', title: 'Титул 0.0 (КЖ1) ТОО Блиц-Монтаж (2)', itr: 1, workers: 27, workType: 'Устройство армирования', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '43-hydro', title: 'Титул 43 (ТОО Блиц-Монтаж) гидроизоляция', itr: 0, workers: 12, workType: 'Гидроизоляция', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '43-portals', title: 'Титул 43 (ТОО Блиц-Монтаж) порталы', itr: 2, workers: 32, workType: 'Устройство армокаркаса, демонаж и монтаж опалубки, монтаж лесов', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '44-son', title: 'Титул 44 (ТОО Блиц-Монтаж) СОН', itr: 1, workers: 44, workType: 'Устройство армокаркаса, демонаж и монтаж опалубки, монтаж лесов', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '44-portals', title: 'Титул 44 (ТОО Блиц-Монтаж) порталы', itr: 2, workers: 26, workType: 'Устройство армокаркаса, демонаж и монтаж опалубки, монтаж лесов', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '46', title: 'Титул 46 (ТОО Блиц-Монтаж)', itr: 1, workers: 5, workType: 'Устройство армокаркаса, демонаж и монтаж опалубки, монтаж лесов', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '47.1', title: 'Титул 47.1 (ТОО Блиц-Монтаж)', itr: 0, workers: 4, workType: 'Устройство армокаркаса, демонаж и монтаж опалубки, монтаж лесов', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '50-kz3', title: 'Титул 50 (КЖ3) (ТОО Мейрам Құрылыс)', itr: 1, workers: 3, workType: 'Монтаж м/к', subcontractor: 'ТОО Мейрам Құрылыс' },
  { id: '50-kz4-pazuhi', title: 'Титул 50 (КЖ4) (ТОО Блиц-Монтаж) пазухи', itr: 0, workers: 3, workType: 'Устройство армокаркаса, демонаж и монтаж опалубки', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '50-kz4-atameken', title: 'Титул 50 (КЖ4) (ТОО АТАМЕКЕН-ҚС)', itr: 0, workers: 4, workType: 'Устройство армокаркаса, демонаж и монтаж опалубки', subcontractor: 'АТАМЕКЕН-ҚС' },
  { id: '50-kz4-hydro', title: 'Титул 50 (КЖ4) (ТОО Блиц-Монтаж) гидроизоляция', itr: 1, workers: 5, workType: 'Гидроизоляция', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '50-kz5-blitz', title: 'Титул 50 (КЖ5) (ТОО Блиц-Монтаж)', itr: 0, workers: 2, workType: 'Устройство армокаркаса, демонаж и монтаж опалубки', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '50-kz8-blitz', title: 'Титул 50 (КЖ8) (ТОО Блиц-Монтаж)', itr: 0, workers: 3, workType: 'Устройство армокаркаса, демонаж и монтаж опалубки', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: 'forestry', title: 'Лесомонтажники (ТОО Блиц-Монтаж)', itr: 2, workers: 48, workType: 'Монтаж строительных лесов', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: 'pipeshop', title: 'Трубный цех (ТОО Блиц-Монтаж)', itr: 1, workers: 17, workType: 'Сборка трубного цеха', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: 'imstalkon', title: 'АО Имсталькон', itr: 1, workers: 23, workType: 'Монтаж м/к', subcontractor: 'АО Имсталькон' },
  { id: 'stecol', title: 'TOO STECOL', itr: 65, workers: 67, workType: 'Монтаж оборудования', subcontractor: 'TOO STECOL' },
  { id: 'const-go', title: 'KZ Construction Go', itr: 2, workers: 8, workType: 'Изготовление', subcontractor: 'KZ Construction Go' },
];

export const INITIAL_TITLES: Title[] = [
  { 
    id: '1.1', number: '1.1', name: 'Главный корпус', manager: 'Попивнухин Н.В.', contractor: 'INTEGRA', progress: 74, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-10',
    rc: { total: 27933.77, done: 26500.00, residual: 1433.77, deadline: d('27.07.2026') },
    sc: { total: 11891.157, done: 2750.00, residual: 9141.157, deadline: d('25.10.2026') }
  },
  { 
    id: '1.2', number: '1.2', name: 'Электрощитовая блока №1', manager: 'Попивнухин Н.В.', contractor: 'BAZIS', progress: 44, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-10',
    rc: { total: 9374.2, done: 4100.00, residual: 5274.2, deadline: d('29.03.2026') },
    sc: { total: 34, done: 0, residual: 34, deadline: d('12.07.2026') }
  },
  { 
    id: '1.3', number: '1.3', name: 'Электрощитовая блока №2', manager: 'Попивнухин Н.В.', contractor: 'INTEGRA', progress: 41, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-10',
    rc: { total: 4720.23, done: 1950.00, residual: 2770.23, deadline: d('28.03.2026') },
    sc: { total: 26.85, done: 0, residual: 26.85, deadline: d('27.05.2026') }
  },
  { 
    id: '2.1', number: '2.1', name: 'Воздушно-конденсаторная установка', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 100, status: ProjectStatus.COMPLETED, lastUpdate: '2026-03-03', 
    rc: { total: 4079.54, done: 4079.54, residual: 0, deadline: '' } 
  },
  { 
    id: '2.2', number: '2.2', name: 'Воздушно-конденсаторная установка', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 100, status: ProjectStatus.COMPLETED, lastUpdate: '2026-03-03', 
    rc: { total: 3878.64, done: 3878.64, residual: 0, deadline: '' } 
  },
  { 
    id: '3', number: '3', name: 'Пункт подготовки газа', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 84, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 746.35, done: 627.88, residual: 118.47, deadline: d('20.01.2026') } 
  },
  { 
    id: '4.1-4.2', number: '4.1-4.2', name: 'Повышающий трансформатор генератора паровой турбины', manager: 'Попивнухин Н.В.', contractor: 'INTEGRA', progress: 0, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 695.09, done: 0, residual: 695.09, deadline: d('18.07.2026') } 
  },
  { 
    id: '5.1-5.2', number: '5.1-5.2', name: 'Повышающий трансформатор генератора газовой турбины', manager: 'Попивнухин Н.В.', contractor: 'INTEGRA', progress: 54, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 1532.91, done: 821.12, residual: 711.79, deadline: d('18.07.2026') } 
  },
  { 
    id: '5.3-5.4', number: '5.3-5.4', name: 'Повышающий трансформатор генератора газовой турбины', manager: 'Попивнухин Н.В.', contractor: 'INTEGRA', progress: 0, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 1532.91, done: 3.03, residual: 1529.88, deadline: d('18.07.2026') } 
  },
  { 
    id: '6.1-6.4', number: '6.1-6.4', name: 'Трансформатор собственных нужд', manager: 'Попивнухин Н.В.', contractor: 'INTEGRA', progress: 0, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 301.68, done: 0, residual: 301.68, deadline: d('18.07.2026') } 
  },
  { 
    id: '7.1', number: '7.1', name: 'Сухая градирня вспомогательного оборудования', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 100, status: ProjectStatus.COMPLETED, lastUpdate: '2026-03-03', 
    rc: { total: 118.67, done: 118.67, residual: 0, deadline: '' } 
  },
  { 
    id: '7.2', number: '7.2', name: 'Сухая градирня вспомогательного оборудования', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 100, status: ProjectStatus.COMPLETED, lastUpdate: '2026-03-03', 
    rc: { total: 118.67, done: 118.67, residual: 0, deadline: '' } 
  },
  { 
    id: '8.1', number: '8.1', name: 'Насосная станция циркуляционной воды', manager: 'Махмудов Ю.С.', contractor: 'INTEGRA', progress: 100, status: ProjectStatus.COMPLETED, lastUpdate: '2026-03-03',
    rc: { total: 89.23, done: 89.07, residual: 0.16, deadline: d('29.12.2025') },
    sc: { total: 31.271, done: 30.793, residual: 0.478, deadline: '' }
  },
  { 
    id: '8.2', number: '8.2', name: 'Насосная станция циркуляционной воды', manager: 'Махмудов Ю.С.', contractor: 'INTEGRA', progress: 99, status: ProjectStatus.COMPLETED, lastUpdate: '2026-03-03',
    rc: { total: 89.23, done: 87.83, residual: 1.4, deadline: d('30.12.2025') },
    sc: { total: 31.267, done: 29.763, residual: 1.504, deadline: '' }
  },
  { 
    id: '9', number: '9', name: 'Дизель генераторная установка', manager: 'Алдамуратов Р.И.', contractor: 'BAZIS', progress: 97, status: ProjectStatus.COMPLETED, lastUpdate: '2026-03-03', 
    rc: { total: 382.19, done: 369.65, residual: 12.54, deadline: d('26.11.2025') } 
  },
  { 
    id: '10,11', number: '10,11', name: 'Водоподготовка', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 87, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03',
    rc: { total: 6391.65, done: 5354.4, residual: 1037.25, deadline: d('29.03.2026') },
    sc: { total: 1479.36, done: 1479.36, residual: 0, deadline: d('30.03.2026') }
  },
  { 
    id: '12.1', number: '12.1', name: 'Насосная станция сырой и противопожарной воды', manager: 'Махмудов Ю.С.', contractor: 'BAZIS', progress: 97, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03',
    rc: { total: 91.47, done: 88.07, residual: 3.4, deadline: d('13.01.2026') },
    sc: { total: 35.635, done: 35.232, residual: 0.403, deadline: '' }
  },
  { 
    id: '12.2', number: '12.2', name: 'Насосная станция сырой и противопожарной воды', manager: 'Махмудов Ю.С.', contractor: 'BAZIS', progress: 72, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03',
    rc: { total: 316.6, done: 316.6, residual: 0, deadline: d('30.12.2025') },
    sc: { total: 136.68, done: 7.795, residual: 128.885, deadline: d('30.05.2026') }
  },
  { 
    id: '12.3', number: '12.3', name: 'Резервуары запаса сырой и противопожарной воды', manager: 'Махмудов Ю.С.', contractor: 'INTEGRA', progress: 81, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-04',
    rc: { total: 316.6, done: 316.6, residual: 0, deadline: d('30.12.2025') },
    sc: { total: 136.68, done: 48.000, residual: 88.680, deadline: d('30.05.2026') }
  },
  { 
    id: '13.2-13.3', number: '13.2 - 13.3', name: 'Резервуары хозяйственно-питьевого водоснабжения', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 100, status: ProjectStatus.COMPLETED, lastUpdate: '2026-03-04',
    rc: { total: 26.86, done: 26.86, residual: 0, deadline: '' },
    sc: { total: 20.436, done: 20.436, residual: 0, deadline: '' }
  },
  { 
    id: '13.4', number: '13.4', name: 'Насосная станция хозяйственно-питьевого водоснабжения', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 82, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-04',
    rc: { total: 59.14, done: 53.50, residual: 5.64, deadline: d('24.01.2026') },
    sc: { total: 25.631, done: 18.000, residual: 7.631, deadline: d('31.12.2025') }
  },
  { 
    id: '15.1', number: '15.1', name: 'Насосная станция производственной и деминерализованной воды', manager: 'Алдамуратов Р.И.', contractor: 'StroyTech', progress: 84, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-04',
    rc: { total: 97.55, done: 75.00, residual: 22.55, deadline: d('13.02.2026') },
    sc: { total: 50.331, done: 50.331, residual: 0, deadline: '' }
  },
  { 
    id: '15.2-15.3', number: '15.2-15.3', name: 'Резервуары запаса производственной воды', manager: 'Алдамуратов Р.И.', contractor: 'StroyTech', progress: 67, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-04',
    rc: { total: 102, done: 45.0, residual: 57.0, deadline: '' },
    sc: { total: 69.284, done: 69.284, residual: 0, deadline: d('30.03.2026') }
  },
  { 
    id: '15.4-15.5', number: '15.4-15.5', name: 'Резервуары запаса деминерализованной воды', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 20, status: ProjectStatus.DELAY, lastUpdate: '2026-03-04',
    rc: { total: 241.82, done: 105.0, residual: 136.82, deadline: d('28.12.2025') },
    sc: { total: 287.802, done: 0, residual: 287.802, deadline: d('30.07.2026') }
  },
  { 
    id: '16', number: '16', name: 'Насосная станция возврата конденсата', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 71, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03',
    rc: { total: 1174.2, done: 986.71, residual: 187.49, deadline: d('30.04.2026') },
    sc: { total: 219.5, done: 0, residual: 219.5, deadline: d('25.05.2026') }
  },
  { 
    id: '18', number: '18', name: 'Котельная собственных нужд', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 0, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 857.36, done: 0, residual: 857.36, deadline: d('20.06.2026') },
    sc: { total: 0, done: 0, residual: 0, deadline: '' }
  },
  { 
    id: '19', number: '19', name: 'Распределительный пункт 10 кВ с ТП 10/0,4 кВ', manager: 'Алдамуратов Р.И.', contractor: 'BAZIS', progress: 100, status: ProjectStatus.COMPLETED, lastUpdate: '2026-03-03',
    rc: { total: 156.8, done: 156.8, residual: 0, deadline: d('30.11.2025') },
    sc: { total: 7.898, done: 7.898, residual: 0, deadline: d('30.01.2026') }
  },
  { 
    id: '20.1-20.3', number: '20.1-20.3', name: 'Резервуары запаса дизельного топлива', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 34, status: ProjectStatus.RISK, lastUpdate: '2026-03-03',
    rc: { total: 5091.51, done: 2353.5, residual: 2738.01, deadline: '' },
    sc: { total: 1799.634, done: 0, residual: 1799.634, deadline: '' }
  },
  { 
    id: '21', number: '21', name: 'Насосная станция дизельного топлива', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 50, status: ProjectStatus.RISK, lastUpdate: '2026-03-03',
    rc: { total: 156.62, done: 108.14, residual: 48.48, deadline: '' },
    sc: { total: 58.283, done: 0, residual: 58.283, deadline: '' }
  },
  { 
    id: '22.1-22.6', number: '22.1 - 22.6', name: 'Сливное устройство дизельного топлива', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 38, status: ProjectStatus.RISK, lastUpdate: '2026-03-03', 
    rc: { total: 64.75, done: 24.35, residual: 40.4, deadline: '' } 
  },
  { 
    id: '23.1.1-23.1.2', number: '23.1.1-23.1.2', name: 'Резервуар аварийного слива масла газовой турбины', manager: 'Попивнухин Н.В.', contractor: 'INTEGRA', progress: 0, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 46.6, done: 0, residual: 46.6, deadline: d('29.06.2026') } 
  },
  { 
    id: '23.2', number: '23.2', name: 'Резервуар аварийного слива масла паровой турбины', manager: 'Попивнухин Н.В.', contractor: 'INTEGRA', progress: 0, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 23.8, done: 0, residual: 23.8, deadline: d('29.06.2026') } 
  },
  { 
    id: '23.3.1-23.3.2', number: '23.3.1-23.3.2', name: 'Резервуар аварийного слива масла трансформатора', manager: 'Попивнухин Н.В.', contractor: 'INTEGRA', progress: 0, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 410.6, done: 0, residual: 410.6, deadline: d('29.06.2026') } 
  },
  { 
    id: '23.4', number: '23.4', name: 'Подземный резервуар аварийного слива масла', manager: 'Махмудов Ю.С.', contractor: 'INTEGRA', progress: 100, status: ProjectStatus.COMPLETED, lastUpdate: '2026-03-03', 
    rc: { total: 106.8, done: 106.8, residual: 0, deadline: d('29.06.2026') } 
  },
  { 
    id: '23.5', number: '23.5', name: 'Подземный резервуар аварийного слива топлива дизельного генератора', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 82, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 19.6, done: 16.04, residual: 3.56, deadline: d('25.04.2026') } 
  },
  { 
    id: '23.6.1-23.6.2', number: '23.6.1-23.6.2', name: 'Подземный резервуар хранения топлива при неисправном пуске', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 0, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 23.4, done: 0, residual: 23.4, deadline: d('29.06.2026') } 
  },
  { 
    id: '23.7', number: '23.7', name: 'Дренажный резервуар дизельного топлива', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 87, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 81.01, done: 70.81, residual: 10.2, deadline: '' } 
  },
  { 
    id: '24', number: '24', name: 'Мастерская со складом Противорадиационное укрытие', manager: 'Махмудов Ю.С.', contractor: 'INTEGRA', progress: 65, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03',
    rc: { total: 1111.05, done: 696.2, residual: 414.85, deadline: d('31.01.2026') },
    sc: { total: 90.92, done: 86.701, residual: 4.219, deadline: d('31.12.2025') }
  },
  { 
    id: '25', number: '25', name: 'Административно-бытовой корпус', manager: 'Абилькасимов Б.Ж.', contractor: 'INTEGRA', progress: 75, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 13544, done: 10123.100, residual: 3420.9, deadline: d('31.03.2026') },
    sc: { total: 0, done: 0, residual: 0, deadline: '' }
  },
  { 
    id: '26.1-26.3', number: '26.1-26.3', name: 'Контрольно-пропускной пункт', manager: 'Алдамуратов Р.И.', contractor: 'BAZIS', progress: 100, status: ProjectStatus.COMPLETED, lastUpdate: '2026-03-03',
    rc: { total: 18.45, done: 18.45, residual: 0, deadline: '' },
    sc: { total: 6.27, done: 6.27, residual: 0, deadline: '' }
  },
  { 
    id: '27', number: '27', name: 'Воздушная компрессорная станция', manager: 'Алдамуратов Р.И.', contractor: 'BAZIS', progress: 17, status: ProjectStatus.DELAY, lastUpdate: '2026-03-03', 
    rc: { total: 138.58, done: 23.43, residual: 115.15, deadline: d('30.12.2025') }, 
    sc: { total: 3, done: 0, residual: 3, deadline: '' } 
  },
  { 
    id: '28', number: '28', name: 'Помещение хранения баллонов с азотом', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 98, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 15.05, done: 14.73, residual: 0.32, deadline: d('31.05.2026') },
    sc: { total: 0, done: 0, residual: 0, deadline: '' }
  },
  { 
    id: '29', number: '29', name: 'Пункт газорегуляторный блочный', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 100, status: ProjectStatus.COMPLETED, lastUpdate: '2026-03-03', 
    rc: { total: 14.92, done: 14.92, residual: 0, deadline: d('19.12.2025') },
    sc: { total: 0, done: 0, residual: 0, deadline: '' }
  },
  { 
    id: '30', number: '30', name: 'Центральная проходная', manager: 'Абилькасимов Б.Ж.', contractor: 'INTEGRA', progress: 100, status: ProjectStatus.COMPLETED, lastUpdate: '2026-03-03', 
    rc: { total: 747.07, done: 765.07, residual: -18, deadline: '' },
    sc: { total: 0, done: 0, residual: 0, deadline: '' }
  },
  { 
    id: '31', number: '31', name: 'Автозаправочная станция', manager: 'Алдамуратов Р.И.', contractor: 'BAZIS', progress: 25, status: ProjectStatus.RISK, lastUpdate: '2026-03-03', 
    rc: { total: 20.68, done: 5.53, residual: 15.15, deadline: d('31.03.2026') }, 
    sc: { total: 1.515, done: 0, residual: 1.515, deadline: d('31.05.2026') } 
  },
  { 
    id: '32', number: '32', name: 'Здание горячего водоснабжения', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 48, status: ProjectStatus.RISK, lastUpdate: '2026-03-03',
    rc: { total: 293.64, done: 116.62, residual: 177.02, deadline: d('31.01.2026') },
    sc: { total: 53.721, done: 48.681, residual: 5.04, deadline: d('28.02.2026') }
  },
  { 
    id: '33.1-33.6', number: '33.1-33.6', name: 'Маслохозяйство турбинного масла', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 24, status: ProjectStatus.RISK, lastUpdate: '2026-03-03', 
    rc: { total: 313.41, done: 86.96, residual: 226.45, deadline: d('01.03.2026') }, 
    sc: { total: 55.5, done: 0, residual: 55.5, deadline: d('29.06.2026') } 
  },
  { 
    id: '34', number: '34', name: 'Резервный трансформатор', manager: 'Попивнухин Н.В.', contractor: 'INTEGRA', progress: 10, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 238.95, done: 24.3, residual: 214.65, deadline: d('25.02.2026') }, 
    sc: { total: 3.368, done: 0, residual: 3.368, deadline: d('30.04.2026') } 
  },
  { 
    id: '35', number: '35', name: 'Насосная станция турбинного масла', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 89, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03',
    rc: { total: 88.15, done: 74.8, residual: 13.35, deadline: d('24.02.2025') },
    sc: { total: 27.185, done: 27.185, residual: 0, deadline: d('22.12.2025') }
  },
  { 
    id: '35.1', number: '35.1', name: 'Дренажный резервуар турбинного масла', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 81, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 59.5, done: 48.28, residual: 11.22, deadline: d('31.12.2026') },
    sc: { total: 0, done: 0, residual: 0, deadline: '' }
  },
  { 
    id: '36', number: '36', name: 'Приемно-сливное устройство турбинного масла', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 72, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 18.6, done: 13.43, residual: 5.17, deadline: d('30.05.2026') },
    sc: { total: 0, done: 0, residual: 0, deadline: '' }
  },
  { 
    id: '37', number: '37', name: 'Комплектная трансформаторная подстанция 10/04 кВ №1', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 98, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 90.88, done: 88.6, residual: 2.28, deadline: d('30.04.2026') }, 
    sc: { total: 4.303, done: 4.3, residual: 0.003, deadline: d('30.04.2026') } 
  },
  { 
    id: '38', number: '38', name: 'Оперативный пункт управления', manager: 'Махмудов Ю.С.', contractor: 'INTEGRA', progress: 100, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03',
    rc: { total: 333.38, done: 351.66, residual: -18.28, deadline: d('18.02.2026') },
    sc: { total: 135.744, done: 133.5, residual: 2.244, deadline: d('18.03.2026') }
  },
  { 
    id: '39.1-39.4', number: '39.1-39.4', name: 'Автотрансформатор 500 МВА', manager: 'Махмудов Ю.С.', contractor: 'INTEGRA', progress: 100, status: ProjectStatus.COMPLETED, lastUpdate: '2026-03-03', 
    rc: { total: 909.61, done: 909.61, residual: 0, deadline: d('29.01.2026') },
    sc: { total: 0, done: 0, residual: 0, deadline: '' }
  },
  { 
    id: '41', number: '41', name: 'Комплектная трансформаторная подстанция 10/04 кВ №2', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 0, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 91.24, done: 0, residual: 91.24, deadline: '' }, 
    sc: { total: 4.282, done: 0, residual: 4.282, deadline: '' } 
  },
  { 
    id: '42', number: '42', name: 'Пожарный пост', manager: 'Махмудов Ю.С.', contractor: 'INTEGRA', progress: 50, status: ProjectStatus.RISK, lastUpdate: '2026-03-03',
    rc: { total: 592.74, done: 221.24, residual: 371.5, deadline: d('31.01.2026') },
    sc: { total: 147.765, done: 145.776, residual: 1.989, deadline: d('31.12.2026') }
  },
  { 
    id: '43', number: '43', name: 'Открытое распределительное устройство 220 кВ', manager: 'Махмудов Ю.С.', contractor: 'INTEGRA', progress: 94, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 4398.46, done: 4396.68, residual: 1.78, deadline: d('30.03.2026') }, 
    sc: { total: 310.647, done: 49.305, residual: 261.342, deadline: d('30.04.2026') } 
  },
  { 
    id: '44', number: '44', name: 'Открытое распределительное устройство 500 кВ', manager: 'Махмудов Ю.С.', contractor: 'INTEGRA', progress: 83, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 4167.12, done: 3996.87, residual: 170.25, deadline: d('26.01.2026') }, 
    sc: { total: 636.081, done: 0, residual: 636.081, deadline: d('30.04.2026') } 
  },
  { 
    id: '45.1', number: '45.1', name: 'Канализационная насосная станция', manager: 'Махмудов Ю.С.', contractor: 'INTEGRA', progress: 100, status: ProjectStatus.COMPLETED, lastUpdate: '2026-03-03', 
    rc: { total: 5.35, done: 5.35, residual: 0, deadline: '' },
    sc: { total: 0, done: 0, residual: 0, deadline: '' }
  },
  { 
    id: '45.2', number: '45.2', name: 'Очистные сооружения бытовых стоков', manager: 'Махмудов Ю.С.', contractor: 'INTEGRA', progress: 69, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 70.46, done: 48.96, residual: 21.5, deadline: '' },
    sc: { total: 0, done: 0, residual: 0, deadline: '' }
  },
  { 
    id: '46', number: '46', name: 'Резервуар очищенных бытовых стоков', manager: 'Махмудов Ю.С.', contractor: 'INTEGRA', progress: 99, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 4493, done: 4485.52, residual: 7.48, deadline: '' },
    sc: { total: 0, done: 0, residual: 0, deadline: '' }
  },
  { 
    id: '47.1', number: '47.1', name: 'Резервуар производственно-дождевых стоков', manager: 'Махмудов Ю.С.', contractor: 'INTEGRA', progress: 95, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 653.5, done: 620.6, residual: 32.9, deadline: d('29.01.2026') },
    sc: { total: 0, done: 0, residual: 0, deadline: '' }
  },
  { 
    id: '47.2', number: '47.2', name: 'Очистные сооружения производственно-дождевых стоков', manager: 'Махмудов Ю.С.', contractor: 'INTEGRA', progress: 100, status: ProjectStatus.COMPLETED, lastUpdate: '2026-03-03', 
    rc: { total: 5.15, done: 5.15, residual: 0, deadline: d('30.12.2025') },
    sc: { total: 0, done: 0, residual: 0, deadline: '' }
  },
  { 
    id: '47.3', number: '47.3', name: 'Канализационная насосная станция очищенных производственно-дождевых стоков', manager: 'Махмудов Ю.С.', contractor: 'INTEGRA', progress: 100, status: ProjectStatus.COMPLETED, lastUpdate: '2026-03-03', 
    rc: { total: 3.73, done: 3.73, residual: 0, deadline: d('31.05.2026') },
    sc: { total: 0, done: 0, residual: 0, deadline: '' }
  },
  { 
    id: '48', number: '48', name: 'Блок очистки химически-загрязненных стоков', manager: 'Махмудов Ю.С.', contractor: 'BAZIS', progress: 62, status: ProjectStatus.RISK, lastUpdate: '2026-03-03',
    rc: { total: 716.01, done: 341.72, residual: 374.29, deadline: d('30.01.2026') },
    sc: { total: 274.505, done: 274.505, residual: 0, deadline: '' }
  },
  { 
    id: '48.1-48.2', number: '48.1-48.2', name: 'Резервуары-усреднители исходных стоков', manager: 'Махмудов Ю.С.', contractor: 'BAZIS', progress: 56, status: ProjectStatus.RISK, lastUpdate: '2026-03-03',
    rc: { total: 79.8, done: 32.8, residual: 47, deadline: '' },
    sc: { total: 34.326, done: 31.394, residual: 2.932, deadline: d('31.12.2025') }
  },
  { 
    id: '49', number: '49', name: 'Ограждение площадки', manager: 'Махмудов Ю.С.', contractor: 'INTEGRA', progress: 4, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 225.85, done: 9.72, residual: 216.13, deadline: d('29.09.2026') },
    sc: { total: 0, done: 0, residual: 0, deadline: '' }
  },
  { 
    id: '50', number: '50', name: 'Технологическая эстакада', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 26, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03',
    rc: { total: 4648.98, done: 1821.16, residual: 2827.82, deadline: d('29.05.2026') },
    sc: { total: 2502.07, done: 8.61, residual: 2493.46, deadline: d('27.09.2026') }
  },
  { 
    id: '51', number: '51', name: 'Аварийный пруд-накопитель', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 0, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 0, done: 0, residual: 0, deadline: d('27.09.2026') } 
  },
  { 
    id: '52', number: '52', name: 'Площадка временного хранения мусора', manager: 'Алдамуратов Р.И.', contractor: 'INTEGRA', progress: 0, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 0, done: 0, residual: 0, deadline: '' } 
  },
  { 
    id: '00-КЖ', number: '00-КЖ', name: 'Котлованы и фундаменты спецсооружений (Сводный)', manager: 'Не назначен', contractor: 'INTEGRA', progress: 94, status: ProjectStatus.IN_SCHEDULE, lastUpdate: '2026-03-03', 
    rc: { total: 700, done: 660.11, residual: 39.89, deadline: '' } 
  },
  { 
    id: 'Временные', number: 'Временные', name: 'Временные сооружения', manager: 'Не назначен', contractor: 'INTEGRA', progress: 100, status: ProjectStatus.COMPLETED, lastUpdate: '2026-01-31', 
    rc: { total: 328.826, done: 328.826, residual: 0, deadline: '' } 
  }
].map((t) => ({ 
  ...t, 
  sections: MOCK_SECTIONS as any,
  startDate: (t.rc as any)?.startDate || '2025-01-01',
  deadline: t.rc?.deadline || '2026-12-31',
  totalVolume: (t.rc?.total || 0) + (t.sc?.total || 0),
  completedVolume: (t.rc?.done || 0) + (t.sc?.done || 0),
  section: Section.KZH 
})) as Title[];

export const INITIAL_WORK_PLAN: WorkPlanRecord[] = [
  // Попивнухин Н.В.
  {
    "id": "pop-1",
    "responsible": "Попивнухин Н.В.",
    "contractor": "INTEGRA",
    "title": "1.1-КЖ3",
    "name": "Бетонирование",
    "gprDate": "27.07.2026",
    "unit": "м3",
    "totalProject": 3031.45,
    "done": 3031.45,
    "remainder": 0,
    "periods": [
      { "id": "mar", "name": "Март", "type": "month", "plan": 0, "fact": 83.76, "diff": 83.76 },
      { "id": "w1", "name": "02.03 – 08.03", "type": "week", "plan": 0, "fact": 83.76, "diff": 83.76 },
      { "id": "w2", "name": "09.03 – 15.03", "type": "week", "plan": 0, "fact": 0, "diff": 0 },
      { "id": "w3", "name": "16.03 – 22.03", "type": "week", "plan": 0, "fact": 0, "diff": 0 },
      { "id": "w4", "name": "23.03 – 29.03", "type": "week", "plan": 0, "fact": 0, "diff": 0 }
    ]
  },
  {
    "id": "pop-2",
    "responsible": "Попивнухин Н.В.",
    "contractor": "INTEGRA",
    "title": "1.1-КЖ4,5",
    "name": "Бетонирование",
    "gprDate": "27.07.2026",
    "unit": "м3",
    "totalProject": 4965.63,
    "done": 4703.93,
    "remainder": 261.7,
    "periods": [
      { "id": "mar", "name": "Март", "type": "month", "plan": 192.72, "fact": 171.4, "diff": -21.32 },
      { "id": "w1", "name": "02.03 – 08.03", "type": "week", "plan": 160, "fact": 165.6, "diff": 5.6 },
      { "id": "w2", "name": "09.03 – 15.03", "type": "week", "plan": 12, "fact": 5.8, "diff": -6.2 },
      { "id": "w3", "name": "16.03 – 22.03", "type": "week", "plan": 10, "fact": 0, "diff": -10 },
      { "id": "w4", "name": "23.03 – 29.03", "type": "week", "plan": 10.72, "fact": 0, "diff": -10.72 }
    ]
  },
  {
    "id": "pop-3",
    "responsible": "Попивнухин Н.В.",
    "contractor": "INTEGRA",
    "title": "1.1-КЖ20",
    "name": "Бетонирование",
    "gprDate": "27.07.2026",
    "unit": "м3",
    "totalProject": 1182.97,
    "done": 1020.19,
    "remainder": 162.78,
    "periods": [
      { "id": "mar", "name": "Март", "type": "month", "plan": 0, "fact": 12.2, "diff": 12.2 },
      { "id": "w1", "name": "02.03 – 08.03", "type": "week", "plan": 0, "fact": 11, "diff": 11 },
      { "id": "w2", "name": "09.03 – 15.03", "type": "week", "plan": 0, "fact": 1.2, "diff": 1.2 },
      { "id": "w3", "name": "16.03 – 22.03", "type": "week", "plan": 0, "fact": 0, "diff": 0 },
      { "id": "w4", "name": "23.03 – 29.03", "type": "week", "plan": 0, "fact": 0, "diff": 0 }
    ]
  },
  {
    "id": "pop-4",
    "responsible": "Попивнухин Н.В.",
    "contractor": "INTEGRA",
    "title": "1.1-КЖ21",
    "name": "Бетонирование",
    "gprDate": "27.07.2026",
    "unit": "м3",
    "totalProject": 929,
    "done": 624.36,
    "remainder": 304.64,
    "periods": [
      { "id": "mar", "name": "Март", "type": "month", "plan": 148, "fact": 23.8, "diff": -124.2 },
      { "id": "w1", "name": "02.03 – 08.03", "type": "week", "plan": 20, "fact": 22, "diff": 2 },
      { "id": "w2", "name": "09.03 – 15.03", "type": "week", "plan": 64, "fact": 1.8, "diff": -62.2 },
      { "id": "w3", "name": "16.03 – 22.03", "type": "week", "plan": 32, "fact": 0, "diff": -32 },
      { "id": "w4", "name": "23.03 – 29.03", "type": "week", "plan": 32, "fact": 0, "diff": -32 }
    ]
  },
  {
    "id": "pop-5",
    "responsible": "Попивнухин Н.В.",
    "contractor": "INTEGRA",
    "title": "1.1-КМ3",
    "name": "Монтаж металлоконструкций Блок 4,5",
    "gprDate": "25.10.2026",
    "unit": "т",
    "totalProject": 2404.38,
    "done": 281.54,
    "remainder": 2122.84,
    "periods": [
      { "id": "mar", "name": "Март", "type": "month", "plan": 350, "fact": 214.73, "diff": -135.27 },
      { "id": "w1", "name": "02.03 – 08.03", "type": "week", "plan": 110, "fact": 120, "diff": 10 },
      { "id": "w2", "name": "09.03 – 15.03", "type": "week", "plan": 110, "fact": 94.73, "diff": -15.27 },
      { "id": "w3", "name": "16.03 – 22.03", "type": "week", "plan": 110, "fact": 0, "diff": -110 },
      { "id": "w4", "name": "23.03 – 29.03", "type": "week", "plan": 20, "fact": 0, "diff": -20 }
    ]
  },
  {
    "id": "pop-6",
    "responsible": "Попивнухин Н.В.",
    "contractor": "INTEGRA",
    "title": "1.1-ВК",
    "name": "Прокладка трубопроводов канализации",
    "gprDate": "29.12.2026",
    "unit": "м.п.",
    "totalProject": 5826,
    "done": 612,
    "remainder": 5214,
    "periods": [
      { "id": "mar", "name": "Март", "type": "month", "plan": 150, "fact": 40, "diff": -110 },
      { "id": "w1", "name": "02.03 – 08.03", "type": "week", "plan": 30, "fact": 40, "diff": 10 },
      { "id": "w2", "name": "09.03 – 15.03", "type": "week", "plan": 40, "fact": 0, "diff": -40 },
      { "id": "w3", "name": "16.03 – 22.03", "type": "week", "plan": 40, "fact": 0, "diff": -40 },
      { "id": "w4", "name": "23.03 – 29.03", "type": "week", "plan": 40, "fact": 0, "diff": -40 }
    ]
  },
  // Махмудов Ю.
  {
    "id": "max-1",
    "responsible": "Махмудов Ю.",
    "contractor": "INTEGRA",
    "title": "00-КЖ1",
    "name": "Бетонирование участки 10, 13",
    "gprDate": "23.04.2026",
    "unit": "м3",
    "totalProject": 485.39,
    "done": 141.2,
    "remainder": 344.19,
    "periods": [
      { "id": "mar", "name": "Март", "type": "month", "plan": 69, "fact": 23.2, "diff": -45.8 },
      { "id": "w1", "name": "02.03 – 08.03", "type": "week", "plan": 15, "fact": 6.9, "diff": -8.1 },
      { "id": "w2", "name": "09.03 – 15.03", "type": "week", "plan": 15, "fact": 16.3, "diff": 1.3 },
      { "id": "w3", "name": "16.03 – 22.03", "type": "week", "plan": 19, "fact": 0, "diff": -19 },
      { "id": "w4", "name": "23.03 – 29.03", "type": "week", "plan": 20, "fact": 0, "diff": -20 }
    ]
  },
  {
    "id": "max-2",
    "responsible": "Махмудов Ю.",
    "contractor": "INTEGRA",
    "title": "8.1-АР",
    "name": "Монтаж сэндвич-панелей",
    "gprDate": "23.04.2026",
    "unit": "м2",
    "totalProject": 809,
    "done": 680,
    "remainder": 129,
    "periods": [
      { "id": "mar", "name": "Март", "type": "month", "plan": 60, "fact": 0, "diff": -60 },
      { "id": "w1", "name": "02.03 – 08.03", "type": "week", "plan": 0, "fact": 0, "diff": 0 },
      { "id": "w2", "name": "09.03 – 15.03", "type": "week", "plan": 30, "fact": 0, "diff": -30 },
      { "id": "w3", "name": "16.03 – 22.03", "type": "week", "plan": 30, "fact": 0, "diff": -30 },
      { "id": "w4", "name": "23.03 – 29.03", "type": "week", "plan": 0, "fact": 0, "diff": 0 }
    ]
  },
  {
    "id": "max-3",
    "responsible": "Махмудов Ю.",
    "contractor": "INTEGRA",
    "title": "24-КЖ",
    "name": "Бетонирование",
    "gprDate": "17.04.2026",
    "unit": "м3",
    "totalProject": 970.47,
    "done": 704.16,
    "remainder": 266.31,
    "periods": [
      { "id": "mar", "name": "Март", "type": "month", "plan": 132, "fact": 0, "diff": -132 },
      { "id": "w1", "name": "02.03 – 08.03", "type": "week", "plan": 0, "fact": 3.8, "diff": 3.8 },
      { "id": "w2", "name": "09.03 – 15.03", "type": "week", "plan": 0, "fact": 0, "diff": 0 },
      { "id": "w3", "name": "16.03 – 22.03", "type": "week", "plan": 3.8, "fact": 0, "diff": -3.8 },
      { "id": "w4", "name": "23.03 – 29.03", "type": "week", "plan": 124.4, "fact": 0, "diff": -124.4 }
    ]
  },
  // Алдамуратов Р.
  {
    "id": "ald-1",
    "responsible": "Алдамуратов Р.",
    "contractor": "INTEGRA",
    "title": "3-КЖ",
    "name": "Бетонирование",
    "gprDate": "20.01.2026",
    "unit": "м3",
    "totalProject": 746.35,
    "done": 703.74,
    "remainder": 42.61,
    "periods": [
      { "id": "mar", "name": "Март", "type": "month", "plan": 70, "fact": 55.5, "diff": -14.5 },
      { "id": "w1", "name": "02.03 – 08.03", "type": "week", "plan": 70, "fact": 33, "diff": -37 },
      { "id": "w2", "name": "09.03 – 15.03", "type": "week", "plan": 0, "fact": 22.5, "diff": 22.5 },
      { "id": "w3", "name": "16.03 – 22.03", "type": "week", "plan": 0, "fact": 0, "diff": 0 },
      { "id": "w4", "name": "23.03 – 29.03", "type": "week", "plan": 0, "fact": 0, "diff": 0 }
    ]
  },
  {
    "id": "ald-2",
    "responsible": "Алдамуратов Р.",
    "contractor": "INTEGRA",
    "title": "50-КЖ4",
    "name": "Бетонирование",
    "gprDate": "29.05.2026",
    "unit": "м3",
    "totalProject": 1095.22,
    "done": 786.03,
    "remainder": 309.19,
    "periods": [
      { "id": "mar", "name": "Март", "type": "month", "plan": 43, "fact": 116.6, "diff": 73.6 },
      { "id": "w1", "name": "02.03 – 08.03", "type": "week", "plan": 43, "fact": 85.9, "diff": 42.9 },
      { "id": "w2", "name": "09.03 – 15.03", "type": "week", "plan": 0, "fact": 30.7, "diff": 30.7 },
      { "id": "w3", "name": "16.03 – 22.03", "type": "week", "plan": 0, "fact": 0, "diff": 0 },
      { "id": "w4", "name": "23.03 – 29.03", "type": "week", "plan": 0, "fact": 0, "diff": 0 }
    ]
  },
  // Абилькасимов Б.
  {
    "id": "abi-1",
    "responsible": "Абилькасимов Б.",
    "contractor": "Атамекен",
    "title": "25-КЖ",
    "name": "Бетонирование Блок 1",
    "gprDate": "29.03.2026",
    "unit": "м3",
    "totalProject": 1307.37,
    "done": 1114.35,
    "remainder": 193.02,
    "periods": [
      { "id": "mar", "name": "Март", "type": "month", "plan": 148, "fact": 13, "diff": -135 },
      { "id": "w1", "name": "02.03 – 08.03", "type": "week", "plan": 12, "fact": 13, "diff": 1 },
      { "id": "w2", "name": "09.03 – 15.03", "type": "week", "plan": 0, "fact": 0, "diff": 0 },
      { "id": "w3", "name": "16.03 – 22.03", "type": "week", "plan": 0, "fact": 0, "diff": 0 },
      { "id": "w4", "name": "23.03 – 29.03", "type": "week", "plan": 136, "fact": 0, "diff": -136 }
    ]
  },
  {
    "id": "abi-2",
    "responsible": "Абилькасимов Б.",
    "contractor": "Атамекен",
    "title": "25-КЖ",
    "name": "Бетонирование Блок 4",
    "gprDate": "29.03.2026",
    "unit": "м3",
    "totalProject": 3338.79,
    "done": 2877.47,
    "remainder": 461.32,
    "periods": [
      { "id": "mar", "name": "Март", "type": "month", "plan": 60, "fact": 48.7, "diff": -11.3 },
      { "id": "w1", "name": "02.03 – 08.03", "type": "week", "plan": 30, "fact": 30.7, "diff": 0.7 },
      { "id": "w2", "name": "09.03 – 15.03", "type": "week", "plan": 20, "fact": 18, "diff": -2 },
      { "id": "w3", "name": "16.03 – 22.03", "type": "week", "plan": 10, "fact": 0, "diff": -10 },
      { "id": "w4", "name": "23.03 – 29.03", "type": "week", "plan": 0, "fact": 0, "diff": 0 }
    ]
  },
  // Тлеулесов К.
  {
    "id": "tle-1",
    "responsible": "Тлеулесов К.",
    "contractor": "INTEGRA",
    "title": "1.1-ГТГ №11, №12",
    "name": "Обогрев временного укрытия турбин",
    "gprDate": "01.09.2026",
    "unit": "час",
    "totalProject": 672,
    "done": 336,
    "remainder": 336,
    "periods": [
      { "id": "mar", "name": "Март", "type": "month", "plan": 672, "fact": 336, "diff": -336 },
      { "id": "w1", "name": "02.03 – 08.03", "type": "week", "plan": 168, "fact": 168, "diff": 0 },
      { "id": "w2", "name": "09.03 – 15.03", "type": "week", "plan": 168, "fact": 168, "diff": 0 },
      { "id": "w3", "name": "16.03 – 22.03", "type": "week", "plan": 168, "fact": 0, "diff": -168 },
      { "id": "w4", "name": "23.03 – 29.03", "type": "week", "plan": 168, "fact": 0, "diff": -168 }
    ]
  },
  {
    "id": "tle-2",
    "responsible": "Тлеулесов К.",
    "contractor": "INTEGRA",
    "title": "2.2-ТМ",
    "name": "Монтаж несущих металлоконструкций",
    "gprDate": "24.04.2026",
    "unit": "т",
    "totalProject": 120,
    "done": 59,
    "remainder": 61,
    "periods": [
      { "id": "mar", "name": "Март", "type": "month", "plan": 30, "fact": 34, "diff": 4 },
      { "id": "w1", "name": "02.03 – 08.03", "type": "week", "plan": 30, "fact": 25, "diff": -5 },
      { "id": "w2", "name": "09.03 – 15.03", "type": "week", "plan": 30, "fact": 0, "diff": -30 },
      { "id": "w3", "name": "16.03 – 22.03", "type": "week", "plan": 30, "fact": 0, "diff": -30 },
      { "id": "w4", "name": "23.03 – 29.03", "type": "week", "plan": 0, "fact": 0, "diff": 0 }
    ]
  },
  // Рахматулла А.
  {
    "id": "rah-1",
    "responsible": "Рахматулла А.",
    "contractor": "INTEGRA",
    "title": "1.1-ЗМ",
    "name": "Прокладка заземления (шина & провод)",
    "gprDate": "27.12.2026",
    "unit": "м.п.",
    "totalProject": 8218,
    "done": 1396.5,
    "remainder": 6821.5,
    "periods": [
      { "id": "mar", "name": "Март", "type": "month", "plan": 120, "fact": 0, "diff": -120 },
      { "id": "w1", "name": "02.03 – 08.03", "type": "week", "plan": 0, "fact": 0, "diff": 0 },
      { "id": "w2", "name": "09.03 – 15.03", "type": "week", "plan": 0, "fact": 0, "diff": 0 },
      { "id": "w3", "name": "16.03 – 22.03", "type": "week", "plan": 60, "fact": 0, "diff": -60 },
      { "id": "w4", "name": "23.03 – 29.03", "type": "week", "plan": 60, "fact": 0, "diff": -60 }
    ]
  },
  {
    "id": "rec-2",
    "responsible": "Попивнухин Н.В.",
    "contractor": "ЕвроСтрой",
    "title": "1.1-КЖ4,5",
    "name": "Бетонирование",
    "gprDate": "27.07.2026",
    "unit": "м3",
    "totalProject": 4965.63,
    "done": 4698.13,
    "remainder": 267.5,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 192.72,
        "fact": 165.6,
        "diff": -27.12
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 160,
        "fact": 165.6,
        "diff": 5.6
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 12,
        "fact": 0,
        "diff": -12
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 10,
        "fact": 0,
        "diff": -10
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 10.72,
        "fact": 0,
        "diff": -10.72
      }
    ]
  },
  {
    "id": "rec-3",
    "responsible": "Попивнухин Н.В.",
    "contractor": "ЕвроСтрой",
    "title": "1.1-КЖ20",
    "name": "Бетонирование",
    "gprDate": "27.07.2026",
    "unit": "м3",
    "totalProject": 1182.97,
    "done": 1018.99,
    "remainder": 163.98,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 0.001,
        "fact": 11,
        "diff": 10.999
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 11,
        "diff": 10.999
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-4",
    "responsible": "Попивнухин Н.В.",
    "contractor": "ЕвроСтрой",
    "title": "1.1-КЖ21",
    "name": "Бетонирование",
    "gprDate": "27.07.2026",
    "unit": "м3",
    "totalProject": 929,
    "done": 622.56,
    "remainder": 306.44,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 148,
        "fact": 22,
        "diff": -126
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 20,
        "fact": 22,
        "diff": 2
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 64,
        "fact": 0,
        "diff": -64
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 32,
        "fact": 0,
        "diff": -32
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 32,
        "fact": 0,
        "diff": -32
      }
    ]
  },
  {
    "id": "rec-5",
    "responsible": "Попивнухин Н.В.",
    "contractor": "ЕвроСтрой",
    "title": "1.1-КМ3",
    "name": "Монтаж металлоконструкций Блок 4,5",
    "gprDate": "25.10.2026",
    "unit": "т",
    "totalProject": 2404.38,
    "done": 186.81,
    "remainder": 2217.57,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 350,
        "fact": 120,
        "diff": -230
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 110,
        "fact": 120,
        "diff": 10
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 110,
        "fact": 0,
        "diff": -110
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 110,
        "fact": 0,
        "diff": -110
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      }
    ]
  },
  {
    "id": "rec-6",
    "responsible": "Попивнухин Н.В.",
    "contractor": "ЕвроСтрой",
    "title": "1.1-АР1",
    "name": "Бетонирование полов Блок 6",
    "gprDate": "28.12.2026",
    "unit": "м3",
    "totalProject": 1162.25,
    "done": 0,
    "remainder": 1162.25,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 200,
        "fact": 0,
        "diff": -200
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 100,
        "fact": 0,
        "diff": -100
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 100,
        "fact": 0,
        "diff": -100
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-7",
    "responsible": "Попивнухин Н.В.",
    "contractor": "ЕвроСтрой",
    "title": "1.1-ВК",
    "name": "Прокладка трубопроводов канализации",
    "gprDate": "29.12.2026",
    "unit": "м.п.",
    "totalProject": 5826,
    "done": 612,
    "remainder": 5214,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 150,
        "fact": 40,
        "diff": -110
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 30,
        "fact": 40,
        "diff": 10
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 40,
        "fact": 0,
        "diff": -40
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 40,
        "fact": 0,
        "diff": -40
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 40,
        "fact": 0,
        "diff": -40
      }
    ]
  },
  {
    "id": "rec-8",
    "responsible": "Попивнухин Н.В.",
    "contractor": "ЕвроСтрой",
    "title": "1.2-КЖ",
    "name": "Бетонирование",
    "gprDate": "14.06.2026",
    "unit": "м3",
    "totalProject": 9374.2,
    "done": 4114.94,
    "remainder": 5259.26,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 900,
        "fact": 0,
        "diff": -900
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 900,
        "fact": 0,
        "diff": -900
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-9",
    "responsible": "Попивнухин Н.В.",
    "contractor": "ЕвроСтрой",
    "title": "1.3-КЖ",
    "name": "Бетонирование",
    "gprDate": "15.05.2026",
    "unit": "м3",
    "totalProject": 4720.23,
    "done": 1936.13,
    "remainder": 2784.1,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 251.5,
        "fact": 0,
        "diff": -251.5
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 31.5,
        "fact": 0,
        "diff": -31.5
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 220,
        "fact": 0,
        "diff": -220
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-10",
    "responsible": "Попивнухин Н.В.",
    "contractor": "ЕвроСтрой",
    "title": "5.1-КЖ",
    "name": "Бетонирование",
    "gprDate": "18.07.2026",
    "unit": "м3",
    "totalProject": 539.95,
    "done": 400.5,
    "remainder": 139.45,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 30,
        "fact": 0,
        "diff": -30
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 30,
        "fact": 0,
        "diff": -30
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-11",
    "responsible": "Попивнухин Н.В.",
    "contractor": "ЕвроСтрой",
    "title": "5.2-КЖ",
    "name": "Бетонирование",
    "gprDate": "18.07.2026",
    "unit": "м3",
    "totalProject": 539.95,
    "done": 437.8,
    "remainder": 102.15,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 60.001,
        "fact": 17,
        "diff": -43.001
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 17,
        "diff": 16.999
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 30,
        "fact": 0,
        "diff": -30
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 30,
        "fact": 0,
        "diff": -30
      }
    ]
  },
  {
    "id": "rec-12",
    "responsible": "Попивнухин Н.В.",
    "contractor": "ЕвроСтрой",
    "title": "5.3-КЖ",
    "name": "Бетонирование",
    "gprDate": "18.07.2026",
    "unit": "м3",
    "totalProject": 368.41,
    "done": 15,
    "remainder": 353.41,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 97.2,
        "fact": 15,
        "diff": -82.2
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 10,
        "fact": 15,
        "diff": 5
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 10,
        "fact": 0,
        "diff": -10
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 10,
        "fact": 0,
        "diff": -10
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 67.2,
        "fact": 0,
        "diff": -67.2
      }
    ]
  },
  {
    "id": "rec-13",
    "responsible": "Попивнухин Н.В.",
    "contractor": "ЕвроСтрой",
    "title": "5.4-КЖ",
    "name": "Бетонирование",
    "gprDate": "18.07.2026",
    "unit": "м3",
    "totalProject": 368.41,
    "done": 109.9,
    "remainder": 258.51,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 97.2,
        "fact": 97.5,
        "diff": 0.3
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 10,
        "fact": 97.5,
        "diff": 87.5
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 10,
        "fact": 0,
        "diff": -10
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 10,
        "fact": 0,
        "diff": -10
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 67.2,
        "fact": 0,
        "diff": -67.2
      }
    ]
  },
  {
    "id": "rec-14",
    "responsible": "Попивнухин Н.В.",
    "contractor": "ЕвроСтрой",
    "title": "6.1-КЖ",
    "name": "Бетонирование",
    "gprDate": "18.07.2026",
    "unit": "м3",
    "totalProject": 334.58,
    "done": 0,
    "remainder": 334.58,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 94.96,
        "fact": 0,
        "diff": -94.96
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 29.5,
        "fact": 0,
        "diff": -29.5
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 37.38,
        "fact": 0,
        "diff": -37.38
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 28.08,
        "fact": 0,
        "diff": -28.08
      }
    ]
  },
  {
    "id": "rec-15",
    "responsible": "Попивнухин Н.В.",
    "contractor": "ЕвроСтрой",
    "title": "34-КЖ",
    "name": "Бетонирование",
    "gprDate": "13.07.2026",
    "unit": "м3",
    "totalProject": 202,
    "done": 49.5,
    "remainder": 152.5,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 55.52,
        "fact": 0,
        "diff": -55.52
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 35.52,
        "fact": 0,
        "diff": -35.52
      }
    ]
  },
  {
    "id": "rec-16",
    "responsible": "Махмудов Ю.",
    "contractor": "ТОО Блиц монтаж",
    "title": "00-КЖ1",
    "name": "Бетонирование участки 10, 13",
    "gprDate": "-",
    "unit": "м3",
    "totalProject": 485.39,
    "done": 124.9,
    "remainder": 360.49,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 69,
        "fact": 6.9,
        "diff": -62.1
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 15,
        "fact": 6.9,
        "diff": -8.1
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 15,
        "fact": 0,
        "diff": -15
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 19,
        "fact": 0,
        "diff": -19
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      }
    ]
  },
  {
    "id": "rec-17",
    "responsible": "Махмудов Ю.",
    "contractor": "Квант",
    "title": "8.1-АР",
    "name": "Монтаж сэндвич-панелей",
    "gprDate": "23.04.2026",
    "unit": "м2",
    "totalProject": 809,
    "done": 680,
    "remainder": 129,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 60,
        "fact": 0,
        "diff": -60
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 30,
        "fact": 0,
        "diff": -30
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 30,
        "fact": 0,
        "diff": -30
      }
    ]
  },
  {
    "id": "rec-18",
    "responsible": "Махмудов Ю.",
    "contractor": "Квант",
    "title": "8.1-АР",
    "name": "Бетонирование полов",
    "gprDate": "23.04.2026",
    "unit": "м3",
    "totalProject": 56.6,
    "done": 55.4,
    "remainder": 1.2,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 56.2,
        "fact": 55,
        "diff": -1.2
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 56.2,
        "fact": 55,
        "diff": -1.2
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-19",
    "responsible": "Махмудов Ю.",
    "contractor": "Квант",
    "title": "8.2-АР",
    "name": "Устройство кровли из ПВХ мембраны",
    "gprDate": "20.04.2026",
    "unit": "м2",
    "totalProject": 380,
    "done": 0,
    "remainder": 380,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 380,
        "fact": 0,
        "diff": -380
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 190,
        "fact": 0,
        "diff": -190
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 190,
        "fact": 0,
        "diff": -190
      }
    ]
  },
  {
    "id": "rec-20",
    "responsible": "Махмудов Ю.",
    "contractor": "Квант",
    "title": "8.2-АР",
    "name": "Бетонирование полов",
    "gprDate": "19.07.2026",
    "unit": "м3",
    "totalProject": 57,
    "done": 0,
    "remainder": 57,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 57,
        "fact": 0,
        "diff": -57
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 57,
        "fact": 0,
        "diff": -57
      }
    ]
  },
  {
    "id": "rec-21",
    "responsible": "Махмудов Ю.",
    "contractor": "Квант",
    "title": "8.2-АР",
    "name": "Монтаж окон",
    "gprDate": "23.04.2026",
    "unit": "шт.",
    "totalProject": 4,
    "done": 0,
    "remainder": 4,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 4,
        "fact": 0,
        "diff": -4
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 4,
        "fact": 0,
        "diff": -4
      }
    ]
  },
  {
    "id": "rec-22",
    "responsible": "Махмудов Ю.",
    "contractor": "Квант",
    "title": "8.2-ВК",
    "name": "Прокладка трубопроводов",
    "gprDate": "14.05.2026",
    "unit": "м",
    "totalProject": 167.2,
    "done": 71,
    "remainder": 96.2,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 55,
        "fact": 0,
        "diff": -55
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 15,
        "fact": 0,
        "diff": -15
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      }
    ]
  },
  {
    "id": "rec-23",
    "responsible": "Махмудов Ю.",
    "contractor": "Квант",
    "title": "12.1-АР",
    "name": "Бетонирование полов",
    "gprDate": "30.04.2026",
    "unit": "м2",
    "totalProject": 56.6,
    "done": 0,
    "remainder": 56.6,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 56.6,
        "fact": 0,
        "diff": -56.6
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 56.6,
        "fact": 0,
        "diff": -56.6
      }
    ]
  },
  {
    "id": "rec-24",
    "responsible": "Махмудов Ю.",
    "contractor": "Q Park",
    "title": "15.1-КЖ",
    "name": "Монтаж Бфц",
    "gprDate": "28.03.2026",
    "unit": "шт.",
    "totalProject": 15,
    "done": 0,
    "remainder": 15,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 15,
        "fact": 0,
        "diff": -15
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 5,
        "fact": 0,
        "diff": -5
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 5,
        "fact": 0,
        "diff": -5
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 5,
        "fact": 0,
        "diff": -5
      }
    ]
  },
  {
    "id": "rec-25",
    "responsible": "Махмудов Ю.",
    "contractor": "Q Park",
    "title": "24-КЖ",
    "name": "Бетонирование",
    "gprDate": "17.04.2026",
    "unit": "м3",
    "totalProject": 970.47,
    "done": 704.16,
    "remainder": 266.31,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 132,
        "fact": 0,
        "diff": -132
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 3.8,
        "fact": 0,
        "diff": -3.8
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 3.8,
        "fact": 0,
        "diff": -3.8
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 124.4,
        "fact": 0,
        "diff": -124.4
      }
    ]
  },
  {
    "id": "rec-26",
    "responsible": "Махмудов Ю.",
    "contractor": "Q Park",
    "title": "24-КЖ",
    "name": "Монтаж перегородок из газооблоков",
    "gprDate": "17.04.2026",
    "unit": "м2",
    "totalProject": 880.38,
    "done": 0,
    "remainder": 880.38,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 80,
        "fact": 0,
        "diff": -80
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      }
    ]
  },
  {
    "id": "rec-27",
    "responsible": "Махмудов Ю.",
    "contractor": "Q Park",
    "title": "24-АР",
    "name": "Монтаж сэндвич-панелей",
    "gprDate": "25.07.2026",
    "unit": "м2",
    "totalProject": 1998,
    "done": 685,
    "remainder": 1313,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 320,
        "fact": 0,
        "diff": -320
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 80,
        "fact": 0,
        "diff": -80
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 80,
        "fact": 0,
        "diff": -80
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 80,
        "fact": 0,
        "diff": -80
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 80,
        "fact": 0,
        "diff": -80
      }
    ]
  },
  {
    "id": "rec-28",
    "responsible": "Махмудов Ю.",
    "contractor": "Адал жарык",
    "title": "38-КЖ",
    "name": "Бетонирование",
    "gprDate": "18.02.2026",
    "unit": "м3",
    "totalProject": 333.38,
    "done": 321.27,
    "remainder": 12.11,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 26.8,
        "fact": 15,
        "diff": -11.8
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 13.4,
        "fact": 15,
        "diff": 1.6
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 13.4,
        "fact": 0,
        "diff": -13.4
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-29",
    "responsible": "Махмудов Ю.",
    "contractor": "Адал жарык",
    "title": "38-КМ",
    "name": "Монтаж металлоконструкций",
    "gprDate": "04.08.2026",
    "unit": "т",
    "totalProject": 135.74,
    "done": 133.5,
    "remainder": 2.24,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 2,
        "fact": 0,
        "diff": -2
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 2,
        "fact": 0,
        "diff": -2
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-30",
    "responsible": "Махмудов Ю.",
    "contractor": "Адал жарык",
    "title": "38-АР",
    "name": "Бетонирование полов",
    "gprDate": "25.04.2026",
    "unit": "м3",
    "totalProject": 102.09,
    "done": 60,
    "remainder": 42.09,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 50,
        "fact": 60,
        "diff": 10
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 50,
        "fact": 60,
        "diff": 10
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-31",
    "responsible": "Махмудов Ю.",
    "contractor": "Адал жарык",
    "title": "38-АР",
    "name": "Монтаж сэндвич-панелей",
    "gprDate": "21.07.2026",
    "unit": "м2",
    "totalProject": 1781,
    "done": 0,
    "remainder": 1781,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 400,
        "fact": 0,
        "diff": -400
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 200,
        "fact": 0,
        "diff": -200
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 200,
        "fact": 0,
        "diff": -200
      }
    ]
  },
  {
    "id": "rec-32",
    "responsible": "Махмудов Ю.",
    "contractor": "Адал жарык",
    "title": "38-АР",
    "name": "Монтаж перегородок из газооблоков",
    "gprDate": "14.05.2026",
    "unit": "м2",
    "totalProject": 131.5,
    "done": 38,
    "remainder": 93.5,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 120,
        "fact": 38,
        "diff": -82
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 30,
        "fact": 38,
        "diff": 8
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 30,
        "fact": 0,
        "diff": -30
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 30,
        "fact": 0,
        "diff": -30
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 30,
        "fact": 0,
        "diff": -30
      }
    ]
  },
  {
    "id": "rec-33",
    "responsible": "Махмудов Ю.",
    "contractor": "Адал жарык",
    "title": "00-НВК13",
    "name": "Монтаж колодцев",
    "gprDate": "16.06.2026",
    "unit": "шт.",
    "totalProject": 13,
    "done": 0,
    "remainder": 13,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 4,
        "fact": 0,
        "diff": -4
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 1,
        "fact": 0,
        "diff": -1
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 1,
        "fact": 0,
        "diff": -1
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 1,
        "fact": 0,
        "diff": -1
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 1,
        "fact": 0,
        "diff": -1
      }
    ]
  },
  {
    "id": "rec-34",
    "responsible": "Махмудов Ю.",
    "contractor": "Адал жарык",
    "title": "00-НВК13",
    "name": "Прокладка трубопроводов",
    "gprDate": "17.09.2026",
    "unit": "м",
    "totalProject": 421.96,
    "done": 0,
    "remainder": 421.96,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 80,
        "fact": 0,
        "diff": -80
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      }
    ]
  },
  {
    "id": "rec-35",
    "responsible": "Махмудов Ю.",
    "contractor": "Ancon",
    "title": "42-КЖ",
    "name": "Бетонирование",
    "gprDate": "31.01.2026",
    "unit": "м3",
    "totalProject": 592.74,
    "done": 223.87,
    "remainder": 368.87,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 75,
        "fact": 1.5,
        "diff": -73.5
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 15,
        "fact": 1.5,
        "diff": -13.5
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      }
    ]
  },
  {
    "id": "rec-36",
    "responsible": "Махмудов Ю.",
    "contractor": "Ancon",
    "title": "42-АР",
    "name": "Бетонирование полов",
    "gprDate": "26.10.2026",
    "unit": "м3",
    "totalProject": 112.99,
    "done": 0,
    "remainder": 112.99,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 50,
        "fact": 0,
        "diff": -50
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 25,
        "fact": 0,
        "diff": -25
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 25,
        "fact": 0,
        "diff": -25
      }
    ]
  },
  {
    "id": "rec-37",
    "responsible": "Махмудов Ю.",
    "contractor": "Ancon",
    "title": "42-ВК",
    "name": "Прокладка трубопроводов",
    "gprDate": "30.12.2026",
    "unit": "м",
    "totalProject": 865,
    "done": 98,
    "remainder": 767,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 160,
        "fact": 60,
        "diff": -100
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 40,
        "fact": 60,
        "diff": 20
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 40,
        "fact": 0,
        "diff": -40
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 40,
        "fact": 0,
        "diff": -40
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 40,
        "fact": 0,
        "diff": -40
      }
    ]
  },
  {
    "id": "rec-38",
    "responsible": "Махмудов Ю.",
    "contractor": "ТОО Блиц монтаж",
    "title": "43-АС",
    "name": "Стойки СОН",
    "gprDate": "30.03.2026",
    "unit": "шт.",
    "totalProject": 514,
    "done": 466,
    "remainder": 48,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 13,
        "fact": 0,
        "diff": -13
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 3,
        "fact": 0,
        "diff": -3
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 3,
        "fact": 0,
        "diff": -3
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 3,
        "fact": 0,
        "diff": -3
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 4,
        "fact": 0,
        "diff": -4
      }
    ]
  },
  {
    "id": "rec-39",
    "responsible": "Махмудов Ю.",
    "contractor": "ТОО Блиц монтаж",
    "title": "43-КМ",
    "name": "Монтаж металлоконструкций порталов",
    "gprDate": "21.07.2026",
    "unit": "т",
    "totalProject": 311.19,
    "done": 117.16,
    "remainder": 194.03,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 180,
        "fact": 52,
        "diff": -128
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 40,
        "fact": 52,
        "diff": 12
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 40,
        "fact": 0,
        "diff": -40
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 40,
        "fact": 0,
        "diff": -40
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 60,
        "fact": 0,
        "diff": -60
      }
    ]
  },
  {
    "id": "rec-40",
    "responsible": "Махмудов Ю.",
    "contractor": "ТОО Блиц монтаж",
    "title": "44-АС",
    "name": "Бетонирование",
    "gprDate": "26.01.2026",
    "unit": "м3",
    "totalProject": 584.08,
    "done": 477,
    "remainder": 107.08,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 56,
        "fact": 27.1,
        "diff": -28.9
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 10,
        "fact": 27.1,
        "diff": 17.1
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 10,
        "fact": 0,
        "diff": -10
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 15,
        "fact": 0,
        "diff": -15
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 21,
        "fact": 0,
        "diff": -21
      }
    ]
  },
  {
    "id": "rec-41",
    "responsible": "Махмудов Ю.",
    "contractor": "ТОО Блиц монтаж",
    "title": "44-АС",
    "name": "Стойки СОН",
    "gprDate": "26.01.2026",
    "unit": "шт.",
    "totalProject": 868,
    "done": 730,
    "remainder": 138,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 140,
        "fact": 35,
        "diff": -105
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 30,
        "fact": 35,
        "diff": 5
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 30,
        "fact": 0,
        "diff": -30
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 30,
        "fact": 0,
        "diff": -30
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 50,
        "fact": 0,
        "diff": -50
      }
    ]
  },
  {
    "id": "rec-42",
    "responsible": "Махмудов Ю.",
    "contractor": "ТОО Блиц монтаж",
    "title": "44-КМ",
    "name": "Монтаж металлоконструкций порталов",
    "gprDate": "21.07.2026",
    "unit": "т",
    "totalProject": 636.08,
    "done": 20,
    "remainder": 616.08,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 100,
        "fact": 20,
        "diff": -80
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 15,
        "fact": 20,
        "diff": 5
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 25,
        "fact": 0,
        "diff": -25
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 30,
        "fact": 0,
        "diff": -30
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 30,
        "fact": 0,
        "diff": -30
      }
    ]
  },
  {
    "id": "rec-43",
    "responsible": "Махмудов Ю.",
    "contractor": "Нурахмет",
    "title": "48-КЖ",
    "name": "Бетонирование",
    "gprDate": "13.08.2026",
    "unit": "м3",
    "totalProject": 716.01,
    "done": 341.72,
    "remainder": 374.29,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 91.4,
        "fact": 0,
        "diff": -91.4
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 20.8,
        "fact": 0,
        "diff": -20.8
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 70.6,
        "fact": 0,
        "diff": -70.6
      }
    ]
  },
  {
    "id": "rec-44",
    "responsible": "Махмудов Ю.",
    "contractor": "Нурахмет",
    "title": "48-АР",
    "name": "Монтаж окон",
    "gprDate": "27.07.2026",
    "unit": "шт.",
    "totalProject": 34,
    "done": 23,
    "remainder": 11,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 15,
        "fact": 4,
        "diff": -11
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 3,
        "fact": 4,
        "diff": 1
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 4,
        "fact": 0,
        "diff": -4
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 4,
        "fact": 0,
        "diff": -4
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 4,
        "fact": 0,
        "diff": -4
      }
    ]
  },
  {
    "id": "rec-45",
    "responsible": "Махмудов Ю.",
    "contractor": "Нурахмет",
    "title": "48-ВК",
    "name": "Прокладка трубопроводов",
    "gprDate": "31.07.2026",
    "unit": "м",
    "totalProject": 835,
    "done": 0,
    "remainder": 835,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 100,
        "fact": 0,
        "diff": -100
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 100,
        "fact": 0,
        "diff": -100
      }
    ]
  },
  {
    "id": "rec-46",
    "responsible": "Алдамуратов Р.",
    "contractor": "ТОО Блиц монтаж",
    "title": "3-КЖ",
    "name": "Бетонирование",
    "gprDate": "20.01.2026",
    "unit": "м3",
    "totalProject": 746.35,
    "done": 681.24,
    "remainder": 65.11,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 70,
        "fact": 33,
        "diff": -37
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 70,
        "fact": 33,
        "diff": -37
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-47",
    "responsible": "Алдамуратов Р.",
    "contractor": "ТОО Блиц монтаж",
    "title": "10,11-КЖ2",
    "name": "Бетонирование",
    "gprDate": "30.04.2026",
    "unit": "м3",
    "totalProject": 1020.78,
    "done": 0,
    "remainder": 1020.78,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 47,
        "fact": 0,
        "diff": -47
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 6,
        "fact": 0,
        "diff": -6
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 7,
        "fact": 0,
        "diff": -7
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 18,
        "fact": 0,
        "diff": -18
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 16,
        "fact": 0,
        "diff": -16
      }
    ]
  },
  {
    "id": "rec-48",
    "responsible": "Алдамуратов Р.",
    "contractor": "ТОО Блиц монтаж",
    "title": "10,11-КЖ2",
    "name": "Профлист плит перекрытий",
    "gprDate": "30.04.2026",
    "unit": "м2",
    "totalProject": 4371,
    "done": 3540,
    "remainder": 831,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 620,
        "fact": 0,
        "diff": -620
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 620,
        "fact": 0,
        "diff": -620
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-49",
    "responsible": "Алдамуратов Р.",
    "contractor": "ТОО Блиц монтаж",
    "title": "10,11-АР",
    "name": "Профлист кровельный",
    "gprDate": "29.09.2026",
    "unit": "м2",
    "totalProject": 6440,
    "done": 1950,
    "remainder": 4490,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 3180,
        "fact": 0,
        "diff": -3180
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 3180,
        "fact": 0,
        "diff": -3180
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-50",
    "responsible": "Алдамуратов Р.",
    "contractor": "ТОО Блиц монтаж",
    "title": "13.4-КЖ",
    "name": "Бетонирование",
    "gprDate": "24.01.2026",
    "unit": "м3",
    "totalProject": 59.14,
    "done": 52.66,
    "remainder": 6.48,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 7,
        "fact": 0,
        "diff": -7
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 7,
        "fact": 0,
        "diff": -7
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-51",
    "responsible": "Алдамуратов Р.",
    "contractor": "ТОО Блиц монтаж",
    "title": "13.4-КМ",
    "name": "Монтаж металоконструкций",
    "gprDate": "28.02.2026",
    "unit": "тн",
    "totalProject": 25.63,
    "done": 16.5,
    "remainder": 9.13,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 13.9,
        "fact": 0,
        "diff": -13.9
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 6.95,
        "fact": 0,
        "diff": -6.95
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 6.95,
        "fact": 0,
        "diff": -6.95
      }
    ]
  },
  {
    "id": "rec-52",
    "responsible": "Алдамуратов Р.",
    "contractor": "ТОО Блиц монтаж",
    "title": "00-НВК5",
    "name": "Монтаж колодцев",
    "gprDate": "16.06.2026",
    "unit": "шт.",
    "totalProject": 7,
    "done": 0,
    "remainder": 7,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 4,
        "fact": 0,
        "diff": -4
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 4,
        "fact": 0,
        "diff": -4
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-53",
    "responsible": "Алдамуратов Р.",
    "contractor": "ТОО Блиц монтаж",
    "title": "00-НВК5",
    "name": "Прокладка трубопроводов",
    "gprDate": "17.09.2026",
    "unit": "м",
    "totalProject": 66.1,
    "done": 0,
    "remainder": 66.1,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 24.6,
        "fact": 0,
        "diff": -24.6
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 13.2,
        "fact": 0,
        "diff": -13.2
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 5.2,
        "fact": 0,
        "diff": -5.2
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 6.2,
        "fact": 0,
        "diff": -6.2
      }
    ]
  },
  {
    "id": "rec-54",
    "responsible": "Алдамуратов Р.",
    "contractor": "ТОО Блиц монтаж",
    "title": "15.4-15.5-КЖ",
    "name": "Гидрофобный слой",
    "gprDate": "09.02.2026",
    "unit": "м3",
    "totalProject": 45.22,
    "done": 0,
    "remainder": 45.22,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 45.22,
        "fact": 0,
        "diff": -45.22
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 22.61,
        "fact": 0,
        "diff": -22.61
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 22.61,
        "fact": 0,
        "diff": -22.61
      }
    ]
  },
  {
    "id": "rec-55",
    "responsible": "Алдамуратов Р.",
    "contractor": "ТОО Блиц монтаж",
    "title": "16-КЖ",
    "name": "Бетонирование",
    "gprDate": "30.04.2026",
    "unit": "м3",
    "totalProject": 1174.2,
    "done": 1080.09,
    "remainder": 94.11,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 150,
        "fact": 94,
        "diff": -56
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 90,
        "fact": 94,
        "diff": 4
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      }
    ]
  },
  {
    "id": "rec-56",
    "responsible": "Алдамуратов Р.",
    "contractor": "ТОО Блиц монтаж",
    "title": "27-КЖ",
    "name": "Бетонирование",
    "gprDate": "30.12.2025",
    "unit": "м3",
    "totalProject": 138.58,
    "done": 27.8,
    "remainder": 110.78,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 46,
        "fact": 0,
        "diff": -46
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 25,
        "fact": 0,
        "diff": -25
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 18,
        "fact": 0,
        "diff": -18
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 3,
        "fact": 0,
        "diff": -3
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-57",
    "responsible": "Алдамуратов Р.",
    "contractor": "ТОО Блиц монтаж",
    "title": "32-КЖ",
    "name": "Монтаж Бфц",
    "gprDate": "31.03.2026",
    "unit": "шт.",
    "totalProject": 16,
    "done": 0,
    "remainder": 16,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 16,
        "fact": 0,
        "diff": -16
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 12,
        "fact": 0,
        "diff": -12
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 4,
        "fact": 0,
        "diff": -4
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-58",
    "responsible": "Алдамуратов Р.",
    "contractor": "ТОО Блиц монтаж",
    "title": "33.1-33.6-КЖ",
    "name": "Асфальтобетонная гидроизоляция",
    "gprDate": "24.02.2026",
    "unit": "м3",
    "totalProject": 15,
    "done": 0,
    "remainder": 15,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 15,
        "fact": 0,
        "diff": -15
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 15,
        "fact": 0,
        "diff": -15
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-59",
    "responsible": "Алдамуратов Р.",
    "contractor": "Q17",
    "title": "35-КЖ",
    "name": "Бетонирование",
    "gprDate": "28.01.2026",
    "unit": "м3",
    "totalProject": 88.15,
    "done": 0,
    "remainder": 13.35,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 9,
        "fact": 0,
        "diff": -9
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 5.2,
        "fact": 0,
        "diff": -5.2
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 3.8,
        "fact": 0,
        "diff": -3.8
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-60",
    "responsible": "Алдамуратов Р.",
    "contractor": "Q17",
    "title": "35-АР",
    "name": "Монтаж сэндвич-панелей",
    "gprDate": "30.05.2026",
    "unit": "м2",
    "totalProject": 824,
    "done": 0,
    "remainder": 824,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 400,
        "fact": 0,
        "diff": -400
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 100,
        "fact": 0,
        "diff": -100
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 100,
        "fact": 0,
        "diff": -100
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 200,
        "fact": 0,
        "diff": -200
      }
    ]
  },
  {
    "id": "rec-61",
    "responsible": "Алдамуратов Р.",
    "contractor": "Атамекен",
    "title": "50-КЖ4",
    "name": "Бетонирование",
    "gprDate": "29.05.2026",
    "unit": "м3",
    "totalProject": 1095.22,
    "done": 755.33,
    "remainder": 339.89,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 43,
        "fact": 85.9,
        "diff": 42.9
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 43,
        "fact": 85.9,
        "diff": 42.9
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-62",
    "responsible": "Алдамуратов Р.",
    "contractor": "ТОО Блиц монтаж",
    "title": "50-КЖ5",
    "name": "Бетонирование",
    "gprDate": "29.05.2026",
    "unit": "м3",
    "totalProject": 189.84,
    "done": 51.12,
    "remainder": 138.72,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 50.7,
        "fact": 12.8,
        "diff": -37.9
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 10.2,
        "fact": 12.8,
        "diff": 2.6
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 18.5,
        "fact": 0,
        "diff": -18.5
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 22,
        "fact": 0,
        "diff": -22
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-63",
    "responsible": "Алдамуратов Р.",
    "contractor": "ТОО Блиц монтаж",
    "title": "50-КЖ7",
    "name": "Бетонирование",
    "gprDate": "29.05.2026",
    "unit": "м3",
    "totalProject": 385.75,
    "done": 387.87,
    "remainder": -2.12,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 14.5,
        "fact": 5.5,
        "diff": -9
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 14.5,
        "fact": 5.5,
        "diff": -9
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-64",
    "responsible": "Алдамуратов Р.",
    "contractor": "ТОО Блиц монтаж",
    "title": "50-КЖ8",
    "name": "Бетонирование",
    "gprDate": "29.05.2026",
    "unit": "м3",
    "totalProject": 708.98,
    "done": 11.5,
    "remainder": 697.48,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 26.2,
        "fact": 0,
        "diff": -26.2
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 6.8,
        "fact": 0,
        "diff": -6.8
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 19.4,
        "fact": 0,
        "diff": -19.4
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-65",
    "responsible": "Алдамуратов Р.",
    "contractor": "ТОО Блиц монтаж",
    "title": "50-ТК.КЖ2",
    "name": "Бетонирование участок (3) зона II",
    "gprDate": "29.05.2026",
    "unit": "м3",
    "totalProject": 43.04,
    "done": 21.12,
    "remainder": 21.92,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 7.2,
        "fact": 0,
        "diff": -7.2
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 7.2,
        "fact": 0,
        "diff": -7.2
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-66",
    "responsible": "Алдамуратов Р.",
    "contractor": "ТОО Блиц монтаж",
    "title": "00-КЖ1",
    "name": "Бетонирование участок 1",
    "gprDate": "-",
    "unit": "м3",
    "totalProject": 239.69,
    "done": 136.96,
    "remainder": 102.73,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 43,
        "fact": 63.2,
        "diff": 20.2
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 10.2,
        "fact": 63.2,
        "diff": 53
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 8.3,
        "fact": 0,
        "diff": -8.3
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 10.2,
        "fact": 0,
        "diff": -10.2
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 14.3,
        "fact": 0,
        "diff": -14.3
      }
    ]
  },
  {
    "id": "rec-67",
    "responsible": "Абилькасимов Б.",
    "contractor": "Атамекен",
    "title": "25-КЖ",
    "name": "Бетонирование Блок 1",
    "gprDate": "29.03.2026",
    "unit": "м3",
    "totalProject": 1307.37,
    "done": 1114.35,
    "remainder": 193.02,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 148,
        "fact": 13,
        "diff": -135
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 12,
        "fact": 13,
        "diff": 1
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 136,
        "fact": 0,
        "diff": -136
      }
    ]
  },
  {
    "id": "rec-68",
    "responsible": "Абилькасимов Б.",
    "contractor": "Атамекен",
    "title": "25-КЖ",
    "name": "Бетонирование Блок 2",
    "gprDate": "29.03.2026",
    "unit": "м3",
    "totalProject": 2990.11,
    "done": 2487.36,
    "remainder": 502.75,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 45,
        "fact": 0,
        "diff": -45
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 10,
        "fact": 0,
        "diff": -10
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 15,
        "fact": 0,
        "diff": -15
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-69",
    "responsible": "Абилькасимов Б.",
    "contractor": "Атамекен",
    "title": "25-КЖ",
    "name": "Бетонирование Блок 3",
    "gprDate": "29.03.2026",
    "unit": "м3",
    "totalProject": 1849.83,
    "done": 1531.44,
    "remainder": 318.39,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 30,
        "fact": 0,
        "diff": -30
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 10,
        "fact": 0,
        "diff": -10
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-70",
    "responsible": "Абилькасимов Б.",
    "contractor": "Атамекен",
    "title": "25-КЖ",
    "name": "Бетонирование Блок 4",
    "gprDate": "29.03.2026",
    "unit": "м3",
    "totalProject": 3338.79,
    "done": 2859.47,
    "remainder": 479.32,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 60,
        "fact": 30.7,
        "diff": -29.3
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 30,
        "fact": 30.7,
        "diff": 0.7
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 10,
        "fact": 0,
        "diff": -10
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-71",
    "responsible": "Абилькасимов Б.",
    "contractor": "Мегамост",
    "title": "25-КЖ",
    "name": "Бетонирование Блок 5",
    "gprDate": "29.03.2026",
    "unit": "м3",
    "totalProject": 1181.82,
    "done": 1132.75,
    "remainder": 49.07,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 147,
        "fact": 0,
        "diff": -147
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 147,
        "fact": 0,
        "diff": -147
      }
    ]
  },
  {
    "id": "rec-72",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-ГТГ №11, №12",
    "name": "Обогрев временного укрытия турбин",
    "gprDate": "01.09.2026",
    "unit": "час",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 672,
        "fact": 168,
        "diff": -504
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 168,
        "fact": 168,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 168,
        "fact": 0,
        "diff": -168
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 168,
        "fact": 0,
        "diff": -168
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 168,
        "fact": 0,
        "diff": -168
      }
    ]
  },
  {
    "id": "rec-73",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-ГТГ №11, №12",
    "name": "Осушка и мониторинг влажности турбин",
    "gprDate": "01.09.2026",
    "unit": "работа",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 4,
        "fact": 1,
        "diff": -3
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 1,
        "fact": 1,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 1,
        "fact": 0,
        "diff": -1
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 1,
        "fact": 0,
        "diff": -1
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 1,
        "fact": 0,
        "diff": -1
      }
    ]
  },
  {
    "id": "rec-74",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-ГТГ №11",
    "name": "Подготовительные работы к установке камеры сгорания",
    "gprDate": "01.09.2026",
    "unit": "работа",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 2,
        "fact": 0,
        "diff": -2
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 1,
        "fact": 0,
        "diff": -1
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 1,
        "fact": 0,
        "diff": -1
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-75",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-ГТГ №12",
    "name": "Подготовительные работы и монтаж пром. вала. ГТГ 12",
    "gprDate": "01.09.2026",
    "unit": "шт.",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 1,
        "fact": 0,
        "diff": -1
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 1,
        "fact": 0,
        "diff": -1
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-76",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-ГТГ №12",
    "name": "Подготовительные работы к установке камеры сгорания",
    "gprDate": "01.09.2026",
    "unit": "работа",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 2,
        "fact": 0,
        "diff": -2
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 1,
        "fact": 0,
        "diff": -1
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 1,
        "fact": 0,
        "diff": -1
      }
    ]
  },
  {
    "id": "rec-77",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-ГТГ №21",
    "name": "Обогрев временного укрытия турбин",
    "gprDate": "06.09.2026",
    "unit": "компл.",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 672,
        "fact": 168,
        "diff": -504
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 168,
        "fact": 168,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 168,
        "fact": 0,
        "diff": -168
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 168,
        "fact": 0,
        "diff": -168
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 168,
        "fact": 0,
        "diff": -168
      }
    ]
  },
  {
    "id": "rec-78",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-ГТГ №21",
    "name": "Предцентровка газовой турбины",
    "gprDate": "06.09.2026",
    "unit": "шт.",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 1,
        "fact": 0,
        "diff": -1
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 1,
        "fact": 0,
        "diff": -1
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-79",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-ГТГ №21",
    "name": "Сборка и монтаж опор выхлопной части газовой турбины",
    "gprDate": "06.09.2026",
    "unit": "шт.",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 1,
        "fact": 0,
        "diff": -1
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 1,
        "fact": 0,
        "diff": -1
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-80",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-ГТГ №22",
    "name": "Установка временного укрытия генератора и газовой турбины",
    "gprDate": "26.09.2026",
    "unit": "укрытие",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 1,
        "fact": 1,
        "diff": 0
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 1,
        "fact": 1,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-81",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-ГТГ №22",
    "name": "Установка Осушителя на Турбину",
    "gprDate": "08.03.2026",
    "unit": "шт.",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 1,
        "fact": 1,
        "diff": 0
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 1,
        "fact": 1,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-82",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-ГТГ №22",
    "name": "Смещение генератора",
    "gprDate": "26.09.2026",
    "unit": "шт.",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 1,
        "fact": 1,
        "diff": 0
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 1,
        "fact": 1,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-83",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-КУ №11",
    "name": "Транспортировка деталей корпуса модуля",
    "gprDate": "26.12.2026",
    "unit": "упаковка",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 40,
        "fact": 9,
        "diff": -31
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 10,
        "fact": 9,
        "diff": -1
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 10,
        "fact": 0,
        "diff": -10
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 10,
        "fact": 0,
        "diff": -10
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 10,
        "fact": 0,
        "diff": -10
      }
    ]
  },
  {
    "id": "rec-84",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-КУ №11",
    "name": "Изготовление временных опор из транспортировочных рам по укрупнению корпуса модуля КУ",
    "gprDate": "26.12.2026",
    "unit": "шт.",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 2,
        "fact": 3,
        "diff": 1
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 2,
        "fact": 3,
        "diff": 1
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-85",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-КУ №11",
    "name": "Сварочные работы корпуса модуля",
    "gprDate": "26.12.2026",
    "unit": "шт.",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 8,
        "fact": 3,
        "diff": -5
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 2,
        "fact": 3,
        "diff": 1
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 2,
        "fact": 0,
        "diff": -2
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 2,
        "fact": 0,
        "diff": -2
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 2,
        "fact": 0,
        "diff": -2
      }
    ]
  },
  {
    "id": "rec-86",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-КУ №11",
    "name": "Проведение OPI и Установка",
    "gprDate": "26.12.2026",
    "unit": "работа",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 40,
        "fact": 9,
        "diff": -31
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 10,
        "fact": 9,
        "diff": -1
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 10,
        "fact": 0,
        "diff": -10
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 10,
        "fact": 0,
        "diff": -10
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 10,
        "fact": 0,
        "diff": -10
      }
    ]
  },
  {
    "id": "rec-87",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-КУ №11",
    "name": "Перестановка корпуса модуля воздуховода DUCT",
    "gprDate": "26.12.2026",
    "unit": "шт.",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 4,
        "fact": 4,
        "diff": 0
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 4,
        "fact": 4,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-88",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-КУ №11",
    "name": "Транспортировка деталей дивертора",
    "gprDate": "26.12.2026",
    "unit": "шт.",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 8,
        "fact": 3,
        "diff": -5
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 3,
        "fact": 3,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 5,
        "fact": 0,
        "diff": -5
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-89",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-КУ №11",
    "name": "Сборка (сварочные работы) днища дивертора",
    "gprDate": "26.12.2026",
    "unit": "части",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 4,
        "fact": 0,
        "diff": -4
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 2,
        "fact": 0,
        "diff": -2
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 2,
        "fact": 0,
        "diff": -2
      }
    ]
  },
  {
    "id": "rec-90",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-КУ №12",
    "name": "Сварочные работы корпуса модуля",
    "gprDate": "26.12.2026",
    "unit": "шт.",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 3,
        "fact": 2,
        "diff": -1
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 3,
        "fact": 2,
        "diff": -1
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-91",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-КУ №12",
    "name": "Перестановка корпуса модуля воздуховода DUCT",
    "gprDate": "26.12.2026",
    "unit": "шт.",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 3,
        "fact": 6,
        "diff": 3
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 3,
        "fact": 6,
        "diff": 3
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-92",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-КУ №11",
    "name": "Транспортировка деталей дивертора",
    "gprDate": "26.12.2026",
    "unit": "шт.",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 4,
        "fact": 0,
        "diff": -4
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 4,
        "fact": 0,
        "diff": -4
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-93",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "1.1-КУ №11",
    "name": "Сборка (сварочные работы) днища дивертора",
    "gprDate": "26.12.2026",
    "unit": "шт.",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 2,
        "fact": 0,
        "diff": -2
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 2,
        "fact": 0,
        "diff": -2
      }
    ]
  },
  {
    "id": "rec-94",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "ТХ",
    "name": "Транспортировка крана 600 т.",
    "gprDate": "08.03.2026",
    "unit": "шт.",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 1,
        "fact": 1,
        "diff": 0
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 1,
        "fact": 1,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-95",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "ТХ",
    "name": "Сборка крана 600 т",
    "gprDate": "13.03.2026",
    "unit": "шт.",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 1,
        "fact": 0,
        "diff": -1
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 1,
        "fact": 0,
        "diff": -1
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-96",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "ТХ",
    "name": "Транспортировка крана 280 т.",
    "gprDate": "30.03.2026",
    "unit": "шт.",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 1,
        "fact": 0,
        "diff": -1
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 1,
        "fact": 0,
        "diff": -1
      }
    ]
  },
  {
    "id": "rec-97",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "2.1-ТМ",
    "name": "Монтаж несущих металлоконструкций",
    "gprDate": "07.04.2026",
    "unit": "т",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 10,
        "fact": 10,
        "diff": 0
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 10,
        "fact": 10,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-98",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "2.1-ТМ",
    "name": "Укрупненная сборка защитной сетки вентилятора",
    "gprDate": "01.03.2026",
    "unit": "шт.",
    "totalProject": 24,
    "done": 3,
    "remainder": 21,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 12,
        "fact": 3,
        "diff": -9
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 3,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-102",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "7.1-ВК.ТХ",
    "name": "Монтаж несущих металлоконструкций",
    "gprDate": "16.04.2026",
    "unit": "т",
    "totalProject": 0,
    "done": 0,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 60,
        "fact": 15,
        "diff": -45
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 14,
        "fact": 15,
        "diff": 1
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 20,
        "fact": 0,
        "diff": -20
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 6,
        "fact": 0,
        "diff": -6
      }
    ]
  },
  {
    "id": "rec-103",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "9-ЭМ",
    "name": "Монтаж суточного бака на 8500 литров",
    "gprDate": "31.03.2026",
    "unit": "шт.",
    "totalProject": 2,
    "done": 2,
    "remainder": 0,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 2,
        "fact": 2,
        "diff": 0
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 2,
        "fact": 2,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-104",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "9-ЭМ",
    "name": "Транспортировка генератора",
    "gprDate": "31.03.2026",
    "unit": "шт.",
    "totalProject": 4,
    "done": 0,
    "remainder": 4,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 4,
        "fact": 0,
        "diff": -4
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 4,
        "fact": 0,
        "diff": -4
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-105",
    "responsible": "Тлеулесов К.",
    "contractor": "",
    "title": "9-ЭМ",
    "name": "Монтаж генератора",
    "gprDate": "31.03.2026",
    "unit": "шт.",
    "totalProject": 4,
    "done": 0,
    "remainder": 4,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 4,
        "fact": 0,
        "diff": -4
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 4,
        "fact": 0,
        "diff": -4
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      }
    ]
  },
  {
    "id": "rec-106",
    "responsible": "Рахматулла А.",
    "contractor": "",
    "title": "1.1-ЗМ",
    "name": "Прокладка заземления (шина & провод)",
    "gprDate": "27.12.2026",
    "unit": "м.п.",
    "totalProject": 8218,
    "done": 1396.5,
    "remainder": 6821.5,
    "periods": [
      {
        "id": "mar",
        "name": "Март",
        "type": "month",
        "plan": 120,
        "fact": 0,
        "diff": -120
      },
      {
        "id": "w1",
        "name": "02.03 – 08.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w2",
        "name": "09.03 – 15.03",
        "type": "week",
        "plan": 0,
        "fact": 0,
        "diff": 0
      },
      {
        "id": "w3",
        "name": "16.03 – 22.03",
        "type": "week",
        "plan": 60,
        "fact": 0,
        "diff": -60
      },
      {
        "id": "w4",
        "name": "23.03 – 29.03",
        "type": "week",
        "plan": 60,
        "fact": 0,
        "diff": -60
      }
    ]
  }
];

export const USERS = [
  { login: 'inconshym', password: '123456Aa!', role: UserRole.LEADERSHIP, name: 'Руководитель' },
  { login: 'admin', password: 'admin', role: UserRole.ADMIN, name: 'Администратор' },
  { login: 'viewer', password: '123', role: UserRole.VIEWER, name: 'Наблюдатель' },
];

export const INITIAL_EXECUTION_SUMMARY_DATA: any[] = [
  {
    id: 'sec-kzh',
    no: '1',
    name: 'Раздел КЖ',
    unit: 'м3',
    totalVolume: 107815,
    done: 83636.3,
    remainder: 24178.7,
    bazisFact: 63983.7,
    bazisPercent: 59.35,
    integraFact: 19652.6,
    integraPercent: 18.23,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 77.57,
    isSection: true,
    level: 0,
  },
  {
    id: 'row-kzh-1',
    no: '1',
    name: 'Раздел КЖ',
    unit: 'м3',
    totalVolume: 107815,
    done: 83636.3,
    remainder: 24178.7,
    bazisFact: 63983.7,
    bazisPercent: 59.35,
    integraFact: 19652.6,
    integraPercent: 18.23,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 77.57,
    isSection: false,
    level: 1,
  },
  {
    id: 'row-kzh-2',
    no: '2',
    name: 'Вертикальная планировка: выемка грунта',
    unit: 'м3',
    totalVolume: 0,
    done: 231099,
    remainder: 0,
    bazisFact: 225839,
    bazisPercent: 0,
    integraFact: 5260,
    integraPercent: 0,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 1,
  },
  {
    id: 'row-kzh-3',
    no: '3',
    name: 'Вертикальная планировка:насыпь грунта',
    unit: 'м3',
    totalVolume: 256834,
    done: 109877.42,
    remainder: 146956.58,
    bazisFact: 105893.42,
    bazisPercent: 41.23,
    integraFact: 3984,
    integraPercent: 1.55,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 42.78,
    isSection: false,
    level: 1,
  },
  {
    id: 'row-kzh-4',
    no: '4',
    name: 'Разработка котлована',
    unit: 'м3',
    totalVolume: 0,
    done: 494841.64,
    remainder: 0,
    bazisFact: 426108.14,
    bazisPercent: 0,
    integraFact: 68733.5,
    integraPercent: 0,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 1,
  },
  {
    id: 'row-kzh-5',
    no: '5',
    name: 'Обратная засыпка пазух котлованов',
    unit: 'м3',
    totalVolume: 0,
    done: 337733.6,
    remainder: 0,
    bazisFact: 212353,
    bazisPercent: 0,
    integraFact: 125380.6,
    integraPercent: 0,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 1,
  },
  {
    id: 'sec-km',
    no: '1',
    name: 'Раздел КМ',
    unit: 'тн',
    totalVolume: 20632.48,
    done: 5281.75,
    remainder: 15350.73,
    bazisFact: 3302.29,
    bazisPercent: 16.01,
    integraFact: 1979.46,
    integraPercent: 9.59,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 25.6,
    isSection: true,
    level: 0,
  },
  {
    id: 'row-km-1',
    no: '1',
    name: 'Поставка м/к на площадку',
    unit: 'тн',
    totalVolume: 0,
    done: 7694,
    remainder: 0,
    bazisFact: 7694,
    bazisPercent: 0,
    integraFact: 0,
    integraPercent: 0,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 1,
  },
  {
    id: 'row-km-2',
    no: '1',
    name: 'Монтаж м/к в проектное положение',
    unit: 'тн',
    totalVolume: 20632.48,
    done: 5281.75,
    remainder: 15350.73,
    bazisFact: 3302.29,
    bazisPercent: 16.01,
    integraFact: 1979.46,
    integraPercent: 9.59,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 25.6,
    isSection: false,
    level: 1,
  },
  {
    id: 'row-km-3',
    no: '2.1',
    name: '2.1 - Воздушно - конденсаторные установки',
    unit: '',
    totalVolume: 0,
    done: 0,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 0,
    integraPercent: 0,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 0,
    isSection: true,
    level: 1,
  },
  {
    id: 'row-km-3-1',
    no: '1',
    name: 'Монтаж м/к в проектное положение',
    unit: 'тн',
    totalVolume: 0,
    done: 440,
    remainder: -440,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 440,
    integraPercent: 0,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-km-4',
    no: '2.2',
    name: '2.2 - Воздушно - конденсаторные установки',
    unit: '',
    totalVolume: 0,
    done: 0,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 0,
    integraPercent: 0,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 0,
    isSection: true,
    level: 1,
  },
  {
    id: 'row-km-4-1',
    no: '1',
    name: 'Монтаж м/к в проектное положение',
    unit: 'тн',
    totalVolume: 0,
    done: 15,
    remainder: -15,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 15,
    integraPercent: 0,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-km-5',
    no: '7.1',
    name: '7.1 - Сухая градирня вспомогательного оборудования',
    unit: '',
    totalVolume: 0,
    done: 0,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 0,
    integraPercent: 0,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 0,
    isSection: true,
    level: 1,
  },
  {
    id: 'row-km-5-1',
    no: '1',
    name: 'Монтаж м/к в проектное положение',
    unit: 'тн',
    totalVolume: 0,
    done: 40,
    remainder: -40,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 40,
    integraPercent: 0,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-km-6',
    no: '39',
    name: '39 - Автотрансформаторы титул',
    unit: '',
    totalVolume: 0,
    done: 0,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 0,
    integraPercent: 0,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 0,
    isSection: true,
    level: 1,
  },
  {
    id: 'row-km-6-1',
    no: '1',
    name: 'Монтаж автотрансформаторов',
    unit: 'шт',
    totalVolume: 4,
    done: 4,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 4,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'sec-ar',
    no: '1',
    name: 'Раздел АР',
    unit: 'м2',
    totalVolume: 95382,
    done: 10173.28,
    remainder: 85208.72,
    bazisFact: 3285.72,
    bazisPercent: 3.44,
    integraFact: 6887.56,
    integraPercent: 7.22,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 10.67,
    isSection: true,
    level: 0,
  },
  {
    id: 'row-ar-1',
    no: '1',
    name: 'Монтаж Сэндвич панели',
    unit: 'м2',
    totalVolume: 95382,
    done: 10173.28,
    remainder: 85208.72,
    bazisFact: 3285.72,
    bazisPercent: 3.44,
    integraFact: 6887.56,
    integraPercent: 7.22,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 10.67,
    isSection: false,
    level: 1,
  },
  {
    id: 'row-ar-2',
    no: '2',
    name: 'Монтаж оцинкованный профлист',
    unit: 'м2',
    totalVolume: 58448,
    done: 13778.5,
    remainder: 44669.5,
    bazisFact: 77.3,
    bazisPercent: 0.13,
    integraFact: 13701.2,
    integraPercent: 23.44,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 23.57,
    isSection: false,
    level: 1,
  },
  {
    id: 'row-ar-3',
    no: '3',
    name: 'Газоблок перегородочный',
    unit: 'м2',
    totalVolume: 0,
    done: 130,
    remainder: -130,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 130,
    integraPercent: 0,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 1,
  },
  {
    id: 'sec-tx',
    no: '1',
    name: 'Раздел ТХ',
    unit: '',
    totalVolume: 0,
    done: 0,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 0,
    integraPercent: 0,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 0,
    isSection: true,
    level: 0,
  },
  {
    id: 'row-tx-1',
    no: '1.1',
    name: '1.1 GTG11',
    unit: '',
    totalVolume: 0,
    done: 0,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 0,
    integraPercent: 0,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 0,
    isSection: true,
    level: 1,
  },
  {
    id: 'row-tx-1-1',
    no: '1',
    name: 'Газотурбинная установка',
    unit: 'шт/тн',
    displayTotal: '1 / 230',
    totalVolume: 1,
    displayDone: '1 / 230',
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    displayIntegraFact: '1 / 230',
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-1-2',
    no: '2',
    name: 'Монтаж блока управления №3010',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-1-3',
    no: '3',
    name: 'Монтаж блока управления №3110',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-1-4',
    no: '4',
    name: 'Монтаж блока управления №3210',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-1-5',
    no: '5',
    name: 'Монтаж генератора',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-1-6',
    no: '6',
    name: 'Монтаж основного модуля БС',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-1-7',
    no: '7',
    name: 'Монтаж охладителя генератора',
    unit: 'шт/тн',
    displayTotal: '1 / 8',
    totalVolume: 1,
    displayDone: '1 / 8',
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    displayIntegraFact: '1 / 8',
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-2',
    no: '1.1',
    name: '1.1 GTG12',
    unit: '',
    totalVolume: 0,
    done: 0,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 0,
    integraPercent: 0,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 0,
    isSection: true,
    level: 1,
  },
  {
    id: 'row-tx-2-1',
    no: '1',
    name: 'Газотурбинная установка',
    unit: 'шт/тн',
    displayTotal: '1 / 230',
    totalVolume: 1,
    displayDone: '1 / 230',
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    displayIntegraFact: '1 / 230',
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-2-2',
    no: '2',
    name: 'Монтаж блока управления №3010',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-2-3',
    no: '3',
    name: 'Монтаж блока управления №3110',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-2-4',
    no: '4',
    name: 'Монтаж блока управления №3210',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-2-5',
    no: '5',
    name: 'Монтаж генератора',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-2-6',
    no: '6',
    name: 'Монтаж основного модуля БС',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-2-7',
    no: '7',
    name: 'Монтаж охладителя генератора',
    unit: 'шт/тн',
    displayTotal: '1 / 8',
    totalVolume: 1,
    displayDone: '1 / 8',
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    displayIntegraFact: '1 / 8',
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-3',
    no: '1.1',
    name: '1.1 GTG21',
    unit: '',
    totalVolume: 0,
    done: 0,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 0,
    integraPercent: 0,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 0,
    isSection: true,
    level: 1,
  },
  {
    id: 'row-tx-3-1',
    no: '1',
    name: 'Газотурбинная установка',
    unit: 'шт/тн',
    displayTotal: '1 / 230',
    totalVolume: 1,
    displayDone: '1 / 230',
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    displayIntegraFact: '1 / 230',
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-3-2',
    no: '2',
    name: 'Монтаж блока управления №3010',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-3-3',
    no: '3',
    name: 'Монтаж блока управления №3110',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-3-4',
    no: '4',
    name: 'Монтаж блока управления №3210',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-3-5',
    no: '5',
    name: 'Монтаж генератора',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-3-6',
    no: '6',
    name: 'Монтаж основного модуля БС',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-3-7',
    no: '7',
    name: 'Монтаж охладителя генератора',
    unit: 'шт/тн',
    displayTotal: '1 / 8',
    totalVolume: 1,
    displayDone: '1 / 8',
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    displayIntegraFact: '1 / 8',
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-4',
    no: '1.1',
    name: '1.1 GTG22',
    unit: '',
    totalVolume: 0,
    done: 0,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 0,
    integraPercent: 0,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 0,
    isSection: true,
    level: 1,
  },
  {
    id: 'row-tx-4-1',
    no: '1',
    name: 'Газотурбинная установка',
    unit: 'шт/тн',
    displayTotal: '1 / 230',
    totalVolume: 1,
    displayDone: '1 / 230',
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    displayIntegraFact: '1 / 230',
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-4-2',
    no: '2',
    name: 'Монтаж блока управления №3010',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-4-3',
    no: '3',
    name: 'Монтаж блока управления №3110',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-4-4',
    no: '4',
    name: 'Монтаж блока управления №3210',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-4-5',
    no: '5',
    name: 'Монтаж генератора',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-4-6',
    no: '6',
    name: 'Монтаж основного модуля БС',
    unit: 'шт',
    totalVolume: 1,
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
  {
    id: 'row-tx-4-7',
    no: '7',
    name: 'Монтаж охладителя генератора',
    unit: 'шт/тн',
    displayTotal: '1 / 8',
    totalVolume: 1,
    displayDone: '1 / 8',
    done: 1,
    remainder: 0,
    bazisFact: 0,
    bazisPercent: 0,
    displayIntegraFact: '1 / 8',
    integraFact: 1,
    integraPercent: 100,
    integraRemainder: 0,
    integraRemainderPercent: 0,
    progress: 100,
    isSection: false,
    level: 2,
  },
];

export const INITIAL_EXECUTION_KPIS = {
  concrete: { title: 'Железобетон (КЖ)', value: 83636.3, percent: 77.57, unit: 'м³' },
  metal: { title: 'Металлоконструкции (КМ)', value: 5281.75, percent: 25.60, unit: 'тн' },
  sandwich: { title: 'Сэндвич-панели (АР)', value: 10173.28, percent: 10.67, unit: 'м²' }
};

export const INITIAL_SUPPLY = SUPPLY_DATA;
export const INITIAL_SECTIONS = MOCK_SECTIONS;
export const INITIAL_WORKFORCE: WorkforceData[] = [];
export const INITIAL_MACHINERY: MachineryData[] = [];

export const INITIAL_HR: HumanResource[] = [
  { "subcontractor": "ИТОГО", "total": 1199, "itr": 221, "workers": 978, "lastUpdate": "17.03.2026" },
  { "subcontractor": "ТОО INTEGRA CONSTRUCTION KZ", "total": 169, "itr": 125, "workers": 44, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Арматурный цех тит 50 и площадка ОГ", "total": 8, "itr": 0, "workers": 8, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 0.0 (КЖ1) ТОО Блиц-Монтаж", "total": 16, "itr": 1, "workers": 15, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Склад Doosan", "total": 9, "itr": 1, "workers": 8, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 1.1 (Stroy Consulting 2050)", "total": 10, "itr": 1, "workers": 9, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 1.1 (SST Building)", "total": 22, "itr": 1, "workers": 21, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 1.1 (Sarens)", "total": 2, "itr": 0, "workers": 2, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 1.1 Кж4.5 (Блиц-Монтаж)", "total": 15, "itr": 1, "workers": 14, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 1.1 (КЖ 2, 6, 7, 8, 16) Блиц-Монтаж", "total": 42, "itr": 1, "workers": 41, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 1.1 (КЖ15) ТОО Baibol", "total": 25, "itr": 1, "workers": 24, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 1.2 (ТОО Ancon)", "total": 72, "itr": 2, "workers": 70, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 1.2 (ТОО Блиц-Монтаж)", "total": 44, "itr": 1, "workers": 43, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 1.3 (SST Building)", "total": 12, "itr": 1, "workers": 11, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 1.3 (ТОО Блиц-Монтаж)", "total": 48, "itr": 2, "workers": 46, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 3 (ТОО Блиц-Монтаж)", "total": 8, "itr": 1, "workers": 7, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 5.1 - 5.4 (ТОО Блиц-Монтаж)", "total": 18, "itr": 1, "workers": 17, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 6.1 (ТОО Блиц-Монтаж)", "total": 6, "itr": 0, "workers": 6, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 8.1 (Квант)", "total": 5, "itr": 1, "workers": 4, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 8.2 (ТОО NUR-AKHMED GROUP)", "total": 4, "itr": 1, "workers": 3, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 9 (0.0 Кж1) (ТОО Блиц-Монтаж)", "total": 8, "itr": 0, "workers": 8, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 10.11 (ТОО Блиц-Монтаж)", "total": 7, "itr": 1, "workers": 6, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 12.1 (Квант)", "total": 8, "itr": 2, "workers": 6, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 12.2-12.3 (KBP)", "total": 9, "itr": 1, "workers": 8, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 13.4 (Stroy Consulting-2050)", "total": 13, "itr": 1, "workers": 12, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 15.1 (ТОО QPARK group)", "total": 5, "itr": 1, "workers": 4, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 16 (ТОО Блиц-Монтаж)", "total": 30, "itr": 2, "workers": 28, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 24 (ТОО QPARK group)", "total": 15, "itr": 4, "workers": 11, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 25 (ТОО АТАМЕКЕН-ҚС)", "total": 24, "itr": 1, "workers": 23, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 25 (SST Building)", "total": 32, "itr": 6, "workers": 26, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 25 (Мега Мост)", "total": 10, "itr": 1, "workers": 9, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 25 (Блиц-Монтаж)", "total": 11, "itr": 1, "workers": 10, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 27 (Блиц-Монтаж)", "total": 6, "itr": 0, "workers": 6, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 32 (ТОО Q17 CONSTRUCTION)", "total": 8, "itr": 1, "workers": 7, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 34 (Блиц-Монтаж)", "total": 8, "itr": 1, "workers": 7, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 33.1 (Блиц-Монтаж)", "total": 4, "itr": 1, "workers": 3, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 38 (ТОО Адал Жарық Құрылыс)", "total": 9, "itr": 1, "workers": 8, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 39 (ТОО Блиц-Монтаж)", "total": 11, "itr": 1, "workers": 10, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 42 (ТОО Ancon)", "total": 20, "itr": 2, "workers": 18, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 0.0 (КЖ1) ТОО Блиц-Монтаж (2)", "total": 28, "itr": 1, "workers": 27, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 43 (ТОО Блиц-Монтаж) гидроизоляция", "total": 12, "itr": 0, "workers": 12, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 43 (ТОО Блиц-Монтаж) порталы", "total": 34, "itr": 2, "workers": 32, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 44 (ТОО Блиц-Монтаж) СОН", "total": 45, "itr": 1, "workers": 44, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 44 (ТОО Блиц-Монтаж) порталы", "total": 28, "itr": 2, "workers": 26, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 46 (ТОО Блиц-Монтаж)", "total": 6, "itr": 1, "workers": 5, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 47.1 (ТОО Блиц-Монтаж)", "total": 4, "itr": 0, "workers": 4, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 50 (КЖ3) (ТОО Мейрам Құрылыс)", "total": 4, "itr": 1, "workers": 3, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 50 (КЖ4) (ТОО Блиц-Монтаж) пазухи", "total": 3, "itr": 0, "workers": 3, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 50 (КЖ4) (ТОО АТАМЕКЕН-ҚС)", "total": 4, "itr": 0, "workers": 4, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 50 (КЖ4) (ТОО Блиц-Монтаж) гидроизоляция", "total": 6, "itr": 1, "workers": 5, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 50 (КЖ5) (ТОО Блиц-Монтаж)", "total": 2, "itr": 0, "workers": 2, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Титул 50 (КЖ8) (ТОО Блиц-Монтаж)", "total": 3, "itr": 0, "workers": 3, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Лесомонтажники (ТОО Блиц-Монтаж)", "total": 50, "itr": 2, "workers": 48, "lastUpdate": "17.03.2026" },
  { "subcontractor": "Трубный цех (ТОО Блиц-Монтаж)", "total": 18, "itr": 1, "workers": 17, "lastUpdate": "17.03.2026" },
  { "subcontractor": "АО Имсталькон", "total": 24, "itr": 1, "workers": 23, "lastUpdate": "17.03.2026" },
  { "subcontractor": "TOO STECOL", "total": 132, "itr": 30, "workers": 102, "lastUpdate": "17.03.2026" },
  { "subcontractor": "KZ Construction Go", "total": 10, "itr": 2, "workers": 8, "lastUpdate": "17.03.2026" }
];

export const INITIAL_EQUIPMENT: Equipment[] = [
  { id: '1', type: 'Пикап', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.TRANSPORT, ownerType: 'GEN', ownerName: 'ТОО Integra', status: 'ACTIVE', total: 2, genPodryad: 2, subPodryad: 0 },
  { id: '2', type: 'Экскаватор', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.EARTHMOVING, ownerType: 'GEN', ownerName: 'ТОО Integra', status: 'ACTIVE', total: 18, genPodryad: 18, subPodryad: 0 },
  { id: '3', type: 'Кран', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.LIFTING, ownerType: 'GEN', ownerName: 'ТОО Integra', status: 'ACTIVE', total: 25, genPodryad: 25, subPodryad: 0 },
  { id: '4', type: 'Каток', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.ROAD, ownerType: 'GEN', ownerName: 'ТОО Integra', status: 'ACTIVE', total: 15, genPodryad: 15, subPodryad: 0 },
  { id: '5', type: 'Самосвал', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.TRUCKS, ownerType: 'GEN', ownerName: 'ТОО Integra', status: 'ACTIVE', total: 12, genPodryad: 12, subPodryad: 0 },
  { id: '6', type: 'Фронтальный - Погрузчик', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.EARTHMOVING, ownerType: 'GEN', ownerName: 'ТОО Integra', status: 'ACTIVE', total: 10, genPodryad: 10, subPodryad: 0 },
  { id: '7', type: 'Мини Погрузчик', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.EARTHMOVING, ownerType: 'GEN', ownerName: 'ТОО Integra', status: 'ACTIVE', total: 1, genPodryad: 1, subPodryad: 0 },
  { id: '8', type: 'Манипулятор', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.LIFTING, ownerType: 'GEN', ownerName: 'ТОО Integra', status: 'ACTIVE', total: 2, genPodryad: 2, subPodryad: 0 },
  { id: '9', type: 'Длинномер', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.TRUCKS, ownerType: 'GEN', ownerName: 'ТОО Integra', status: 'ACTIVE', total: 4, genPodryad: 4, subPodryad: 0 },
  { id: '10', type: 'Водовоз', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.TRUCKS, ownerType: 'GEN', ownerName: 'ТОО Integra', status: 'ACTIVE', total: 3, genPodryad: 3, subPodryad: 0 },
  { id: '11', type: 'Автогрейдер', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.ROAD, ownerType: 'GEN', ownerName: 'ТОО Integra', status: 'ACTIVE', total: 1, genPodryad: 1, subPodryad: 0 },
  { id: '12', type: 'Автовышка', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.LIFTING, ownerType: 'GEN', ownerName: 'ТОО Integra', status: 'ACTIVE', total: 6, genPodryad: 6, subPodryad: 0 },
  { id: '13', type: 'Авто миксер', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.TRUCKS, ownerType: 'GEN', ownerName: 'ТОО Integra', status: 'ACTIVE', total: 2, genPodryad: 2, subPodryad: 0 },
  { id: '14', type: 'Кран', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.LIFTING, ownerType: 'SUB', ownerName: 'TOO "Baibol"', status: 'ACTIVE', total: 1, genPodryad: 0, subPodryad: 1 },
  { id: '15', type: 'Фронтальный - Погрузчик', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.EARTHMOVING, ownerType: 'SUB', ownerName: 'TOO "Baibol"', status: 'ACTIVE', total: 1, genPodryad: 0, subPodryad: 1 },
  { id: '16', type: 'Кран', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.LIFTING, ownerType: 'SUB', ownerName: 'АО Имсталькон', status: 'ACTIVE', total: 4, genPodryad: 0, subPodryad: 4 },
  { id: '17', type: 'Пожарная машина', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.SPECIAL, ownerType: 'SUB', ownerName: 'ТОО "Центр противопожарных услуг"', status: 'ACTIVE', total: 1, genPodryad: 0, subPodryad: 1 },
  { id: '18', type: 'Автовышка', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.LIFTING, ownerType: 'SUB', ownerName: 'TOO "QPARK group"', status: 'ACTIVE', total: 1, genPodryad: 0, subPodryad: 1 },
  { id: '19', type: 'Кран', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.LIFTING, ownerType: 'SUB', ownerName: 'TOO "QPARK group"', status: 'ACTIVE', total: 1, genPodryad: 0, subPodryad: 1 },
  { id: '20', type: 'Машина скорой помощи', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.TRANSPORT, ownerType: 'SUB', ownerName: 'ТОО Индастриал Медикал Солюшенз (АйЭмЭс)', status: 'ACTIVE', total: 1, genPodryad: 0, subPodryad: 1 },
  { id: '21', type: 'Манипулятор', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.LIFTING, ownerType: 'SUB', ownerName: 'TOO Ancon', status: 'ACTIVE', total: 2, genPodryad: 0, subPodryad: 2 },
  { id: '22', type: 'Автокран', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.LIFTING, ownerType: 'SUB', ownerName: 'TOO "Нурахмет"', status: 'ACTIVE', total: 1, genPodryad: 0, subPodryad: 1 },
  { id: '23', type: 'Кран', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.LIFTING, ownerType: 'SUB', ownerName: 'KZ"Construction Go"', status: 'ACTIVE', total: 1, genPodryad: 0, subPodryad: 1 },
  { id: '24', type: 'Автокран', model: '—', plateNumber: '—', operator: '—', phone: '—', category: EquipmentCategory.LIFTING, ownerType: 'SUB', ownerName: 'TOO "Kaz Build Partner\'s"', status: 'ACTIVE', total: 1, genPodryad: 0, subPodryad: 1 }
];
