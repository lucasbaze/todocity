# Models

### Converting .gltf to .jsx

You can take any .gltf/.glb file and then use run `npx gltfjsx model.gltf` and it'll convert it to a react-three component

You don't need to use the output identically, and it's advised that you take the contents and simply move them within another wrapper.

This make it easier to interact with objects where you want to change the properties and are more permenant parts of the codebase / scene.

### Avoid using Scale

Scale causing a number of inconsistencies when moving an object or positioning it relative to other items.

It definitely makes for a challenge when building a scene.

### Positioning Cameras

Spent WAY too much time debugging this...

If you're trying to position a model in the view with a specific angle / position you need to do the following:

1. Setup an OrbitControls component with a ref
2. Attach a debugging hook to the window
3. Position the object where you want
4. Get the position and target
5. Set the camera and the orbit controls target accordingly

Component

```
export function HomePageModel(props: any) {
  const { camera, controls } = useThree();
  const orbitControlsRef = useRef(null);

  useEffect(() => {
    orbitControlsRef.current.target = new Vector3(-0.11, 3, -0.26);
  }, [camera]);

  const getCamera = () => {
    console.log('position: ', camera.position);
    console.log('target: ', orbitControlsRef.current.target);
  };

  useEffect(() => {
    window.getCamera = getCamera;
  }, []);

  return (
    <>
			...
      <OrbitControls
        ref={orbitControlsRef}
      />
			...
    </>
  );
}
```

Canas

```
export function HomeScene({ viewRef }: IHomeSceneProps) {
  const ContextBridge = useContextBridge(ColorModeContext);

  return (
    <Canvas
      shadows
      camera={{ position: [9.74, 8.78, 10], fov: 50, zoom: 1 }}
      className={styles.canvas}
    >
      ...
    </Canvas>
  );
}
```
