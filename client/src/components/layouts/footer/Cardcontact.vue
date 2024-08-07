<template>

  <div class="d-block">
    <div class="d-flex align-items-center">
        <span :class="iconClass">
          {{ icon }}
        </span>

        {{ title }}
    </div>
    <p class="text-center mt-3">  
        {{ content }}
    </p>
  </div>

</template>

<script lang="ts">

export default {
  name: 'Cardcontact',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  computed:{
    iconClass() {

      if (this.icon != "n") {

        return "material-symbols-outlined fs-3 me-1";

      }

      return "f-icons fs-4 me-1"

    }
  }
}

</script>