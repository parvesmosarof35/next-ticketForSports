const fs = require('fs');
const file = 'c:/New folder/spark-tech/hallo-mannan/components/commom/navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"/g;
const replacement = 'className="flex items-center gap-1 text-[15px] xl:text-base font-bold text-gray-800 hover:text-[#0062E6] transition-colors cursor-pointer"';

const newContent = content.replace(regex, replacement).replace(
    /className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">/g,
    'className="flex items-center gap-1 text-[15px] xl:text-base font-bold text-gray-800 hover:text-[#0062E6] transition-colors cursor-pointer">'
);

fs.writeFileSync(file, newContent);
console.log('Done replacement.');
