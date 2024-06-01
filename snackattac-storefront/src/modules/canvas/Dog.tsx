import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from "@modules/animated/components/Loader"

const Dog = () => {
  const dog = useGLTF("./pos-machine/source/machine.gltf")
  return <primitive object={dog.scene} scale={2}
  />
}

const DogCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
        //   enableZoom={true}
          maxPolarAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 8}
        />
        <Dog />
      </Suspense>
    </Canvas>
  )
}

export default DogCanvas
