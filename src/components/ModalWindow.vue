<template>
  <div class="modal__fade">
    <div class="modal__wrapper">
      <div class="slot__wrapper">
        <slot name="slotBody"> </slot>
      </div>
      <button class="modal__btn" @click="closeModal">Close window</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",

  data() {
    return {};
  },

  props: {},

  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped>
.modal__fade {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal__wrapper {
  min-width: 400px;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal__btn {
  text-align: center;
  padding: 10px 15px;
  background-color: lightblue;
  border: none;
  border-radius: 10px;
  z-index: 101;
  cursor: pointer;
}
.slot__wrapper {
  margin-bottom: 15px;
}
</style>
