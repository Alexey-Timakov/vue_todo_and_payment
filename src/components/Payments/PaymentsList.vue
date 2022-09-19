<template>
  <div class="payments-list__wrapper">
    <ul>
      <li
        v-for="item in payments"
        :key="item.paymentId"
        @click="showPaymentDetails(item)"
      >
        {{ item.paymentId }} / {{ item.amount }}$
      </li>
    </ul>
  </div>
  <ModalWindow v-show="isModalWindowOpen" v-on:closeModal="closeModal">
    <template v-slot:slotBody>
      <PaymentDetails :details="paymentDetails" />
    </template>
  </ModalWindow>
</template>

<script>
import ModalWindow from "../ModalWindow.vue";
import PaymentDetails from "./PaymentDetails.vue";

export default {
  components: {
    ModalWindow,
    PaymentDetails,
  },
  data() {
    return {
      isModalWindowOpen: false,
      paymentDetails: {},
    };
  },

  computed: {
    payments() {
      return this.$store.getters.getPayments;
    },
  },

  methods: {
    showPaymentDetails(details) {
      this.showModal();
      this.paymentDetails = details;
    },

    showModal() {
      this.isModalWindowOpen = true;
    },

    closeModal() {
      this.isModalWindowOpen = false;
    },
  },
};
</script>

<style scoped>
.payments-list__wrapper {
  display: flex;
  justify-content: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  padding: 10px 20px;
  border-bottom: 1px solid lightgray;
  min-width: 150px;
  cursor: pointer;
}
</style>
