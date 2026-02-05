import { ProviderConstructor } from './base';
import {
  DEFAULT_STYLE,
  FABRIC_MDL2_DEFAULT_CSS_PREFIX,
  FABRIC_MDL2_DEFAULT_FONT_FILE_NAME,
  FABRIC_MDL2_DEFAULT_FONT_NAME,
  FABRIC_MDL2_PACKAGE_NAME,
} from './constants';
import { resolve } from 'path';
import { ProviderInterface } from '../types/Provider';
import { MetaData, MetaDataset } from '../types/Metadata';
import { SubsetItem } from '../types/SubsetItem';
import { ProviderOptions } from '../types/ProviderOptions';

// Import the pre-generated metadata
import fabricMdl2IconsMeta from './fabric-mdl2-icons-meta.json';

/**
 * ProviderConstructor for Fabric MDL2 Icons (FluentUI).
 * 
 * FabricMDL2 icons are originally distributed across multiple WOFF files (fabric-icons-0 through fabric-icons-17).
 * This provider uses a pre-merged TTF font file that contains all 1744+ icons from all source files.
 * 
 * The merged font file is generated using the merge-fabric-mdl2-fonts.py script.
 */
class FabricMdl2Provider extends ProviderConstructor implements ProviderInterface {
  packageName = FABRIC_MDL2_PACKAGE_NAME;
  cssPrefix = FABRIC_MDL2_DEFAULT_CSS_PREFIX;
  fontName = FABRIC_MDL2_DEFAULT_FONT_NAME;
  fontFileName = FABRIC_MDL2_DEFAULT_FONT_FILE_NAME;
  hasMultipleStyles = false;
  
  style2FontFileMap = {
    [DEFAULT_STYLE]: 'fabric-mdl2-icons-merged.ttf',
  };

  constructor(subset: SubsetItem[], options?: ProviderOptions) {
    super(subset, options);
  }

  protected get baseDir(): string {
    // Return the providers directory where the merged font is located
    return resolve(__dirname);
  }

  moreValidation() {
    // Validate the merged font file exists
    this.validateSubPath('fabric-mdl2-icons-merged.ttf');
  }

  getAllMetaData(): MetaDataset {
    // Return the pre-extracted metadata with minimal structure
    // The full MetaData will be constructed in normalizeIconMeta
    const meta: any = {};
    
    for (const [iconName, iconData] of Object.entries(fabricMdl2IconsMeta)) {
      meta[iconName] = {
        unicode: (iconData as any).unicode,
      };
    }
    
    return meta;
  }

  normalizeIconMeta(iconName: SubsetItem): MetaData {
    const iconData = this.allMetaData[iconName];
    const unicode = iconData.unicode;

    return {
      unicode: unicode,
      svgDataObjects: [
        {
          style: DEFAULT_STYLE,
          // FabricMDL2 uses font files, not SVG data
          svgData: '',
        },
      ],
      styles: [DEFAULT_STYLE],
    };
  }
}

export { FabricMdl2Provider };
