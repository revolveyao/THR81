const { defaultTheme } = require('@vuepress/theme-default')

const sidebarConf = require('./sidebar')
module.exports = {
    lang: 'zh-CN',
    title: '考试必过',
    description: 'SAP SuccessFactors HXM 考试必过',
    plugins: [
        ["vuepress-plugin-auto-sidebar", { version:'v2', output: { filename: 'sidebar-auto' } }],
    ],
    theme: defaultTheme({
        navbar: false,
        sidebar: sidebarConf
    }),

}