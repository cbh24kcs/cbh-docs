module.exports = {
  title: "陈炳翰的笔记",
  description: "好好学习,天天向上",

  // 主题配置
  themeConfig: {
    // nav: false,
    nav: [
      { text: '百度', link: 'http://www.baidu.com' },
      { text: 'Github', link: 'https://github.com/cbh24kcs' }
    ],

    // sidebar: 'auto'
    sidebar: [
      {
        title: 'HTML',
        children: [
          '/html/',
        ]
      },
      {
        title: 'CSS',
        children: [
          '/css/',
          '/css/定位',
          '/css/Flex布局',
        ]
      },
      {
        title: 'JavaScript',
        children: [
          '/javascript/'
        ]
      },
      {
        title: 'jQuery',
        children: ['/jquery/']
      },
      {
        title: 'Vue',
        children: [
          '/vue/'
        ]
      }
    ]
  }

};
