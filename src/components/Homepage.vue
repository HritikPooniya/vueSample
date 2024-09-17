<template>
  <div>
    <h3>Hello this is home Page</h3>
  </div>
</template>

<script>
export default {
  name: "HomepageComponent",
  mounted() {
    const trgt = localStorage.getItem("user-info");
    if (!trgt) {
      this.$router.push({ name: "logIn" });
    }
  },
};
</script>

<style></style>
