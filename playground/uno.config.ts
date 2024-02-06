import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetTagify,
  presetIcons,
  transformerAttributifyJsx,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss';
import { presetShadcn } from './preset.shadcn';

export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}'
      ]
    }
  },
  presets: [
    presetUno(),
    presetTagify(),
    presetTypography(),
    presetAttributify(),
    presetShadcn(),
    presetIcons()
  ],
  transformers: [
    transformerCompileClass(),
    transformerVariantGroup(),
    transformerDirectives(),
    transformerAttributifyJsx()
  ],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex flex-col justify-center items-center'
    }
  ]
});
