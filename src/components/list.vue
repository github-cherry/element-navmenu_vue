<template>
  <vue-fragment>
    <template v-for="item in data">
      <el-menu-item
        v-if="item.children.length < 1"
        :key="item.menuId"
        :index="item.menuId+''"
        @click="goPage(item)"
      >
        <i :class="item.icon"></i>
        <span slot="title">{{ item.menuName }}</span>
      </el-menu-item>
      <el-submenu v-else :key="item.menuId" :index="item.menuId + ''">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.menuName }}</span>
        </template>
        <MenuList :data="item.children"></MenuList>
      </el-submenu>
    </template>
  </vue-fragment>
</template>

<script>
/**
 * @author        全易
 * @time          2021-04-26 08:48:57  星期一
 * @description   菜单栏列表
 */
import { Fragment } from 'vue-fragment'



export default {
  name: "MenuList",
  components: { 'vue-fragment': Fragment },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    // 跳转页面
    goPage(page) {
      // console.log(page);
      if (this.$route.path !== page.url) {
        this.$router.push(page.url);
      }
    },
  },
};
</script>

<style scoped>
.fa {
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  text-align: center;
}
</style>
