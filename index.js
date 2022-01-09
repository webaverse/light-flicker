import * as THREE from 'three';
import metaversefile from 'metaversefile';
import TwilightSkyShader from './shaders/TwilightSkyShader.js';

const { useApp, useFrame, useLocalPlayer, useScene, useWorld, useInternals } = metaversefile;

const baseUrl = import.meta.url.replace(/(\/)[^\/\/]*$/, '$1');

export default () => {

    const app = useApp();
    const localPlayer = useLocalPlayer();
    const skyColors = { color1: new THREE.Color(0x000000), color2: new THREE.Color(0x000000) };
    const glowColors = { color1: new THREE.Color(0x000000), color2: new THREE.Color(0x000000) };
    const {camera} = useInternals();

    
    const light = new THREE.PointLight( 0xffffff, 1, 15 );
    //light.position.set( 50, 50, 50 );

    //light.position.set(3, 3.39, -200);
    app.add( light );
    light.updateMatrixWorld();
    

    //skyDome.position.copy( localPlayer.position );

    useFrame(({ timestamp }) => {

        var min = 0.0,
        max = 2,
        highlightedNumber = Math.random() * (max - min) + min;

        var d = Math.random();

        if (d < 0.05){
            light.intensity = highlightedNumber;
            //light.distance = highlightedNumber*2;
        }

        
    });

    return app;
}