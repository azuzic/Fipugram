<template>
  <div id="app" class="mb-4 sticky-top">
    <nav
      id="nav"
      class="navbar navbar-expand-lg navbar-light bg-light m-0 p-0 pb-4 pt-3"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="@/assets/fipugram_logo.png"
            alt=""
            height="40"
            class="d-inline-block align-text-top"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <router-link to="/" class="nav-item p-1"> Home</router-link>
            <router-link to="/login" class="nav-item p-1"> Login </router-link>
            <router-link to="/singup" class="nav-item p-1">
              Singup
            </router-link>
          </ul>
          <form class="form-inline my-2 my-lg-2 d-flex">
            <input
              v-model="store.searchTerm"
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>

  <router-view />
</template>

<script>
import store from "@/store.js";

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  border: 1px solid rgba(0, 0, 0, 0.125);

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
