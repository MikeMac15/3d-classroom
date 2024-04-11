import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";


import { ClassroomModel } from "../models/ClassroomModel";
import { PerspectiveCamera, CameraControls, Environment, Sky, Sparkles } from "@react-three/drei";
import { ControlPanel } from "../components/Panel";


export default function Classroom() {

    return (
        <div className="Canvas">
            <Canvas>
            
            <CameraControls />
            <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
                {/* <pointLight position={[0, 1, 0]} /> */}
                <ambientLight position={[0,2,0]} intensity={1} />
                <directionalLight  position={[0, 0, 5]} />
                <Suspense fallback={null}>
                    <ClassroomModel position={[0,-1,0]}/>
                    {/* <Environment preset="forest" /> */}
                    <Sparkles speed={0.2} opacity={0.2} position={[0,1,-13]} scale={[2,1,1]}/>
                    <Sparkles speed={0.2} opacity={0.2} position={[0,1,-15]} scale={[5,1,1]}/>
                    {/* <ControlPanel /> */}
                </Suspense>
            </Canvas>
        </div>
    )
}