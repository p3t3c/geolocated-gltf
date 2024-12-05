import {
    Viewer,
    Cartesian3,
    Math,
    Terrain,
    WebMapServiceImageryProvider
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./css/main.css";
import * as Cesium from "cesium";


Cesium.Ion.defaultAccessToken = "YOURS_GOES_HERE";


const viewer = new Viewer("cesiumContainer", {
    // terrain: Terrain.fromWorldTerrain(),
});


try {
    const modelFilePath = "http://localhost:8081/Assets/geobox.gltf"
    // const modelFilePath = "/Assets/box.gltf"
    let modelFromGltfIM = await Cesium.Model.fromGltfAsync({
        url: modelFilePath, 
        scale: 1,
        // Some interesting debug options
        // debugShowBoundingVolume: true,
        // enableDebugWireframe: true,
        // debugWireframe: true,
    });
} catch (error) {
    console.log(`Failed to load model. ${error}`);
}


// viewer.trackedEntity = geobox;

viewer.camera.flyTo({
    destination: Cartesian3.fromDegrees(-0, -0, 5000),
    // destination: convertCoords,
    orientation: {
        heading: Math.toRadians(0.0),
        pitch: Math.toRadians(-90.0),
    },
});

