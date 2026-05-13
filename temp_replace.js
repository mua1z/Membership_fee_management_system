const fs = require('fs');
const path = require('path');

const targetDirs = [
  path.join(__dirname, 'backend'),
  path.join(__dirname, 'frontend/src')
];

const categories = [
  'Salary-Based',
  'Non-Salary',
  'Student',
  'Business',
  'Investor',
  'Wing',
  'Special'
];

function walkSync(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (!dirFile.includes('node_modules') && !dirFile.includes('.git') && !dirFile.includes('dist')) {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.match(/\.(js|jsx|ts|tsx|json)$/)) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
}

let files = [];
targetDirs.forEach(dir => files = walkSync(dir, files));

let replacedFilesCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  categories.forEach(cat => {
    // We only replace if they are NOT already suffixed with ' Members'
    // Single quotes
    const regex1 = new RegExp(`'${cat}'(?! Members)`, 'g');
    content = content.replace(regex1, `'${cat} Members'`);

    // Double quotes
    const regex2 = new RegExp(`"${cat}"(?! Members)`, 'g');
    content = content.replace(regex2, `"${cat} Members"`);
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    replacedFilesCount++;
    console.log('Updated:', file);
  }
});

console.log('Replaced in ' + replacedFilesCount + ' files.');
