<template>
  <div id="app">
    
    <Header/>
    <main>
      <router-view/>
    </main>
    <Footer/>
    
  </div>
</template>

<script lang="ts">

import Header from './components/layouts/header/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>
