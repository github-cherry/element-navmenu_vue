# element-navmenu_vue
基于vue框架elemntUI组件库二次封装的无限下级递归[菜单栏](https://blog.csdn.net/qq_42618566/article/details/131323673)











**安装：**

```
npm install element-navmenu_vue
```

**引入：**

```javascript
import NavMenu from 'element-navmenu_vue'
或者
import {NavMenu} from 'element-navmenu_vue'
```


**注册：**

```javascript
Vue.use(NavMenu)
或者
.vue文件处     components:{NavMenu}
```

**使用：**

```html
<nav-menu :data="$store.state.permissionMenu" :collapse="$store.state.isCollapse" :default-active="$store.state.nowPage" />
```

- 参数**data**说明：

​       格式：`[{},{},{}...]` ， `{}`中必含字段(就是字段可以没值，但要有字段存在)：

​       **menuName**、**menuId**、**children**

  例如：

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
        "children":[]
    },
    {
        "createBy":"admin",
        "createTime":"2022-07-18 16:16:52",
        "remark":"test",
        "menuId":1489,
        "menuName":"测试页面",
        "parentId":0,
        "orderNum":"0",
        "url":"",
        "menuType":"M",
        "visible":"0",
        "perms":"test-page",
        "icon":"fa fa-bandcamp",
        "children":[
          {
            "createBy":"admin",
            "createTime":"2022-07-18 16:16:52",
            "remark":"test",
            "menuId":14890,
            "menuName":"测试页面1",
            "parentId":1489,
            "orderNum":"0",
            "url":"/test1",
            "menuType":"F",
            "visible":"0",
            "perms":"test-page",
            "icon":"fa fa-bandcamp",
            "children":[]
          },
          {
            "createBy":"admin",
            "createTime":"2022-07-18 16:16:52",
            "remark":"test",
            "menuId":14891,
            "menuName":"测试页面2",
            "parentId":1489,
            "orderNum":"0",
            "url":"/test2",
            "menuType":"F",
            "visible":"0",
            "perms":"test-page",
            "icon":"fa fa-bandcamp",
            "children":[]
          }
        ]
    }
]
```





- 其他Props: 同[elementUI](https://element.eleme.cn/#/zh-CN/component/menu#menu-attribute)

- Event :同[elementUI](https://element.eleme.cn/#/zh-CN/component/menu#menu-events)





[更多问题https://ask.csdn.net/questions/7970423](https://ask.csdn.net/questions/7970423)







