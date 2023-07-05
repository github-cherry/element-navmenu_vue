import NavMenu from "./components/index.vue";


export default {
  install(Vue) {
    Vue.component("nav-menu", NavMenu);
  }
}


export { NavMenu };