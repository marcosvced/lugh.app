import {defineConfig} from "unocss";
import lugh from './src/assets/unocss/index'

export default defineConfig({
    presets: [lugh({})]
})