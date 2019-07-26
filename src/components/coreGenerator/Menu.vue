<!-- Menu of the app
     Shows a button "Create a new Story", immediately gives a unique ID to it and a save in localStorage
     Shows a button "Load & Work" to load a JSON file and work on the story
     Shows a button "Load & Play" to load a JSON file and try the story 
     
     Once there is a story (new or loaded)
     Shows a button "Save the story" = the user can export the entire story as a JSON file (each story has a unique ID with getTime)
     Shows a button "Delete the story" -->

<template>
  <nav class="nav">
    <ButtonCreateNewStory class="button"></ButtonCreateNewStory>
    <ButtonLoadAndWorkStory class="button"></ButtonLoadAndWorkStory>
    <ButtonLoadAndPlayStory class="button"></ButtonLoadAndPlayStory>
  </nav>
</template>

<script>

import ButtonCreateNewStory from '../sideGenerator/ButtonCreateNewStory';
import ButtonLoadAndWorkStory from '../sideGenerator/ButtonLoadAndWorkStory';
import ButtonSaveStory from '../sideGenerator/ButtonSaveStory';
import ButtonDeleteStory from '../sideGenerator/ButtonDeleteStory';
import ButtonLoadAndPlayStory from '../sideReader/ButtonLoadAndPlayStory';

export default {
  name: 'Menu',
  components: {
    ButtonCreateNewStory,
    ButtonLoadAndWorkStory,
    ButtonSaveStory,
    ButtonDeleteStory,
    ButtonLoadAndPlayStory
  }
}
</script>

<style scoped>
  .nav {
    background-color: black;
    display: inline-block;
    margin: 10px 0 10px 0;
    padding: 5px 0 5px 0;
    width: 100%;
  }

  .button {
    margin: 0 10px 0 10px;
  }
</style>
