import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
  transformerCompileClass,
  transformerAttributifyJsx
} from 'unocss';

export default defineConfig(
  {
      presets: [
          presetUno(),
          presetTypography(),
          presetAttributify(),
      ],
      transformers: [
          transformerCompileClass(),
          transformerVariantGroup(),
          transformerDirectives(),
          transformerAttributifyJsx()
      ]
  }
);