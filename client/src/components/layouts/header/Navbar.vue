<template>

    <nav class="navbar navbar-expand-lg bg-white">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle blue-mega d-flex" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="material-symbols-outlined ">
                                Menu
                            </span>
                            Todas as categorias
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="categoria in categorias" :key="categoria.name" class="nav-item">
                                <router-link class="nav-link active" to="{{ categoria.url }}"> {{ categoria.name }} </router-link>
                            </li>
                        </ul>
                    </li>
                    <li v-for="categoria in categorias" :key="categoria.name" class="nav-item">
                        <router-link class="nav-link active" to="{{ categoria.url }}"> {{ categoria.name }} </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import data_categorias from "@/assets/data/categorias.json";

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