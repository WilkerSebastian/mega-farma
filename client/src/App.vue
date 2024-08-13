<template>
  <div id="app">
    
    <Header/>
    <main :class="specificPath">
      <router-view/>
    </main>
    <Footer/>
    
  </div>
</template>

<script lang="ts">

import { watch, computed } from "vue"
import { useRoute } from 'vue-router';
import Header from './components/layouts/header/Header.vue';
import Footer from './components/layouts/footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    const route = useRoute();

    const specificPath = computed(() => {

      if (route.path === '/') 
        return 'container-fluid main-container bg-gradiant-mega';
     
      return 'container-fluid main-container';

    });

    watch(route, (newRoute) => {});

    return {
      specificPath,
    };
  },
}
</script>

<style scoped>

.main-container {

  min-height: 70vmin;

}

.bg-gradiant-mega {

  background: linear-gradient(180deg, var(--blue-mega) 0%, var(--white-mega) 13.9%);

}

</style>
