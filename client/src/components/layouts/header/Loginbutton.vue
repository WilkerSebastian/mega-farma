<template>


  <span class="material-symbols-outlined me-3 mt-2 blue-mega f-person">
    person
  </span>
  <div class="d-flex row">
    <p class="m-0 p-0 f-login">
      Bem vindo! <br>
      Faça seu login ou cadastro.
    </p>
  </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Loginbutton',
});
</script>
<style scoped>

  .f-person {

    font-size: 3vh;

  }

  .f-login {

    font-size: 1.1vh;

  }

</style>