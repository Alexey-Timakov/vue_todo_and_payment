<template>
  <h2>Payments List</h2>
  <PaymentsList />
</template>

<script>
import {} from "../components/Payments/PaymentsList.vue";
import PaymentsList from "../components/Payments/PaymentsList.vue";
export default {
  name: "PaymentsView",
  components: { PaymentsList },
};
</script>
