<template>
  <div class="headerBlock">
    <div class="empty"></div>
    <div class="btnblock">
      <router-link to="/">Home</router-link>
      <router-link to="/AddrestaurantComponent">Add restaurant</router-link>
      <router-link to="/updateRestaurant">Update Restaurant</router-link>
      <button @click="logOut">Log Out</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  methods: {
    logOut() {
      const chk = localStorage.removeItem("user-info");
      this.$router.push({ name: "logIn" });
      console.log({ chk });
    },
  },
};
</script>

<style>
.headerBlock {
  overflow: sticky;
  background: lightgrey;
  display: flex;
  margin-left: auto;
  align-items: center;
}
.btnblock {
  width: 45%;
  display: flex;
  margin-left: auto;
  align-items: center;
}

.btnblock a {
  border: none;
  width: 150px;
  border-radius: 5px;
  padding: 10px;
  font-weight: 600;
  background: none;
  font-size: 14px;
  text-decoration:none;
}
.btnblock a:hover {
  width: 155px;
  background: lightgreen;
  color: white;
}
.btnblock button {
  border: none;
  width: 150px;
  border-radius: 5px;
  padding: 10px;
  font-weight: 600;
  background: none;
  font-size: 14px;
}
.btnblock button:hover {
  width: 155px;
  background: lightgreen;
  color: white;
}
</style>
