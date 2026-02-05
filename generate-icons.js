// Script to generate CSS and font files for specific FabricMDL2 icons
const { FabricMdl2Provider } = require('./dist');

const outputDir = './output';

// Generate icons for: ColumnOptions, EditStyle, CheckMark
const fabricMdl2 = new FabricMdl2Provider(
  ['ColumnOptions', 'EditStyle', 'CheckMark'],
  { 
    formats: ['ttf', 'woff2'],
    loggerOptions: { level: 'info' }
  }
);

console.log('Starting FabricMDL2 font generation for ColumnOptions, EditStyle, and CheckMark...');
fabricMdl2.makeFonts(outputDir).then((result) => {
  console.log('✓ Font generation successful!');
  console.log('  Font name:', result.fontName);
  console.log('  Prefix:', result.prefix);
  console.log('  Icons generated:', Object.keys(result.icons).join(', '));
  console.log(`  Output directory: ${outputDir}`);
  console.log('\nGenerated files:');
  console.log('  - CSS files in:', `${outputDir}/css/`);
  console.log('  - Font files in:', `${outputDir}/${result.webfontDir}/`);
  console.log('  - Demo page:', `${outputDir}/index.html`);
}).catch((err) => {
  console.error('✗ Font generation failed:', err.message);
  console.error(err.stack);
  process.exit(1);
});
