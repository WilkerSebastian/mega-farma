<template>

  <router-link to="/login" class="d-flex clickable link-offset-2 link-underline link-underline-opacity-0 text-dark">

    <span class="material-symbols-outlined me-3 mt-2 blue-mega fs-1">
      person
    </span>
    <div class="d-flex row">
      <p class="m-0 p-0 fs-6">
        Bem vindo! <br>
        Faça seu login ou cadastro.
      </p>
    </div>

  </router-link>

</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Loginbutton',
});
</script>