import { useMemo } from 'react';

import { Float, useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

import { BaseModel, IBaseModelProps } from '../base-model/base-model';

export interface IBasePrimitiveModelProps
  extends Omit<IBaseModelProps, 'children'> {
  /**
   * url to gltf model
   */
  url: string;
  /**
   * used for displaying within the leva controls folder
   */
  modelName: string;
  /**
   * Used to set the transparency and opacity when a user is "selecting" a building to place
   */
  preview?: boolean;
}

export function BasePrimitiveModel({
  url,
  modelName,
  preview,
  castShadow = true,
  receiveShadow = true,
  ...props
}: IBasePrimitiveModelProps) {
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

  return (
    <>
      {preview ? (
        <Float
          speed={5}
          rotationIntensity={0}
          floatIntensity={2}
          floatingRange={[1.5, 2.5]}
          // position={position}
        >
          <BaseModel modelName={modelName} {...props}>
            <primitive object={copiedScene} />
          </BaseModel>
        </Float>
      ) : (
        <BaseModel modelName={modelName} {...props}>
          <primitive object={copiedScene} />
        </BaseModel>
      )}
    </>
  );
}
