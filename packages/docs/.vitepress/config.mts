import { defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Noob-Ui",
  description: "高仿 ElementPlus 组件库",
  base:"/noob-ui/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '开始使用', link: '/' },
      { text: '组件', link: '/page/get-started' }
    ],

    sidebar: [
      {
        text: '指南',
        collapsed: false,
        items: [
          { text: '快速开始', link: '/page/get-started' },
        ]
      },
      {
        text: '基础组件',
        collapsed: false,
        items: [
          { text: 'Button按钮', link: '/page/button' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  }
})
