<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
      <div class="container-fluid p-2 mb-4 stories">
        <story />
        <story />
        <story />
        <story />
        <story />
        <story />
        <story />
        <story />
        <story />
        <story />
      </div>
      <div class="container-fluid p-0"><fipugram-card /><fipugram-card /></div>
    </div>
    <div class="col-3">
      <p class="text-start float-start text-secondary">Suggestions for you</p>
      <p
        class="
          text-end
          float-end
          pe-3-----------------------------------------------------------------------------
        "
      >
        <b>See All</b>
      </p>
      <br />
      <suggestion />
      <suggestion />
      <suggestion />
      <suggestion />
      <suggestion />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import fipugramCard from "@/components/fipugramCard.vue";
import story from "../components/story.vue";
import suggestion from "../components/suggestion.vue";

export default {
  name: "home",
  components: {
    fipugramCard,
    story,
    suggestion,
  },
};
</script>
, Suggestion

<style scoped>
.stories {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 4px;
  margin-left: 0px;
  white-space: nowrap;
  position: relative;
  overflow-x: hidden scroll;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.03);
}

.stories div {
  float: none;
  margin: 0 0.25%;
  display: inline-block;
  zoom: 1;
}
</style>
