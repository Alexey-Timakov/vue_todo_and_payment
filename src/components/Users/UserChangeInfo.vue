<template>
  <div class="user-info__wrapper">
    <div class="user-info__input">
      <label for="userName">Имя:</label>
      <input
        type="text"
        name="userName"
        id="userName"
        v-model="userName"
        :class="{ 'name-error': isNameError }"
      />
    </div>
    <div class="user-info__input">
      <label for="userMail">email:</label>
      <input
        type="email"
        name="userMail"
        id="userMail"
        v-model="userMail"
        :class="{ 'email-error': isEmailError }"
      />
    </div>
    <div class="user-info__input">
      <label for="userPhone">Phone:</label>
      <input
        type="text"
        name="userPhone"
        id="userPhone"
        v-model="userPhone"
        :class="{ 'phone-error': isPhoneError }"
      />
    </div>
  </div>
  <button @click="updateUserInfo()">Update information</button>
</template>

<script>
export default {
  data() {
    return {
      isNameError: false,
      isEmailError: false,
      isPhoneError: false,
      userName: null,
      userMail: null,
      userPhone: null,
    };
  },

  watch: {
    userInfo(newI) {
      this.userName = newI.name;
      this.userMail = newI.email;
      this.userPhone = newI.phone;
    },
  },

  computed: {
    userInfo() {
      return this.$store.getters.getUserInfoToChange;
    },
  },

  methods: {
    validateName() {
      if (this.userName && !/[^a-zA-Zа-яА-Я ]/.test(this.userName)) {
        this.isNameError = false;
        return true;
      } else {
        this.isNameError = true;
        return false;
      }
    },

    validatePhone() {
      if (this.userPhone && !/[^0-9]/.test(this.userPhone)) {
        this.isPhoneError = false;
        return true;
      } else {
        this.isPhoneError = true;
        return false;
      }
    },

    validateMail() {
      if (
        this.userMail &&
        this.userMail
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        this.isEmailError = false;
        return true;
      } else {
        this.isEmailError = true;
        return false;
      }
    },

    updateUserInfo() {
      this.validateName();
      this.validatePhone();
      this.validateMail();
      if (!this.isNameError && !this.isPhoneError && !this.isEmailError) {
        const payload = {
          userId: this.userInfo.userId,
          name: this.userName,
          email: this.userMail,
          phone: this.userPhone,
        };
        this.$store.dispatch("updateUserInfo", payload);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.user-info__ {
  &wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
  &input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    margin-bottom: 10px;

    label {
      text-align: left;
    }
    input {
      width: 150px;
      height: 20px;
      padding: 5px;
      border-radius: 10px;
      margin-left: auto;
      border: 1px solid lightgray;
    }
  }
}
button {
  text-align: center;
  padding: 10px 15px;
  background-color: lightblue;
  border: none;
  border-radius: 10px;
  z-index: 101;
  cursor: pointer;
}

[class*="-error"] {
  border: 1px solid red !important;
  color: red;
}
</style>
