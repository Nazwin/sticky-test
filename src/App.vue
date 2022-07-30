<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import LayoutMain from '@/layouts/main/LayoutMain.vue'
import LayoutEmpty from '@/layouts/empty/LayoutEmpty.vue'

export default {
  name: 'App',
  components: {
    LayoutMain, LayoutEmpty
  },
  data() {
    return {
      toJSON: ''
    }
  },
  mounted() {
    const theme = localStorage.getItem('Sticky-Theme');
    if(!theme){
      document.body.classList.toggle('theme-light');
    } else {
      document.body.classList.toggle(theme);
    }
    
  },
  computed: {
    layout() {
      if (this.$route.meta.layout === 'main') return 'layout-main'
      return 'layout-empty'
    },
  }
}
</script>

<style>
@import "assets/styles/bootstrap.css";
@import "assets/styles/style.css";
@import "assets/fonts/css/fontawesome-all.min.css";

</style>
