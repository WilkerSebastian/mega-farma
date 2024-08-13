<template>

    <section class="p-3 shadow w-card-form mx-auto my-5">

        <h1 class="blue-mega text-center">Faça seu login</h1>

        <form class="d-flex flex-column ">
            <div class="mb-3 w-100 mx-auto">
                <label for="email" class="form-label blue-mega">E-mail</label>
                <input type="email" class="form-control" id="email" placeholder="fulano@gmail.com">
            </div>
            <div class="mb-3 w-100 mx-auto">
                <label for="password" class="form-label blue-mega">Senha</label>
                <input type="password" class="form-control" id="password">
            </div>
            <RouterLink to="/" class="fs-6 text-end text-secondary text-decoration-none">esqueceu sua senha?</RouterLink>
            <button type="submit" class="border-0 rounded p-2 bg-blue-mega white-mega w-50 mx-auto my-3">Continuar</button>
        
            <span class="text-secondary text-center"> 
                Não tem uma conta?  
                <RouterLink to="/register" class="text-secondary">
                    Registre-se
                </RouterLink>
            </span>
        
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