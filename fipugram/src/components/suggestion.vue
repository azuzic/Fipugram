<template>
  <div class="container-fluid m-0 p-0">
    <div class="container float-start m-0 p-0">
      <img
        class="rounded-circle p-1 m-1 float-start"
        src="https://picsum.photos/300"
        alt=""
        width="60"
      />

      <div class="float-start text-start pt-2 m-0 p-0">
        <span><b>Username</b></span>
        <br />
        <span class="text-secondary text-small">Follows you</span>
      </div>

      <button class="btn float-end p-3 m-0">
        <a class="text-small" href=""><b>Follow</b></a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "suggestion",
};
</script>

<style lang="scss">
.text-small {
  font-size: 12px;
}
</style>
