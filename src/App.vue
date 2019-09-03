<template>
  <div id="app">

    <Header title='Interactive Stories Web App'></Header>
    <Menu></Menu>
    <Board></Board>
    <Footer></Footer>

  </div>
</template>

<script>
import Header from './components/coreGenerator/Header.vue'
import Menu from './components/coreGenerator/Menu.vue'
import Board from './components/coreGenerator/Board.vue'
import Footer from './components/coreGenerator/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Menu,
    Board,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 2rem 2rem 2rem;
  font-size: 62.5%;
}
</style>
