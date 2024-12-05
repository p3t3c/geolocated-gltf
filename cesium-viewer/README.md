# Cesium Viewer

Adaptation from the default example given by Cesium

The index.js shows how to load geolocated GLTF file.

The __Assets/geobox.gtlf__ file is generated using the code in the **gltf-creation** folder.


## Why don't I see a map

You need to put your Cesium access token in 

```
Cesium.Ion.defaultAccessToken
```
In src/index.js

## Usage

```
npm install
npm start
```
