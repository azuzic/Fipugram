<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="jumbotron">
      <h1 class="display-4"></h1>
      <br />
      <p class="lead">Hello, there!</p>
      <hr class="my-4" />
      <p>General Jumbotron!</p>
      <br />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
