// Test the FabricMdl2Provider metadata loading
const fs = require('fs');
const path = require('path');

// Check if the required files exist
const mergedFont = path.join(__dirname, 'dist/providers/fabric-mdl2-icons-merged.ttf');
const metaJson = path.join(__dirname, 'dist/providers/fabric-mdl2-icons-meta.json');

console.log('Checking files...');
console.log('Merged font:', fs.existsSync(mergedFont) ? '✓ Exists' : '✗ Missing');
console.log('Metadata JSON:', fs.existsSync(metaJson) ? '✓ Exists' : '✗ Missing');

if (fs.existsSync(metaJson)) {
  const meta = JSON.parse(fs.readFileSync(metaJson, 'utf8'));
  console.log('\nTotal icons in metadata:', Object.keys(meta).length);
  console.log('ColumnOptions:', meta.ColumnOptions ? '✓ Found' : '✗ Missing');
  console.log('EditStyle:', meta.EditStyle ? '✓ Found' : '✗ Missing');
  
  if (meta.ColumnOptions) {
    console.log('  - Unicode:', meta.ColumnOptions.unicode);
  }
  if (meta.EditStyle) {
    console.log('  - Unicode:', meta.EditStyle.unicode);
  }
}
