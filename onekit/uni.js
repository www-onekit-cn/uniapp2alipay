export default class uni {
 
  ///////////////// basic ///应用级事件/////////////////////////////
  static base64ToArrayBuffer(base64) {
    return my.base64ToArrayBuffer(base64);
  }
  static arrayBufferToBase64(arrayBuffer) {
    return my.arrayBufferToBase64(arrayBuffer);
  }
  static getUpdateManager(object) {
    return my.getUpdateManager(object);
  }
  static getLaunchOptionsSync(object) {
    return my.getLaunchOptionsSync(object);
  }
 
  static onPageNotFound(object) {
    return my.onPageNotFound(object);
  }
  static onError(object) {
    return my.onError(object);
  }
  static onAppShow(object) {
    return my.onAppShow(object);
  }
  static onAppHide(object) {
    return my.onAppHide(object);
  }
  static offPageNotFound(object) {
    return my.offPageNotFound(object);
  }
  static offError(object) {
    return my.offError(object);
  }

  static offAppShow(object) {
    return my.offAppShow(object);
  }
  
  static offAppHide(object) {
    return my.offAppHide(object);
  }

  static setEnableDebug(object) {
    return my.setEnableDebug(object);
  }
  static getLogManager(object) {
    return my.getLogManager(object);
  }
//
  static writeBLECharacteristicValue(object) {
    return my.writeBLECharacteristicValue(object);
  }
  static readBLECharacteristicValue(object) {
    return my.readBLECharacteristicValue(object);
  }
  static onBLEConnectionStateChange(object) {
    return my.onBLEConnectionStateChange(object);
  }
  static onBLECharacteristicValueChange(object) {
    return my.onBLECharacteristicValueChange(object);
  }
  static notifyBLECharacteristicValueChange(object) {
    return my.notifyBLECharacteristicValueChange(object);
  }
  static getBLEDeviceServices(object) {
    return my.getBLEDeviceServices(object);
  }
  static getBLEDeviceCharacteristics(object) {
    return my.getBLEDeviceCharacteristics(object);
  }
  static createBLEConnection(object) {
    return my.createBLEConnection(object);
  }
  static closeBLEConnection(object) {
    return my.closeBLEConnection(object);
  }
 
  //

 
  /////////////////// Ext //////////////
  static getExtConfigSync(object) {
    return my.getExtConfigSync(object)
  }
  static getExtConfig(object) {
    return my.getExtConfig(object)
  }
  //////////////////// File //////////
  static getFileSystemManager(object) {
    return my.getFileSystemManager(object)
  }
  static getFileInfo(object) {
    return my.getFileInfo(object)
  }
  static removeSavedFile(object) {
    return my.removeSavedFile(object)
  }
  static getSavedFileInfo(object) {
    return my.getSavedFileInfo(object)
  }
  static getSavedFileList(object) {
    return my.getSavedFileList(object)
  }
  static openDocument(object) {
    return my.openDocument(object)
  }
  static saveFile(object) {
    return my.saveFile(object);
  } 
  //////////////// Network ///////////////
  static request(object) {
    return my.request(object);
  }
  static downloadFile(object) {
    return my.downloadFile(object)
  }
  static uploadFile(object) {
    return my.uploadFile(object)
  }
  //////////////////////////////websocket///////////////////////////////////////
  static connectSocket(object) {
    return my.connectSocket(object)
  }
  static onSocketError(object) {
    return my.onSocketError(object)
  }
  static onSocketMessage(object) {
    return my.onSocketMessage(object)
  }
  static onSocketClose(object) {
    return my.onSocketClose(object)
  }
  static onSocketOpen(object) {
    return my.connectSocket(object)
  }
  static sendSocketMessage(object) {
    return my.sendSocketMessage(object)
  }
  static closeSocket(object) {
    return my.closeSocket(object)
  }

  ////////////////////////////////mDNS////////////////////////////////////////////
  static stopLocalServiceDiscovery(object) {
    return my.stopLocalServiceDiscovery(object);
  }
  static startLocalServiceDiscovery(object) {
    return my.startLocalServiceDiscovery(object);
  }
  static onLocalServiceResolveFail(callback) {
    return my.onLocalServiceResolveFail(callback);
  }
  static onLocalServiceLost(callback) {
    return my.onLocalServiceLost(callback);
  }
  static onLocalServiceFound(callback) {
    return my.onLocalServiceFound(callback);
  }
  static onLocalServiceDiscoveryStop(callback) {
    return my.onLocalServiceDiscoveryStop(callback);
  }
  static offLocalServiceResolveFail(callback) {
    return my.offLocalServiceResolveFail(callback);
  }
  static offLocalServiceLost(callback) {
    return my.offLocalServiceLost(callback);
  }
  static offLocalServiceFound(callback) {
    return my.offLocalServiceFound(callback);
  }
  static offLocalServiceDiscoveryStop(callback) {
    return my.offLocalServiceDiscoveryStop(callback);
  }
  ///////////////////////////UDP通信////////////////////////////////////////
  static createUDPSocket(){
    return my.createUDPSocket();
  }
  ///////// Open Interface ///////////////////////////////////////////////
  static checkSession() {
    var now = new Date().getTime();
    return getApp().onekitmy._jscode && getApp().onekitmy._login && now <= getApp().onekitmy._login + 1000 * 60 * 60 * 24 * 3;
  }
  static checkSession(object) {
    if (uni.checkSession()) {
      if (object.success) {
        object.success();
      }
      if (object.complete) {
        object.complete();
      }

    } else {
      if (object.fail) {
        object.fail();
      }
      if (object.complete) {
        object.complete();
      }
    }
  }
  static login = function(object) {
    var that = this;
    if (!object) {
      return my.login(object);
    }
    var object2 = {};
    object2.success = function(res) {
      getApp().onekitmy._code = res.code;
      getApp().onekitmy._login = new Date().getTime();
      var result = {
        code: res.code
      };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    }
    object2.fail = function(res) {
      if (object.fail) {
        object.fail(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    }
    if (uni.checkSession()) {
      object2.success({
        code: getApp().onekitmy._code
      });
    } else {
      my.login(object2);
    }
  };
  static requestPolymerPayment = function(object) {
   uni.login({
      success(res) {
        var code = res.code;
        var url = getApp().onekitmy.server + "orderinfo";
        my.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: "POST",
          data: {
            orderInfo: JSON.stringify(object.orderInfo),
            code: code
          },
          success(res) {
            my.requestPayment({
              appId: res.data.appId,
              timeStamp: res.data.timeStamp,
              nonceStr: res.data.nonceStr,
              package: res.data.package,
              signType: res.data.signType,
              paySign: res.data.paySign,
            })
            if (object.success) {
              object.success(res);
            }
            if (object.complete) {
              object.complete(res);
            }
          },
          fail(res) {
            if (object.fail) {
              object.fail(res);
            }
          }
        })
      }
    });

  }
  static getUserInfo(data, callback, isAPI) {
    console.log(data);
   uni.login({
      success(res) {
        var code = res.code;
        var url = getApp().onekitmy.server + "userinfo";
        my.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: "POST",
          data: {
            isAPI,
            withCredentials: true,
            data: JSON.stringify(data),
            code: code
          },
          success(res) {
            callback(res.data);
          },
          fail(res) {
            console.error(res)
          }
        })
      }
    })

  }
  static getUserInfo(object) {
    getApp().onekitmy.getuserinfo = (data) => {
     uni._getUserInfo(data, (res) => {
        if (object.success) {
          object.success(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }, true);
    }
    my.navigateTo({
      url: '/onekitwx/page/getuserinfo/getuserinfo'
    })
  }
  static getOpenData = function(object) {
    function success(opendata) {
      var opendata = opendata.userInfo;
      getApp().onekitmy.opendata = opendata;
      getApp().onekitmy.opendataCallbacks = [];
      for (var cb = 0; cb < getApp().onekitmy.opendataCallbacks.length; cb++) {
        getApp().onekitmy.opendataCallbacks[cb](opendata);
      }
      if (object.success) {
        object.success(opendata);
      }
      if (object.complete) {
        object.complete(opendata);
      }
    }
    var opendata = getApp().onekitmy.opendata;
    if (opendata) {
      if (Object.keys(opendata) > 0) {
        object.success(opendata);
      } else {
        if (object.success) {
          getApp().onekitmy.opendataCallbacks.push(object.success);
        }
      }
      return;
    }
    getApp().onekitmy.opendata = {};
   uni.login({
      success(res) {
        var code = res.code;
       uni.getUserInfo({
          success(res) {
            var url = getApp().onekitmy.server + "userinfo";
            my.httpRequest({
              url: url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: "POST",
              data: {
                withCredentials: false,
                isAPI: false,
                code: code
              },
              success(res) {
                success(res.data);
              },
              fail(res) {
                console.log(res);
              }
            });
          }
        });
      }
    })

  };
  static getPhoneNumber = function(data, callback) {
   uni.login({
      success(res) {
        var code = res.code;
        var url = getApp().onekitmy.server + "phonenumber";
        my.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: "POST",
          data: {
            code,
            data: JSON.stringify(data)
          },
          success(res) {
            callback(res.data);
          }
        })
      }
    });
  }
  static navigateToMiniProgram(object) {
    return my.navigateToMiniProgram(object)
  }
  static navigateBackMiniProgram(object) {
    return my.navigateBackMiniProgram(object)
  }
  static getAccountInfoSync(object) {
    return my.getAccountInfoSync(object)
  }

  static reportMonitor(object) {
    return my.reportMonitor(object)
  }
  static reportAnalytics(object, eventName) {
    return my.reportAnalytics(object, eventName)
  }
  static requestPayment(object) {
    return my.requestPayment(object);
  }
  static authorize(object) {
    return my.authorize(object)
  }
  static openSetting(object) {
    return my.openSetting(object)
  }
  static getSetting(object) {
    return my.getSetting(object)
  }
  static chooseAddress(object) {
    return my.chooseAddress(object)
  }
  static openCard(object) {
    return my.openCard(object);
  }
  static chooseInvoiceTitle(object) {
    return my.chooseInvoiceTitle(object)
  }
  static addCard = function(object) {
    return my.addCard(object);
  }
  
  static chooseInvoice(object) {
    return my.chooseInvoice(object)
  }

  static getWeRunData(object) {
    return my.getWeRunData(object)
  }
  static reportMonitor(name, value) {
    var js_code = getApp().onekit.jscode;
    my.httpRequest({
      url: "http://192.168.0.106:8080/onekit_adapter/reportMonitor",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data: {
        js_code: js_code,
        name: name,
        number: value
      },
      success: (res) => {
        console.log("success")
        console.log(res.data);
      },
      fail: function(res) {
        console.log(res);
      },
      complete: function(res) {
        console.log(res)
      }

    });
  };
  ////////// Router ///////////////////////////////////////////
  static navigateTo(object) {
    return my.navigateTo(object);
  }
  static redirectTo(object) {
    return my.redirectTo(object);
  }
  static reLaunch(object) {
    return my.reLaunch(object);
  }
  static switchTab(object) {
    return my.switchTab(object);
  }
  static navigateBack(object) {
    return my.navigateBack(object);
  }
 
  ///////////// Share /////////////
  static updateShareMenu(object) {
    return my.updateShareMenu(object)
  }
  static showShareMenu(object) {
    return my.showShareMenu(object);
  }
  static hideShareMenu(object) {
    return my.hideShareMenu(object)
  }
  static getShareInfo(object) {
    return my.getShareInfo(object)
  }
  ////////数据缓存/////// Storage //////////////
  static setStorage(object) {
    return my.setStorage(object)
  }
  static setStorageSync(key, value) {
    return my.setStorageSync(key, value)
  }
  static getStorage(object) {
    return my.getStorage(object)
  }
  static getStorageSync(key) {
    return my.getStorageSync(key);
  }
  static getStorageInfo(object) {
    return my.getStorageInfo(object)
  }
  static getStorageInfoSync(object) {
    return my.getStorageInfoSync(object)
  }
  static removeStorage(object) {
    return my.removeStorage(object)
  }
  static removeStorageSync(object) {
    return my.removeStorageSync(object)
  }
  static clearStorage(object) {
    return my.clearStorage(object)
  }
  static clearStorageSync(object) {
    return my.clearStorageSync(object)
  }
    /////////位置/// Location ///////////////
    static getLocation(object) {
      return my.getLocation(object)
    }
    static chooseLocation(object) {
      return my.chooseLocation(object)
    }
    static openLocation(object) {
      return my.openLocation(object)
    }
    static createMapContext(object) {
      return my.createMapContext(object)
    }
 ///////////////////////媒体///////////// Media //////////////////////////////////////
                ///////////////////图片/////image///////////////////////////////
 static chooseImage(object) {
  return my.chooseImage(object);
}
static previewImage(object) {
  return my.previewImage(object)
}
static getImageInfo(object) {
  return my.getImageInfo(object)
}
static saveImageToPhotosAlbum(object) {
  return my.saveImageToPhotosAlbum(object)
}
 static compressImage(object) {
  return my.compressImage(object)
}
static chooseMessageFile(object){
  return my.chooseMessageFile(object)
}
                    /////////////////////////////录音/////////////////////////////////////////
static getRecorderManager(object) {
  return my.getRecorderManager(object)
}
                    ////////////////////////背景音频///////////////////////////////
static getBackgroundAudioManager(object) {
  return my.getBackgroundAudioManager(object)
}
                    ////////////////////////音频组件控制///////////////////////////////
static createInnerAudioContext(object) {
  return my.createInnerAudioContext(object)
}
                    ////////////////////////视频///////////////////////////////

static chooseVideo(object) {
  return my.chooseVideo(object)
}
static chooseMedia(object) {
  return my.chooseMedia(object)
}
static saveVideoToPhotosAlbum(object) {
  return my.saveVideoToPhotosAlbum(object)
}
static getVideoInfo(object){
  return my.getVideoInfo(object)
}
static compressVideo(object){
  return my.compressVideo(object)
}
static openVideoEditor(object){
  return my.openVideoEditor(object)
}
                    ////////////////////////视频，相机，直播组件控制///////////////////////////////
static createVideoContext(object) {
  return my.createVideoContext(object)
}
static createCameraContext(cameraId,ui) {
  return new CameraContext(my.createCameraContext(cameraId));
} 
static createLivePlayerContext(playerId,ui) {
  return new LivePlayerContext(my.createLivePlayerContext(playerId));
}
static createLivePusherContext(object) {
  return my.createLivePusherContext(object)
}
static createMediaContainer(){
  return my.createMediaContainer()
}
/////////////////////////系统信息//////////////////////////////
static getSystemInfo(object) {
  return my.getSystemInfo(object);
}
static getSystemInfoSync() {
  return my.getSystemInfoSync();
}
static canIUse(object) {
  return true;
}
//////////////////////////////内存/////////////////////////////
static onMemoryWarning(object) {
  return my.onMemoryWarning(object);
}
/////////////////////////////网络状态/////////////////////////////
static getNetworkType = function(object) {
  return my.getNetworkType(object);
}
static _network = function(res) {
  return my._network(object);
}
static onNetworkStatusChange(callback) {
  return my.onNetworkStatusChange(callback);
}
/////////////////////系统主题////////////////////

//////////////////////加速度计////////////////////
static onAccelerometerChange(callback) {
  return my.onAccelerometerChange(callback);
}
static stopAccelerometer(object) {
  return my.stopAccelerometer(object);
}
static startAccelerometer(object) {
  return my.startAccelerometer(object);
}
//////////////////////罗盘////////////////////
static onCompassChange(callback) {
  return my.onCompassChange(callback);
}
static stopCompass(object) {
  return my.stopCompass(object);
}
static startCompass(object) {
  return my.startCompass(object);
}
//////////////////////陀螺仪////////////////////
static onGyroscopeChange(object) {
  return my.onGyroscopeChange(object);
}
static stopGyroscope(object) {
  return my.stopGyroscope(object);
}
static startGyroscope(object) {
  return my.startGyroscope(object);
}
//////////////////////电话////////////////////
static makePhoneCall = function(object) {
  return my.makePhoneCall(object);
}
//
static scanCode = function(object) {
  return my.scanCode(object);
}
//
static getClipboardData(object) {
  return my.getClipboardData(object);
}
static setClipboardData(object) {
  return my.setClipboardData(object);
}
//
static setScreenBrightness(object) {
  return my.setScreenBrightness(object);
}
static setKeepScreenOn(object) {
  return my.setKeepScreenOn(object);
}
static getScreenBrightness(object) {
  return my.getScreenBrightness(object);
}
//
static onUserCaptureScreen(object) {
  return my.onUserCaptureScreen(object);
}
//
static vibrate(object){
  return my.vibrateShort(object);
  }

static vibrateLong(object) {
  return my.vibrateLong(object);
}
static vibrateShort(object) {
  return my.vibrateShort(object);
}
//
static addPhoneContact(object) {
  return my.addPhoneContact(object);
}
///////蓝牙//////
static stopBluetoothDevicesDiscovery(object) { 
   return my.stopBluetoothDevicesDiscovery(object);
  }
static startBluetoothDevicesDiscovery(object) {
  return my.startBluetoothDevicesDiscovery(object);
}
static openBluetoothAdapter(object) { 
   return my.openBluetoothAdapter(object); }
static onBluetoothDeviceFound(object) {
  return my.onBluetoothDeviceFound(object);
}
static onBluetoothAdapterStateChange(object) {
  return my.onBluetoothAdapterStateChange(object);
}
static getConnectedBluetoothDevices(object) {
  return my.getConnectedBluetoothDevices(object);
}
static getBluetoothDevices(object) {
  return my.getBluetoothDevices(object);
}
static getBluetoothAdapterState(object) {
  return my.getBluetoothAdapterState(object);
}
static closeBluetoothAdapter(object) {
  return my.closeBluetoothAdapter(object);
}
////低功耗蓝牙/////
static setBLEMTU(object){
  return my.setBLEMTU(object)
}
static writeBLECharacteristicValue(object){
  return my.writeBLECharacteristicValue(object)
}
static readBLECharacteristicValue(object){
  return my.readBLECharacteristicValue(object)
}
static onBLEConnectionStateChange(object){
  return my.onBLEConnectionStateChange(object)
}
static onBLECharacteristicValueChange(object){
  return my.onBLECharacteristicValueChange(object)
}
static notifyBLECharacteristicValueChange(object){
  return my.notifyBLECharacteristicValueChange(object)
}
static getBLEDeviceServices(object){
  return my.getBLEDeviceServices(object)
}
static getBLEDeviceRSSI(object){
  return my.getBLEDeviceRSSI(object)
}
static getBLEDeviceCharacteristics(object){
  return my.getBLEDeviceCharacteristics(object)
}
static createBLEConnection(object){
  return my.createBLEConnection(object)
}
static closeBLEConnection(object){
  return my.closeBLEConnection(object)
}

 ////////////// iBeacon //////////////////
 static onBeaconServiceChange(object) {
  return my.onBeaconServiceChange(object);
}
static onBeaconUpdate(object) {
  return my.onBeaconUpdate(object);
}
static getBeacons(object) {
  return my.getBeacons(object);
}
static stopBeaconDiscovery(object) {
  return my.stopBeaconDiscovery(object);
}
static startBeaconDiscovery(object) {
  return my.startBeaconDiscovery(object);
}
//////////////Wi-Fi/////////////
static stopWifi(object) {
  return my.stopWifi(object);
}
static startWifi(object) {
  return my.startWifi(object);
}
static setWifiList(object) {
  return my.setWifiList(object);
}
static onWifiConnected(object) {
  return my.onWifiConnected(object);
}
static onGetWifiList(object) {
  return my.onGetWifiList(object);
}
static offWifiConnected(callback){
  return my.offWifiConnected(callback)
}
static offGetWifiList(callback){
  return my.offGetWifiList(callback)
}
static getWifiList(object) {
  return my.getWifiList(object);
}
static getConnectedWifi(object) {
  return my.getConnectedWifi(object);
}
static connectWifi(object) {
  return my.connectWifi(object);
}
/////////////////电量/////////////////
static getBatteryInfoSync(object) {
  return my.getBatteryInfoSync(object);
}
static getBatteryInfo(result) {
  return my.getBatteryInfo(object);
}
static getBatteryInfo(object) {
  return my.getBatteryInfo(object);
}
/////////////////////NFC/////////
 static stopHCE(object) {
  return my.stopHCE(object);
}
static startHCE(object) {
  return my.startHCE(object);
}
static sendHCEMessage(object) {
  return my.sendHCEMessage(object);
}
static onHCEMessage(object) {
  return my.onHCEMessage(object);
}
static offHCEMessage(callback){
return my.offHCEMessage(callback)
}
static getNFCAdapter(){
  return my.getNFCAdapter()
}
static getHCEState(object) {
  return my.getHCEState(object);
}
///////////////////////////

static onDeviceMotionChange(object) {
  return my.onDeviceMotionChange(object);
}
static stopDeviceMotionListening(object) {
  return my.stopDeviceMotionListening(object);
}
static startDeviceMotionListening(object) {
  return my.startDeviceMotionListening(object);
}
static offDeviceMotionChange(callback) {
  return my.offDeviceMotionChange(callback);
}
////////生物认证////////
static startSoterAuthentication(object) {
  return my.startSoterAuthentication(object)
}
static checkIsSupportSoterAuthentication(object) {
  return my.checkIsSupportSoterAuthentication(object)
}
static checkIsSoterEnrolledInDevice(object) {
  return my.checkIsSoterEnrolledInDevice(object)
}
  ////////////// Worker ///////////////
  static createWorker(path) {
    return new WORKER(path);
  }
  /////////////////键盘////////////////////
  static hideKeyboard(object) {
    return my.hideKeyboard(object)
  }
  static onKeyboardHeightChange(callback){
    return my.onKeyboardHeightChange(callback)
  }
//////////////////////设备完////////////////////


  ////////////// UI ////////////////
  static showActionSheet(object) {
    return my.showActionSheet(object);
  }
 static redirectTo(object) { return my.redirectTo(object) }
   static redirectTo(object) { return my.redirectTo(object) }

  static hideLoading() {
    return my.hideLoading()
  }
  static showLoading(object) {
    return my.showLoading(object);
  }
  static hideToast() {
    return my.hideToast();
  }
  static showToast(object) {
    return my.showToast(object);
  }
  static showModal(object) {
    return my.showModal(object);
  }
  //////////////////////////////////////
  static setNavigationBarColor(object) {
    return my.setNavigationBarColor(object)
  }
  static hideNavigationBarLoading(object) {
    return my.hideNavigationBarLoading(object)
  }
  static showNavigationBarLoading(object) {
    return my.showNavigationBarLoading(object)
  }
  static hideHomeButton(object){
    return my.hideHomeButton(object)
  }
///////////////////////////////////
static setTabBarItem(object) {
  return my.setTabBarItem(object)
}
static setTabBarStyle(object) {
  return my.setTabBarStyle(object)
}
static hideTabBar(object) {
  return my.hideTabBar(object)
}
static showTabBar(object) {
  return my.showTabBar(object)
}
static removeTabBarBadge(object) {
  return my.removeTabBarBadge(object)
}
static setTabBarBadge(object) {
  return my.setTabBarBadge(object)
}
static hideTabBarRedDot(object) {
  return my.hideTabBarRedDot(object)
}
static showTabBarRedDot(object) {
  return my.showTabBarRedDot(object)
}
///////////////////////////////////////////////
static setBackgroundTextStyle(object) {
    return my.setBackgroundTextStyle(object)
  }
  static setBackgroundColor(object) {
    return my.setBackgroundColor(object)
  }
   /////////////////// animation //////////////////////////
   static createAnimation(object) {
    return my.createAnimation(object);
  }
/////////////////////滚动//////////////////
static pageScrollTo(object) {
  return my.pageScrollTo(object)
}
//////////////////窗口////////////////////////
static offWindowResize(object) {
  return my.offWindowResize(object)
}
static onWindowResize(object) {
  return my.onWindowResize(object)
}
/////////////////字体/////////////////////////
static loadFontFace(object) {
  return my.loadFontFace(object)
}
/////////////////下拉/////////////////////////
static PullDownRefresh() {
  return my.startPullDownRefresh();
}
static stopPullDownRefresh() {
  return my.stopPullDownRefresh();
}
static startPullDownRefresh(object) {
  return my.startPullDownRefresh(object);
}
//////////////////////////////////////////
static createOffscreenCanvas() {
  return my.createOffscreenCanvas();
}
static createContext() {
  return new Context();
}
static createCanvasContext(canvasId,ui) {
  return new CanvasContext(my.createCanvasContext(canvasId));
}
static canvasToTempFilePath(object) {
  return my.canvasToTempFilePath(object);
}
static canvasPutImageData(object) {
  return my.canvasPutImageData(object)
};
static canvasGetImageData(object) {
  return my.canvasGetImageData(object)
};
////////////////////////广告//////////////////
static createRewardedVideoAd(object){
  return my.createRewardedVideoAd(object)
}
static createInterstitialAd(object){
  return my.createInterstitialAd(object)
}
////////////////////////////////
static requestSubscribeMessage(object){
  return requestSubscribeMessage(object)
}
//////////////////////////////////////////
  static setNavigationBarTitle(object) {
    return my.setNavigationBarTitle(object);
  };

  
  static setTopBarText(object) {
    return my.setTopBarText(object)
  }
  static nextTick(object) {
    return my.nextTick(object)
  }
  static getMenuButtonBoundingClientRect(object) {
    return my.getMenuButtonBoundingClientRect(object)
  }
 

static stopVoice(object) {
  return my.stopVoice(object)
}
static pauseVoice(object) {
  return my.pauseVoice(object)
}
static playVoice(object) {
  return my.playVoice(object)
}
static setInnerAudioOption(object) {
  return my.setInnerAudioOption(object)
}
static getAvailableAudioSources(object) {
  return my.getAvailableAudioSources(object)
}

static createAudioContext(object) {
  return my.createAudioContext(object)
}
static onBackgroundAudioStop(object) {
  return my.onBackgroundAudioStop(object)
}
static onBackgroundAudioPause(object) {
  return my.onBackgroundAudioPause(object)
}
static onBackgroundAudioPlay(object) {
  return my.onBackgroundAudioPlay(object)
}
static stopBackgroundAudio(object) {
  return my.stopBackgroundAudio(object)
}
static seekBackgroundAudio(object) {
  return my.seekBackgroundAudio(object)
}
static pauseBackgroundAudio(object) {
  return my.pauseBackgroundAudio(object)
}
static playBackgroundAudio(object) {
  return my.playBackgroundAudio(object)
}
static getBackgroundAudioPlayerState(object) {
  return my.getBackgroundAudioPlayerState(object)
}



static createInnerAudioContext(audioId,ui) {
  return new InnerAudioContext(my.createInnerAudioContext(audioId));
}

static createVideoContext(videoId,ui) { 
  return new VideoContext(my.createVideoContext(videoId)); 
}





  ////////////// WXML ///////////////
  static createSelectorQuery(object) {
    return my.createSelectorQuery(object)
  }
  static createIntersectionObserver(object) {
    return my.createIntersectionObserver(object)
  }
  ///////////////////////////

  ///////////////////////////////////
  static createARCameraContext(object) {
    throw new Error("createARCameraContext�ݲ�֧��!!")
  }
}
uni.ai = {};
for (var api of ["ocrIdCard", "ocrBankCard", "ocrDrivingLicense", "ocrVehicleLicense", "textReview", "textToAudio", "imageAudit", "advancedGeneralIdentify", "objectDetectIdentify", "carClassify", "dishClassify", "logoClassify", "animalClassify", "plantClassify", "getVoiceRecognizer", "faceDetect", "faceMatch", "faceSearch", "facePersonVerify", "facePersonIdmatch", "faceLivenessSessioncode", "nlpLexerCustom"]) {
  ai_init(api);
}

function ai_init(api) {
 uni.ai[api] = (object) => {
    return uni_ai.run(api, object);
  }
}