<template>
  <div class="task-list__wrapper">
    <ul>
      <li
        v-for="item in tasks"
        :key="item.userId"
        @dblclick="toggleTaskStatus(item.taskId)"
      >
        <div class="task-list__title" :class="{ completed: item.isCompleted }">
          {{ item.title }}
        </div>
        <div class="task-list__status" :class="{ completed: item.isCompleted }">
          {{ item.isCompleted ? "&#10003;" : "&#10007;" }}
        </div>
      </li>
    </ul>
    <p class="task-list__tooltip">*Double click to change status*</p>
  </div>
</template>

<script>
export default {
  props: {
    tasks: Array,
  },
  methods: {
    toggleTaskStatus(taskID) {
      this.$store.dispatch("toggleTaskStatus", taskID);
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  border-bottom: 1px solid lightgray;
  min-width: 250px;
  cursor: pointer;
}
.task-list__ {
  &status {
    margin-left: auto;
  }
  &title {
    color: lightcoral;
    &.completed {
      text-decoration: line-through;
      color: lightgray;
    }
  }

  &status {
    color: red;
    &.completed {
      color: green;
    }
  }

  &tooltip {
    color: grey;
    font-size: 12px;
  }
}
</style>
