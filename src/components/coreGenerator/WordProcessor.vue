<!-- Is shown to the user when creating a new scene instead of board.vue
     Write text of the scene and determines if this scene makes the player loses health points and how many 
     Title input for the title of the scene + textbox for the description + drop-down list for the number of health points lost
     Shows the button SaveScene 
     
     If after a click on a box for an existing scene
     It shows to the user instead of board.vue after having clicked on an existing scene, to read and/or modify its content, or delete the scene
     -->

<template>
  <ButtonSaveScene class="button"></ButtonSaveScene>
</template>

<script>

import ButtonSaveScene from '../sideGenerator/ButtonSaveScene';

export default {
  name: 'WordProcessor',
  components: {
    ButtonSaveScene
  }
}
</script>

<style scoped>

</style>
