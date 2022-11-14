import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera } from "@react-three/drei"
import { useScroll, useTransform } from "framer-motion";

const HouseAnimation = () => {
    const { scrollYProgress } = useScroll()
    const ref = useRef(null)
    const parentRef = useRef(null)

    // Stores the start and end scrolling position for our container
    const [scrollPercentageStart, setScrollPercentageStart] = useState(null);
    const [scrollPercentageEnd, setScrollPercentageEnd] = useState(null);


    useLayoutEffect(() => {
        // Get the distance from the start of the page to the element start
        const rect = parentRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const offsetStart = rect.top + scrollTop;
        const offsetEnd = (offsetStart + rect.height);

        const elementScrollStart = offsetStart / document.body.clientHeight;
        const elementScrollEnd = offsetEnd / document.body.clientHeight;

        setScrollPercentageStart(elementScrollStart);
        setScrollPercentageEnd(elementScrollEnd);
    });



    const NewHouse = () => {
        useEffect(() => {
            return scrollYProgress.onChange((latest) => {
                console.log('page scroll: ', latest)
            })
        }, [])

        let newRotation = useTransform(scrollYProgress, [scrollPercentageStart, scrollPercentageEnd], [230, 180])
        useFrame(() => {
            ref.current.rotation.y = newRotation.get() * Math.PI / 180
        }, [])

        const { nodes, materials } = useGLTF("/HusfHouse2.gltf");
        return (
            <group position={[0, -2, -10]} dispose={null} ref={ref}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cover000.geometry}
                    material={materials["CoverMeterial.003"]}
                    position={[-5.057565, 1.295928, -1.953551]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.686293}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cover001.geometry}
                    material={materials["CoverMeterial.003"]}
                    position={[-6.480407, 1.295928, -1.953551]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.686293}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cover002.geometry}
                    material={materials["CoverMeterial.003"]}
                    position={[3.443291, 1.295928, -1.953551]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.686293}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cover003.geometry}
                    material={materials["CoverMeterial.003"]}
                    position={[4.874003, 1.288481, -1.952468]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.686293}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cover004.geometry}
                    material={materials["CoverMeterial.003"]}
                    position={[4.874003, 1.288481, -1.952468]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.686293}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cover005.geometry}
                    material={materials["CoverMeterial.003"]}
                    position={[0.274869, 0.778448, -3.909315]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.686293}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cover006.geometry}
                    material={materials["CoverMeterial.003"]}
                    position={[-1.923787, 0.778448, -3.909315]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.686293}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cover007.geometry}
                    material={materials["CoverMeterial.003"]}
                    position={[-0.915617, 0.827025, -3.915303]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.686293}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cover008.geometry}
                    material={materials["CoverMeterial.003"]}
                    position={[-1.604658, 3.514114, -3.915304]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.686293}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cover009.geometry}
                    material={materials["CoverMeterial.003"]}
                    position={[0.011725, 3.514114, -3.915304]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.686293}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cover010.geometry}
                    material={materials["CoverMeterial.003"]}
                    position={[6.882047, 1.92322, -0.957131]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={0.686293}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cover011.geometry}
                    material={materials["CoverMeterial.003"]}
                    position={[6.882047, 1.92322, 0.958169]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={0.686293}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cover012.geometry}
                    material={materials["CoverMeterial.003"]}
                    position={[6.88006, 3.920088, 0.828238]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={0.686293}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cover013.geometry}
                    material={materials["CoverMeterial.003"]}
                    position={[6.88006, 3.920088, -0.788145]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={0.686293}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DrainPipe1.geometry}
                    material={materials["windlow.009"]}
                    position={[6.543656, 2.029552, -3.022939]}
                    rotation={[0, 1.570535, 0]}
                    scale={0.103629}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Drainpipe2.geometry}
                    material={materials["windlow.008"]}
                    position={[-6.549057, 2.029552, -3.012458]}
                    rotation={[0, -1.570535, 0]}
                    scale={0.103629}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.FrontBoard.geometry}
                    material={materials["windlow.008"]}
                    position={[0, 3.522692, -5.047153]}
                    scale={0.148557}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001.geometry}
                    material={materials["windlow.010"]}
                    position={[0, 0, 0.006242]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane003.geometry}
                    material={materials["windlow.011"]}
                    position={[0, -0.004452, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.SouthToNorthRoof.geometry}
                    material={materials["Material.005"]}
                    position={[0.026687, 4.885315, -2.617492]}
                    rotation={[-Math.PI / 2, 0.776672, -Math.PI / 2]}
                    scale={[0.015216, 0.014808, 0.015216]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.WestToEastRoof.geometry}
                    material={materials["Material.005"]}
                    position={[0.062131, 4.738043, 0.219201]}
                    rotation={[-0.794125, 0, -Math.PI]}
                    scale={[0.015216, 0.015604, 0.015216]}
                />
                <group position={[1.084823, 2.346381, -3.558147]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane018.geometry}
                        material={materials["windlow.007"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane018_1.geometry}
                        material={materials["Material.007"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane018_2.geometry}
                        material={materials["CoverMeterial.002"]}
                    />
                </group>
            </group>
        )
    }

    return (
        <div style={{ width: '100vw', height: '120vh', backgroundColor: '#5754d2', position: "relative" }} >
            <div style={{ width: '100vw', height: '70vh', position: 'sticky', top: "0px" }} ref={parentRef}>
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                    <ambientLight intensity={0.15} />
                    <directionalLight position={[0, 5, 20]} intensity={1.2} />
                    <NewHouse />
                </Canvas>
            </div>
        </div>
    )
}
useGLTF.preload("/HusfHouse2.gltf");
export default HouseAnimation