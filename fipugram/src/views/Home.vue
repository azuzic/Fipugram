<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-5">
      <fipugram-card />
    </div>
    <div class="col-4">... ovdje ide desni stupac!</div>
  </div>
</template>

<script>
// @ is an alias to /src
import fipugramCard from "@/components/fipugramCard.vue";

export default {
  name: "home",
  components: {
    fipugramCard,
  },
};
</script>
