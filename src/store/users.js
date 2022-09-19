export default {
  state: {
    users: [
      {
        userId: 1,
        name: "Joe Biden",
        email: "joe@wh.com",
        phone: "555-123456",
        tasks: [
          {
            taskId: 100,
            title: "Improve country's leadership",
            isCompleted: false,
          },
          {
            taskId: 101,
            title: "Make America great again",
            isCompleted: false,
          },
          {
            taskId: 102,
            title: "Make American's dream true",
            isCompleted: false,
          },
        ],
      },
      {
        userId: 2,
        name: "Владимир Зеленский",
        email: "vladimir@gov.ua",
        phone: "123-123456",
        tasks: [
          {
            taskId: 200,
            title: "Победить",
            isCompleted: false,
          },
          {
            taskId: 201,
            title: "Восстановить инфраструктуру",
            isCompleted: false,
          },
          {
            taskId: 202,
            title: "Интеграция с Евросоюзом",
            isCompleted: false,
          },
        ],
      },
      {
        userId: 3,
        name: "Владимир Путин",
        email: "vv@kremlin.ru",
        phone: "7",
        tasks: [
          {
            taskId: 300,
            title: "Досидеть до 2024 года",
            isCompleted: false,
          },
          {
            taskId: 301,
            title: "Возродить СССР",
            isCompleted: false,
          },
          {
            taskId: 302,
            title: "Отремонтировать дворец",
            isCompleted: false,
          },
        ],
      },
    ],
    userInfoToChange: {},
  },

  actions: {
    toggleTaskStatus(context, taskId) {
      context.commit("toggleTaskStatus", taskId);
    },

    setUserInfoToChange(context, userId) {
      context.commit("setUserInfoToChange", userId);
    },

    updateUserInfo(context, payload) {
      context.commit("updateUserInfo", payload);
    },
  },

  mutations: {
    setUserInfoToChange(state, userId) {
      state.userInfoToChange = state.users.filter(
        (item) => item.userId === userId
      )[0];
    },

    toggleTaskStatus(state, taskId) {
      state.users.forEach((element) => {
        element.tasks.map((item) => {
          item.isCompleted =
            item.taskId === taskId ? !item.isCompleted : item.isCompleted;
          return item;
        });
      });
    },

    updateUserInfo(state, payload) {
      console.log(payload);
      const { userId, name, email, phone } = payload;
      state.userInfoToChange.name = name;
      state.userInfoToChange.email = email;
      state.userInfoToChange.phone = phone;
      state.users.map((element) => {
        if (element.userId === userId) {
          return state.userInfoToChange;
        } else return element;
      });
    },
  },

  modules: {},
  getters: {
    getUsers(state) {
      return state.users;
    },

    getUserInfoToChange(state) {
      return state.userInfoToChange;
    },
  },
};
