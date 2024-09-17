<template>
<h3>sadfasdas</h3>
</template>

<script>
export default {
    name:'AddrestaurantComponent',
     mounted() {
    const trgt = localStorage.getItem("user-info");
    if (!trgt) {
      this.$router.push({ name: "logIn" });
    }
  },
}
</script>

<style>

</style>