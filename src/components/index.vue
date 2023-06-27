<template>
  <el-menu :unique-opened="uniqueOpened" :collapse="collapse" :default-active="defaultActive"
    :background-color="backgroundColor" :text-color="textColor" :active-text-color="activeTextColor" @open="open"
    @close="close">
    <MenuList :data="data"></MenuList>
  </el-menu>
</template>

<script>
/**
 * @author        全易
 * @time          2020-10-05 16:38:30  星期一
 * @description   菜单栏
 */
import MenuList from "./list.vue";

export default {
  name: "MenuIndex",
  components: {
    MenuList,
  },
  props: {
    data: {
      type: Array,
      required: true,
      // validator: function (value) {
      //   // 必传字段
      //   const requireds = ["menuName", "menuId", "icon", "url", "children"];
      //   for (let item of value) {
      //     for (let key of requireds) {
      //       if (Object.keys(item).includes(key)) {
      //         console.log(item[key]);
      //         if(item[key] instanceof ""){
      //           console.log("111");
      //         }
      //       } else {
      //         throw "错误"
      //       }
      //     }
      //   }
      // }
    },
    uniqueOpened: {
      type: Boolean
    },
    collapse: {
      type: Boolean
    },
    defaultActive: {
      type: String
    },
    backgroundColor: {
      type: String,
    },
    textColor: {
      type: String
    },
    activeTextColor: {
      type: String
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    open() {
      this.$emit("open");
    }
  }
};
</script>

<style scoped></style>
