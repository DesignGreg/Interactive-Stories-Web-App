<!-- Show the different scenes created by the user, also allows to move them (small rectangles) and to link them with arrows 
     Above, shows the ButtonCreateNewScene.vue and an input to enter story's title 
     Each box shows the title of the scene + excerpt of the text + ID (automatically given and in chronological order of box creation) -->

<template>
  <main>
    <div class="board-top-menu">
      <input class="form-control" type="text" placeholder="Story Title" v-model="storyTitle">
      <ButtonCreateNewScene class="button"></ButtonCreateNewScene>
    </div>

    <div class="board-frame">

    </div>
  </main>
</template>

<script>

import ButtonCreateNewScene from '../sideGenerator/ButtonCreateNewScene';

export default {
  name: 'Board',
  components: {
    ButtonCreateNewScene
  },
  data: function() {
    return {
      storyTitle: ''
    }
  }
}
</script>

<style scoped>

  main {
    text-align: right;
  }

  input {
    width: 40%;
    display: inline-block;
  }

  .board-top-menu {
    background-color: black;
    display: inline-block;
    margin: 0 0 1rem 0;
    padding: 0.5rem 0 0.5rem 0;
    width: 100%;
  }

  .button {
    margin: 0 1rem 0 1rem;
  }

  .board-frame {
    border: 0.2rem solid Black;
    height: 60rem;
  }

</style>
