<template>
  <img src="../assets/download.png" class="signUplogo" />
  <h3>Sign Up</h3>
  <div class="inputbloack">
    <input type="text" v-model="name" placeholder="Enter your Name" />
    <input type="mail" v-model="email" placeholder="Enter your mail" />
    <input type="password" v-model="pass" placeholder="Enter your password" />
    <button type="button" @click="signUp">Sign Up</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return { name: "", email: "", pass: "" };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        pass: this.pass,
      });

      console.log("Sign Up button clicked", result);
      if (result.status == 201) {
        alert("Sign Up successfully!");
        this.$router.push({ name: "HomepageComponent" });
      }
      localStorage.setItem("user-info", JSON.stringify(result.data));
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
.inputbloack {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.inputbloack input {
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
