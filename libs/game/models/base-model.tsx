import { useState } from 'react';
import { useMemo } from 'react';

import { useCursor, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { folder, useControls, useCreateStore } from 'leva';
import { Euler, Vector3 } from 'three';
import { GLTF } from 'three-stdlib';

import { useEditModeStore } from '@todocity/stores/editModeStore';

interface IBaseModelProps extends GroupProps {
  /**
   * url to gltf model
   */
  url: string;
  /**
   * used for displaying within the leva controls folder
   */
  modelName: string;
}

export function BaseModel({
  url,
  modelName,
  castShadow = true,
  receiveShadow = true,
  ...props
}: IBaseModelProps) {
  // Creates a local leva store to be passed globally through editModeStore
  const baseModelControlsStore = useCreateStore();
  const [hovering, setHovering] = useState(false);

  // loads the model
  const gltf = useGLTF(url) as GLTF;

  // Ensures that multiple instances are renderable in a scene
  const copiedScene = useMemo(() => gltf.scene.clone(), [gltf.scene]);

  copiedScene.traverse((node) => {
    if (node && castShadow) node.castShadow = true;
    if (node && receiveShadow) node.receiveShadow = true;
  });
  copiedScene.castShadow = true;
  copiedScene.receiveShadow = true;

  useCursor(hovering);

  const setLevaStoreToDisplay = useEditModeStore(
    (state) => state.setLevaStoreToDisplay
  );

  const { polarX, polarY, polarZ, scale, cartX, cartY, cartZ } = useControls(
    modelName,
    {
      rotation: folder({
        polarX: { value: 0, min: -2 * Math.PI, max: 2 * Math.PI },
        polarY: { value: 0, min: -2 * Math.PI, max: 2 * Math.PI },
        polarZ: { value: 0, min: -2 * Math.PI, max: 2 * Math.PI },
      }),
      position: folder({
        cartX: {
          value: 0,
          min: -10,
          max: 10,
        },
        cartY: { value: 0, min: -10, max: 10 },
        cartZ: { value: 0, min: -10, max: 10 },
      }),
      scale: { value: 1, min: 0.1, max: 5, step: 0.1 },
    },
    // Stores the controls in the above created leva store
    { store: baseModelControlsStore }
  );

  return (
    <>
      <group
        {...props}
        dispose={null}
        onPointerEnter={(e) => {
          e.stopPropagation();
          setHovering(true);
        }}
        onPointerOut={(e) => setHovering(false)}
        onClick={() => setLevaStoreToDisplay(baseModelControlsStore)}
      >
        <group
          rotation={new Euler(polarX, polarY, polarZ)}
          scale={scale}
          position={new Vector3(cartX, cartY, cartZ)}
          castShadow
        >
          <primitive object={copiedScene} />
        </group>
      </group>
    </>
  );
}
