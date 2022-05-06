const { defaultTheme } = require('@vuepress/theme-default')

const sidebarConf = require('./sidebar')
module.exports = {
    base:'/THR81/',
    lang: 'zh-CN',
    title: '考试必过',
    description: 'SAP SuccessFactors HXM 考试必过',
    plugins: [
        ["vuepress-plugin-auto-sidebar", { version:'v2', output: { filename: 'sidebar-auto' } }],
    ],
    theme: defaultTheme({
        navbar: [],
        sidebar: sidebarConf
    }),

}