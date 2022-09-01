# Models

### Converting .gltf to .jsx

You can take any .gltf/.glb file and then use run `npx gltfjsx model.gltf` and it'll convert it to a react-three component

You don't need to use the output identically, and it's advised that you take the contents and simply move them within another wrapper.

This make it easier to interact with objects where you want to change the properties and are more permenant parts of the codebase / scene.

### Avoid using Scale

Scale causing a number of inconsistencies when moving an object or positioning it relative to other items.

It definitely makes for a challenge when building a scene.
