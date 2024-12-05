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


Cesium.Ion.defaultAccessToken = "YOURS GOES HERE";


const viewer = new Viewer("cesiumContainer", {
    // terrain: Terrain.fromWorldTerrain(),
});


try {
    const modelFilePath = "http://localhost:8081/Assets/geobox.gltf"
    let modelFromGltfIM = await Cesium.Model.fromGltfAsync({
        url: modelFilePath, 
        scale: 1,
        // Some interesting debug options
        // debugShowBoundingVolume: true,
        // enableDebugWireframe: true,
        // debugWireframe: true,
    });

    let modelFromGltfIMReference = viewer.scene.primitives.add(modelFromGltfIM);
} catch (error) {
    console.log(`Failed to load model. ${error}`);
}


// viewer.trackedEntity = geobox;

viewer.camera.flyTo({
    destination: Cartesian3.fromDegrees(0.0, 0.0, 10000),
    // destination: convertCoords,
    orientation: {
        heading: Math.toRadians(0.0),
        pitch: Math.toRadians(-90.0),
    },
});

