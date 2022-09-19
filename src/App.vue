<template>
  <div id="nav">
    <router-link to="/users">Users</router-link>
    <router-link to="/payments">Payments</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      isModalWindowOpen: false,
    };
  },

  methods: {
    showModal() {
      this.isModalWindowOpen = true;
    },

    closeModal() {
      this.isModalWindowOpen = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 10px 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
