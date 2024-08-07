<template>

    <section>

        <h3 class="red-mega"> {{ title }} </h3>

        <ul class="blue-mega">
            <li v-for="topic in topics" :key="topic as string"> {{ topic }} </li>
        </ul>

    </section>

</template>

<script lang="ts">
import "@/assets/styles/colors.css"

export default {
    name: "Listext",
    props: {
        title: {
            type: String,
            required: true
        },
        topics: {
            type: Array<String>,
            required: true
        }
    }
}

</script>