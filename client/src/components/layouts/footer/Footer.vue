<template>

    <footer class="container-fluid container-footer">

        <div class="d-flex flex-column justify-content-between py-5 w-75 h-75 mx-auto border-bottom border-3 border-dark">

            <Megafarmatitle class="m-0 text-cetner"/>
            <Contactblock/>

            <div class="d-flex mt-4 align-items-lg-center flex-lg-row flex-column justify-content-evenly">

                <div class="d-flex">

                    <Listext :title="duvidas.title" :topics="duvidas.topics"/>
                    <Listext :title="institucional.title" :topics="institucional.topics" class="ms-3"/>

                </div>
                <div class="flex-lg-column flex-row mx-auto m-lg-0 w-images-block">

                    <h5 class="red-mega"> Redes Sociais </h5>
                    <ul class="d-flex justify-content-evenly">
                        <img v-for="social in social_list" :key="social as string" :src="getImage(social)" class="img-icon"></img>
                    </ul>

                    <h5 class="red-mega"> Formas de pagamento </h5>
                    <ul class="d-flex justify-content-center">
                        <img v-for="payment in payments_list" :key="payment as string" :src="getImage(payment)" class="img-icon mx-2"></img>
                        <img src="@/assets/img/nupay.png" id="nupay-image">
                    </ul>

                </div>

            </div>

        </div>

        <p class="text-center text-dark m-0 py-3 pt-5"> © Copyright 2024 - Todos Direitos Reservados. Mega Farma. CNPJ: 12.123.123/0000-00. Rua Oi. Tudo bem, 0000. Centro </p>

    </footer>

</template>

<script lang="ts"> 

import { ref } from 'vue';
import Megafarmatitle from '@/components/Megafarmatitle.vue';
import Contactblock from './Contactblock.vue';
import Listext from './Listext.vue';
import duvidas_json from "@/assets/data/duvidas.json"
import institucional_json from "@/assets/data/institucional.json"
import { payments, social } from "@/assets/data/images.json"

interface topic {
    title: string,
    topics: string[]
}

export default {
    name: 'Footer',
    components: {
        Megafarmatitle,
        Contactblock,
        Listext
    },
    setup: () => {

        const duvidas = ref<topic>(duvidas_json);
        const institucional = ref<topic>(institucional_json);
        const payments_list = ref<string[]>(payments);
        const social_list = ref<string[]>(social);

        return { duvidas, institucional, payments_list, social_list };

    },
    methods: {
        getImage(image:string) {
            return new URL(`../../../assets/img/${image}`, import.meta.url).href
        }
    }
}

</script>

<style scoped>

.container-footer {

    border: 0;
    border-top: 10vh;
    border-style: solid;
    border-color: var(--blue-dark-mega);
    background: linear-gradient(0deg , var(--blue-mega) 0%, var(--white-mega) 13.9%);

}
 
.img-icon {

    height: auto;
    width: 20%;
    object-fit: cover;
    object-position: bottom;

}

#nupay-image {

    height: auto;
    width: 35%;

}

.w-images-block {

    width: 80%;

}

@media (min-width: 992px) {

    .w-images-block {

        width: 25%;

    }

}

</style>