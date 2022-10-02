import { ReactNode, useState } from 'react';

import { useCursor } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { folder, useControls, useCreateStore } from 'leva';
import { Euler, Vector3 } from 'three';

import { isGameDevToolsEnabled } from '@todocity/data/flags';
import { useEditModeStore } from '@todocity/stores/edit-mode-store';

import { useNonDragClick } from '../../hooks/useNonDragClick';

export interface IBaseModelProps extends GroupProps {
  /**
   * used for displaying within the leva controls folder
   */
  modelName: string;
  /**
   * A model type that this base model is extending
   */
  children: ReactNode;
}

export function BaseModel({
  modelName,
  castShadow = true,
  receiveShadow = true,
  children,
  ...props
}: IBaseModelProps) {
  // Creates a local leva store to be passed globally through editModeStore
  const baseModelControlsStore = useCreateStore();
  const [hovering, setHovering] = useState(false);

  useCursor(hovering);

  const setLevaStoreToDisplay = useEditModeStore(
    (state) => state.setLevaStoreToDisplay
  );
  const { handleMouseDown, handleMouseUp } = useNonDragClick(() => {
    // TODO: This is an admin only feature and probably needs to be cleaned up
    // Ideally dev tools aren't shipped with the product into production
    console.log(isGameDevToolsEnabled());
    if (isGameDevToolsEnabled()) {
      setLevaStoreToDisplay(baseModelControlsStore);
    }
  });

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
          min: -20,
          max: 20,
        },
        cartY: { value: 0, min: -20, max: 20 },
        cartZ: { value: 0, min: -20, max: 20 },
      }),
      scale: { value: 1, min: -5, max: 5, step: 0.05 },
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
          setHovering(true);
        }}
        onPointerOut={(e) => {
          setHovering(false);
        }}
        onPointerDown={(e) => {
          handleMouseDown(e);
        }}
        onPointerUp={(e) => {
          handleMouseUp(e);
        }}
      >
        <group
          rotation={new Euler(polarX, polarY, polarZ)}
          scale={scale}
          position={new Vector3(cartX, cartY, cartZ)}
          castShadow
        >
          {children}
        </group>
      </group>
    </>
  );
}
