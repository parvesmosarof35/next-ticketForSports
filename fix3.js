const fs = require('fs');
const file = 'c:/New folder/spark-tech/hallo-mannan/components/commom/navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

// Change the navigation links text
content = content.replaceAll('text-sm font-medium', 'text-[15px] xl:text-[16px] font-bold');
// Increase the gap of the flex container for those links
content = content.replaceAll('gap-4 xl:gap-8', 'gap-6 xl:gap-10');

// Additional adjustments to make it look "cleaner" as requested by user
// Change text-gray-700 to text-gray-800 for slightly better contrast when bold
content = content.replaceAll('text-gray-700 hover:text-blue-600', 'text-gray-800 hover:text-[#0062E6]');

fs.writeFileSync(file, content);
console.log('Modified typography & spacing!');
