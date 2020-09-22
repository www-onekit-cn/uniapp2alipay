export default class uni {

  ///////////////// basic ///应用级事件/////////////////////////////
  static base64ToArrayBuffer(base64) {
    base64 = base64.replace(/\s/g, '+');
    let commonContent = Buffer.from(base64, 'base64');
    return commonContent;
  }
  static arrayBufferToBase64(arrayBuffer) {
    let base64Content = Buffer.from(arrayBuffer).toString('base64');
    return base64Content;
  }

  static getUpdateManager(object) {
    return my.getUpdateManager(object);
  }
  static getLaunchOptionsSync(object) {
    return my.getLaunchOptionsSync(object);
  }

  static onPageNotFound(object) {
    console.alert("支付宝不支持");
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
    console.alert("支付宝不支持")
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

  static setEnableDebug(object) {//调试
    // return my.setEnableDebug(object);
    console.alert("本平台不支持setEnableDebug")
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
  /////////////////// Ext //////////////
  static getExtConfigSync(object) {
    // return my.getExtConfigSync(object)
    console.alert("本平台暂不支持getExtConfigSync")
  }
  static getExtConfig(object) {
    // return my.getExtConfig(object)
    console.alert("本平台暂不支持getExtConfig")
  }
  //////////////////// File //////////
  static getFileSystemManager(object) {
    // return my.getFileSystemManager(object)
    console.alert("本平台不支持getFileSystemManager")
  }
  static getFileInfo(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_FilePath = uni_object.filePath
    var uni_digestAlgorithm = uni_object.digestAlgorithm
    var uni_success = uni_object.success
    var uni_fail = uni_object.fail
    var uni_complete = uni_object.complete
    uni_object = null;
    ////
    var my_object = {}
    if (uni_FilePath) {
      my_object.apFilePath = uni_FilePath
    }
    if (uni_digestAlgorithm) {
      my_object.digestAlgorithm = uni_digestAlgorithm
    }
    if (uni_success) {
      my_object.success = uni_success
    }
    if (uni_fail) {
      my_object.fail = uni_fail
    }
    if (uni_complete) {
      my_object.complete = uni_complete
    }
    my_object.success = function (my_res) {
      if (uni_success) {
        uni_success(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my_object.fail = function (my_res) {
      if (uni_fail) {
        uni_fail(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my.getFileInfo(my_object)
  }
  //
  static removeSavedFile(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_FilePath = uni_object.filePath
    var uni_success = uni_object.success
    var uni_fail = uni_object.fail
    var uni_complete = uni_object.complete
    uni_object = null;
    ////
    var my_object = {}
    if (uni_FilePath) {
      my_object.apFilePath = uni_FilePath
    }
    if (uni_success) {
      my_object.success = uni_success
    }
    if (uni_fail) {
      my_object.fail = uni_fail
    }
    if (uni_complete) {
      my_object.complete = uni_complete
    }
    my_object.success = function (my_res) {
      if (uni_success) {
        uni_success(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my_object.fail = function (my_res) {
      if (uni_fail) {
        uni_fail(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my.removeSavedFile(my_object)
  }
  //
  static getSavedFileInfo(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_FilePath = uni_object.filePath
    var uni_success = uni_object.success
    var uni_fail = uni_object.fail
    var uni_complete = uni_object.complete
    uni_object = null;
    ////
    var my_object = {}
    if (uni_FilePath) {
      my_object.apFilePath = uni_FilePath
    }
    if (uni_success) {
      my_object.success = uni_success
    }
    if (uni_fail) {
      my_object.fail = uni_fail
    }
    if (uni_complete) {
      my_object.complete = uni_complete
    }
    my_object.success = function (my_res) {
      if (uni_success) {
        uni_success(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my_object.fail = function (my_res) {
      if (uni_fail) {
        uni_fail(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my.getSavedFileInfo(my_object)
  }
  //
  static getSavedFileList(object) {
    return my.getSavedFileList(object)
  }
  static openDocument(object) {
    return my.openDocument(object)
  }
  static saveFile(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_tempFilePath = uni_object.tempFilePath
    var uni_success = uni_object.success
    var uni_fail = uni_object.fail
    var uni_complete = uni_object.complete
    uni_object = null;
    ////
    var my_object = {}
    if (uni_tempFilePath) {
      my_object.apFilePath = uni_tempFilePath
    }
    if (uni_success) {
      my_object.success = uni_success
    }
    if (uni_fail) {
      my_object.fail = uni_fail
    }
    if (uni_complete) {
      my_object.complete = uni_complete
    }
    my_object.success = function (my_res) {
      if (uni_success) {
        uni_success(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my_object.fail = function (my_res) {
      if (uni_fail) {
        uni_fail(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my.saveFile(my_object)

  }
  //////////////// Network ///////////////
  static request(object) {
    const uni_url = object.url;
    const uni_data = object.data;
    const uni_method = object.method || "GET";
    const uni_success = object.success;
    const uni_fail = object.fail;
    const uni_complete = object.complete;
    //
    const my_object = {
      url: uni_url,
      success(my_res) {
        console.log(my_res)
        const uni_res = {};
        uni_res.data = my_res.data;
        if (uni_success) { uni_success(uni_res); }
        if (uni_complete) { uni_complete(uni_res); }
      },
      fail(my_res) {
        const uni_res = {};
        if (uni_fail) { uni_fail(uni_res); }
        if (uni_complete) { uni_complete(uni_res); }
      }
    };
    //
    if (uni_data) {
      my_object.data = uni_data;
    }
    //
    my.httpRequest(my_object)
  }
  ////////////////////////////////////////////////////////////
  static downloadFile(object) {
    return my.downloadFile(object)
  }
  static uploadFile(object) {
    my.uploadFile({
      url: object.url,
      filePath: object.filePath,
      fileName: object.name,
      fileType: object.fileType,
      header: object.header,
      formData: object.formData,
      success: object.success,
      fail: object.fail,
      complete: object.complete
    });

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
  static closeSocket(object) {//code//reason参数没完成
    return my.closeSocket(object)
  }

  ////////////////////////////////mDNS////////////////////////////////////////////
  static stopLocalServiceDiscovery(object) {
    // return my.stopLocalServiceDiscovery(object);
    console.alert("支付宝不支持");
  }
  static startLocalServiceDiscovery(object) {
    // return my.startLocalServiceDiscovery(object);
    console.alert("支付宝不支持");
  }
  static onLocalServiceResolveFail(callback) {
    // return my.onLocalServiceResolveFail(callback);
    console.alert("支付宝不支持");
  }
  static onLocalServiceLost(callback) {
    // return my.onLocalServiceLost(callback);
    console.alert("支付宝不支持");
  }
  static onLocalServiceFound(callback) {
    // return my.onLocalServiceFound(callback);
    console.alert("支付宝不支持");
  }
  static onLocalServiceDiscoveryStop(callback) {
    // return my.onLocalServiceDiscoveryStop(callback);
    console.alert("支付宝不支持");
  }
  static offLocalServiceResolveFail(callback) {
    // return my.offLocalServiceResolveFail(callback);
    console.alert("支付宝不支持");
  }
  static offLocalServiceLost(callback) {
    // return my.offLocalServiceLost(callback);
    console.alert("支付宝不支持");
  }
  static offLocalServiceFound(callback) {
    // return my.offLocalServiceFound(callback);
    console.alert("支付宝不支持");
  }
  static offLocalServiceDiscoveryStop(callback) {
    // return my.offLocalServiceDiscoveryStop(callback);
    console.alert("支付宝不支持");
  }
  ///////////////////////////UDP通信////////////////////////////////////////
  static createUDPSocket() {
    // return my.createUDPSocket();
    console.alert("支付宝不支持");
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
  static login = function (object) {
    var that = this;
    if (!object) {
      return my.login(object);
    }
    var object2 = {};
    object2.success = function (res) {
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
    object2.fail = function (res) {
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
  static requestPolymerPayment = function (object) {
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
  static getOpenData = function (object) {
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
  static getPhoneNumber = function (data, callback) {
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
    // return my.getAccountInfoSync(object)
    console.alert("本平台不支持getAccountInfoSync")
  }
  static getRunData(object) {//////////支付宝支持的运动
    return my.getRunData(object)
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
    return my.getAuthCode(object)
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
  static openCard(object) {//微信支持的卡券
    return my.openCard(object);
  }
  static openCardDetail(object) {//支付宝支持的卡券
    return my.openCardDetail(object)
  }
  static chooseInvoiceTitle(object) {
    // return my.chooseInvoiceTitle(object)
    console.alert("本平台不支持chooseInvoiceTitle")
  }
  static addCard = function (object) {
    return my.addCard(object);
  }

  static chooseInvoice(object) {
    return my.chooseInvoice(object)
  }

  static getWeRunData(object) {
    return my.getWeRunData(object)
  }
  static preloadPage(object){
   console.alert("本平台不支持")
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
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res)
      }

    });
  };
  ////////// Router ///////////////////////////////////////////
  static navigateTo(object) {//events参数未完成
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
  static share(object) {
    console.alert("本平台不支持")
  }
  static shareWithSystem(object) {
    console.alert("本平台不支持")

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
  static getLocation(object) {///altitude参数未完成
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
    console.alert("未开放")
  }
  static compressImage(object) {//src//quality参数未完成
    return my.compressImage(object)
  }
  static chooseMessageFile(object) {
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
    //未完成
    return my.saveVideoToPhotosAlbum(object)
  }
  static getVideoInfo(object) {
    return my.getVideoInfo(object)
  }
  static compressVideo(object) {
    return my.compressVideo(object)
  }
  static openVideoEditor(object) {
    return my.openVideoEditor(object)
  }
  ////////////////////////视频，相机，直播组件控制/////////都未完成//////////////////////
  static createVideoContext(object) {
    return my.createVideoContext(object)
  }
  static createCameraContext(cameraId, ui) {
    return new CameraContext(my.createCameraContext(cameraId));
  }
  static createLivePlayerContext(playerId, ui) {
    return new LivePlayerContext(my.createLivePlayerContext(playerId));
  }
  static createLivePusherContext(object) {
    return my.createLivePusherContext(object)
  }
  static createMediaContainer() {
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
  static getNetworkType = function (object) {
    return my.getNetworkType(object);
  }
  static _network = function (res) {
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
    return my.offAccelerometerChange(object);
  }
  static startAccelerometer(object) {
    return my.startAccelerometer(object);
  }
  //////////////////////罗盘////////////////////
  static onCompassChange(callback) {
    return my.onCompassChange(callback);
  }
  static stopCompass(object) {
    return my.offCompass(object);
  }
  static startCompass(object) {
    return my.startCompass(object);
  }
  //////////////////////陀螺仪////////////////////
  static onGyroscopeChange(object) {
    return my.onGyroscopeChange(object);
  }
  static stopGyroscope(object) {
    return my.offGyroscope(object);
  }
  static startGyroscope(object) {///未完成
    return my.startGyroscope(object);
  }
  //////////////////////电话////////////////////
  static makePhoneCall(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_phoneNumber = uni_object.getPhoneNumber
    var uni_success = uni_object.success
    var uni_fail = uni_object.fail
    var uni_complete = uni_object.complete
    uni_object = null;
    ////
    var my_object = {}
    if (uni_phoneNumber) {
      my_object.number = uni_phoneNumber
    }
    if (uni_success) {
      my_object.success = uni_success
    }
    if (uni_fail) {
      my_object.fail = uni_fail
    }
    if (uni_complete) {
      my_object.complete = uni_complete
    }
    my_object.success = function (my_res) {
      if (uni_success) {
        uni_success(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my_object.fail = function (my_res) {
      if (uni_fail) {
        uni_fail(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my.makePhoneCall(my_object)
  }
  /////////////////////////////////////
  static scanCode(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_onlyFromCamera = uni_object.onlyFromCamera
    var uni_scanType = uni_object.scanType
    var uni_success = uni_object.success
    var uni_fail = uni_object.fail
    var uni_complete = uni_object.complete
    uni_object = null;
    ////
    var my_object = {}
    if (uni_onlyFromCamera) {
      my_object.hideAlbum = uni_onlyFromCamera
    }
    if (uni_scanType) {
      my_object.scanType = uni_scanType
    }
    if (uni_success) {
      my_object.success = uni_success
    }
    if (uni_fail) {
      my_object.fail = uni_fail
    }
    if (uni_complete) {
      my_object.complete = uni_complete
    }
    my_object.success = function (my_res) {
      if (uni_success) {
        uni_success(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my_object.fail = function (my_res) {
      if (uni_fail) {
        uni_fail(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my.scan(my_object)
  }
  //
  static getClipboardData(object) {
    var object2 = {};
    if (object) {
      object2.success = function (res) {
        var result = { data: res.text };
        if (object.success) { object.success(result); }
        if (object.fail) { object.fail(result); }
      };
      object2.fail = function (res) {
        if (object.success) { object.success(res); }
        if (object.fail) { object.fail(res); }
      };
    }
    return my.getClipboard(object2);
  }
  static setClipboardData(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "data":
            object2.text = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    return my.setClipboard(object2);
  }
  //
  static setScreenBrightness(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_value = uni_object.value
    var uni_success = uni_object.success
    var uni_fail = uni_object.fail
    var uni_complete = uni_object.complete
    uni_object = null;
    ////
    var my_object = {}
    if (uni_value) {
      my_object.brightness = uni_value
    }
    if (uni_success) {
      my_object.success = uni_success
    }
    if (uni_fail) {
      my_object.fail = uni_fail
    }
    if (uni_complete) {
      my_object.complete = uni_complete
    }
    my_object.success = function (my_res) {
      if (uni_success) {
        uni_success(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my_object.fail = function (my_res) {
      if (uni_fail) {
        uni_fail(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my.setScreenBrightness(my_object)
  }
  ////////
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
  static vibrate(object) {
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
    return my.openBluetoothAdapter(object);
  }
  static onBluetoothDeviceFound(object) {
    return my.onBluetoothDeviceFound(object);
  }
  static onBluetoothAdapterStateChange(object) {
    return my.onBluetoothAdapterStateChange(object);
  }
  static getConnectedBluetoothDevices(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_services = uni_object.services
    var uni_success = uni_object.success
    var uni_fail = uni_object.fail
    var uni_complete = uni_object.complete
    uni_object = null;
    ////
    var my_object = {}
    if (uni_services) {
      my_object.deviceId = uni_services
    }
    if (uni_success) {
      my_object.success = uni_success
    }
    if (uni_fail) {
      my_object.fail = uni_fail
    }
    if (uni_complete) {
      my_object.complete = uni_complete
    }
    my_object.success = function (my_res) {
      if (uni_success) {
        uni_success(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my_object.fail = function (my_res) {
      if (uni_fail) {
        uni_fail(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my.getConnectedBluetoothDevices(my_object)
  }
  ////
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
  static setBLEMTU(object) {///未完成
    return my.setBLEMTU(object)
  }
  static writeBLECharacteristicValue(object) {
    return my.writeBLECharacteristicValue(object)
  }
  static readBLECharacteristicValue(object) {
    return my.readBLECharacteristicValue(object)
  }
  static onBLEConnectionStateChange(object) {
    return my.onBLEConnectionStateChanged(object)
  }
  static onBLECharacteristicValueChange(object) {//characteristicld//value参数未完成
    return my.onBLECharacteristicValueChange(object)
  }
  static notifyBLECharacteristicValueChange(object) {
    return my.notifyBLECharacteristicValueChange(object)
  }
  static getBLEDeviceServices(object) {
    return my.getBLEDeviceServices(object)
  }
  static getBLEDeviceRSSI(object) {////未完成
    return my.getBLEDeviceRSSI(object)
  }
  static getBLEDeviceCharacteristics(object) {
    return my.getBLEDeviceCharacteristics(object)
  }
  static createBLEConnection(object) {//timeout未完成
    return my.connectBLEDevice(object)
  }
  static closeBLEConnection(object) {
    return my.disconnectBLEDevice(object)
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

  //////////////Wi-Fi//////////支付宝不支持wifi///
  static stopWifi(object) {
    // return my.stopWifi(object);
    console.alert("支付宝暂不支持stopWifi")
  }
  static startWifi(object) {
    // return my.startWifi(object);
    console.alert("支付宝暂不支持startWifi")

  }
  static setWifiList(object) {
    // return my.setWifiList(object);
    console.alert("支付宝暂不支持setWifiList")

  }
  static onWifiConnected(object) {
    // return my.onWifiConnected(object);
    console.alert("支付宝暂不支持onWifiConnected")

  }
  static onGetWifiList(object) {
    // return my.onGetWifiList(object);
    console.alert("支付宝暂不支持onGetWifiList")

  }
  static offWifiConnected(callback) {
    // return my.offWifiConnected(callback)
    console.alert("支付宝暂不支持offWifiConnected")

  }
  static offGetWifiList(callback) {
    // return my.offGetWifiList(callback)
    console.alert("支付宝暂不支持offGetWifiList")

  }
  static getWifiList(object) {
    // return my.getWifiList(object);
    console.alert("支付宝暂不支持getWifiList")

  }
  static getConnectedWifi(object) {
    // return my.getConnectedWifi(object);
    console.alert("支付宝暂不支持getConnectedWifi")

  }
  static connectWifi(object) {
    // return my.connectWifi(object);
    console.alert("支付宝暂不支持connectWifi")

  }
  /////////////////电量/////////////////
  static getBatteryInfoSync() {
    return my.getBatteryInfoSync();
  }
  static getBatteryInfo() {
    return my.getBatteryInfo();
  }
  static getBatteryInfo(object) {
    return my.getBatteryInfo(object);
  }
  /////////////////////NFC/////////
  static stopHCE(object) {
    // return my.stopHCE(object);
    console.alert("支付宝暂不支持stopHCE")

  }
  static startHCE(object) {
    // return my.startHCE(object);
    console.alert("支付宝暂不支持startHCE")

  }
  static sendHCEMessage(object) {
    // return my.sendHCEMessage(object);
    console.alert("支付宝暂不支持sendHCEMessage")

  }
  static onHCEMessage(object) {
    // return my.onHCEMessage(object);
    console.alert("支付宝暂不支持onHCEMessage")

  }
  static offHCEMessage(callback) {
    // return my.offHCEMessage(callback)
    console.alert("支付宝暂不支持offHCEMessage")

  }
  static getNFCAdapter() {
    // return my.getNFCAdapter()
    console.alert("支付宝暂不支持getNFCAdapter")

  }
  static getHCEState(object) {
    // return my.getHCEState(object);
    console.alert("支付宝暂不支持getHCEState")

  }
  //////////////////设备方向/////////

  static onDeviceMotionChange(object) {
    // return my.onDeviceMotionChange(object);
    console.alert("支付宝暂不支持onDeviceMotionChange")

  }
  static stopDeviceMotionListening(object) {
    // return my.stopDeviceMotionListening(object);
    console.alert("支付宝暂不支持stopDeviceMotionListening")

  }
  static startDeviceMotionListening(object) {
    // return my.startDeviceMotionListening(object);
    console.alert("支付宝暂不支持startDeviceMotionListening")

  }
  static offDeviceMotionChange(callback) {
    // return my.offDeviceMotionChange(callback);
    console.alert("支付宝暂不支持offDeviceMotionChange")

  }
  ////////生物认证////////
  static startSoterAuthentication(object) {
    // return my.startSoterAuthentication(object)
    console.alert("支付宝暂不支持startSoterAuthentication")

  }
  static checkIsSupportSoterAuthentication(object) {
    // return my.checkIsSupportSoterAuthentication(object)
    console.alert("支付宝暂不支持checkIsSupportSoterAuthentication")

  }
  static checkIsSoterEnrolledInDevice(object) {
    // return my.checkIsSoterEnrolledInDevice(object)
    console.alert("支付宝暂不支持checkIsSoterEnrolledInDevice")

  }
  ////////////// Worker ///////////////
  static createWorker(path) {
    // return new WORKER(path);
    console.alert("支付宝暂不支持createWorker")
  }
  /////////////////键盘////////////////////
  static hideKeyboard(object) {
    return my.hideKeyboard(object)
  }
  static onKeyboardHeightChange(callback) {
    return my.onKeyboardHeightChange(callback)
  }
  //////////////////////设备完////////////////////


  ////////////// UI ////////////////
  static showActionSheet(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_itemList = uni_object.itemList
    var uni_itemColor = uni_object.itemColor
    var uni_success = uni_object.success
    var uni_fail = uni_object.fail
    var uni_complete = uni_object.complete
    uni_object = null;
    ////
    var my_object = {}
    if (uni_itemList) {
      my_object.items = uni_itemList
    }
    if (uni_itemColor) {
      my_object.itemColor = uni_itemColor
    }
    if (uni_success) {
      my_object.success = uni_success
    }
    if (uni_fail) {
      my_object.fail = uni_fail
    }
    if (uni_complete) {
      my_object.complete = uni_complete
    }
    my_object.success = function (my_res) {
      if (uni_success) {
        uni_success(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my_object.fail = function (my_res) {
      if (uni_fail) {
        uni_fail(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my.showActionSheet(my_object)
  }
  //
  static redirectTo(object) { return my.redirectTo(object) }
  static redirectTo(object) { return my.redirectTo(object) }

  static hideLoading() {
    return my.hideLoading()
  }
  static showLoading(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_title = uni_object.title
    var uni_success = uni_object.success
    var uni_fail = uni_object.fail
    var uni_complete = uni_object.complete
    uni_object = null;
    ////
    var my_object = {}
    if (uni_title) {
      my_object.content = uni_title
    }
    if (uni_success) {
      my_object.success = uni_success
    }
    if (uni_fail) {
      my_object.fail = uni_fail
    }
    if (uni_complete) {
      my_object.complete = uni_complete
    }
    my_object.success = function (my_res) {
      if (uni_success) {
        uni_success(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my_object.fail = function (my_res) {
      if (uni_fail) {
        uni_fail(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my.showLoading(my_object)
  }
  /////
  static hideToast() {
    return my.hideToast();
  }
  /////
  static showToast(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_title = uni_object.title
    var uni_icon = uni_object.icon
    var uni_success = uni_object.success
    var uni_fail = uni_object.fail
    var uni_complete = uni_object.complete
    uni_object = null;
    ////
    var my_object = {}
    if (uni_title) {
      my_object.content = uni_title
    }
    if (uni_icon) {
      my_object.type = uni_icon
    }
    if (uni_success) {
      my_object.success = uni_success
    }
    if (uni_fail) {
      my_object.fail = uni_fail
    }
    if (uni_complete) {
      my_object.complete = uni_complete
    }
    my_object.success = function (my_res) {
      if (uni_success) {
        uni_success(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my_object.fail = function (my_res) {
      if (uni_fail) {
        uni_fail(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my.showToast(my_object)
  }
  /***************/

  static showModal(uni_object) {
    if (!uni_object)
      var uni_title = uni_object.title
    var uni_content = uni_object.content
    var uni_showCancel = uni_object.showCancel
    var uni_cancelText = uni_object.cancelText
    var uni_cancelColor = uni_object.cancelColor
    var uni_confirmText = uni_object.confirmText
    var uni_confirmColor = uni_object.confirmColor
    var uni_success = uni_object.success
    var uni_fail = uni_object.fail
    var uni_complete = uni_object.complete
    uni_object = null;
    ////
    var my_object = {}
    if (uni_title) {
      my_object.title = uni_title
    }
    if (uni_content) {
      my_object.content = uni_content
    }
    if (uni_showCancel) {
      my_object.showCancel = uni_showCancel
    }
    if (uni_cancelText) {
      my_object.cancelButtonText = uni_cancelText
    }
    if (uni_cancelColor) {
      my_object.cancelColor = uni_cancelColor
    }
    if (uni_confirmText) {
      my_object.confirmButtonText = uni_confirmText
    }
    if (uni_confirmColor) {
      my_object.confirmColor = uni_confirmColor
    }
    if (uni_success) {
      my_object.success = uni_success
    }
    if (uni_fail) {
      my_object.fail = uni_fail
    }
    if (uni_complete) {
      my_object.complete = uni_complete
    }
    my_object.success = function (my_res) {
      if (uni_success) {
        uni_success(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my_object.fail = function (my_res) {
      if (uni_fail) {
        uni_fail(my_res);
      }
      if (uni_complete) {
        uni_complete(my_res);
      }
    };
    my.confirm(my_object)
  }
  //////////////////////////////////////
  static setNavigationBarColor(object) {
    // return my.setNavigationBarColor(object)
  }
  static hideNavigationBarLoading(object) {
    return my.hideNavigationBarLoading(object)
  }
  static showNavigationBarLoading(object) {
    return my.showNavigationBarLoading(object)
  }
  static hideHomeButton(object) {
    return my.hideBackHome(object)
  }
  ///////////////设置TabBar////////////////////
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
  static onTabBarMidButtonTap(CALLBACK) {
    console.alert("本平台暂不支持onTabBarMidButtonTap")
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
    // return my.offWindowResize(object)
    console.alert("支付宝不支持")
  }
  static onWindowResize(object) {
    // return my.onWindowResize(object)
    console.alert("支付宝不支持")

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
    // return my.createOffscreenCanvas();
    console.alert("本平台不支持createOffscreenCanvas")
  }
  static createContext() {
    return new Context();
  }
  static createCanvasContext(canvasId, ui) {
    return new CanvasContext(my.createCanvasContext(canvasId));
  }
  static canvasToTempFilePath(object) {
    // return my.canvasToTempFilePath(object);
    console.alert("本平台不支持canvasToTempFilePath")

  }
  static canvasPutImageData(object) {
    // return my.canvasPutImageData(object)
    console.alert("本平台不支持canvasPutImageData")


  };
  static canvasGetImageData(object) {
    // return my.canvasGetImageData(object)
    console.alert("本平台不支持canvasGetImageData")

  };
  ////////////////////////广告//////////////////
  static createRewardedVideoAd(object) {
    // return my.createRewardedVideoAd(object)
    console.alert("本平台不支持createRewardedVideoAd")
  }
  static createInterstitialAd(object) {
    // return my.createInterstitialAd(object)
    console.alert("本平台不支持createInterstitialAd")

  }

  static getProvider(object) {
    console.alert("本平台不支持getProvider")
  }
  ////////////////////////////////
  static requestSubscribeMessage(object) {
    // return requestSubscribeMessage(object)
    console.alert("本平台不支持requestSubscribeMessage")
  }
  //////////////////////////////////////////
  static setNavigationBarTitle(object) {
    return my.setNavigationBar(object);
  };


  static setTopBarText(object) {
    return my.setTopBarText(object)
  }
  static nextTick(object) {
    // return my.nextTick(object)
    console.alert("支付宝不支持nextTick")
  }
  static getMenuButtonBoundingClientRect(object) {
    // return my.getMenuButtonBoundingClientRect(object)
    console.alert("支付宝不支持getMenuButtonBoundingClientRect")

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



  static createInnerAudioContext(audioId, ui) {
    return new InnerAudioContext(my.createInnerAudioContext(audioId));
  }

  static createVideoContext(videoId, ui) {
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
  static getSubNVueById(subNvueId) {

  }
  static getCurrentSubNVue() {

  }
  static requireNativePlugin(PluginName) {

  }

  static report(eventName, options) {//统计
    return my.reportAnalytics(eventName, options)
  }

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


