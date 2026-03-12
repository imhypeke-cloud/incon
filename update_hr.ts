import * as fs from 'fs';

const hrData = [
  { subcontractor: 'ТОО Integra Construction KZ', total: 152, itr: 117, workers: 35, lastUpdate: '11.03.2026' },
  { subcontractor: 'Арматурный цех тит 50 и площадка ОГ', total: 7, itr: 0, workers: 7, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 0.0 (КЖ1) ТОО Блиц-Монтаж', total: 27, itr: 1, workers: 26, lastUpdate: '11.03.2026' },
  { subcontractor: 'Склад Doosan', total: 6, itr: 0, workers: 6, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 1.1 (Stroy Consulting-2050)', total: 5, itr: 1, workers: 4, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 1.1 (SST Building)', total: 18, itr: 1, workers: 17, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 1.1 Кж4.5 (Блиц-Монтаж)', total: 11, itr: 1, workers: 10, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 1.1 (КЖ 2, 6, 7, 8, 16) Блиц-Монтаж', total: 31, itr: 1, workers: 30, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 1.1 (КЖ15) ТОО Baibol', total: 12, itr: 1, workers: 11, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 1.2 (ТОО Ancon)', total: 77, itr: 1, workers: 76, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 1.2 (ТОО Блиц-Монтаж)', total: 38, itr: 1, workers: 37, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 1.3 (ТОО Блиц-Монтаж)', total: 41, itr: 1, workers: 40, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 3 (ТОО Блиц-Монтаж)', total: 11, itr: 1, workers: 10, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 5.2 - 5.4 (ТОО Блиц-Монтаж)', total: 21, itr: 1, workers: 20, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 8.1 (TOWER CONSTRUCTION 2030)', total: 3, itr: 2, workers: 1, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 8.2 (ТОО NUR-AKHMED GROUP)', total: 3, itr: 1, workers: 2, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 9 (0.0 Кж1) ТОО Блиц-Монтаж', total: 3, itr: 0, workers: 3, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 10.11 (ТОО Блиц-Монтаж)', total: 14, itr: 1, workers: 13, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 12.1 (TOWER CONSTRUCTION 2030)', total: 3, itr: 1, workers: 2, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 13.4 (Stroy Consulting-2050)', total: 6, itr: 1, workers: 5, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 15.1 (ТОО QPARK group)', total: 5, itr: 1, workers: 4, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 16 (ТОО Блиц-Монтаж)', total: 29, itr: 1, workers: 28, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 24 (ТОО QPARK group)', total: 15, itr: 1, workers: 14, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 25 (ТОО АТАМЕКЕН-ҚС.)', total: 11, itr: 1, workers: 10, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 25 (SST Building)', total: 3, itr: 0, workers: 3, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 25 (Мега Мост)', total: 6, itr: 1, workers: 5, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 25 (Блиц-Монтаж)', total: 6, itr: 1, workers: 5, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 27 (Блиц-Монтаж)', total: 5, itr: 0, workers: 5, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 32 (ТОО Q17 CONSTRUCTION)', total: 4, itr: 1, workers: 3, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 34 (Блиц-Монтаж)', total: 6, itr: 1, workers: 5, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 38 (ТОО Адал Жарық Құрылыс)', total: 19, itr: 1, workers: 18, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 39 (ТОО Блиц-Монтаж)', total: 4, itr: 0, workers: 4, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 42 (ТОО Ancon)', total: 20, itr: 2, workers: 18, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 43 (ТОО Блиц-Монтаж)', total: 46, itr: 1, workers: 45, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 44 (ТОО Блиц-Монтаж)', total: 81, itr: 1, workers: 80, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 48 ТОО "NUR-AKHMED GROUP"', total: 2, itr: 0, workers: 2, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 46 (ТОО Блиц-Монтаж)', total: 5, itr: 0, workers: 5, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 50 (КЖ3) (ТОО Мейрам Құрылыс)', total: 3, itr: 1, workers: 2, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 50 (КЖ4, КЖ7) (ТОО Блиц-Монтаж)', total: 2, itr: 0, workers: 2, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 50 (КЖ4) (ТОО АТАМЕКЕН-ҚС)', total: 5, itr: 1, workers: 4, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 50 (КЖ4) (ТОО Блиц-Монтаж)', total: 5, itr: 0, workers: 5, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 50 (КЖ5) (ТОО BIG BASTAU)', total: 3, itr: 1, workers: 2, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 50 (КЖ5) (ТОО Блиц-Монтаж)', total: 3, itr: 0, workers: 3, lastUpdate: '11.03.2026' },
  { subcontractor: 'Титул 50 (КЖ7-8) (ТОО Блиц-Монтаж)', total: 3, itr: 0, workers: 3, lastUpdate: '11.03.2026' },
  { subcontractor: 'Лесомонтажники (ТОО Блиц-Монтаж)', total: 61, itr: 2, workers: 59, lastUpdate: '11.03.2026' },
  { subcontractor: 'Трубный цех (ТОО Блиц-Монтаж)', total: 23, itr: 1, workers: 22, lastUpdate: '11.03.2026' },
  { subcontractor: 'АО Имсталькон', total: 19, itr: 1, workers: 18, lastUpdate: '11.03.2026' },
  { subcontractor: 'TOO STECOL', total: 45, itr: 9, workers: 36, lastUpdate: '11.03.2026' },
  { subcontractor: 'KZ"Construction Go"', total: 7, itr: 1, workers: 6, lastUpdate: '11.03.2026' },
  { subcontractor: 'АУП субподрядных организаций', total: 12, itr: 12, workers: 0, lastUpdate: '11.03.2026' },
];

const output = `export const INITIAL_HR: HumanResource[] = ${JSON.stringify(hrData, null, 2)};`;

let constants = fs.readFileSync('constants.ts', 'utf8');
const startIdx = constants.indexOf('export const INITIAL_HR: HumanResource[] = [');
const endIdx = constants.indexOf('export const INITIAL_EQUIPMENT: Equipment[] = [');

if (startIdx !== -1 && endIdx !== -1) {
  constants = constants.substring(0, startIdx) + output + '\n\n' + constants.substring(endIdx);
  fs.writeFileSync('constants.ts', constants);
  console.log('Successfully updated constants.ts');
} else {
  console.log('Could not find markers in constants.ts');
}
