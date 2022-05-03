//Set the random seed for reproducible random colors.
Cesium.Math.setRandomNumberSeed(1234);

const viewerQB = new Cesium.Viewer("cesiumContainerB", { infoBox: false });
const entities = viewerQB.entities;

//Create Entity "folders" to allow us to turn on/off entities as a group.
const spheres = entities.add(new Cesium.Entity());
const boxes = entities.add(new Cesium.Entity());
const ellipsoids = entities.add(new Cesium.Entity());

//Create the entities and assign each entity's parent to the group to which it belongs.

const height = 100000.0;

entities.add({
    parent: ellipsoids,
    position: Cesium.Cartesian3.fromDegrees(-98.0, 45.0, height),
    ellipsoid: {
        radii: new Cesium.Cartesian3(45000.0, 45000.0, 90000.0),
        material: Cesium.Color.DARKORANGE,
    },
});

entities.add({
    parent: boxes,
    position: Cesium.Cartesian3.fromDegrees(-100.0, 45.0, height),
    box: {
        dimensions: new Cesium.Cartesian3(90000.0, 90000.0, 90000.0),
        material: Cesium.Color.BLUE,
    },
});

entities.add({
    parent: spheres,
    position: Cesium.Cartesian3.fromDegrees(-102.0, 45.0, height),
    ellipsoid: {
        radii: new Cesium.Cartesian3(67500.0, 67500.0, 67500.0),
        material: Cesium.Color.DARKORANGE,
    },
});


viewerQB.zoomTo(viewerQB.entities);

export default viewerQB;