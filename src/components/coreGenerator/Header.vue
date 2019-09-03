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
</script>

<style scoped>
  .header {
    text-align: center;
    margin-top: 1rem;
  }

  .title {
    font-size: 4rem;
  }
</style>
