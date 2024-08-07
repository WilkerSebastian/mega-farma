<template>

    <section class="bg-blue-mega container-sm white-mega f-k2d p-3 mt-4">

        <div class="d-flex flex-column flex-lg-row">

            <div class="flex-column mb-lg-0 mb-3">

                <h4 class="fs-"> Fale com a Mega Farma </h4>

                <h3> Conheça nossos telefones </h3>

            </div>

            <section class="d-flex w-50 mx-auto justify-content-between flex-column flex-lg-row">

                <Cardcontact icon="call" title="Televendas" content="1234-5678"/>
                <Cardcontact icon="support_agent" title="Televendas" content="9876-5432"  class="mx-lg-3"/>
                <Cardcontact icon="n" title="Televendas" content="(00)1234-3214"/>

            </section>

        </div>

        <p class="fs-6 text-lg-end">Os horários de atendimento são das 7h às 12h e das 14h as 22h de segunda à sabado e aos domingos das 7h as 18h</p>

    </section>

</template>

<script lang="ts">

import "@/assets/styles/colors.css"
import "@/assets/styles/fonts.css"
import Cardcontact from "./Cardcontact.vue";

export default {
    name: 'Contactblock',
    components: {
        Cardcontact
    }
}

</script>
