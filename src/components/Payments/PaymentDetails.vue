<template>
  <div class="payment-list__wrapper">
    <div>ID: {{ details.paymentId }}</div>
    <div>Date: {{ details.paymentDate }}</div>
    <div>Time: {{ details.paymentTime }}</div>
    <div>Amount: {{ details.amount }}</div>
    <div>Status: {{ details.isConfirmed }}</div>
  </div>
</template>

<script>
export default {
  props: {
    details: Object,
  },
};
</script>

<style lang="scss" scoped>
.payment-list__ {
  &wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 300px;

    & > div {
      padding: 5px 15px;
    }
  }
}
</style>
