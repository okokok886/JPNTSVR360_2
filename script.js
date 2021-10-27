TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "vfov": 180,
  "hfovMin": 55,
  "id": "panorama_CFE7D8B6_C1EF_E78B_4196_4813B1C66044",
  "class": "Panorama",
  "hfov": 360,
  "label": "JPNTS ShopFront",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3500,
       "width": 7000,
       "url": "media/panorama_CFE7D8B6_C1EF_E78B_4196_4813B1C66044_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_CFE7D8B6_C1EF_E78B_4196_4813B1C66044.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "bleachingDistance": 0.2,
      "yaw": 41.83,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_CFE7B8B6_C1EF_E78B_41D1_1DCF64AA38E5",
      "bleaching": 0.31,
      "pitch": 0.31
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_CFE7A8B6_C1EF_E78B_41DF_C871805ACD64",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.58,
        "yaw": -12.29,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 20,
           "url": "media/panorama_CFE7D8B6_C1EF_E78B_4196_4813B1C66044_0_HS_5_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.06
       }
      ],
      "data": {
       "label": "Inside"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -12.29,
        "hfov": 4.58,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 70,
           "width": 90,
           "url": "media/panorama_CFE7D8B6_C1EF_E78B_4196_4813B1C66044_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.06
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_CFE798B6_C1EF_E78B_41E0_336CC058B3FA",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -12.62,
        "hfov": 2.67,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 74,
           "width": 52,
           "url": "media/panorama_CFE7D8B6_C1EF_E78B_4196_4813B1C66044_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.25
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_CFE478B6_C1EF_E78B_41E7_63620B8247C7",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_B305FA21_BCFA_61DD_41DB_4048852E1051, {'paddingLeft':5,'borderSize':0,'iconLineWidth':5,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'pressedIconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconHeight':20,'iconColor':'#000000','pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','pressedIconWidth':20,'iconWidth':20,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_AD50BD37_BCFB_E226_41DE_5EC1EFEE1166, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 48.96,
        "hfov": 4.53,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 89,
           "width": 89,
           "url": "media/panorama_CFE7D8B6_C1EF_E78B_4196_4813B1C66044_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 12.1
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_CFE458B6_C1EF_E78B_41E5_512A01A12AE4",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 24.96,
        "yaw": -155.28,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 144,
           "url": "media/panorama_CFE7D8B6_C1EF_E78B_4196_4813B1C66044_0_HS_9_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.23
       }
      ],
      "data": {
       "label": "Drawing by Kin Tang"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -155.28,
        "hfov": 24.96,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 54,
           "width": 487,
           "url": "media/panorama_CFE7D8B6_C1EF_E78B_4196_4813B1C66044_0_HS_9_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.23
       }
      ]
     },
     {
      "rotationZ": 0,
      "yaw": 48.96,
      "popupMaxHeight": "90%",
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "pitch": 12.1,
      "showDuration": 500,
      "popupMaxWidth": "90%",
      "id": "popup_B305FA21_BCFA_61DD_41DB_4048852E1051",
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "rotationX": 0,
      "image": {
       "levels": [
        {
         "height": 576,
         "width": 1024,
         "url": "media/popup_B305FA21_BCFA_61DD_41DB_4048852E1051_0_1.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "hfov": 4.53
     }
    ],
    "thumbnailUrl": "media/panorama_CFE7D8B6_C1EF_E78B_4196_4813B1C66044_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "partial": false,
  "hfovMax": 130,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CFE7D8B6_C1EF_E78B_4196_4813B1C66044_t.jpg"
 },
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false,
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "manualZoomSpeed": 3,
  "id": "panorama_CFE7D8B6_C1EF_E78B_4196_4813B1C66044_camera",
  "automaticRotationSpeed": 12,
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 9,
  "initialPosition": {
   "pitch": -0.75,
   "class": "PanoramaCameraPosition",
   "yaw": 0.5,
   "hfov": 115
  },
  "manualRotationSpeed": 1313
 },
 {
  "vfov": 180,
  "hfovMin": 55,
  "id": "panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E",
  "class": "Panorama",
  "hfov": 360,
  "label": "JPNTS Inside",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D0FD3C9C_C198_1CCB_41C2_D041A5185CAC",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Inside"
      },
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_B1AC08EC_A3DD_245E_41E0_F8380DB4BF5B, {'paddingLeft':5,'borderSize':0,'iconLineWidth':5,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'pressedIconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconHeight':20,'iconColor':'#000000','pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','pressedIconWidth':20,'iconWidth':20,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_B11A40AF_A3DF_64DA_41E2_F30EF498A113, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -136.73,
        "hfov": 4.94,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 72,
           "width": 72,
           "url": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.15
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D0FD0C9C_C198_1CCB_41D0_D16D314275C1",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Inside"
      },
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_AE2A2237_A396_0F45_41E1_A41285FB071B, {'paddingLeft':5,'borderSize':0,'iconLineWidth':5,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'pressedIconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconHeight':20,'iconColor':'#000000','pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','pressedIconWidth':20,'iconWidth':20,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_AD673376_A396_0DC7_41E2_EE94EDE0272D, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -71.06,
        "hfov": 4.86,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 72,
           "width": 72,
           "url": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.86
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D0FD6C9C_C198_1CCB_41D8_33168A7DB34A",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_AC894BEB_A396_FCCD_41DC_1EAF1B285DA3, {'paddingLeft':5,'borderSize':0,'iconLineWidth':5,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'pressedIconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconHeight':20,'iconColor':'#000000','pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','pressedIconWidth':20,'iconWidth':20,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_AD679377_A396_0DC5_41C3_52BC141FBE46, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -13.64,
        "hfov": 5.16,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 72,
           "width": 72,
           "url": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.91
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D0FD7C9C_C198_1CCB_41CD_4B0649703A7F",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_AEAEEEA5_A392_7745_41DD_37938A7B570C, {'paddingLeft':5,'borderSize':0,'iconLineWidth':5,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'pressedIconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconHeight':20,'iconColor':'#000000','pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','pressedIconWidth':20,'iconWidth':20,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_AD66A378_A396_0DCB_41D5_3CA45E06A820, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -2.88,
        "hfov": 5,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 72,
           "width": 72,
           "url": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.78
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D0FCBC9C_C198_1CCB_41D8_72904F035CC7",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_ACA00DF6_A39E_F4C7_41DF_A3E764F467AD, {'paddingLeft':5,'borderSize':0,'iconLineWidth':5,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'pressedIconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconHeight':20,'iconColor':'#000000','pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','pressedIconWidth':20,'iconWidth':20,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_AD61E379_A396_0DCD_41DB_3A7ED56262B9, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 46.03,
        "hfov": 5.04,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 72,
           "width": 72,
           "url": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -14.15
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D0FC8C9C_C198_1CCB_41E0_D198B10CD35A",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Inside"
      },
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_ACAA2ED8_A392_F4CC_41E2_EAAD2F5CE3E5, {'paddingLeft':5,'borderSize':0,'iconLineWidth':5,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'pressedIconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconHeight':20,'iconColor':'#000000','pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','pressedIconWidth':20,'iconWidth':20,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_AD60137A_A396_0DCF_41BC_72D4037DAC63, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 139.38,
        "hfov": 5.09,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 72,
           "width": 72,
           "url": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_0_HS_9_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.83
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D0FCEC9D_C198_1CC5_41E8_2DFD65EDA8D5",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_ACAE78E0_A396_1CFB_41D7_463191763AE0, {'paddingLeft':5,'borderSize':0,'iconLineWidth':5,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'pressedIconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconHeight':20,'iconColor':'#000000','pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','pressedIconWidth':20,'iconWidth':20,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_AD636380_A396_0D3B_41C1_897DE129AE20, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -156.21,
        "hfov": 4.93,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 72,
           "width": 72,
           "url": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_0_HS_10_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.5
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D0FCCC9D_C198_1CC5_41DE_E6A4D8CA8445",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Inside"
      },
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_ACD4F095_A396_0B45_41E1_86856EB5350D, {'paddingLeft':5,'borderSize':0,'iconLineWidth':5,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'pressedIconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconHeight':20,'iconColor':'#000000','pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','pressedIconWidth':20,'iconWidth':20,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_AD63A381_A396_0D3D_41DC_DBBE6301C2FD, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 168.35,
        "hfov": 4.57,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 72,
           "width": 72,
           "url": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_0_HS_11_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -28.6
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D0FC0C9D_C198_1CC5_41D0_6C10F6531542",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_ACAFD365_A3B2_0DC5_41D9_E123D2A76110, {'paddingLeft':5,'borderSize':0,'iconLineWidth':5,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'pressedIconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconHeight':20,'iconColor':'#000000','pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','pressedIconWidth':20,'iconWidth':20,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_AD740B6F_A3B6_1DC5_41DD_15A34F23ED85, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 27.45,
        "hfov": 4.94,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 72,
           "width": 72,
           "url": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_0_HS_12_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.32
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D0FC7C9D_C198_1CC5_41E4_2C314DFA85C0",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -164.66,
        "hfov": 4.8,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 23,
           "width": 68,
           "url": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_0_HS_13_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.91
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D0FC5C9D_C198_1CC5_41B6_83B5BED5AE72",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 14.47,
        "yaw": -161.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 75,
           "url": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_0_HS_14_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.61
       }
      ],
      "data": {
       "label": "Shop Front "
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -161.81,
        "hfov": 14.47,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 43,
           "width": 204,
           "url": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_0_HS_14_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.61
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D0FFAC9D_C198_1CC5_41E1_57151540E7D3",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -0.71,
        "hfov": 5.05,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 71,
           "url": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_0_HS_15_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.38
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D0FF8C9D_C198_1CC5_41C9_1A93388B0E8F",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.05,
        "yaw": 1.11,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 60,
           "url": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_0_HS_16_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.84
       }
      ],
      "data": {
       "label": "Back Side"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 1.11,
        "hfov": 11.05,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 41,
           "width": 156,
           "url": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_0_HS_16_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.84
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D0FFEC9D_C198_1CC5_41BA_59EA0A611D66",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 24.93,
        "yaw": -164.76,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 145,
           "url": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_0_HS_18_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.05
       }
      ],
      "data": {
       "label": "Drawing by Kin Tang"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -164.76,
        "hfov": 24.93,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 38,
           "width": 346,
           "url": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_0_HS_18_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.05
       }
      ]
     },
     {
      "rotationZ": 0,
      "yaw": -136.73,
      "popupMaxHeight": "75%",
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "pitch": -18.15,
      "showDuration": 500,
      "popupMaxWidth": "75%",
      "id": "popup_B1AC08EC_A3DD_245E_41E0_F8380DB4BF5B",
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "rotationX": 0,
      "image": {
       "levels": [
        {
         "height": 1024,
         "width": 993,
         "url": "media/popup_B1AC08EC_A3DD_245E_41E0_F8380DB4BF5B_0_1.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "hfov": 4.79
     },
     {
      "rotationZ": 0,
      "yaw": -71.06,
      "popupMaxHeight": "75%",
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "pitch": -20.86,
      "showDuration": 500,
      "popupMaxWidth": "75%",
      "id": "popup_AE2A2237_A396_0F45_41E1_A41285FB071B",
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "rotationX": 0,
      "image": {
       "levels": [
        {
         "height": 770,
         "width": 1024,
         "url": "media/popup_AE2A2237_A396_0F45_41E1_A41285FB071B_0_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "hfov": 4.86
     },
     {
      "rotationZ": 0,
      "yaw": -13.64,
      "popupMaxHeight": "75%",
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "pitch": -6.91,
      "showDuration": 500,
      "popupMaxWidth": "75%",
      "id": "popup_AC894BEB_A396_FCCD_41DC_1EAF1B285DA3",
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "rotationX": 0,
      "image": {
       "levels": [
        {
         "height": 751,
         "width": 1024,
         "url": "media/popup_AC894BEB_A396_FCCD_41DC_1EAF1B285DA3_0_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "hfov": 5.16
     },
     {
      "rotationZ": 0,
      "yaw": -2.88,
      "popupMaxHeight": "75%",
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "pitch": -15.78,
      "showDuration": 500,
      "popupMaxWidth": "75%",
      "id": "popup_AEAEEEA5_A392_7745_41DD_37938A7B570C",
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "rotationX": 0,
      "image": {
       "levels": [
        {
         "height": 482,
         "width": 1024,
         "url": "media/popup_AEAEEEA5_A392_7745_41DD_37938A7B570C_0_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "hfov": 5
     },
     {
      "rotationZ": 0,
      "yaw": 46.03,
      "popupMaxHeight": "75%",
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "pitch": -14.15,
      "showDuration": 500,
      "popupMaxWidth": "75%",
      "id": "popup_ACA00DF6_A39E_F4C7_41DF_A3E764F467AD",
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "rotationX": 0,
      "image": {
       "levels": [
        {
         "height": 1024,
         "width": 646,
         "url": "media/popup_ACA00DF6_A39E_F4C7_41DF_A3E764F467AD_0_1.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "hfov": 3.18
     },
     {
      "rotationZ": 0,
      "yaw": 139.38,
      "popupMaxHeight": "75%",
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "pitch": -11.83,
      "showDuration": 500,
      "popupMaxWidth": "75%",
      "id": "popup_ACAA2ED8_A392_F4CC_41E2_EAAD2F5CE3E5",
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "rotationX": 0,
      "image": {
       "levels": [
        {
         "height": 702,
         "width": 1024,
         "url": "media/popup_ACAA2ED8_A392_F4CC_41E2_EAAD2F5CE3E5_0_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "hfov": 5.09
     },
     {
      "rotationZ": 0,
      "yaw": -156.21,
      "popupMaxHeight": "75%",
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "pitch": -18.5,
      "showDuration": 500,
      "popupMaxWidth": "75%",
      "id": "popup_ACAE78E0_A396_1CFB_41D7_463191763AE0",
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "rotationX": 0,
      "image": {
       "levels": [
        {
         "height": 768,
         "width": 1024,
         "url": "media/popup_ACAE78E0_A396_1CFB_41D7_463191763AE0_0_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "hfov": 4.93
     },
     {
      "rotationZ": 0,
      "yaw": 168.35,
      "popupMaxHeight": "75%",
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "pitch": -28.6,
      "showDuration": 500,
      "popupMaxWidth": "75%",
      "id": "popup_ACD4F095_A396_0B45_41E1_86856EB5350D",
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "rotationX": 0,
      "image": {
       "levels": [
        {
         "height": 724,
         "width": 1024,
         "url": "media/popup_ACD4F095_A396_0B45_41E1_86856EB5350D_0_1.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "hfov": 4.57
     },
     {
      "rotationZ": 0,
      "yaw": 27.45,
      "popupMaxHeight": "75%",
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "pitch": -18.32,
      "showDuration": 500,
      "popupMaxWidth": "75%",
      "id": "popup_ACAFD365_A3B2_0DC5_41D9_E123D2A76110",
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "rotationX": 0,
      "image": {
       "levels": [
        {
         "height": 1024,
         "width": 768,
         "url": "media/popup_ACAFD365_A3B2_0DC5_41D9_E123D2A76110_0_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "hfov": 3.7
     }
    ],
    "thumbnailUrl": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "partial": false,
  "hfovMax": 105,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_t.jpg"
 },
 {
  "manualZoomSpeed": 3,
  "id": "panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 8,
  "initialPosition": {
   "pitch": -0.75,
   "class": "PanoramaCameraPosition",
   "yaw": -2.26,
   "hfov": 93
  },
  "manualRotationSpeed": 1341
 },
 {
  "vfov": 180,
  "hfovMin": 85,
  "id": "panorama_B2EA2F5B_BCCA_9E6D_41B4_6025E5475420",
  "class": "Panorama",
  "hfov": 360,
  "label": "JPNTS Back",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2750,
       "width": 5500,
       "url": "media/panorama_B2EA2F5B_BCCA_9E6D_41B4_6025E5475420_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B2EA2F5B_BCCA_9E6D_41B4_6025E5475420.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B2EACF5B_BCCA_9E6D_41DA_4D1C61E0C253",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -44.99,
        "hfov": 6.3,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 49,
           "width": 110,
           "url": "media/panorama_B2EA2F5B_BCCA_9E6D_41B4_6025E5475420_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -29.45
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_ACC2E1DA_BCC6_A26E_41E1_26DE03B05766",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 16.1,
        "hfov": 12.58,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 109,
           "width": 199,
           "url": "media/panorama_B2EA2F5B_BCCA_9E6D_41B4_6025E5475420_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.04
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B1DB7177_BCF1_405D_41E5_F3BBAC8F56A3",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 47.99,
        "yaw": -155.96,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 68,
           "url": "media/panorama_B2EA2F5B_BCCA_9E6D_41B4_6025E5475420_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.28
       }
      ],
      "data": {
       "label": "Drawing by Kin Tang"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -155.96,
        "hfov": 47.99,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 172,
           "width": 735,
           "url": "media/panorama_B2EA2F5B_BCCA_9E6D_41B4_6025E5475420_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.28
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_B2EA2F5B_BCCA_9E6D_41B4_6025E5475420_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "partial": false,
  "hfovMax": 130,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B2EA2F5B_BCCA_9E6D_41B4_6025E5475420_t.jpg"
 },
 {
  "id": "panorama_B2EA2F5B_BCCA_9E6D_41B4_6025E5475420_camera",
  "automaticRotationSpeed": 49,
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 1.76,
   "class": "PanoramaCameraPosition",
   "yaw": -0.5,
   "hfov": 119
  },
  "manualRotationSpeed": 963
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_ACCD55F6_BCCE_E227_41E4_86D1E2937021",
  "class": "Panorama",
  "hfov": 360,
  "label": "JPNTS VR Back_2",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2750,
       "width": 5500,
       "url": "media/panorama_ACCD55F6_BCCE_E227_41E4_86D1E2937021_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_ACCD55F6_BCCE_E227_41E4_86D1E2937021.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_ACCD0749_BCFB_AE6D_41C2_D6B19591734D",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 16.1,
        "hfov": 12.58,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 109,
           "width": 199,
           "url": "media/panorama_ACCD55F6_BCCE_E227_41E4_86D1E2937021_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.04
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B3226D06_BD12_C1BC_41CF_DF2B2D3E8BD1",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 47.99,
        "yaw": -155.96,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 68,
           "url": "media/panorama_ACCD55F6_BCCE_E227_41E4_86D1E2937021_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.28
       }
      ],
      "data": {
       "label": "Drawing by Kin Tang"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -155.96,
        "hfov": 47.99,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 172,
           "width": 735,
           "url": "media/panorama_ACCD55F6_BCCE_E227_41E4_86D1E2937021_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.28
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_ACCD55F6_BCCE_E227_41E4_86D1E2937021_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "partial": false,
  "hfovMax": 130,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_ACCD55F6_BCCE_E227_41E4_86D1E2937021_t.jpg"
 },
 {
  "id": "panorama_ACCD55F6_BCCE_E227_41E4_86D1E2937021_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 2.01
  }
 },
 {
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_CFE7D8B6_C1EF_E78B_4196_4813B1C66044",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CFE7D8B6_C1EF_E78B_4196_4813B1C66044_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_B2EA2F5B_BCCA_9E6D_41B4_6025E5475420",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B2EA2F5B_BCCA_9E6D_41B4_6025E5475420_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ACCD55F6_BCCE_E227_41E4_86D1E2937021",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_ACCD55F6_BCCE_E227_41E4_86D1E2937021_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.playList_AF18568F_A345_6CD9_41E1_F6D4DC752F33, 0, 1)",
    "media": "this.panorama_CFE7D8B6_C1EF_E78B_4196_4813B1C66044",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CFE7D8B6_C1EF_E78B_4196_4813B1C66044_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.playList_AF18568F_A345_6CD9_41E1_F6D4DC752F33, 1, 2)",
    "media": "this.panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_D0FDCC9C_C198_1CCB_41E0_EA33206FA37E_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.playList_AF18568F_A345_6CD9_41E1_F6D4DC752F33, 2, 3)",
    "media": "this.panorama_B2EA2F5B_BCCA_9E6D_41B4_6025E5475420",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B2EA2F5B_BCCA_9E6D_41B4_6025E5475420_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.playList_AF18568F_A345_6CD9_41E1_F6D4DC752F33, 3, 0)",
    "media": "this.panorama_ACCD55F6_BCCE_E227_41E4_86D1E2937021",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_ACCD55F6_BCCE_E227_41E4_86D1E2937021_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "playList_AF18568F_A345_6CD9_41E1_F6D4DC752F33",
  "class": "PlayList"
 },
 {
  "id": "ImageResource_D0465329_C1F8_05CD_41D0_D315702BE74E",
  "levels": [
   {
    "height": 2339,
    "width": 3309,
    "url": "media/zoomImage_CE9E6AAF_C198_04C5_41D8_EA6829A72106_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1447,
    "width": 2048,
    "url": "media/zoomImage_CE9E6AAF_C198_04C5_41D8_EA6829A72106_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 723,
    "width": 1024,
    "url": "media/zoomImage_CE9E6AAF_C198_04C5_41D8_EA6829A72106_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 361,
    "width": 512,
    "url": "media/zoomImage_CE9E6AAF_C198_04C5_41D8_EA6829A72106_0_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 {
  "duration": 500,
  "easing": "cubic_in",
  "id": "FadeInEffect_D0463329_C1F8_05CD_41DD_30BFE8A5CE58",
  "class": "FadeInEffect"
 },
 {
  "duration": 500,
  "easing": "cubic_out",
  "id": "FadeOutEffect_D0462329_C1F8_05CD_41D2_171454C366DC",
  "class": "FadeOutEffect"
 },
 "this.popup_B305FA21_BCFA_61DD_41DB_4048852E1051",
 {
  "id": "ImageResource_AD50BD37_BCFB_E226_41DE_5EC1EFEE1166",
  "levels": [
   {
    "height": 1080,
    "width": 1920,
    "url": "media/popup_B305FA21_BCFA_61DD_41DB_4048852E1051_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 576,
    "width": 1024,
    "url": "media/popup_B305FA21_BCFA_61DD_41DB_4048852E1051_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 288,
    "width": 512,
    "url": "media/popup_B305FA21_BCFA_61DD_41DB_4048852E1051_0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "this.popup_B1AC08EC_A3DD_245E_41E0_F8380DB4BF5B",
 {
  "id": "ImageResource_B11A40AF_A3DF_64DA_41E2_F30EF498A113",
  "levels": [
   {
    "height": 1206,
    "width": 1170,
    "url": "media/popup_B1AC08EC_A3DD_245E_41E0_F8380DB4BF5B_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1024,
    "width": 993,
    "url": "media/popup_B1AC08EC_A3DD_245E_41E0_F8380DB4BF5B_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 512,
    "width": 496,
    "url": "media/popup_B1AC08EC_A3DD_245E_41E0_F8380DB4BF5B_0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "this.popup_AE2A2237_A396_0F45_41E1_A41285FB071B",
 {
  "id": "ImageResource_AD673376_A396_0DC7_41E2_EE94EDE0272D",
  "levels": [
   {
    "height": 2752,
    "width": 3656,
    "url": "media/popup_AE2A2237_A396_0F45_41E1_A41285FB071B_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1541,
    "width": 2048,
    "url": "media/popup_AE2A2237_A396_0F45_41E1_A41285FB071B_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 770,
    "width": 1024,
    "url": "media/popup_AE2A2237_A396_0F45_41E1_A41285FB071B_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 385,
    "width": 512,
    "url": "media/popup_AE2A2237_A396_0F45_41E1_A41285FB071B_0_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "this.popup_AC894BEB_A396_FCCD_41DC_1EAF1B285DA3",
 {
  "id": "ImageResource_AD679377_A396_0DC5_41C3_52BC141FBE46",
  "levels": [
   {
    "height": 1652,
    "width": 2252,
    "url": "media/popup_AC894BEB_A396_FCCD_41DC_1EAF1B285DA3_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1502,
    "width": 2048,
    "url": "media/popup_AC894BEB_A396_FCCD_41DC_1EAF1B285DA3_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 751,
    "width": 1024,
    "url": "media/popup_AC894BEB_A396_FCCD_41DC_1EAF1B285DA3_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 375,
    "width": 512,
    "url": "media/popup_AC894BEB_A396_FCCD_41DC_1EAF1B285DA3_0_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "this.popup_AEAEEEA5_A392_7745_41DD_37938A7B570C",
 {
  "id": "ImageResource_AD66A378_A396_0DCB_41D5_3CA45E06A820",
  "levels": [
   {
    "height": 1134,
    "width": 2409,
    "url": "media/popup_AEAEEEA5_A392_7745_41DD_37938A7B570C_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 964,
    "width": 2048,
    "url": "media/popup_AEAEEEA5_A392_7745_41DD_37938A7B570C_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 482,
    "width": 1024,
    "url": "media/popup_AEAEEEA5_A392_7745_41DD_37938A7B570C_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 241,
    "width": 512,
    "url": "media/popup_AEAEEEA5_A392_7745_41DD_37938A7B570C_0_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "this.popup_ACA00DF6_A39E_F4C7_41DF_A3E764F467AD",
 {
  "id": "ImageResource_AD61E379_A396_0DCD_41DB_3A7ED56262B9",
  "levels": [
   {
    "height": 1528,
    "width": 965,
    "url": "media/popup_ACA00DF6_A39E_F4C7_41DF_A3E764F467AD_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1024,
    "width": 646,
    "url": "media/popup_ACA00DF6_A39E_F4C7_41DF_A3E764F467AD_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 512,
    "width": 323,
    "url": "media/popup_ACA00DF6_A39E_F4C7_41DF_A3E764F467AD_0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "this.popup_ACAA2ED8_A392_F4CC_41E2_EAAD2F5CE3E5",
 {
  "id": "ImageResource_AD60137A_A396_0DCF_41BC_72D4037DAC63",
  "levels": [
   {
    "height": 2768,
    "width": 4032,
    "url": "media/popup_ACAA2ED8_A392_F4CC_41E2_EAAD2F5CE3E5_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1405,
    "width": 2048,
    "url": "media/popup_ACAA2ED8_A392_F4CC_41E2_EAAD2F5CE3E5_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 702,
    "width": 1024,
    "url": "media/popup_ACAA2ED8_A392_F4CC_41E2_EAAD2F5CE3E5_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 351,
    "width": 512,
    "url": "media/popup_ACAA2ED8_A392_F4CC_41E2_EAAD2F5CE3E5_0_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "this.popup_ACAE78E0_A396_1CFB_41D7_463191763AE0",
 {
  "id": "ImageResource_AD636380_A396_0D3B_41C1_897DE129AE20",
  "levels": [
   {
    "height": 3024,
    "width": 4032,
    "url": "media/popup_ACAE78E0_A396_1CFB_41D7_463191763AE0_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1536,
    "width": 2048,
    "url": "media/popup_ACAE78E0_A396_1CFB_41D7_463191763AE0_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 768,
    "width": 1024,
    "url": "media/popup_ACAE78E0_A396_1CFB_41D7_463191763AE0_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 384,
    "width": 512,
    "url": "media/popup_ACAE78E0_A396_1CFB_41D7_463191763AE0_0_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "this.popup_ACD4F095_A396_0B45_41E1_86856EB5350D",
 {
  "id": "ImageResource_AD63A381_A396_0D3D_41DC_DBBE6301C2FD",
  "levels": [
   {
    "height": 828,
    "width": 1170,
    "url": "media/popup_ACD4F095_A396_0B45_41E1_86856EB5350D_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 724,
    "width": 1024,
    "url": "media/popup_ACD4F095_A396_0B45_41E1_86856EB5350D_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 362,
    "width": 512,
    "url": "media/popup_ACD4F095_A396_0B45_41E1_86856EB5350D_0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "this.popup_ACAFD365_A3B2_0DC5_41D9_E123D2A76110",
 {
  "id": "ImageResource_AD740B6F_A3B6_1DC5_41DD_15A34F23ED85",
  "levels": [
   {
    "height": 4032,
    "width": 3024,
    "url": "media/popup_ACAFD365_A3B2_0DC5_41D9_E123D2A76110_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 2048,
    "width": 1536,
    "url": "media/popup_ACAFD365_A3B2_0DC5_41D9_E123D2A76110_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1024,
    "width": 768,
    "url": "media/popup_ACAFD365_A3B2_0DC5_41D9_E123D2A76110_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 512,
    "width": 384,
    "url": "media/popup_ACAFD365_A3B2_0DC5_41D9_E123D2A76110_0_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
], "children": [
 {
  "progressBackgroundOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBottom": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 10,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "shadow": false,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "progressHeight": 10,
  "paddingRight": 0,
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "progressLeft": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "borderSize": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipBorderColor": "#767676",
  "class": "ViewerArea",
  "playbackBarProgressOpacity": 1,
  "toolTipPaddingTop": 4,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarRight": 0,
  "minHeight": 50,
  "transitionDuration": 500,
  "playbackBarBorderSize": 0,
  "progressBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarLeft": 0,
  "toolTipBorderRadius": 3,
  "paddingTop": 0,
  "paddingLeft": 0,
  "toolTipShadowSpread": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "width": "100%",
  "playbackBarHeadShadowBlurRadius": 3,
  "height": "100%",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipBorderSize": 1,
  "playbackBarHeadHeight": 15,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "progressBackgroundColorDirection": "vertical",
  "toolTipDisplayTime": 600,
  "toolTipPaddingLeft": 6,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBorderRadius": 0,
  "top": 0,
  "propagateClick": false,
  "minWidth": 100,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarBottom": 5,
  "progressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderRadius": 0,
  "id": "MainViewer",
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowColor": "#000000",
  "left": 0,
  "playbackBarHeadOpacity": 1,
  "transitionMode": "blending",
  "toolTipFontFamily": "Arial",
  "toolTipPaddingBottom": 4,
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBorderColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0
 },
 {
  "children": [
   {
    "paddingLeft": 20,
    "itemThumbnailBorderRadius": 6,
    "layout": "horizontal",
    "minHeight": 0,
    "itemThumbnailHeight": 47,
    "itemVerticalAlign": "middle",
    "paddingTop": 10,
    "backgroundColor": [
     "#000000"
    ],
    "itemHorizontalAlign": "center",
    "itemPaddingLeft": 3,
    "itemBackgroundColorDirection": "vertical",
    "itemOpacity": 1,
    "width": 533,
    "itemThumbnailShadowVerticalLength": 3,
    "gap": 0,
    "height": 103,
    "itemThumbnailShadowOpacity": 0.8,
    "itemLabelHorizontalAlign": "center",
    "itemBackgroundColor": [],
    "itemThumbnailScaleMode": "fit_outside",
    "backgroundColorRatios": [
     0
    ],
    "scrollBarWidth": 10,
    "itemLabelFontWeight": "normal",
    "shadow": false,
    "itemLabelFontFamily": "Arial",
    "paddingBottom": 10,
    "itemThumbnailShadowSpread": 1,
    "itemPaddingRight": 3,
    "paddingRight": 20,
    "itemThumbnailOpacity": 1,
    "verticalAlign": "top",
    "itemThumbnailShadowColor": "#000000",
    "playList": "this.playList_AF18568F_A345_6CD9_41E1_F6D4DC752F33",
    "itemBorderRadius": 0,
    "itemPaddingTop": 3,
    "maxHeight": 600,
    "itemLabelTextDecoration": "none",
    "borderSize": 0,
    "scrollBarColor": "#FFFFFF",
    "scrollBarMargin": 2,
    "itemLabelFontStyle": "normal",
    "propagateClick": false,
    "itemPaddingBottom": 3,
    "scrollBarOpacity": 0.5,
    "itemThumbnailShadow": true,
    "selectedItemLabelFontWeight": "bold",
    "class": "ThumbnailList",
    "data": {
     "name": "ThumbnailList446"
    },
    "itemMode": "normal",
    "horizontalAlign": "left",
    "itemThumbnailShadowHorizontalLength": 3,
    "minWidth": 0,
    "itemLabelPosition": "bottom",
    "itemBackgroundOpacity": 0,
    "itemBackgroundColorRatios": [],
    "itemLabelGap": 10,
    "maxWidth": 800,
    "backgroundOpacity": 0.2,
    "itemThumbnailShadowBlurRadius": 4,
    "itemLabelFontColor": "#FFFFFF",
    "backgroundColorDirection": "vertical",
    "borderRadius": 5,
    "itemLabelFontSize": 14,
    "scrollBarVisible": "rollOver"
   }
  ],
  "layout": "horizontal",
  "paddingTop": 0,
  "overflow": "visible",
  "gap": 10,
  "height": 155,
  "creationPolicy": "delayed",
  "shadow": false,
  "scrollBarWidth": 10,
  "paddingRight": 0,
  "verticalAlign": "bottom",
  "bottom": 0,
  "scrollBarMargin": 2,
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "borderSize": 0,
  "paddingBottom": 0,
  "class": "Container",
  "data": {
   "name": "Container445"
  },
  "minWidth": 20,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "left": 0,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "minHeight": 20,
  "backgroundOpacity": 0,
  "paddingLeft": 0,
  "right": 0,
  "scrollBarVisible": "rollOver"
 },
 {
  "paddingTop": 0,
  "width": "5.308%",
  "url": "skin/Image_BEB307AF_B092_B20F_41E3_71603516BB92.png",
  "scaleMode": "fit_inside",
  "shadow": false,
  "paddingRight": 0,
  "height": "12.5%",
  "top": "0.1%",
  "click": "this.showPopupImage(this.ImageResource_D0465329_C1F8_05CD_41D0_D315702BE74E, null, '90%', '90%', this.FadeInEffect_D0463329_C1F8_05CD_41DD_30BFE8A5CE58, this.FadeOutEffect_D0462329_C1F8_05CD_41D2_171454C366DC, {'paddingLeft':5,'borderSize':0,'iconLineWidth':5,'borderColor':'#000000','backgroundOpacity':0.3,'rollOverIconLineWidth':5,'paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'pressedIconLineWidth':5,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverIconHeight':20,'iconColor':'#000000','pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','pressedIconWidth':20,'iconWidth':20,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
  "verticalAlign": "middle",
  "maxHeight": 987,
  "borderSize": 0,
  "propagateClick": false,
  "id": "Image_BEB307AF_B092_B20F_41E3_71603516BB92",
  "paddingBottom": 0,
  "class": "Image",
  "data": {
   "name": "Image2269"
  },
  "minWidth": 1,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "left": "0.06%",
  "minHeight": 1,
  "backgroundOpacity": 0,
  "paddingLeft": 0,
  "maxWidth": 1000
 },
 {
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "backgroundColor": [
   "#000000"
  ],
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "backgroundColorRatios": [
   0
  ],
  "shadow": false,
  "paddingBottom": 0,
  "paddingRight": 0,
  "top": 0,
  "bottom": 0,
  "propagateClick": false,
  "visible": false,
  "borderSize": 0,
  "id": "veilPopupPanorama",
  "class": "UIComponent",
  "data": {
   "name": "UIComponent1569"
  },
  "minWidth": 0,
  "left": 0,
  "borderRadius": 0,
  "minHeight": 0,
  "backgroundOpacity": 0.55,
  "paddingLeft": 0,
  "right": 0
 },
 {
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "backgroundColor": [],
  "backgroundColorRatios": [],
  "scaleMode": "custom",
  "shadow": false,
  "paddingBottom": 0,
  "paddingRight": 0,
  "top": 0,
  "bottom": 0,
  "propagateClick": false,
  "visible": false,
  "borderSize": 0,
  "id": "zoomImagePopupPanorama",
  "class": "ZoomImage",
  "data": {
   "name": "ZoomImage1570"
  },
  "minWidth": 0,
  "left": 0,
  "borderRadius": 0,
  "minHeight": 0,
  "backgroundOpacity": 1,
  "paddingLeft": 0,
  "right": 0
 },
 {
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "borderColor": "#000000",
  "paddingTop": 5,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "iconLineWidth": 5,
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "iconHeight": 20,
  "pressedIconColor": "#888888",
  "gap": 5,
  "fontSize": 12,
  "mode": "push",
  "layout": "horizontal",
  "fontFamily": "Arial",
  "iconWidth": 20,
  "fontStyle": "normal",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": false,
  "paddingBottom": 5,
  "paddingRight": 5,
  "fontWeight": "normal",
  "top": 10,
  "verticalAlign": "middle",
  "borderSize": 0,
  "fontColor": "#FFFFFF",
  "propagateClick": false,
  "cursor": "hand",
  "visible": false,
  "id": "closeButtonPopupPanorama",
  "class": "CloseButton",
  "data": {
   "name": "CloseButton1571"
  },
  "minWidth": 0,
  "iconColor": "#000000",
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "shadowSpread": 1,
  "borderRadius": 0,
  "iconBeforeLabel": true,
  "rollOverIconColor": "#666666",
  "minHeight": 0,
  "backgroundOpacity": 0.3,
  "paddingLeft": 5,
  "label": "",
  "textDecoration": "none",
  "right": 10
 }
], 
 "start": "this.syncPlaylists([this.playList_AF18568F_A345_6CD9_41E1_F6D4DC752F33,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "paddingTop": 0,
 "layout": "absolute",
 "overflow": "visible",
 "width": "100%",
 "gap": 10,
 "creationPolicy": "delayed",
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "top",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "propagateClick": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "class": "Player",
 "data": {
  "name": "Player443"
 },
 "minWidth": 20,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scripts": {
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "getKey": function(key){  return window[key]; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "existsKey": function(key){  return key in window; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); }
 },
 "scrollBarVisible": "rollOver"
})