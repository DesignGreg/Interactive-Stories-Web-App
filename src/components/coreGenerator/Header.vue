<!-- Header of the app -->

<template>
  <header class="header">
    <h1 class="title"> {{ title }} </h1>
  </header>
</template>

<script>

export default {
  name: 'Header',
  props: {
    title: String,
  }
}
</script scoped>

<style scoped>

  .header {
    text-align: center;
    margin-top: 20px;
  }

 .title {
   font-size: 60px;
 }
</style>
