'use strict';
exports.__esModule = true;
exports.Soda = void 0;
var react_1 = require('react');
var drei_1 = require('@react-three/drei');
var fiber_1 = require('@react-three/fiber');
function Soda(props) {
  var ref = (0, react_1.useRef)(null);
  var gltf = (0, drei_1.useGLTF)(
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/soda-bottle/model.gltf'
  );
  (0, fiber_1.useFrame)(function (state, delta) {
    return (ref.current.rotation.y += delta);
  });
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={gltf.nodes.Mesh_sodaBottle.geometry}>
        <meshStandardMaterial
          color={'green'}
          roughness={0}
          metalness={0.8}
          envMapIntensity={2}
        />
      </mesh>
      <mesh
        geometry={gltf.nodes.Mesh_sodaBottle_1.geometry}
        material={gltf.materials.red}
        material-envMapIntensity={0}
      />
    </group>
  );
}
exports.Soda = Soda;
