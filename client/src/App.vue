<template>
  <div id="app">
    
    <Header/>
    <main class="container-fluid main-container">
      <router-view/>
    </main>
    <Footer/>
    
  </div>
</template>

<script lang="ts">

import Header from './components/layouts/header/Header.vue';
import Footer from './components/layouts/footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>

.main-container {

  background: linear-gradient(180deg, var(--blue-mega) 0%, var(--white-mega) 13.9%);
  min-height: 70vmin;

}

</style>
