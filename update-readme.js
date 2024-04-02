const fs = require('fs');
const path = require('path');

// read README.md
const readmePath = path.join(__dirname, 'README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// calc
const today = new Date();
const days = calculateDays(today);

// regexp
const daysRegex = /<!--\s*DAYS_UNTIL\s*-->(.*?)<!--\s*\/DAYS_UNTIL\s*-->/;
readmeContent = readmeContent.replace(daysRegex, `<!-- DAYS_UNTIL -->${days}<!-- /DAYS_UNTIL -->`);

// update README.md
fs.writeFileSync(readmePath, readmeContent);

// calc function
function calculateDays(today) {
  // 创建两个日期对象
  var d2 = new Date('2024-03-09 23:00:00 GMT+08');

  // 计算两个日期之间的毫秒数差值
  var diff = Math.abs(today - d2);

  // 将毫秒数转换为天数
  var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days;
}
