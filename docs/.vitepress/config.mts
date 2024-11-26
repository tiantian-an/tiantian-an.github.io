import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Xiaoer WANG",
  description: "Xiaoer WANG",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页 HOME', link: '/' },
      { text: '技术 TECH', link: '/markdown-examples' },
      { text: '交易记录 TRADE', link: '/markdown-examples' },
      { text: '书籍 BOOK', link: '/markdown-examples' },
      { text: '日常 LIFE', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
