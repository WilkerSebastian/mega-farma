<template>

    <section class="p-3 shadow w-card-form mx-auto my-5">

        <h1 class="blue-mega text-center">Faça seu login</h1>

        <form class="row g-3">
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4">
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword4">
            </div>
        </form>

    </section>

</template>

<script lang="ts">

import "@/assets/styles/colors.css"
import { RouterLink } from "vue-router";

export default {
    name: 'Login',
    components: {
        RouterLink
    }
}

</script>

<style scoped>

.w-card-form {
    width: 100%;
}

@media (min-width: 992px) {

    .w-card-form {
        width: 35%;
    }

}

</style>