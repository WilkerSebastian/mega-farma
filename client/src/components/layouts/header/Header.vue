<template>

    <header class="container-fluid">

        <Topbar/>
        <Navbar/>

    </header>

</template>
<script lang="ts">

import Topbar from './Topbar.vue';
import Navbar from './Navbar.vue';

export default {
  name: 'Header',
  components: {
    Navbar,
    Topbar
  }
};
</script>