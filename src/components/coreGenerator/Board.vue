<!-- Show the different scenes created by the user, also allows to move them (small rectangles) and to link them with arrows 
     Above, shows the ButtonCreateNewScene.vue and an input to enter story's title 
     Each box shows the title of the scene + excerpt of the text + ID (automatically given and in chronological order of box creation) -->

<template>
  <main>
    <div class="board-top-menu">
      <ButtonCreateNewScene class="button"></ButtonCreateNewScene>
      <ButtonSaveScene class="button"></ButtonSaveScene>
    </div>

    <div class="board-frame">

    </div>
  </main>
</template>

<script>

import ButtonCreateNewScene from '../sideGenerator/ButtonCreateNewScene';
import ButtonSaveScene from '../sideGenerator/ButtonSaveScene';

export default {
  name: 'Board',
  components: {
    ButtonCreateNewScene,
    ButtonSaveScene
  }
}
</script>

<style scoped>

  main {
    text-align: right;
  }

  .board-top-menu {
    background-color: black;
    display: inline-block;
    margin: 10px 0 10px 0;
    padding: 5px 0 5px 0;
    width: 100%;
  }

  .button {
    margin: 0 10px 0 10px;
  }

  .board-frame {
    border: 2px solid Black;
    height: 800px;
  }

</style>
