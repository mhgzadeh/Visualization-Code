const czml = [
    {
        id: "document",
        name: "CZML Geometries: Polygon",
        version: "1.0",
    },
    {
        id: "bluePolygonWithHoles",
        name: "Blue polygon with holes",
        polygon: {
            positions: {
                cartographicDegrees: [
                    -90.0, 32, 0,
                    -80.0, 32, 0,
                    -80.0, 38, 0,
                    -90.0, 38, 0,
                ],
            },
            holes: {
                cartographicDegrees: [
                    [-83.5, 34, 0, 
                    -86.5, 34, 0, 
                    -85, 36, 0]
                ],
            },
            material: {
                solidColor: {
                    color: {
                        rgba: [0, 100, 255, 255],
                    },
                },
            },
        }
    }

];

const viewerQD = new Cesium.Viewer("cesiumContainerD");
const dataQC = Cesium.CzmlDataSource.load(czml);
viewerQD.dataSources.add(dataQC);
viewerQD.zoomTo(dataQC);

export default viewerQD;