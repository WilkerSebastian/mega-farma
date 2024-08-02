<template>
  <div id="app">
    <nav>
      <router-view/>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
};
</script>
