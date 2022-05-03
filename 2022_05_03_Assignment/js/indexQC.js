const czml = [
    {
        id: "document",
        name: "CZML Geometries: Polygon",
        version: "1.0",
    },
    {
        id: "redPolygon",
        name: "Red polygon on surface",
        polygon: {
            positions: {
                cartographicDegrees: [
                    -115.0, 30.0, 1000,
                    -100.0, 30.0, 1000,
                    -100.0, 40.0, 1000,
                    -115.0, 40.0, 1000,
                    -118.0, 37.0, 100,
                    -110.0, 35.0, 100,
                ],
            },
            material: {
                solidColor: {
                    color: {
                        rgba: [0, 100, 255, 255],
                    },
                },
            },
        },
    },


];

const viewerQC = new Cesium.Viewer("cesiumContainerC");
const dataQC = Cesium.CzmlDataSource.load(czml);
viewerQC.dataSources.add(dataQC);
viewerQC.zoomTo(dataQC);

export default viewerQC;