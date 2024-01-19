import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  transformerAttributifyJsx,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [presetUno(), presetTypography(), presetAttributify()],
  transformers: [
    transformerCompileClass(),
    transformerVariantGroup(),
    transformerDirectives(),
    transformerAttributifyJsx(),
  ],
});
