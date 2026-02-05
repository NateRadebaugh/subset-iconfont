# Generated Icon Fonts

This directory contains the generated CSS and font files for Fabric MDL2 icons.

## Icons Included

The following icons are included in this font subset:
- **ColumnOptions** (Unicode: f317)
- **EditStyle** (Unicode: ef60)
- **CheckMark** (Unicode: e73e)

## Files

### CSS Files (in `fabric-mdl2-icons/css/`)
- `fabric-mdl2-icons.css` - Main CSS file with icon definitions
- `fabric-mdl2-icons.min.css` - Minified version of the main CSS
- `all.css` - Combined CSS with all utility classes
- `all.min.css` - Minified combined CSS
- `fabric-mdl2-icons-font-face.css` - Font-face declarations only

### Font Files (in `fabric-mdl2-icons/webfonts/`)
- `fabric-mdl2-icons.ttf` - TrueType font format
- `fabric-mdl2-icons.woff2` - Web Open Font Format 2 (recommended)

### SCSS Files (in `fabric-mdl2-icons/scss/`)
- Source SCSS files for customization
- Includes utilities for sizing, rotation, animation, etc.

### Other Files
- `index.html` - Interactive demo page showing all icons with examples
- `metadata.json` - Icon metadata including unicode values

## Usage

### Basic HTML Usage

1. Include the CSS file in your HTML:
```html
<link rel="stylesheet" href="fabric-mdl2-icons/css/fabric-mdl2-icons.css">
```

2. Use the icons:
```html
<i class="ms-Icon ms-Icon-ColumnOptions"></i>
<i class="ms-Icon ms-Icon-EditStyle"></i>
<i class="ms-Icon ms-Icon-CheckMark"></i>
```

### With Sizing
```html
<i class="ms-Icon ms-Icon-CheckMark ms-Icon-2x"></i>  <!-- 2x size -->
<i class="ms-Icon ms-Icon-CheckMark ms-Icon-3x"></i>  <!-- 3x size -->
```

### With Rotation
```html
<i class="ms-Icon ms-Icon-CheckMark ms-Icon-rotate-90"></i>
```

### View Demo
Open `fabric-mdl2-icons/index.html` in a browser to see all icons with interactive examples.

## Regenerating

To regenerate the icons with different selections, run:
```bash
node generate-icons.js
```

Edit the `generate-icons.js` file to change which icons are included.

## License

Icons are from @fluentui/font-icons-mdl2 and subject to the [Microsoft Fabric Assets License](https://aka.ms/fluentui-assets-license).
