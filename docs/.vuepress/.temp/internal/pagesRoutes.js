import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"考试必过啊"},["/index.html","/README.md"]],
  ["v-4c5dbe0a","/unit1/Lesson1.html",{"title":"Getting Started with SAP SuccessFactors HXM"},["/unit1/Lesson1","/unit1/Lesson1.md"]],
  ["v-48f40ccc","/unit1/Lesson2.html",{"title":"配置 SuccessFactors: Instance and Provisioning Access Management"},["/unit1/Lesson2","/unit1/Lesson2.md"]],
  ["v-d0f8ba4a","/unit1/",{"title":"单元1 SAP SuccessFactors HXM - Systems"},["/unit1/index.html","/unit1/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
