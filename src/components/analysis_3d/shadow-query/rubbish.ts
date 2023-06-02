
const viewer = new Cesium.Viewer("cesiumContainer", {
    infoBox: false,
    selectionIndicator: false,
    shadows: true,
    terrainShadows: Cesium.ShadowMode.ENABLED,
    shouldAnimate: true,
    //terrain: Cesium.Terrain.fromWorldTerrain(),
});

const shadowMap = viewer.shadowMap;
shadowMap.maximumDistance = 10000.0;

const checkerMaterial = new Cesium.CheckerboardMaterialProperty({
evenColor: Cesium.Color.RED.withAlpha(0.5),
oddColor: Cesium.Color.RED.withAlpha(0.0),
repeat: new Cesium.Cartesian2(5.0, 10.0),
});


const locations = {
Exton: {
longitude: -1.31968,
latitude: 0.698874,
height: 74.14210186070714,
date: 2457522.154792,
},
HalfDome: {
longitude: -2.086267733294987,
latitude: 0.6587491773830219,
height: 2640.716312584986,
date: 2457507.247512,
},
Everest: {
longitude: 1.517132688,
latitude: 0.4884844964,
height: 8773.17824498951,
date: 2457507.620845,
},
PinnaclePA: {
longitude: -1.3324415110874286,
latitude: 0.6954224325279967,
height: 179.14276256241743,
date: 2457523.04162,
},
SenecaRocks: {
longitude: -1.3851775172879768,
latitude: 0.6778211831093554,
height: 682.5893300695776,
date: 2457522.097512,
},
Space: {
longitude: -1.31968,
latitude: 0.698874,
height: 2000000.0,
date: 2457522.154792,
},
};

let i;
const entities = viewer.entities.values;
const entitiesLength = entities.length;

function setLocation(location) {
const longitude = location.longitude;
const latitude = location.latitude;
const height = location.height;

for (i = 0; i < entitiesLength; ++i) {
const entity = entities[i];
entity.position = Cesium.Cartesian3.fromRadians(
  longitude,
  latitude,
  height + entity.height
);
}

viewer.clock.currentTime = new Cesium.JulianDate(location.date);
viewer.clock.multiplier = 1.0;
}

function setLocationFunction(location) {
return function () {
setLocation(location);
};
}

const locationToolbarOptions = [];
for (const locationName in locations) {
if (locations.hasOwnProperty(locationName)) {
const location = locations[locationName];
locationToolbarOptions.push({
  text: locationName,
  onselect: setLocationFunction(location),
});
}
}

Sandcastle.addToolbarMenu(locationToolbarOptions);

function setEntity(entity) {
for (i = 0; i < entitiesLength; ++i) {
entities[i].show = false;
}
entity.show = true;
viewer.trackedEntity = entity;
}

function setEntityFunction(entity) {
return function () {
setEntity(entity);
};
}

const entityToolbarOptions = [];
for (i = 0; i < entitiesLength; ++i) {
const entity = entities[i];
entityToolbarOptions.push({
text: entity.name,
onselect: setEntityFunction(entity),
});
}

Sandcastle.addToolbarMenu(entityToolbarOptions);

Sandcastle.addToggleButton("Shadows", viewer.shadows, function (
checked
) {
viewer.shadows = checked;
});

Sandcastle.addToggleButton("Entity Shadows", true, function (checked) {
const entityShadows = checked
? Cesium.ShadowMode.ENABLED
: Cesium.ShadowMode.DISABLED;
for (i = 0; i < entitiesLength; ++i) {
const entity = entities[i];
const visual = entity.model || entity.box || entity.ellipsoid;
visual.shadows = entityShadows;
}
});

Sandcastle.addToggleButton(
"Terrain Shadows",
viewer.terrainShadows === Cesium.ShadowMode.ENABLED,
function (checked) {
viewer.terrainShadows = checked
  ? Cesium.ShadowMode.ENABLED
  : Cesium.ShadowMode.DISABLED;
}
);

Sandcastle.addToggleButton(
"Soft Shadows",
shadowMap.softShadows,
function (checked) {
shadowMap.softShadows = checked;
}
);

Sandcastle.addToolbarMenu([
{
text: "Size : 2048",
onselect: function () {
  shadowMap.size = 2048;
},
},
{
text: "Size : 1024",
onselect: function () {
  shadowMap.size = 1024;
},
},
{
text: "Size : 512",
onselect: function () {
  shadowMap.size = 512;
},
},
{
text: "Size : 256",
onselect: function () {
  shadowMap.size = 256;
},
},
]);

setLocation(locations.Space);
// setEntity(cesiumAir);