<template>
  <img src="../assets//logo.png" class="signUplogo" />

  <h3>Log In</h3>

  <div class="logIn">
    <input type="mail" v-model="email" placeholder="Enter your Email" />
    <input
      type="password"
      v-model="password"
      placeholder="Enter your password"
    />
    <button type="button" @click="logIn">Log In</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "logIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async logIn() {
      const result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&pass=${this.password}`
      );
      console.log({ result });
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        alert("logIn Successfully!");

        this.$router.push({ name: "HomepageComponent" });
      } else {
        this.$router.push({ name: "logIn" });
      }
    },
  },
  mounted() {
    const trgt = localStorage.getItem("user-info");
    if (trgt) {
      alert("You already logIn");
      this.$router.push({ name: "HomepageComponent" });
    }
  },
};
</script>

<style>
.signUplogo {
  width: 50px;
}
.logIn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.logIn input {
  width: 300px;
  height: 30px;
  border-radius: 5px;
  padding: 4px;
  padding-left: 10px;
  border: 1px solid skyblue;
}
button {
  width: 100px;
  padding: 8px;
  background: lightblue;
  border-radius: 5px;
  border: none;
  margin-top: 15px;
  cursor: pointer;
}
</style>
