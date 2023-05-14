
import { addScene, addS3mLayers } from "@/js/common/layerManagement.js"
import { actions, storeDate } from '@/js/store/store'   //局部状态管理
import EventManager from '@/js/common/eventManager/EventManager.js'   //事件管理
import { onBeforeUnmount } from 'vue'
import createTooltip from '@/js/tool/tooltip2'
import resource from '@/js/local/lang'  //语言资源
import { useViewer } from "@/js/store"
import { Viewer, FeatureDetection, Color, Cartesian3, BingMapsImageryProvider } from "cesium"
type Props = Partial<{
  sceneUrl: string
  // s3mScps: []
  afterInitviewer: () => void
  openingAnimation: boolean
}>

type ViewerWithEventManager = Viewer & {
  eventManager: EventManager
}

//初始化地球 
function initViewer(props: Props, callback?: () => void) {
  //初始化viewer
  // if (window.viewer) {
  //   window.viewer = null;
  // }
  
  // let isPCBroswer = (window.isPCBroswer = FeatureDetection.isPCBroswer());
  // if (isPCBroswer) {
  let bingUrl = "http://dev.virtualearth.net"
  let bingKey = "AjUmEACboFS3jnRO7DiuMP4IDhwCDl-IFyZ_hIOYYub9GPO2UqSQiPJkhLmYdcFL"
  let $v = useViewer()
  let viewer: Viewer = new Viewer("cesiumContainer", {
    imageryProvider: new BingMapsImageryProvider({
      url: bingUrl,
      key: bingKey
    }),
    selectionIndicator: false,
    timeline: false,
    baseLayerPicker: false,
    //shadows: true,
    infoBox: false,
    // geocoder: true,  //查询
    // skyBox: false, // 关闭天空盒会一同关闭太阳，场景会变暗
    navigationHelpButton: false,
    navigationInstructionsInitiallyVisible: false,
    // contextOptions: {
    //   requestWebgl2: true
    // }
  });
  // 太阳光默认打开
  // viewer.scene.globe.enableLighting = true;
  //隐藏时间线控件
  // document.getElementsByClassName(
  //   "cesium-viewer-timelineContainer"
  // )[0].style.visibility = "hidden"

  viewer.scene.debugShowFramesPerSecond = true //帧率
  viewer.scene.globe.baseColor = Color.BLACK // 没有影像图层时地球的底色
  // viewer.scene.globe.depthTestAgainstTerrain = false; //地形深度
  // window.viewer = viewer;
  // window.scene = viewer.scene;
  viewer.scene.moon.show = false
  viewer.eventManager = new EventManager(viewer)  //添加事件管理派发
  let widget = viewer.cesiumWidget
  actions.setIsViewer(true)  //初始化viewer标志 
  if (viewer.geocoder) {
    // 请开发者自行到supermap online官网（http://www.supermapol.com/）申请key
    viewer.geocoder.viewModel.geoKey = "fvV2osxwuZWlY0wJb8FEb2i5";
    // document.querySelector(".cesium-geocoder-input").placeholder =
    //   Resource.searchPlaceHolder;  //语言配置，后面维护
  }
  // if (!window.tooltip) {
  //   window.tooltip = createTooltip(viewer._element);
  // }

  function openingAnimation() {
    viewer.camera.flyTo({
      destination: new Cartesian3(
        6788287.844465209,
        -41980756.10214644,
        29619220.04004376
      ),
      duration: 0,
      complete: function () {
        viewer.camera.flyTo({
          destination: Cartesian3.fromDegrees(
            110.60396458865515,
            34.54408834959379,
            30644793.325518917
          ),
          duration: 5,
        });

      },
    });
  }

  // 添加图层
  try {
    if (props && props.openingAnimation) {
      openingAnimation();
    }
    if (props && props.afterInitviewer) {
      props.afterInitviewer();
    }
    if (props && props.sceneUrl) {
      addScene(props.sceneUrl, {}, (layer) => {
      })
    }
    // if (props && props.s3mScps) {
    //   addS3mLayers(props.s3mScps);
    // }
  } catch (e) {
    if (widget._showRenderLoopErrors) {
      let title = resource.showRenderLoopErrors;
      widget.showErrorPanel(title, undefined, e);
    }
  };
  $v.viewer = viewer

  // 销毁
  onBeforeUnmount(() => {
    viewer.destroy();
    // window.viewer = undefined;
    // window.scene = undefined;
  })
};

export default initViewer;