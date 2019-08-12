var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.03494325196063741,
        "pitch": 0.013946111164251818,
        "fov": 1.3726940369267648
      },
      "linkHotspots": [
        {
          "yaw": 0.4325650329032946,
          "pitch": -0.40054144134463066,
          "rotation": 0,
          "target": "4-corridor"
        },
        {
          "yaw": -1.153045761932443,
          "pitch": 0.03520485285207542,
          "rotation": 0,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 2.4314404636373865,
        "pitch": 0.012001616867799214,
        "fov": 1.3726940369267648
      },
      "linkHotspots": [
        {
          "yaw": -1.4679069212939346,
          "pitch": 0.06295160906242536,
          "rotation": 0,
          "target": "0-entry"
        },
        {
          "yaw": 0.6668281756544943,
          "pitch": 0.13368956214463168,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 1.7453443474074897,
          "pitch": 0.11250733465921137,
          "rotation": 0,
          "target": "3-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4468669881103473,
          "pitch": 0.29236324945456005,
          "rotation": 0,
          "target": "3-living"
        },
        {
          "yaw": -1.0545825391591048,
          "pitch": 0.04158165840597228,
          "rotation": 0,
          "target": "1-dining"
        },
        {
          "yaw": -0.3408704924952701,
          "pitch": -0.0018304697675528558,
          "rotation": 0,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.000698582435426,
          "pitch": 0.11360689443120542,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -1.7926666914888507,
          "pitch": 0.20301282273279853,
          "rotation": 0,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-corridor",
      "name": "Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.34008088392489455,
        "pitch": -0.09782141650803489,
        "fov": 0.8443214187421674
      },
      "linkHotspots": [
        {
          "yaw": -0.053567081022634966,
          "pitch": 0.06429402916963056,
          "rotation": 0,
          "target": "0-entry"
        },
        {
          "yaw": 0.0945718613102553,
          "pitch": 0.07562733628712337,
          "rotation": 0,
          "target": "5-master"
        },
        {
          "yaw": 2.956022630776703,
          "pitch": 0.19616568556603298,
          "rotation": 0,
          "target": "9-bedroom3"
        },
        {
          "yaw": 1.5308010626462671,
          "pitch": 0.2087082846798598,
          "rotation": 0,
          "target": "8-bathroom"
        },
        {
          "yaw": 0.5037098171881098,
          "pitch": 0.3983003236970415,
          "rotation": 0,
          "target": "7-bedroom2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-master",
      "name": "Master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1687785305978018,
          "pitch": 0.2584223476973513,
          "rotation": 0,
          "target": "6-ensuite"
        },
        {
          "yaw": 2.4025689771933747,
          "pitch": 0.31047629988436576,
          "rotation": 0,
          "target": "4-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-ensuite",
      "name": "Ensuite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.94388061900998,
          "pitch": 0.4209344742313803,
          "rotation": 0,
          "target": "5-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom2",
      "name": "Bedroom2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.033998204221506,
          "pitch": 0.3120656789317291,
          "rotation": 0,
          "target": "4-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.998084067855559,
          "pitch": 0.3403485678233018,
          "rotation": 0,
          "target": "4-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom3",
      "name": "Bedroom3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5367958073891081,
          "pitch": 0.22667590703754037,
          "rotation": 0,
          "target": "4-corridor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "armadale",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
