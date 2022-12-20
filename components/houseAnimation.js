import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera } from "@react-three/drei"
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useRouter } from "next/router";

const HouseAnimation = () => {
    const { scrollYProgress } = useScroll()
    const house = useRef(null)
    const parentRef = useRef(null)
    const frontRoof = useRef(null)
    const backRoof = useRef(null)
    const [frontRoofScale, setFrontRoofScale] = useState([0.015216, 0.014808, 0.015216])
    // Stores the start and end scrolling position for our container
    const [scrollPercentageStart, setScrollPercentageStart] = useState(null);
    const [scrollPercentageEnd, setScrollPercentageEnd] = useState(null);
    const [roofShowing, setRoofShowing] = useState(false);

    const router = useRouter()

    const handleClickOnWalls = () => {
        router.push('/eksterior')
    }

    const handleClickOnRoof = () => {
        router.push('/takfornying')
    }




    const handleFrontRoofHover = (isHovered) => {
        if (isHovered === true) {
            setFrontRoofScale([0.015216 * 1.01, 0.014808 * 1.01, 0.015216 * 1.01])
        }
        else setFrontRoofScale([0.015216, 0.014808, 0.015216])
    }




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

        let motionValue = useTransform(scrollYProgress, [scrollPercentageStart, scrollPercentageEnd], [0, 1.4])
        let currentMotionValue
        useFrame(() => {
            currentMotionValue = motionValue.get()
            if (currentMotionValue <= 1) {
                house.current.rotation.y = (230 - currentMotionValue * 50) * Math.PI / 180
                frontRoof.current.position.y = Math.sin(currentMotionValue * Math.PI) * 1.4 + 4.885315
                backRoof.current.position.y = Math.sin(currentMotionValue * Math.PI) * 1.2 + 4.738043
            }

        }, [])
        console.log(roofShowing)
        // backRoof.material.color.setHex('#000')



        const { nodes, materials } = useGLTF("/HusfHouse2.gltf");

        materials["CoverMeterial.003"].setValues()
        return (
            <group position={[0, -2, -10]} dispose={null} ref={house}>

                {/* window */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cover000.geometry}
                    material={materials["CoverMeterial.003"]}
                    position={[-5.057565, 1.295928, -1.953551]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.686293}
                />

                {/* window right second */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cover001.geometry}
                    material={materials["CoverMeterial.003"]}
                    position={[-6.480407, 1.295928, -1.953551]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.686293}
                />

                {/* window left first */}
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
                {/* window front left */}
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

                {/* front roof */}
                <motion.mesh
                    ref={frontRoof}
                    castShadow
                    receiveShadow
                    geometry={nodes.SouthToNorthRoof.geometry}
                    material={materials["Material.005"]}
                    position={[.026687, 4.885315, -2.617492]}
                    rotation={[-Math.PI / 2, 0.776672, -Math.PI / 2]}
                    scale={frontRoofScale}
                    onClick={handleClickOnRoof}
                />

                {/* back roof */}
                <motion.mesh
                    ref={backRoof}
                    castShadow
                    receiveShadow
                    geometry={nodes.WestToEastRoof.geometry}
                    material={materials["Material.005"]}
                    position={[0.062131, 4.738043, 0.219201]}
                    rotation={[-0.794125, 0, -Math.PI]}
                    scale={[0.015216, 0.015604, 0.015216]}
                    onClick={handleClickOnRoof}
                    
                />


                <group position={[1.084823, 2.346381, -3.558147]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane018.geometry}
                        material={materials["windlow.007"]}
                    />
                    <motion.mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane018_1.geometry}
                        material={materials["Material.007"]}
                        whileHover={{ scale: 1.01 }}
                        onClick={handleClickOnWalls}
                    >
                    </motion.mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane018_2.geometry}
                        material={materials["CoverMeterial.002"]}
                    >
                        <meshBasicMaterial color={'#353535'} />
                    </mesh>
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
                {roofShowing === true ? (
                    <div style={{
                        minWidth: '100px',
                        minHeight: '70px',
                        backgroundColor: 'white',
                        position: 'absolute',
                        top: '10%',
                        right: '5vw',
                        borderRadius: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'center',
                        alignItems: 'center',
                        paddingLeft: '2rem',
                        paddingRight: '2rem',
                        paddingTop: '1rem',
                        paddingBottom: '2rem',
                    }}>
                        <p style={{
                            color: '#101a5f',
                            fontSize: '1rem',
                            fontWeight: '900',
                            textTransform: 'uppercase',

                        }}>
                            Takfornying
                        </p>
                        <p style={{
                            margin: '0px',
                            color: '#101a5f',
                            fontSize: '1.5rem',
                            fontWeight: '400',

                        }}>
                            Vi fornyer tak!
                        </p>

                    </div>
                ) : null}
            </div>
        </div>
    )
}
useGLTF.preload("/HusfHouse2.gltf");
export default HouseAnimation