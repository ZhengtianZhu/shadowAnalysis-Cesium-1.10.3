<template>
   

    <div id="cesium-container">
    </div>
</template>

<script type="text/javascript" src="../../public/CesiumHeatmap/CesiumHeatmap.js"></script>

<script >
// import  CesiumHeatmap from 'CesiumHeatmap.js';

export default {
    name: 'ThreeDModel',
    components: {},
    async mounted() {
        this.initViewer()
        // this.addModel('/model/glb/Cesium_Air.glb', 3000);


        // too big
        // this.addModel('/model/glb/surveillance_cam.glb', 4100)

        // it works,direction_arrow
        // this.addModel('/model/glb/surveillance_camera4.glb', 100)

        //useful
        // this.addModel('/model/glb/direction_arrow.glb', 100)



    },
    methods: {
        async initViewer() {
            Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzM2RjYjJlOC01ZTQwLTQwODYtOTEwMy02M2U4OGEzYjQyNGUiLCJpZCI6MjI5NjUsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1ODI0NTYwMzF9.VG2_T9ry8EnBWAh4msJ3s6m2jW_5hgAZQvfEQDh-WQs"
            window.viewer = new window.Cesium.Viewer("cesium-container", {
                /* terrainProvider: new window.Cesium.CesiumTerrainProvider({
                    url: 'https://tiles.geovis.online/base/v1/terrain?token=fd2cddddcf70866a1a334a47b78b8cba1941af00c93b3a97e49c65ab5182922a',
                    requestWaterMask: true,
                    requestVertexNormals: true
                }), */


                imageryProvider: new window.Cesium.UrlTemplateImageryProvider({
                    url: " http://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",

                }),
                
                terrainProvider: Cesium.createWorldTerrain({
                    requestVertexNormals: true,
                    requestWaterMask: true
                }),
                /* terrainProvider: new Cesium.CesiumTerrainProvider({
                    url:"/data/sjzTerrain/"
                 }), */


                /* imageryProvider: new window.Cesium.ArcGisMapServerImageryProvider({
                    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
                }), */
                sceneMode: window.Cesium.SceneMode.SCENE3D,
                vrButton: false,
                animation: false,
                baseLayerPicker: false,
                geocoder: false,
                timeline: false,
                fullscreenButton: false,
                homeButton: false,
                creditContainer: document.createElement('div'),
                infoBox: false,
                navigationHelpButton: false,
                sceneModePicker: false,
                scene3DOnly: true,
                skyBox: new window.Cesium.SkyBox({
                    sources: {
                        positiveX: require('@/assets/images/tycho2t3_80_px.jpg'),
                        negativeX: require('@/assets/images/tycho2t3_80_mx.jpg'),
                        positiveY: require('@/assets/images/tycho2t3_80_py.jpg'),
                        negativeY: require('@/assets/images/tycho2t3_80_my.jpg'),
                        positiveZ: require('@/assets/images/tycho2t3_80_pz.jpg'),
                        negativeZ: require('@/assets/images/tycho2t3_80_mz.jpg'),
                    }
                })
            });
            window.viewer.scene.globe.depthTestAgainstTerrain = true;
            // this.digTerrain(114.22268842439114, 38.134979272096594);

            let bounds = {
                west: 147.13833844,
                east: 147.13856899,
                south: -41.43606916,
                north: -41.43582929
            };

            // init heatmap
            let heatMap = CesiumHeatmap.create(
                window.viewer, // your cesium viewer
                bounds, // bounds for heatmap layer
                {
                    // heatmap.js options go here
                    // maxOpacity: 0.3
                }
            );

            // random example data
            let data = [{ "x": 147.1383442264, "y": -41.4360048372, "value": 76 }, { "x": 147.1384363011, "y": -41.4360298848, "value": 63 }, { "x": 147.138368102, "y": -41.4358360603, "value": 1 }, { "x": 147.1385627739, "y": -41.4358799123, "value": 21 }, { "x": 147.1385138501, "y": -41.4359327669, "value": 28 }, { "x": 147.1385031219, "y": -41.4359730105, "value": 41 }, { "x": 147.1384127393, "y": -41.435928255, "value": 75 }, { "x": 147.1384551136, "y": -41.4359450132, "value": 3 }, { "x": 147.1384927196, "y": -41.4359158649, "value": 45 }, { "x": 147.1384938639, "y": -41.4358498311, "value": 45 }, { "x": 147.1385183299, "y": -41.4360213794, "value": 93 }, { "x": 147.1384007925, "y": -41.4359860133, "value": 46 }, { "x": 147.1383604844, "y": -41.4358298672, "value": 54 }, { "x": 147.13851025, "y": -41.4359098303, "value": 39 }, { "x": 147.1383874733, "y": -41.4358511035, "value": 34 }, { "x": 147.1384981796, "y": -41.4359355403, "value": 81 }, { "x": 147.1384504107, "y": -41.4360332348, "value": 39 }, { "x": 147.1385582664, "y": -41.4359788335, "value": 20 }, { "x": 147.1383967364, "y": -41.4360581999, "value": 35 }, { "x": 147.1383839615, "y": -41.436016316, "value": 47 }, { "x": 147.1384082712, "y": -41.4358423338, "value": 36 }, { "x": 147.1385092651, "y": -41.4358577623, "value": 69 }, { "x": 147.138360356, "y": -41.436046789, "value": 90 }, { "x": 147.138471893, "y": -41.4359184292, "value": 88 }, { "x": 147.1385605689, "y": -41.4360271359, "value": 81 }, { "x": 147.1383585714, "y": -41.4359362476, "value": 32 }, { "x": 147.1384939114, "y": -41.4358844253, "value": 67 }, { "x": 147.138466724, "y": -41.436019121, "value": 17 }, { "x": 147.1385504355, "y": -41.4360614056, "value": 49 }, { "x": 147.1383883832, "y": -41.4358733544, "value": 82 }, { "x": 147.1385670669, "y": -41.4359650236, "value": 25 }, { "x": 147.1383416534, "y": -41.4359310876, "value": 82 }, { "x": 147.138525285, "y": -41.4359394661, "value": 66 }, { "x": 147.1385487719, "y": -41.4360137656, "value": 73 }, { "x": 147.1385496029, "y": -41.4359187277, "value": 73 }, { "x": 147.1383989222, "y": -41.4358556562, "value": 61 }, { "x": 147.1385499424, "y": -41.4359149305, "value": 67 }, { "x": 147.138404523, "y": -41.4359563326, "value": 90 }, { "x": 147.1383883675, "y": -41.4359794855, "value": 78 }, { "x": 147.1383967187, "y": -41.435891185, "value": 15 }, { "x": 147.1384610005, "y": -41.4359044797, "value": 15 }, { "x": 147.1384688489, "y": -41.4360396127, "value": 91 }, { "x": 147.1384431875, "y": -41.4360684409, "value": 8 }, { "x": 147.1385411067, "y": -41.4360645847, "value": 42 }, { "x": 147.1385237178, "y": -41.4358843181, "value": 31 }, { "x": 147.1384406464, "y": -41.4360003831, "value": 51 }, { "x": 147.1384679169, "y": -41.4359950456, "value": 96 }, { "x": 147.1384194314, "y": -41.4358419739, "value": 22 }, { "x": 147.1385049792, "y": -41.4359574813, "value": 44 }, { "x": 147.1384097378, "y": -41.4358598672, "value": 82 }, { "x": 147.1384993219, "y": -41.4360352975, "value": 84 }, { "x": 147.1383640499, "y": -41.4359839518, "value": 81 }];
            let valueMin = 0;
            let valueMax = 100;

            // add data to heatmap
            heatMap.setWGS84Data(valueMin, valueMax, data);
            
            window.viewer.camera.setView({
                destination: Cesium.Cartesian3.fromDegrees(147.1383442264, -41.4360048372, 100.0), // 设置位置,set the positition of terrain data
                orientation: {
                    heading: Cesium.Math.toRadians(20.0), // 方向
                    pitch: Cesium.Math.toRadians(-90.0),// 倾斜角度
                    roll: 0
                }
            });
            /*             window.viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
                            url:"./data/sjzTerrain/"
                        }); */

            
            /* 
            let worldTerrain;
            try {
                worldTerrain = await Cesium.createWorldTerrainAsync();
                window.viewer.scene.terrainProvider = worldTerrain;
            } catch (error) {
            window.alert(`There was an error creating world terrain. ${error}`);
            } */
        },

        digTerrain(x,y){
            var position = Cesium.Cartographic.toCartesian(new Cesium.Cartographic.fromDegrees(x,y, 100));
            var distance = -3000.0; // 开挖距离

            

            var clippingPlaneCollection = new Cesium.ClippingPlaneCollection({
                modelMatrix: Cesium.Transforms.eastNorthUpToFixedFrame(position),
                planes: [
                    new Cesium.ClippingPlane(new Cesium.Cartesian3(1.0, 0.0, 0.0), distance),
                    new Cesium.ClippingPlane(new Cesium.Cartesian3(-1.0, 0.0, 0.0), distance),
                    new Cesium.ClippingPlane(new Cesium.Cartesian3(0.0, 1.0, 0.0), distance),
                    new Cesium.ClippingPlane(new Cesium.Cartesian3(0.0, -1.0, 0.0), distance)
                ],
                edgeWidth: 0.0,
                edgeColor: Cesium.Color.WHITE,
            });

            window.viewer.scene.globe.clippingPlanes = clippingPlaneCollection;


           
            window.viewer.camera.setView({
                destination: Cesium.Cartesian3.fromDegrees(x,y, 15000.0), // 设置位置,set the positition of terrain data
                orientation: {
                    heading: Cesium.Math.toRadians(20.0), // 方向
                    pitch: Cesium.Math.toRadians(-90.0),// 倾斜角度
                    roll: 0
                }
            });

        },
        addModel(url, height) {
            // window.viewer.entities.removeAll();
           

            const position = window.Cesium.Cartesian3.fromDegrees(
                120.059,
                36.328,
                height
            );
            const heading = window.Cesium.Math.toRadians(135);
            const pitch = 0;
            const roll = 0;
            const hpr = new window.Cesium.HeadingPitchRoll(heading, pitch, roll);
            const orientation = window.Cesium.Transforms.headingPitchRollQuaternion(
                position,
                hpr
            );
                      const entity = window.viewer.entities.add({
                            name: url,
                            position: position,
                            orientation: orientation,
                            model: {
                                uri: url,
                                minimumPixelSize: 128,
                                maximumScale: 20000,
                                scale: 10,
                                heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
                                // Cesium.HeightReference.CLAMP_TO_GROUND //设置模型贴地,
            
                            },
                        });
                        
                        window.viewer.trackedEntity = entity; 


        }
    }
}
</script>
  
<style>
#cesium-container {
    width: 100%;
    height: 100%;
}
</style>
  