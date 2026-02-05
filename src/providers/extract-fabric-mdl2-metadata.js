#!/usr/bin/env node
/**
 * Extract icon metadata from FabricMDL2 JavaScript files
 * This script generates a JSON file mapping icon names to their unicode values and source font files
 */
const fs = require('fs');
const path = require('path');

const iconsMap = {};
const baseDir = path.join(__dirname, '..', '..', 'node_modules', '@fluentui', 'font-icons-mdl2', 'lib');

// Read all fabric-icons-*.js files
for (let i = 0; i <= 17; i++) {
  const filePath = path.join(baseDir, `fabric-icons-${i}.js`);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract font file name
    const fontFileMatch = content.match(/fabric-icons-(\d+)-([a-f0-9]+)\.woff/);
    const fontFile = fontFileMatch ? `fonts/fabric-icons-${fontFileMatch[1]}-${fontFileMatch[2]}.woff` : null;
    
    // Extract icons using regex
    const iconRegex = /'([^']+)':\s*'\\u([A-F0-9]+)'/g;
    let match;
    
    while ((match = iconRegex.exec(content)) !== null) {
      const iconName = match[1];
      const unicode = match[2].toLowerCase();
      iconsMap[iconName] = {
        unicode: unicode,
        fontFile: fontFile || `fonts/fabric-icons-${i}.woff`
      };
    }
  }
}

// Write to JSON file
const outputPath = path.join(__dirname, 'fabric-mdl2-icons-meta.json');
fs.writeFileSync(outputPath, JSON.stringify(iconsMap, null, 2));

console.log(`Extracted ${Object.keys(iconsMap).length} icons to ${outputPath}`);
