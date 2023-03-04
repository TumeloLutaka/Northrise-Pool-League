<template>
  <comp-header></comp-header>

  <div>
    <router-view></router-view>
  </div>
  <comp-footer></comp-footer>  
</template>

<script>
import Header from './components/header-footer/Header.vue'
import Footer from './components/header-footer/footer.vue';

export default {
  name: 'App',
  components: {
    'comp-header':Header,
    'comp-footer':Footer
  }
}
</script>

<style>
:root{
    --header-height: 80px;
}

*{
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;
}

comp-header{
  background-color: rebeccapurple;
}
</style>

