<template>
  <h2>Users List</h2>
  <UsersList />
</template>

<script>
import UsersList from "../components/Users/UsersList.vue";

export default {
  name: "UsersView",
  components: {
    UsersList,
  },
  data() {
    return {};
  },
};
</script>
