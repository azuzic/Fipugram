<template>
  <div id="app" class="mb-4 sticky-top">
    <nav
      id="nav"
      class="navbar navbar-expand-lg navbar-light bg-light m-0 p-0 pb-4 pt-3"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <router-link to="/home">
            <img
              src="@/assets/fipugram_logo.png"
              alt=""
              height="40"
              class="d-inline-block align-text-top"
            />
          </router-link>
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
            <router-link to="/home" class="nav-item p-1"> Home</router-link>
            <router-link
              v-if="!store.currentUser"
              to="/login"
              class="nav-item p-1"
            >
              Login
            </router-link>
            <router-link
              v-if="!store.currentUser"
              to="/singup"
              class="nav-item p-1"
            >
              Sing up
            </router-link>
            <a
              href="#"
              v-if="store.currentUser"
              @click="logout()"
              class="nav-item p-1"
            >
              Log out
            </a>
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
import { firebase } from "@/firebase";

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("Logiran korisnik: " + user.email);
    store.currentUser = user.email;
  } else {
    console.log("No user...");
    store.currentUser = null;
  }
});

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Uspješno odjavljen: ");
          this.$router.push({ name: "Login" });
        });
    },
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
