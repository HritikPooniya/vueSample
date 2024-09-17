<template>
update restaurant
</template>

<script>
export default {
    name:'updateRestaurant',
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