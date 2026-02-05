// Test the FabricMdl2Provider
const { FabricMdl2Provider } = require('./dist/providers/providers');

const provider = new FabricMdl2Provider(['ColumnOptions', 'EditStyle']);

provider.makeFonts('./output-test-fabric').then((result) => {
  console.log('✓ Font generation successful!');
  console.log('Font name:', result.fontName);
  console.log('Prefix:', result.prefix);
  console.log('Icons generated:', Object.keys(result.icons).length);
  console.log('Icon names:', Object.keys(result.icons).join(', '));
}).catch((err) => {
  console.error('✗ Font generation failed:', err.message);
  console.error(err);
  process.exit(1);
});
