<template>
  <div class="users-list__wrapper">
    <ul>
      <li v-for="item in users" :key="item.userId">
        <div @click="showUserTasks(item.tasks)">
          {{ item.name }}
        </div>
        <div @click="changeUserInfo(item.userId)">&#9998;</div>
      </li>
    </ul>
  </div>

  <ModalWindow v-show="isModalWindowOpen" v-on:closeModal="closeModal">
    <template v-slot:slotBody>
      <TasksList :tasks="usersTasks" />
    </template>
  </ModalWindow>

  <ModalWindow v-show="isEditWindowOpen" v-on:closeModal="closeModal">
    <template v-slot:slotBody>
      <UserChangeInfo />
    </template>
  </ModalWindow>
</template>

<script>
import ModalWindow from "../ModalWindow.vue";
import TasksList from "./TasksList.vue";
import UserChangeInfo from "./UserChangeInfo.vue";

export default {
  components: {
    ModalWindow,
    TasksList,
    UserChangeInfo,
  },
  data() {
    return {
      isModalWindowOpen: false,
      isEditWindowOpen: false,
      usersTasks: [],
      userInfo: {},
    };
  },

  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
  },

  methods: {
    closeModal() {
      this.isModalWindowOpen = false;
      this.isEditWindowOpen = false;
    },

    showUserTasks(tasks) {
      this.usersTasks = tasks;
      this.isModalWindowOpen = true;
    },

    changeUserInfo(userId) {
      this.$store.dispatch("setUserInfoToChange", userId);
      this.isEditWindowOpen = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.users-list__wrapper {
  display: flex;
  justify-content: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid lightgray;
  min-width: 200px;

  & > div {
    cursor: pointer;
  }
}
</style>
