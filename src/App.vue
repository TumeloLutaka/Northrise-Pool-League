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
  },
  mounted(){
    // this.$store.dispatch("FetchPlayers");
  }
}
</script>

<style>
:root{
    --line-height:45px;

    --header-height: 80px;

    /* Colors */
    --col-green-nu:#8bab5c;
    --col-orange-nu:#e98824;
    --col-grey-header:#2b2b2b;
    --col-grey-text:#777;
    --col-grey-background:#f3f3f3;
    --col-white-main:#fff;

    color: var(--col-grey-text);
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

