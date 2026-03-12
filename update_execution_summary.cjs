const fs = require('fs');

const executionSummaryData = [
  // --- SECTION 1: KZh ---
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
    level: 0
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
    level: 1
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
    level: 1
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
    level: 1
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
    level: 1
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
    level: 1
  },

  // --- SECTION 2: KM ---
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
    progress: 25.60,
    isSection: true,
    level: 0
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
    level: 1
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
    progress: 25.60,
    isSection: false,
    level: 1
  },
  // 2.1 ACC
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
    level: 1
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
    level: 2
  },
  // 2.2 ACC
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
    level: 1
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
    level: 2
  },
  // 7.1 Dry Tower
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
    level: 1
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
    level: 2
  },
  // 39 Auto transformers
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
    level: 1
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
    level: 2
  },

  // --- SECTION 3: AR ---
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
    level: 0
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
    level: 1
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
    level: 1
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
    level: 1
  },

  // --- SECTION 4: TX ---
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
    level: 0
  },
];

// Add GTG sections dynamically
const gtgSections = ['1.1 GTG11', '1.1 GTG12', '1.1 GTG21', '1.1 GTG22'];
gtgSections.forEach((gtg, index) => {
  const gtgId = `row-tx-${index + 1}`;
  executionSummaryData.push({
    id: gtgId,
    no: gtg.split(' ')[0],
    name: gtg,
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
    level: 1
  });

  const gtgItems = [
    { name: 'Газотурбинная установка', unit: 'шт/тн', total: '1 / 230', done: '1 / 230', integra: '1 / 230' },
    { name: 'Монтаж блока управления №3010', unit: 'шт', total: 1, done: 1, integra: 1 },
    { name: 'Монтаж блока управления №3110', unit: 'шт', total: 1, done: 1, integra: 1 },
    { name: 'Монтаж блока управления №3210', unit: 'шт', total: 1, done: 1, integra: 1 },
    { name: 'Монтаж генератора', unit: 'шт', total: 1, done: 1, integra: 1 },
    { name: 'Монтаж основного модуля БС', unit: 'шт', total: 1, done: 1, integra: 1 },
    { name: 'Монтаж охладителя генератора', unit: 'шт/тн', total: '1 / 8', done: '1 / 8', integra: '1 / 8' }
  ];

  gtgItems.forEach((item, itemIndex) => {
    executionSummaryData.push({
      id: `${gtgId}-${itemIndex + 1}`,
      no: `${itemIndex + 1}`,
      name: item.name,
      unit: item.unit,
      displayTotal: typeof item.total === 'string' ? item.total : undefined,
      totalVolume: typeof item.total === 'number' ? item.total : 1,
      displayDone: typeof item.done === 'string' ? item.done : undefined,
      done: typeof item.done === 'number' ? item.done : 1,
      remainder: 0,
      bazisFact: 0,
      bazisPercent: 0,
      displayIntegraFact: typeof item.integra === 'string' ? item.integra : undefined,
      integraFact: typeof item.integra === 'number' ? item.integra : 1,
      integraPercent: 100,
      integraRemainder: 0,
      integraRemainderPercent: 0,
      progress: 100,
      isSection: false,
      level: 2
    });
  });
});

let dataString = 'export const INITIAL_EXECUTION_SUMMARY_DATA: any[] = [\n';
executionSummaryData.forEach(item => {
  dataString += '  {\n';
  Object.keys(item).forEach(key => {
    if (item[key] === undefined) return;
    if (typeof item[key] === 'string') {
      dataString += `    ${key}: '${item[key]}',\n`;
    } else {
      dataString += `    ${key}: ${item[key]},\n`;
    }
  });
  dataString += '  },\n';
});
dataString += '];\n\n';

const constantsContent = fs.readFileSync('constants.ts', 'utf8');

const startData = constantsContent.indexOf('export const INITIAL_EXECUTION_SUMMARY_DATA: any[] = [');
const endData = constantsContent.indexOf('export const INITIAL_EXECUTION_KPIS = {');

if (startData !== -1 && endData !== -1) {
  const newConstantsContent = constantsContent.substring(0, startData) + dataString + constantsContent.substring(endData);
  fs.writeFileSync('constants.ts', newConstantsContent);
  console.log('Successfully updated constants.ts');
} else {
  console.log('Could not find markers in constants.ts');
}
