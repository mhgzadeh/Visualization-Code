const viewerQE = new Cesium.Viewer("cesiumContainerE");


viewerQE.entities.add({
    name: "Orange polygon Right Side",
    polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArrayHeights([
            -101.0, 21.0, 200000, // 0
            -100.0, 21.0, 100000, // 1
            -100, 23.5, 100000, // 2
            -101.0, 23.5, 200000, // 3
        ]),
        extrudedHeight: 0,
        perPositionHeight: true,
        material: Cesium.Color.ORANGE,
    },
});

viewerQE.entities.add({
    name: "Orange polygon Right Side",
    polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArrayHeights([
            -101.0, 23.5, 200000, // 3
            -102, 23.5, 100000, // 2
            -102, 21.0, 100000, // 2
            -101.0, 21.0, 200000, // 0
        ]),
        extrudedHeight: 0,
        perPositionHeight: true,
        material: Cesium.Color.ORANGE,
    },
});


viewerQE.zoomTo(viewerQE.entities);

export default viewerQE;