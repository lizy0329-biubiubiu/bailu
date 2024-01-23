import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetIcons,
  transformerAttributifyJsx,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss';
import { presetShadcn } from './preset.shadcn';

export default defineConfig({
  presets: [
    presetUno(),
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
  ],
  include: [/\.ts/, /\.vue$/, /\.vue\?vue/]
});
