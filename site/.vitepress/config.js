const base = process.env.BASE || '/'
export default {
  base: base,
  title: 'Nice UI',
  siteTitle: false,
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/install' },
      { text: '组件', link: '/components' },
    ],
    sidebar: {
      "/guide/": [
        {
          text: 'Guide',
          items: [
            { text: 'Index', link: '/guide/install' },
            { text: 'One', link: '/guide/one' }, 
            { text: 'Two', link: '/guide/two' } 
          ]
        }
      ],

    }
  }
}