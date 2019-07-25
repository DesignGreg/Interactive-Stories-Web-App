/*

Menu.vue

1. After having clicked on "Create a new Story", the Board component is loaded

2. After having clicked on "Create a new Story", a save is generated in localStorage with a unique ID

3. After having clicked on "Load & Work", the Board component is loaded

4. After having clicked on "Load & Work", the JSON file info are used by the Store

5. After having clicked on "Load & Work", the Board component shows the info of the Store

6. After having clicked on "Load & Play", the Reader component is loaded

7. After having clicked on "Load & Play", the JSON file are used by the Store

8. After having clicked on "Load & Play", the Reader component shows the info of the Store


--Generator--

Board.vue

1. The user is able to move a box

2. The box can't exit the div limits

3. Several boxes can't overlap

4. Clicking on a box opens the WordProcessor component to read/modify its content, or delete the scene

5. Double-clicking on a box enables to modify its content

6. The user can link boxes with arrows

7. A box can have only two arrows out

8. A box can have only one arrow in

9. The user can create a new scene by clicking on the "Create a new Scene" button

10. The user can give a title to its story using the input


Menu.vue

1. The user can export his story by clicking on the "Export" button to get a JSON file.

2. After having clicked on the "Export" button, a prompt box tells the user the save is successfull and ask him if he wants to immediately try his story

3. If the save has failed, a prompt box tells the user there has been a problem

4. When the user clicks on "Delete the Story" button, it deletes it from the Store

5. Then it deleted it from the localStorage


WordProcessor.vue

-- When creating a new scene, after having clicked on "Create a new Scene"

1. The user have to give a title and a description to the scene before saving it (the healt point drop-down lost is by default on 0)

2. The input borders become red if the when the user is saving the scene lacks a title and/or a description

3. The user can save (Store and localStorage) the scene by clicking on the "Save" button at the bottom right corner

4. The user can cancel the creation of a new scene by clicking on the cross at the top right corner


-- For a scene already created, modification

1. The user can cancel (no save) the modification by clicking on the cross at the top right corner

2. The user can delete the scene by clicking on the "Delete" button at the bottom right corner

3. A confirmation message asked the user if he really wants to delete this scene

4. The input borders become red if the when the user is saving the scene lacks a title and/or a description

5. The user can save (Store and localStorage) his modification by clicking on the "Save" button at the bottom right corner


--Reader--

Reader.vue

1. The component gets its info from the JSON file

2. The component sends the info to the Store

3. Using the ID of the story, the component will check if there is a save in the localStorage

4. If there is a save, using the IF of the last scene, the component will update the info and send it to the Store

5. When opening a new story, the progress of the player are saved in localStorage

6. When the player's health points drop below 0, a prompt box ask the user if he wants to try again or not

7. When the player's health points drop below 0, the save of this story in localStorage is deleted


--Store--

Store.js Module Play

1. After the user's choice, the news stats are saved in the Store

2. After the save in the Store, the new stats are also saved in the localStorage

3. When a scene causes a health points lost for the player, the stats are updated

4. The new stats are sent to the localStorage, using the ID of the last scene


Store.js Module Create

1. When a new story is created, the Store gives a unique ID to it

2. Then the Store is updated

3. Then a save in the localStorage is created

4. When a new scene is created, the Store adds it

5. Then it is added to the localStorage

6. When two scenes are link together, their objects are updated in the Store

7. Same if the localStorage

*/

