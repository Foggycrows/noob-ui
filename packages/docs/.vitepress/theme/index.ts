import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

import { ErButton, ErButtonGroup, ErIcon, ErCollapse, ErCollapseItem } from 'noob-ui'

export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    app.use(ErButton)
    app.use(ErButtonGroup)
    app.use(ErIcon)
    app.use(ErCollapse)
    app.use(ErCollapseItem)
    app.component('demo-preview', AntDesignContainer)
  }
} satisfies Theme