<template>
  <div class="card mb-4">
    <div class="card-header">
      <div>
        <img
          class="float-start rounded-circle"
          src="https://picsum.photos/400"
          alt=""
          width="30"
        />
      </div>
      <a href=""
        ><img class="float-end" src="@/assets/dots.png" alt="" width="30"
      /></a>

      <div class="text-start p-1"><b>&nbsp&nbspUsername</b></div>
      <br />
      <p class="p-0 m-0 pb-2">{{ info.description }}</p>
    </div>
    <div class="card-body p-0">
      <img class="card-img-top" :src="info.url" alt="" />
    </div>
    <div class="card-footer text-muted p-2 m-0 row">
      <div class="container-fluid p-0 col-12">
        <img class="float-start m-2" src="@/assets/heart.png" width="30" />
        <img
          class="float-start m-2"
          src="@/assets/bubble-chat.png"
          width="30"
        />
        <img class="float-start m-2" src="@/assets/send.png" width="30" />
        <img
          class="float-end m-2"
          src="@/assets/save-instagram.png"
          width="30"
        />
      </div>
      <hr />
      <div class="container-fluid p-2 col-12">
        <form class="form-inline my-2 my-lg-2 d-flex">
          <img class="float-start m-2" src="@/assets/smile.png" width="25" />
          <input
            class="form-control me-2 c-comment"
            type="search"
            placeholder="Add a comment..."
            aria-label="Search"
          />
          <button class="btn c-btn" type="submit"><b>Post</b></button>
        </form>
      </div>
      <p class="text-small">{{ info.time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  name: "fipugramCard",
};
</script>

<style lang="scss">
.c-btn {
  color: rgb(138, 180, 207);
}
.c-comment {
  background-color: transparent !important;
  border: none;
}
.text-small {
  font-size: 12px;
}
</style>
