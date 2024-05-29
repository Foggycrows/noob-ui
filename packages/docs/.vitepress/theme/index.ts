import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

import { ErButton } from 'noob-ui'

export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    app.use(ErButton)
    app.component('demo-preview', AntDesignContainer)
  }
} satisfies Theme