<template>
  <div id="app">

    <Header title='Interactive Stories Web App'></Header>
    <Menu></Menu>
    <Board></Board>

  </div>
</template>

<script>
import Header from './components/coreGenerator/Header.vue'
import Menu from './components/coreGenerator/Menu.vue'
import Board from './components/coreGenerator/Board.vue'

export default {
  name: 'app',
  components: {
    Header,
    Menu,
    Board
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 20px 20px 20px;
}
</style>
