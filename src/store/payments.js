export default {
  state: {
    payments: [
      {
        paymentId: 1,
        paymentTime: "10:03:05",
        paymentDate: "12.01.2022",
        amount: 5100,
        isConfirmed: true,
      },
      {
        paymentId: 2,
        paymentTime: "10:30:45",
        paymentDate: "12.01.2022",
        amount: 100,
        isConfirmed: true,
      },
      {
        paymentId: 3,
        paymentTime: "10:37:40",
        paymentDate: "12.01.2022",
        amount: 1200,
        isConfirmed: true,
      },
      {
        paymentId: 4,
        paymentTime: "11:13:45",
        paymentDate: "12.01.2022",
        amount: 1020,
        isConfirmed: false,
      },
      {
        paymentId: 5,
        paymentTime: "11:30:45",
        paymentDate: "12.01.2022",
        amount: 1070,
        isConfirmed: false,
      },
    ],
  },

  actions: {},

  mutations: {},

  modules: {},
  getters: {
    getPayments(state) {
      return state.payments;
    },
  },
};
