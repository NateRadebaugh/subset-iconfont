// Demo for FabricMdl2Provider without SCSS generation
const { FabricMdl2Provider } = require('./dist');

const outputDir = './output-fabric-demo';

const fabricMdl2 = new FabricMdl2Provider(
  ['ColumnOptions', 'EditStyle', 'Add', 'Edit', 'Delete'],
  { 
    formats: ['ttf', 'woff2'],
    writeOutFiles: ['webfonts', 'css', 'licenses', 'web', 'metadata'],  // Skip scss
    loggerOptions: { level: 'info' }
  }
);

console.log('Starting FabricMDL2 font generation (without SCSS)...');
fabricMdl2.makeFonts(outputDir).then((result) => {
  console.log('✓ Font generation successful!');
  console.log('  Font name:', result.fontName);
  console.log('  Prefix:', result.prefix);
  console.log('  Icons:', Object.keys(result.icons).join(', '));
  console.log(`  Output directory: ${outputDir}`);
}).catch((err) => {
  console.error('✗ Font generation failed:', err.message);
  console.error(err.stack);
  process.exit(1);
});
