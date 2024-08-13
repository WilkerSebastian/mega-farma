<template>

    <section class="d-flex flex-lg-row flex-column">
        <RouterLink to="/" class="link-offset-2 link-underline link-underline-opacity-0 clickable d-flex justify-content-center justify-content-lg-start">
            <Megafarmatitle/>
        </RouterLink>
        <div class="d-flex flex-column-reverse align-items-center justify-content-evenly flex-lg-row w-100">

            <form class="w-search input-group rounded-pill border mt-lg-0 mt-3" role="search">
                <input class="form-control bg-trans border-0" id="search" name="search" type="search" placeholder="O que você está procurando?" aria-label="Search">
                <span class="material-symbols-outlined border-0 input-group-text blue-mega bg-trans" for="search">
                    search
                </span>
            </form>
            <div class="d-flex w-login">
                <Loginbutton />
                <span class="material-symbols-outlined m-auto mx-lg-auto blue-mega fs-1 clickable">
                    shopping_cart
                </span>
            </div>

        </div>
    </section>

</template>
<script lang="ts">
import "@/assets/styles/colors.css"
import Megafarmatitle from '../../Megafarmatitle.vue';
import Loginbutton from './Loginbutton.vue';
import { RouterLink } from "vue-router";

export default {
    name: "Topbar",
    components: {
        Megafarmatitle,
        Loginbutton
    }
}
</script>
<style scoped>

.clickable {
    cursor: pointer;
}

.clickable:hover {
    scale: 1.1;
}

.bg-trans {

    background-color: rgba(240, 248, 255, 0) !important;

}

.w-search {

    width: 100%

}

.w-login {

    width: 100%

}

@media (min-width: 992px) {

    .w-search {
    
        width: 30%
    
    }

    .w-login {

        width: 50%

    }

}

</style>