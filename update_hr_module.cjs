const fs = require('fs');

const managementStaff = [
  { position: 'Исполнительный директор ДПГУ / Deputy Director', qty: 1, category: 'ADMIN' },
  { position: 'Технический директор / Technical Director', qty: 1, category: 'ADMIN' },
  { position: 'Начальник управления по строительству / Managing Director', qty: 1, category: 'ADMIN' },
  { position: 'Заместитель Исполнительного директора по строительству', qty: 2, category: 'ADMIN' },
  { position: 'Руководитель проекта / Project Manager', qty: 4, category: 'ADMIN' },
  { position: 'Инженер ОТ и ТБ, Эколог HSE Engineer, Environmental Engineer', qty: 11, category: 'ADMIN', comment: 'Из них эколог - 2 чел.' },
  { position: 'Начальник ОПП/ Ведущий инженер ОПП, Инженер ОПП', qty: 3, category: 'ADMIN' },
  { position: 'Начальник ОКК, Инженер ОКК', qty: 10, category: 'ADMIN' },
  { position: 'Менеджер по управлению отчетности', qty: 2, category: 'ADMIN' },
  { position: 'Специалист по учету персонала', qty: 5, category: 'ADMIN' },
  { position: 'Заведующий складом, кладовщик / Warehouse Manager, Storekeeper', qty: 8, category: 'ADMIN' },
  { position: 'Фельдшер Paramedic', qty: 3, category: 'ADMIN' },
  { position: 'Специалист АХО Facility Management Specialist', qty: 3, category: 'ADMIN' },
  { position: 'Отдел снабжения / Supply Department', qty: 1, category: 'ADMIN' },
  { position: 'Служба безопасности (СБ) / Security Service (SS)', qty: 2, category: 'ADMIN' },
  
  // LINE STAFF
  { position: 'Главный геодезист, Инженер Геодезист / Chief Surveyor, Survey Engineer', qty: 22, category: 'LINE' },
  { position: 'Начальник участка Site Manager', qty: 5, category: 'LINE' },
  { position: 'Отдел главного энергетика Chief Electrical Engineer', qty: 6, category: 'LINE' },
  { position: 'Прораб / Foreman', qty: 12, category: 'LINE' },
  { position: 'Механик( малая механизация) / Mechanic', qty: 2, category: 'LINE' },
  
  // DIRECT WORKERS (INTEGRA)
  { position: 'Электромонтажники и Сантехники Electricians and Plumbers', qty: 12, category: 'WORKERS' },
  { position: 'Рабочие / Labors', qty: 25, category: 'WORKERS', comment: '3 чел - пожарная служба, 7 чел. на складе, 8 чел на площадке, 5 чел. пом. Геодезиста. 2 чел пом. менед. отч.' },
];

const titleAllocation = [
  { id: 'rebar-shop', title: 'Арматурный цех тит 50 и площадка ОГ', itr: 0, workers: 6, workType: 'Загатовка: ОГ, арматурных изделий, уборка по всей площадке', subcontractor: 'INTEGRA' },
  { id: '0.0-blitz', title: 'Титул 0.0 (КЖ1)', itr: 1, workers: 34, workType: 'Устройство армирования', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: 'doosan', title: 'Склад Doosan', itr: 0, workers: 6, workType: 'Вывоз материалов', subcontractor: 'INTEGRA' },
  { id: '1.1-stroy', title: 'Титул 1.1 (Stroy Consulting-2050)', itr: 1, workers: 5, workType: 'Монтаж М/К', subcontractor: 'Stroy Consulting-2050' },
  { id: '1.1-sst', title: 'Титул 1.1 (SST Building)', itr: 1, workers: 25, workType: 'Монтаж оборудования', subcontractor: 'SST Building' },
  { id: '1.1-kj45-blitz', title: 'Титул 1.1 Кж4.5', itr: 1, workers: 18, workType: 'Устройство армокаркаса, устранение замечаний, монтаж опалубки', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '1.1-blitz', title: 'Титул 1.1 (КЖ 2, 6, 7, 8, 16)', itr: 1, workers: 21, workType: 'Устройство армокаркаса, чипинг колонн', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '1.1-baibol', title: 'Титул 1.1 (КЖ15)', itr: 1, workers: 18, workType: 'Устройство армирования', subcontractor: 'ТОО Baibol' },
  { id: '1.2-ancon', title: 'Титул 1.2 (ТОО Ancon)', itr: 1, workers: 81, workType: 'Устройство армирования', subcontractor: 'ТОО Ancon' },
  { id: '1.2-blitz', title: 'Титул 1.2 (ТОО Блиц-Монтаж)', itr: 1, workers: 37, workType: 'Устройство армирования', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '1.3-blitz', title: 'Титул 1.3 (ТОО Блиц-Монтаж)', itr: 1, workers: 37, workType: 'Устройство армирования', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '3-blitz', title: 'Титул 3 (ТОО Блиц-Монтаж)', itr: 1, workers: 9, workType: 'Устройство армирования', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '5.2-5.4-blitz', title: 'Титул 5.2 - 5.4 (ТОО Блиц-Монтаж)', itr: 1, workers: 20, workType: 'Устройство армирования', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '8.1', title: 'Титул 8.1 (Квант)', itr: 1, workers: 0, workType: 'Инженерные сети', subcontractor: 'Квант' },
  { id: '8.2', title: 'Титул 8.2 (ТОО NUR-AKHMED GROUP)', itr: 3, workers: 12, workType: 'Инженерные сети', subcontractor: 'ТОО NUR-AKHMED GROUP' },
  { id: '9-blitz', title: 'Титул 9 (0.0 Кж1) (ТОО Блиц-Монтаж)', itr: 0, workers: 3, workType: 'Устройство армирования', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '10.11', title: 'Титул 10.11 (ТОО Блиц-Монтаж)', itr: 1, workers: 16, workType: 'Монтаж опалубки', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '12.1', title: 'Титул 12.1 (Квант)', itr: 1, workers: 3, workType: 'Подготовительные работы к монтажу ФБц панелей', subcontractor: 'Квант' },
  { id: '12.2-12.3', title: 'Титул 12.2-12.3 (KBP)', itr: 1, workers: 9, workType: 'Монтаж резервуаров в проектное положение', subcontractor: 'KBP' },
  { id: '13.4', title: 'Титул 13.4 (Stroy Consulting-2050)', itr: 1, workers: 5, workType: 'Монтаж М/К', subcontractor: 'Stroy Consulting-2050' },
  { id: '16', title: 'Титул 16 (ТОО Блиц-Монтаж)', itr: 1, workers: 28, workType: 'Монтаж опалубки', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '24', title: 'Титул 24 (ТОО QPARK group)', itr: 2, workers: 20, workType: 'Устройство армокаркаса', subcontractor: 'ТОО QPARK group' },
  { id: '25-atameken', title: 'Титул 25 (ТОО АТАМЕКЕН-ҚС)', itr: 1, workers: 18, workType: 'Устройство армокаркаса, демонаж и монтаж опалубки, монтаж лесов', subcontractor: 'АТАМЕКЕН-ҚС' },
  { id: '25-sst', title: 'Титул 25 (SST Building)', itr: 2, workers: 24, workType: 'Монтаж перегородочного газоблока', subcontractor: 'SST Building' },
  { id: '25-mega', title: 'Титул 25 (Мега Мост)', itr: 2, workers: 8, workType: 'Устройство армокаркаса', subcontractor: 'Мега Мост' },
  { id: '25-blitz', title: 'Титул 25 (Блиц-Монтаж)', itr: 1, workers: 8, workType: 'Устройство армокаркаса', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '25-big-bastau', title: 'Титул 25 (BIG BASTAU)', itr: 1, workers: 9, workType: 'Устройство армокаркаса', subcontractor: 'BIG BASTAU' },
  { id: '27-blitz', title: 'Титул 27 (Блиц-Монтаж)', itr: 0, workers: 6, workType: 'Устройство армокаркаса', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '32', title: 'Титул 32 (ТОО Q17 CONSTRUCTION)', itr: 1, workers: 4, workType: 'Монтаж М/К', subcontractor: 'TOO Q17 CONSTRUCTION' },
  { id: '34', title: 'Титул 34 (Блиц-Монтаж)', itr: 1, workers: 7, workType: 'Устройство армокаркаса', subcontractor: 'Блиц-Монтаж' },
  { id: '35', title: 'Титул 35 (ТОО Q17 CONSTRUCTION)', itr: 0, workers: 3, workType: 'Монтаж М/К', subcontractor: 'TOO Q17 CONSTRUCTION' },
  { id: '33.1', title: 'Титул 33.1 (Блиц-Монтаж)', itr: 1, workers: 4, workType: 'Устранение замечаний', subcontractor: 'Блиц-Монтаж' },
  { id: '38', title: 'Титул 38 (ТОО Адал Жарық Құрылыс)', itr: 2, workers: 22, workType: 'Устройство армокаркаса', subcontractor: 'ТОО Адал Жарық Құрылыс' },
  { id: '39', title: 'Титул 39 (ТОО Блиц-Монтаж)', itr: 0, workers: 4, workType: 'Загатовка опалубки', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '42', title: 'Титул 42 (ТОО Ancon)', itr: 2, workers: 18, workType: 'Устройство армокаркаса', subcontractor: 'ТОО Ancon' },
  { id: '43', title: 'Титул 43 (ТОО Блиц-Монтаж)', itr: 1, workers: 36, workType: 'Монтаж порталов, демонаж и монтаж опалубки, монтаж лесов', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '44', title: 'Титул 44 (ТОО Блиц-Монтаж)', itr: 1, workers: 80, workType: 'Монтаж порталов, демонаж и монтаж опалубки, монтаж лесов', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '46', title: 'Титул 46 (ТОО Блиц-Монтаж)', itr: 0, workers: 6, workType: 'Подготовительные работы к обмазочной гидроизоляции', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '50-kz', title: 'Титул 50 (КЖ3) (ТОО Мейрам Құрылыс)', itr: 1, workers: 7, workType: 'Монтаж м/к', subcontractor: 'ТОО Мейрам Құрылыс' },
  { id: '50-kz3-blitz', title: 'Титул 50 (КЖ3) (ТОО Блиц-Монтаж)', itr: 0, workers: 6, workType: 'Устройство армокаркаса, демонаж и монтаж опалубки', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '50-kz4-kz5', title: 'Титул 50 (КЖ4, КЖ5) (ТОО Блиц-Монтаж)', itr: 0, workers: 3, workType: 'Устройство армокаркаса, демонаж и монтаж опалубки', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '50-kz4-atameken', title: 'Титул 50 (КЖ4) (ТОО АТАМЕКЕН-ҚС)', itr: 1, workers: 5, workType: 'Устройство армокаркаса, демонаж и монтаж опалубки', subcontractor: 'АТАМЕКЕН-ҚС' },
  { id: '50-kz4-blitz', title: 'Титул 50 (КЖ4) (ТОО Блиц-Монтаж)', itr: 0, workers: 6, workType: 'Устройство армокаркаса, демонаж и монтаж опалубки', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '50-kz5', title: 'Титул 50 (КЖ5) (ТОО Блиц-Монтаж)', itr: 0, workers: 5, workType: 'Устройство армокаркаса, демонаж и монтаж опалубки', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: '50-kz7-8', title: 'Титул 50 (КЖ7-8) (ТОО Блиц-Монтаж)', itr: 0, workers: 8, workType: 'Устройство армокаркаса, демонаж и монтаж опалубки', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: 'forestry', title: 'Лесомонтажники (ТОО Блиц-Монтаж)', itr: 2, workers: 71, workType: 'Монтаж строительных лесов', subcontractor: 'ТОО Блиц-Монтаж' },
  { id: 'pipeshop', title: 'Трубный цех (ТОО Блиц-Монтаж)', itr: 2, workers: 19, workType: 'Сборка трубного цеха', subcontractor: 'ТОО Блиц-Монтаж' },
  
  // OTHER CONTRACTORS
  { id: 'imstalkon', title: 'АО Имсталькон (Титул 1.1)', itr: 1, workers: 16, workType: 'Монтаж м/к', subcontractor: 'АО Имсталькон' },
  { id: 'stecol-1.1', title: 'ТОО STECOL (Титул 1.1)', itr: 2, workers: 26, workType: 'Монтаж оборудования', subcontractor: 'ТОО STECOL' },
  { id: 'stecol-2.1', title: 'ТОО STECOL (Титул 2.1)', itr: 1, workers: 11, workType: 'Монтаж м/к', subcontractor: 'ТОО STECOL' },
  { id: 'stecol-2.2', title: 'ТОО STECOL (Титул 2.2)', itr: 0, workers: 5, workType: 'Монтаж м/к', subcontractor: 'ТОО STECOL' },
  { id: 'stecol-7.1', title: 'ТОО STECOL (Титул 7.1)', itr: 0, workers: 2, workType: 'Монтаж оборудования', subcontractor: 'ТОО STECOL' },
  { id: 'const-go-bar', title: 'KZ"Construction Go" (Ограждение)', itr: 1, workers: 6, workType: 'Изготовление', subcontractor: 'KZ"Construction Go"' },
  
  // MECHANIZATION
  { id: 'mech-integra', title: 'Механизация (Integra)', itr: 0, workers: 97, workType: 'Машинисты и водители', subcontractor: 'INTEGRA' },
  { id: 'mech-subs', title: 'Механизация (Субподрядчики)', itr: 0, workers: 16, workType: 'Машинисты и водители', subcontractor: 'Субподрядчики' },
];

let msString = '  const managementStaff: ManagementStaff[] = [\n';
managementStaff.forEach(ms => {
  msString += `    { position: '${ms.position}', qty: ${ms.qty}, category: '${ms.category}'${ms.comment ? `, comment: '${ms.comment}'` : ''} },\n`;
});
msString += '  ];\n';

let taString = '  const titleAllocation: HRAllocation[] = [\n';
titleAllocation.forEach(ta => {
  taString += `    { id: '${ta.id}', title: '${ta.title}', itr: ${ta.itr}, workers: ${ta.workers}, workType: '${ta.workType}', subcontractor: '${ta.subcontractor}' },\n`;
});
taString += '  ];\n';

const hrContent = fs.readFileSync('modules/HRResources.tsx', 'utf8');

const startMs = hrContent.indexOf('  const managementStaff: ManagementStaff[] = [');
const endMs = hrContent.indexOf('  const titleAllocation: HRAllocation[] = [');
const endTa = hrContent.indexOf('  // ИТОГОВЫЕ ПОКАЗАТЕЛИ ИЗ PDF (Стр. 4)');

if (startMs !== -1 && endMs !== -1 && endTa !== -1) {
  const newHrContent = hrContent.substring(0, startMs) + msString + '\n' + taString + '\n' + hrContent.substring(endTa);
  fs.writeFileSync('modules/HRResources.tsx', newHrContent);
  console.log('Successfully updated modules/HRResources.tsx');
} else {
  console.log('Could not find markers in modules/HRResources.tsx');
}
