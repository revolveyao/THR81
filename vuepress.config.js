const { defaultTheme } = require('@vuepress/theme-default')

const sidebarConf = require('./sidebar')
module.exports = {
    base:'/THR81/',
    lang: 'zh-CN',
    title: '学习手册',
    description: 'SAP SuccessFactors HXM 学习手册',
    plugins: [
        ["vuepress-plugin-auto-sidebar", { version:'v2', output: { filename: 'sidebar-auto' } }],
    ],
    theme: defaultTheme({
        navbar: [],
        sidebar: sidebarConf,
        sidebarDepth:1
    }),

}