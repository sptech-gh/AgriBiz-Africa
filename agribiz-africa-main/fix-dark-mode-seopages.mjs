import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'src', 'components', 'SEOPages.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Define replacements for dark mode
const replacements = [
  // Container backgrounds
  { from: /min-h-screen bg-white/g, to: 'min-h-screen bg-white dark:bg-slate-900' },
  
  // Text colors - headings
  { from: /text-gray-900 mb/g, to: 'text-gray-900 dark:text-gray-100 mb' },
  { from: /text-gray-900 mb-4/g, to: 'text-gray-900 dark:text-gray-100 mb-4' },
  { from: /text-gray-900 mb-6/g, to: 'text-gray-900 dark:text-gray-100 mb-6' },
  { from: /text-gray-900 mb-2/g, to: 'text-gray-900 dark:text-gray-100 mb-2' },
  { from: /text-gray-900 mb-3/g, to: 'text-gray-900 dark:text-gray-100 mb-3' },
  { from: /text-gray-800 mb/g, to: 'text-gray-800 dark:text-gray-200 mb' },
  
  // Text colors - body
  { from: /text-gray-700 mb/g, to: 'text-gray-700 dark:text-gray-300 mb' },
  { from: /text-gray-600 mb/g, to: 'text-gray-600 dark:text-gray-400 mb' },
  { from: /text-gray-600 max/g, to: 'text-gray-600 dark:text-gray-400 max' },
  { from: /text-gray-600 text-sm/g, to: 'text-gray-600 dark:text-gray-400 text-sm' },
  { from: /text-gray-600\n/g, to: 'text-gray-600 dark:text-gray-400\n' },
  
  // Background colors
  { from: /bg-teal-50 rounded/g, to: 'bg-teal-50 dark:bg-teal-900/20 rounded' },
  { from: /bg-emerald-50 rounded/g, to: 'bg-emerald-50 dark:bg-emerald-900/20 rounded' },
  { from: /bg-gray-50 rounded/g, to: 'bg-gray-50 dark:bg-slate-800 rounded' },
  { from: /bg-white rounded/g, to: 'bg-white dark:bg-slate-700 rounded' },
  
  // Gradient backgrounds
  { from: /from-gray-50 to-teal-50/g, to: 'from-gray-50 to-teal-50 dark:from-slate-800 dark:to-slate-800' },
  { from: /from-teal-50 to-cyan-50/g, to: 'from-teal-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800' },
  
  // Icon backgrounds
  { from: /bg-teal-100 w-14/g, to: 'bg-teal-100 dark:bg-teal-900/30 w-14' },
  { from: /text-teal-600"/g, to: 'text-teal-600 dark:text-teal-400"' },
  
  // Prose text
  { from: /prose prose-lg/g, to: 'prose prose-lg dark:prose-invert' },
];

console.log('Applying dark mode fixes to SEOPages.tsx...\n');

let totalReplacements = 0;
replacements.forEach(({ from, to }, index) => {
  const matches = content.match(from);
  if (matches) {
    const count = matches.length;
    content = content.replace(from, to);
    totalReplacements += count;
    console.log(`✅ Fix ${index + 1}: ${count} replacements`);
  }
});

// Write the fixed content
fs.writeFileSync(filePath, content);

console.log(`\n📊 Total replacements: ${totalReplacements}`);
console.log('✅ SEOPages.tsx dark mode fixes applied successfully!');
