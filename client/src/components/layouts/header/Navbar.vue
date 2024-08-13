<template>

    <nav class="navbar navbar-expand bg-white">
        <div class="container-lg">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle blue-mega d-flex border-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true"type="button"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                        <span class="material-symbols-outlined ">
                            Menu
                        </span>
                        Todas as categorias
                    </a>
                    <ul class="dropdown-menu">
                        <li v-for="categoria in categorias" :key="categoria.name" class="nav-item">
                            <RouterLink class="nav-link active" to="{{ categoria.url }}"> {{ categoria.name }} </RouterLink>
                        </li>
                    </ul>
                </li>
                <li v-for="categoria in categorias" :key="categoria.name" class="nav-item d-none d-lg-block">
                    <RouterLink class="nav-link active" to="{{ categoria.url }}"> {{ categoria.name }} </RouterLink>
                </li>
            </ul>
        </div>
    </nav>

</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import data_categorias from "@/assets/data/categorias.json";
import { RouterLink } from "vue-router";

type tcategoria = {
  name: string,
  url: string
}[]

export default defineComponent({
  name: 'Navbar',
  setup() {
    const categorias = ref<tcategoria>(data_categorias);

    return { categorias };
  }
});
</script>