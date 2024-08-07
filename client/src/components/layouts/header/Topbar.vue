<template>

    <section class="d-flex">
        <router-link to="/sus" class="link-offset-2 link-underline link-underline-opacity-0 clickable">
            <Megafarmatitle/>
        </router-link>
        <form class="h-25 w-25 m-auto input-group rounded-pill border" role="search">
            <input class="form-control bg-trans border-0" id="search" name="search" type="search" placeholder="O que você está procurando?" aria-label="Search">
            <span class="material-symbols-outlined border-0 input-group-text bg-trans" for="search">
                search
            </span>
        </form>
        <div class="d-flex m-auto clickable">
            <Loginbutton />
        </div>
        <span class="material-symbols-outlined m-auto blue-mega fs-1 clickable">
            shopping_cart
        </span>
    </section>

</template>
<script lang="ts">
import "@/assets/styles/colors.css"
import Megafarmatitle from '../../Megafarmatitle.vue';
import Loginbutton from './Loginbutton.vue';

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
</style>