const fs = require('fs');
const text = fs.readFileSync('ocr1.txt', 'utf-8');
const lines = text.split('\n');
const data = [];
let currentItem = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;
  
  if (line.startsWith('Заявка №')) {
    if (currentItem) data.push(currentItem);
    
    const parts = line.split(/\s+/);
    currentItem = {
      id: parts[0] + ' ' + parts[1],
      date: parts[2],
      material: parts.slice(3, -4).join(' '),
      unit: 'шт',
      qty: '1',
      note: '',
      status: 'COMPLETE',
      supplier: parts.slice(-3).join(' '),
      comment: '',
      deliveryDate: '',
      daysInWork: 0,
      responsible: '',
      title: ''
    };
  } else if (currentItem) {
    if (line.match(/^\d{2}\.\d{2}\.\d{4}$/)) {
       currentItem.deliveryDate = line;
    } else if (line.match(/^\d+$/)) {
       currentItem.daysInWork = parseInt(line);
    } else if (line.includes('Нурсултан') || line.includes('Жасулан') || line.includes('Ербол') || line.includes('Азамат')) {
       currentItem.responsible = line;
    } else {
       currentItem.comment += (currentItem.comment ? ' ' : '') + line;
    }
  }
}
if (currentItem) data.push(currentItem);

fs.writeFileSync('parsed_data.json', JSON.stringify(data, null, 2));
