# element-navmenu_vue
基于vue框架elemntUI组件库二次封装的无限下级递归[菜单栏](https://blog.csdn.net/qq_42618566/article/details/131323673)











**安装：**

```
npm install element-navmenu_vue
```

**引入：**

```javascript
import NavMenu from 'element-navmenu_vue'
```


**注册：**

```javascript
Vue.use(NavMenu)
```

**使用：**

```html
<nav-menu :data="$store.state.permissionMenu" :collapse="$store.state.isCollapse" :default-active="$store.state.nowPage" />
```

- 参数**data**说明：

​       格式：[{},{},{}...]

​       必传字段： menuName、menuId、icon、url、children。例如：

```json
[
    {
        "createBy":"quanyi",
        "createTime":"2023-05-12 15:41:18",
        "remark":"my/info",
        "menuId":1488,
        "menuName":"我的资料",
        "parentId":0,
        "orderNum":"0",
        "url":"/my/info",
        "menuType":"F",
        "visible":"0",
        "perms":"my/info",
        "icon":"",
        "menuIdStr":"1488",
        "children":[

        ]
    },
    {
        "createBy":"admin",
        "createTime":"2022-07-18 16:16:52",
        "remark":"test",
        "menuId":1489,
        "menuName":"测试页面",
        "parentId":0,
        "orderNum":"0",
        "url":"/test",
        "menuType":"F",
        "visible":"0",
        "perms":"test-page",
        "icon":"fa fa-bandcamp",
        "menuIdStr":"1489",
        "children":[

        ]
    }
]
```



- 其他Props: 同[elementUI](https://element.eleme.cn/#/zh-CN/component/menu#menu-attribute)

- Event :同[elementUI](https://element.eleme.cn/#/zh-CN/component/menu#menu-events)













