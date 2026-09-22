import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import RequestPriceForm from './components/RequestPriceForm.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('RequestPriceForm', RequestPriceForm)
  }
} satisfies Theme