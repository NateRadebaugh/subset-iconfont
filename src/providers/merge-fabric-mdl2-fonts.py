#!/usr/bin/env python3
"""
Merge all FabricMDL2 icon font WOFF files into a single TTF file.
This script uses fontTools to properly merge the fonts by combining cmap tables.
"""
import sys
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools import merge

def merge_fabric_fonts(source_dir, output_file):
    """Merge multiple WOFF font files into a single TTF file."""
    
    # Find all WOFF files (including the main fabric-icons file)
    woff_files = sorted([
        str(f) for f in Path(source_dir).glob('fabric-icons-*.woff')
    ])
    
    if not woff_files:
        print(f"No WOFF files found in {source_dir}")
        return False
    
    print(f"Found {len(woff_files)} WOFF files to merge")
    for wf in woff_files:
        print(f"  - {Path(wf).name}")
    
    try:
        # Use fontTools merge to merge all fonts
        print("\nMerging fonts...")
        merger = merge.Merger()
        merged_font = merger.merge(woff_files)
        
        # Save as TTF
        print(f"Saving merged font to {output_file}")
        merged_font.save(output_file)
        merged_font.close()
        
        # Verify the merged font
        verify_font = TTFont(output_file)
        cmap = verify_font['cmap'].getcmap(3, 1)
        if cmap is None:
            cmap = verify_font['cmap'].getcmap(3, 10)
        
        if cmap:
            print(f"✓ Merged font created successfully with {len(cmap.cmap)} glyphs")
        else:
            print("⚠ Warning: Could not verify cmap table in merged font")
        
        verify_font.close()
        return True
        
    except Exception as e:
        print(f"Error merging fonts: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == '__main__':
    source_dir = sys.argv[1] if len(sys.argv) > 1 else 'node_modules/@fluentui/font-icons-mdl2/fonts'
    output_file = sys.argv[2] if len(sys.argv) > 2 else 'src/providers/fabric-mdl2-icons-merged.ttf'
    
    if merge_fabric_fonts(source_dir, output_file):
        print("\n✓ Font merge completed successfully!")
        sys.exit(0)
    else:
        print("\n✗ Font merge failed!")
        sys.exit(1)
