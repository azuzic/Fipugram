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
      <div class="container-fluid p-0">
        <fipugram-card
          v-for="card in filteredCards"
          :key="card.url"
          :info="card"
        />
      </div>
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
import { computed } from "@vue/reactivity";
import store from "@/store.js";

let hello = "world";
let cards = [];

cards = [
  {
    url: "https://picsum.photos/801",
    description: "slika1",
    time: "few min ago",
  },
  {
    url: "https://picsum.photos/802",
    description: "slika2",
    time: "hour ago",
  },
  {
    url: "https://picsum.photos/803",
    description: "slika3",
    time: "few hours ago",
  },
];

export default {
  name: "home",
  data: function () {
    return {
      cards,
      store,
    };
  },
  computed: {
    filteredCards() {
      let termin = this.store.searchTerm;

      return this.cards.filter((card) => card.description.includes(termin));
    },
  },
  components: {
    fipugramCard,
    story,
    suggestion,
  },
};
</script>

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
