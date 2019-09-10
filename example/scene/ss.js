{
    "scene": {
        "render": {
            "global_ambient": {
                "r": 1,
                "g": 1,
                "b": 1
            },
            "skybox": 10000012,
            "fog_end": 1000,
            "fog_start": 1,
            "fog_color": {
                "r": 0,
                "g": 0,
                "b": 0
            },
            "fog_density": 0.01,
            "fog": "none",
            "tonemapping": 1,
            "tonemapping_exposure": 1,
            "gamma_correction": 1,
            "skyboxIntensity": 1,
            "skyboxMip": 0,
            "useDevicePixelRatio": true,
            "fillMode": "FILL_WINDOW",
            "resolutionMode": "AUTO",
            "height": 720,
            "width": 1280,
            "antialias": true,
            "transparentCanvas": true
        },
        "objects": {
            "405bc767-f9c7-45ca-aff9-8a1c9a39d8cf": {
                "position": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "rotation": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "scale": {
                    "x": 1,
                    "y": 1,
                    "z": 1
                },
                "id": "405bc767-f9c7-45ca-aff9-8a1c9a39d8cf",
                "name": "Root",
                "parent": null,
                "children": [
                    "684df6b4-c6d6-11e6-89b2-22000ac481df",
                    "684df6b4-c6d6-11e6-89b2-22000ac481dd",
                    "e24cbbb8-6ea5-4bb5-943d-fc8b8e661b7e",
                    "781efca4-f8d0-4371-92c3-a4348a082ef8"
                ],
                "data": {}
            },
            "684df6b4-c6d6-11e6-89b2-22000ac481df": {
                "position": {
                    "x": 0,
                    "y": 3,
                    "z": 6
                },
                "rotation": {
                    "x": -20,
                    "y": 0,
                    "z": 0
                },
                "scale": {
                    "x": 1,
                    "y": 1,
                    "z": 1
                },
                "id": "684df6b4-c6d6-11e6-89b2-22000ac481df",
                "name": "camera",
                "parent": "405bc767-f9c7-45ca-aff9-8a1c9a39d8cf",
                "children": [],
                "components": {
                    "camera": {
                        "projection": 0,
                        "farClip": 1000,
                        "clearColorBuffer": true,
                        "priority": 0,
                        "fov": 45,
                        "clearDepthBuffer": true,
                        "frustumCulling": true,
                        "clearColor": {
                            "r": 0.1,
                            "g": 0.1,
                            "b": 0.1,
                            "a": 1
                        },
                        "enabled": true,
                        "orthoHeight": 4,
                        "nearClip": 0.1,
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "z": 1,
                            "w": 1
                        }
                    },
                    "cameraRuntime": {}
                }
            },
            "e24cbbb8-6ea5-4bb5-943d-fc8b8e661b7e": {
                "position": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "rotation": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "scale": {
                    "x": 1,
                    "y": 1,
                    "z": 1
                },
                "id": "e24cbbb8-6ea5-4bb5-943d-fc8b8e661b7e",
                "name": "camAnchor",
                "parent": "405bc767-f9c7-45ca-aff9-8a1c9a39d8cf",
                "children": [],
                "components": {}
            },
            "781efca4-f8d0-4371-92c3-a4348a082ef8": {
                "position": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "rotation": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "scale": {
                    "x": 1,
                    "y": 1,
                    "z": 1
                },
                "id": "781efca4-f8d0-4371-92c3-a4348a082ef8",
                "name": "camCenter",
                "parent": "405bc767-f9c7-45ca-aff9-8a1c9a39d8cf",
                "children": [],
                "components": {}
            },
            "684df6b4-c6d6-11e6-89b2-22000ac481dd": {
                "position": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "rotation": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "scale": {
                    "x": 1,
                    "y": 1,
                    "z": 1
                },
                "id": "684df6b4-c6d6-11e6-89b2-22000ac481dd",
                "enabled": true,
                "name": "model1",
                "parent": "405bc767-f9c7-45ca-aff9-8a1c9a39d8cf",
                "children": [],
                "components": {
                    "model": {
                        "enabled": true,
                        "isStatic": false,
                        "type": "resource",
                        "resource": 10000000,
                        "materialResource": null,
                        "castShadows": false,
                        "castShadowsLightmap": false,
                        "receiveShadows": false,
                        "lightmapped": false,
                        "lightmapSizeMultiplier": 1,
                        "batchGroupId": null,
                        "layers": [
                            0
                        ]
                    },
                    "infospot":{
                        ""
                    }
                }
            }
        }
    },
    "ui": {
        "views": [
            {
                "id": "e2da8b63-12a1-41b3-a843-6a10451c2cb8",
                "pageIdx": 0,
                "pageName": "Page 1",
                "name": "view1",
                "isRecord": true,
                "elements": [
                    {
                        "id": "ea130f42-04fc-4942-8ad4-ba491a772ade",
                        "parent": null
                    },
                    {
                        "id": "830eed5c-f616-4df1-9bd1-0cb2cbd729a1",
                        "parent": "ea130f42-04fc-4942-8ad4-ba491a772ade"
                    }
                ],
                "features": {
                    "cameraGestures": {
                        "enable": true
                    },
                    "cameraTravel": {
                        "centerPos": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "cameraPos": {
                            "x": -3.896881341934204,
                            "y": -3.23,
                            "z": -2.388
                        },
                        "cameraRot": {
                            "x": -0.33,
                            "y": 0.24,
                            "z": 0.09,
                            "w": 0.907
                        },
                        "cameraForward": {
                            "x": 0.6958717008202061,
                            "y": 0.577857605295099,
                            "z": 0.4264307259100907
                        },
                        "cameraOffset": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "time": 0.2,
                        "curve": "Linear"
                    },
                    "materialChange":{
                        "entity":"684df6b4-c6d6-11e6-89b2-22000ac481dd",
                        "index":[0,1,2,3],
                        "materials":[
                            10000011,
                            10000011,
                            10000011,
                            10000011
                        ]
                    }
                }
            },
            {
                "id": "e2da8b63-12a1-41b3-a843-6a10451c2cb8",
                "pageIdx": 0,
                "pageName": "Page 1",
                "name": "view1",
                "isRecord": true,
                "elements": [
                    {
                        "id": "ea130f42-04fc-4942-8ad4-ba491a772ade",
                        "parent": null
                    },
                    {
                        "id": "830eed5c-f616-4df1-9bd1-0cb2cbd729a3",
                        "parent": "ea130f42-04fc-4942-8ad4-ba491a772ade"
                    },
                    {
                        "id": "498ec49c-df30-4731-a660-67f47867b91a",
                        "parent": "ea130f42-04fc-4942-8ad4-ba491a772ade"
                    },
                    {
                        "id": "scrollbar",
                        "parent": "ea130f42-04fc-4942-8ad4-ba491a772ade"
                    },
                    {
                        "id": "scrollPanel",
                        "parent": "ea130f42-04fc-4942-8ad4-ba491a772ade"
                    },
                    {
                        "id": "scrollhandle",
                        "parent": "ea130f42-04fc-4942-8ad4-ba491a772ade"
                    },
                    {
                        "id": "scrollbarHor",
                        "parent": "ea130f42-04fc-4942-8ad4-ba491a772ade"
                    },
                    {
                        "id": "scrollHorhandle",
                        "parent": "scrollbarHor"
                    }
                ],
                "features": {
                    "cameraGestures": {
                        "enable": true
                    },
                    "cameraTravel": {
                        "centerPos": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "cameraPos": {
                            "x": -3.896881341934204,
                            "y": -3.23,
                            "z": -2.388
                        },
                        "cameraRot": {
                            "x": -0.33,
                            "y": 0.24,
                            "z": 0.09,
                            "w": 0.907
                        },
                        "cameraForward": {
                            "x": 0.6958717008202061,
                            "y": 0.577857605295099,
                            "z": 0.4264307259100907
                        },
                        "cameraOffset": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "time": 0.2,
                        "curve": "Linear"
                    }
                }
            }
        ],
        "elements": {
            "ea130f42-04fc-4942-8ad4-ba491a772ade": {
                "id": "ea130f42-04fc-4942-8ad4-ba491a772ade",
                "name": "root",
                "components": {
                    "transform": {
                        "raycast": false,
                        "euler": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "scale": {
                            "x": 1,
                            "y": 1,
                            "z": 1
                        },
                        "anchorMin": {
                            "x": 0,
                            "y": 0
                        },
                        "anchorMax": {
                            "x": 0,
                            "y": 0
                        },
                        "pivot": {
                            "x": 0,
                            "y": 0
                        },
                        "anchoredPosition": {
                            "x": 0,
                            "y": 0
                        },
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "width": 414,
                            "height": 736
                        },
                        "sizeDelta": {
                            "x": -414,
                            "y": -736
                        },
                        "parent": null,
                        "children": []
                    },
                    "canvas": {}
                }
            },
            "830eed5c-f616-4df1-9bd1-0cb2cbd729b9": {
                "id": "830eed5c-f616-4df1-9bd1-0cb2cbd729b9",
                "name": "button1",
                "components": {
                    "transform": {
                        "raycast": true,
                        "euler": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "scale": {
                            "x": 1,
                            "y": 1,
                            "z": 1
                        },
                        "anchorMin": {
                            "x": 0.5,
                            "y": 0.5
                        },
                        "anchorMax": {
                            "x": 0.5,
                            "y": 0.5
                        },
                        "pivot": {
                            "x": 0.5,
                            "y": 0.5
                        },
                        "anchoredPosition": {
                            "x": 0,
                            "y": 0
                        },
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "width": 500,
                            "height": 500
                        },
                        "sizeDelta": {
                            "x": 0,
                            "y": -70
                        }
                    },
                    "image": {
                        "aspect": 0,
                        "repeat": 0,
                        "fill": 0,
                        "amount": 1,
                        "resource": 10000005,
                        "color": {
                            "r": 1,
                            "g": 1,
                            "b": 1,
                            "a": 0.0
                        }
                    },
                    "button": {},
                    "pattern": {
                        "postures": [
                            {
                                "animation":{
                                    "type":"to",
                                    "duration":2,
                                    "easing":"liner",
                                    "delay":0,
                                    "repeat":0,
                                    "yoyo":false
                                },
                                "states":{
                                    "button1": {
                                        "transform":{
                                            "anchoredPosition":{
                                                "x":-100,
                                                "y":-100
                                            }
                                        },
                                        "image": {
                                            "color": {
                                                "r": 0.5,
                                                "g": 0.5,
                                                "b": 0.5,
                                                "a": 1
                                            },
                                            "opacity": 1.0
                                        }
                                    },
                                    "button1/button2": {
                                        "image": {
                                            "opacity": 1.0
                                        }
                                    }
                                }
                            },
                            {
                                "animation":{
                                    "type":"to",
                                    "duration":1,
                                    "easing":"Linear",
                                    "delay":0,
                                    "repeat":0,
                                    "yoyo":false
                                },
                                "states":{
                                    "button1": {
                                        "transform":{
                                            "anchoredPosition":{
                                                "x":100,
                                                "y":100
                                            }
                                        },
                                        "image": {
                                            "color": {
                                                "r": 0.5,
                                                "g": 0.5,
                                                "b": 0.5,
                                                "a": 1
                                            },
                                            "opacity": 0.1
                                        }
                                    },
                                    "button1/button2": {
                                        "image": {
                                            "opacity": 0.1
                                        }
                                    }
                                }
                            }
                        ],
                        "btnTrigger": true
                    }
                }
            },
            "830eed5c-f616-4df1-9bd1-0cb2cbd729b8": {
                "id": "830eed5c-f616-4df1-9bd1-0cb2cbd729b8",
                "name": "button2",
                "components": {
                    "transform": {
                        "raycast": false,
                        "euler": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "scale": {
                            "x": 1,
                            "y": 1,
                            "z": 1
                        },
                        "anchorMin": {
                            "x": 0.1,
                            "y": 0.5
                        },
                        "anchorMax": {
                            "x": 0.9,
                            "y": 0.5
                        },
                        "pivot": {
                            "x": 0.5,
                            "y": 0.5
                        },
                        "anchoredPosition": {
                            "x": 0,
                            "y": -50
                        },
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "width": 500,
                            "height": 500
                        },
                        "sizeDelta": {
                            "x": -500,
                            "y": -500
                        }
                    },
                    "video": {
                        "resource": 10000014
                    },
                    "pattern": {
                        "postures": [
                            {
                                "button2/button3": {
                                    "image": {
                                        "opacity": 1
                                    }
                                }
                            },
                            {
                                "button2/button3": {
                                    "image": {
                                        "opacity": 0
                                    }
                                }
                            },
                            {
                                "button2/button3": {
                                    "image": {
                                        "opacity": 0
                                    }
                                }
                            },
                            {
                                "button2/button3": {
                                    "image": {
                                        "opacity": 0
                                    }
                                }
                            }
                        ],
                        
                        "btnTrigger": true
                    },
                    "button": {}
                }
            },
            "830eed5c-f616-4df1-9bd1-0cb2cbd729a1": {
                "id": "830eed5c-f616-4df1-9bd1-0cb2cbd729a1",
                "name": "button3",
                "components": {
                    "transform": {
                        "raycast": false,
                        "euler": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "scale": {
                            "x": 1,
                            "y": 1,
                            "z": 1
                        },
                        "anchorMin": {
                            "x": 0.5,
                            "y": 0.5
                        },
                        "anchorMax": {
                            "x": 0.5,
                            "y": 0.5
                        },
                        "pivot": {
                            "x": 0.5,
                            "y": 0.5
                        },
                        "anchoredPosition": {
                            "x": 0,
                            "y": 0
                        },
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "width": 100,
                            "height": 100
                        },
                        "sizeDelta": {
                            "x": -100,
                            "y": -100
                        }
                    },
                    "image": {
                        "aspect": 0,
                        "repeat": 0,
                        "fill": 0,
                        "amount": 1,
                        "opacity": 0.5,
                        "color": {
                            "r": 0.82,
                            "g": 0.862,
                            "b": 0.23,
                            "a": 1
                        }
                    }
                }
            },
            "830eed5c-f616-4df1-9bd1-0cb2cbd729a3": {
                "id": "830eed5c-f616-4df1-9bd1-0cb2cbd729a3",
                "name": "scroll",
                "components": {
                    "transform": {
                        "raycast": true,
                        "euler": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "scale": {
                            "x": 1,
                            "y": 1,
                            "z": 1
                        },
                        "anchorMin": {
                            "x": 0.5,
                            "y": 0.5
                        },
                        "anchorMax": {
                            "x": 0.5,
                            "y": 0.5
                        },
                        "pivot": {
                            "x": 0.5,
                            "y": 0.5
                        },
                        "anchoredPosition": {
                            "x": 0,
                            "y": 0
                        },
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "width": 400,
                            "height": 400
                        },
                        "sizeDelta": {
                            "x": -400,
                            "y": -400
                        }
                    },
                    "scroll": {
                        "content": "498ec49c-df30-4731-a660-67f47867b91a",
                        "viewport": "scrollPanel",
                        "verticalScrollbar": "scrollbar",
                        "horizontalScrollbar": "scrollbarHor",
                        "vertical": true,
                        "horizontal": false,
                        "elasticity": 0.1,
                        "decelerationRate": 0.256
                    }
                }
            },
            "scrollPanel": {
                "id": "scrollPanel",
                "name": "scrollPanel",
                "components": {
                    "transform": {
                        "raycast": false,
                        "euler": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "scale": {
                            "x": 1,
                            "y": 1,
                            "z": 1
                        },
                        "anchorMin": {
                            "x": 0,
                            "y": 0
                        },
                        "anchorMax": {
                            "x": 1,
                            "y": 1
                        },
                        "pivot": {
                            "x": 0.5,
                            "y": 0.5
                        },
                        "anchoredPosition": {
                            "x": 0,
                            "y": 0
                        },
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "width": 380,
                            "height": 380
                        },
                        "sizeDelta": {
                            "x": 0,
                            "y": 0
                        }
                    },
                    "image": {
                        "aspect": 0,
                        "repeat": 0,
                        "fill": 0,
                        "amount": 1,
                        "opacity": 1,
                        "color": {
                            "r": 0.078,
                            "g": 0.862,
                            "b": 0.231,
                            "a": 1
                        }
                    },
                    "mask": {}
                }
            },
            "498ec49c-df30-4731-a660-67f47867b91a": {
                "id": "498ec49c-df30-4731-a660-67f47867b91a",
                "name": "text1",
                "components": {
                    "transform": {
                        "raycast": false,
                        "euler": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "scale": {
                            "x": 1,
                            "y": 1,
                            "z": 1
                        },
                        "anchorMin": {
                            "x": 0.5,
                            "y": 0.5
                        },
                        "anchorMax": {
                            "x": 0.5,
                            "y": 0.5
                        },
                        "pivot": {
                            "x": 0.5,
                            "y": 0.5
                        },
                        "anchoredPosition": {
                            "x": 0,
                            "y": 0
                        },
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "width": 500,
                            "height": 800
                        },
                        "sizeDelta": {
                            "x": -500,
                            "y": -800
                        }
                    },
                    "image": {
                        "aspect": 0,
                        "repeat": 0,
                        "fill": 0,
                        "amount": 1,
                        "color": {
                            "r": 0.823,
                            "g": 0.862,
                            "b": 0.231,
                            "a": 0.6
                        }
                    },
                    "text": {
                        "content": "new textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew textnew text",
                        "fontFamily": "Arial",
                        "fontSize": 24,
                        "color": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "align": 4,
                        "wrap": true,
                        "overflow": false
                    }
                }
            },
            "scrollbar": {
                "id": "scrollbar",
                "name": "scrollbar",
                "components": {
                    "transform": {
                        "raycast": false,
                        "euler": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "scale": {
                            "x": 1,
                            "y": 1,
                            "z": 1
                        },
                        "anchorMin": {
                            "x": 1,
                            "y": 0
                        },
                        "anchorMax": {
                            "x": 1,
                            "y": 1
                        },
                        "pivot": {
                            "x": 1,
                            "y": 0
                        },
                        "anchoredPosition": {
                            "x": 0,
                            "y": 0
                        },
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "width": 20,
                            "height": 400
                        },
                        "sizeDelta": {
                            "x": -20,
                            "y": 0
                        }
                    },
                    "scrollbar": {
                        "handle": "scrollhandle",
                        "axis": "y"
                    },
                    "image": {
                        "aspect": 0,
                        "repeat": 0,
                        "fill": 0,
                        "amount": 1,
                        "opacity": 0.8,
                        "color": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        }
                    }
                }
            },
            "scrollhandle": {
                "id": "scrollhandle",
                "name": "scrollhandle",
                "components": {
                    "transform": {
                        "raycast": false,
                        "euler": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "scale": {
                            "x": 1,
                            "y": 1,
                            "z": 1
                        },
                        "anchorMin": {
                            "x": 0,
                            "y": 0
                        },
                        "anchorMax": {
                            "x": 1,
                            "y": 1
                        },
                        "pivot": {
                            "x": 0.5,
                            "y": 0.5
                        },
                        "anchoredPosition": {
                            "x": 0,
                            "y": 0
                        },
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "width": 20,
                            "height": 400
                        },
                        "sizeDelta": {
                            "x": 0,
                            "y": 0
                        }
                    },
                    "image": {
                        "aspect": 0,
                        "repeat": 0,
                        "fill": 0,
                        "amount": 1,
                        "opacity": 1,
                        "color": {
                            "r": 1,
                            "g": 0.1,
                            "b": 0.1,
                            "a": 1
                        }
                    }
                }
            },
            "scrollbarHor": {
                "id": "scrollbarHor",
                "name": "scrollbarHor",
                "components": {
                    "transform": {
                        "raycast": false,
                        "euler": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "scale": {
                            "x": 1,
                            "y": 1,
                            "z": 1
                        },
                        "anchorMin": {
                            "x": 0,
                            "y": 1
                        },
                        "anchorMax": {
                            "x": 1,
                            "y": 1
                        },
                        "pivot": {
                            "x": 0,
                            "y": 1
                        },
                        "anchoredPosition": {
                            "x": 0,
                            "y": 0
                        },
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "width": 380,
                            "height": 20
                        },
                        "sizeDelta": {
                            "x": 20,
                            "y": -20
                        }
                    },
                    "scrollbar": {
                        "handle": "scrollHorhandle",
                        "axis": "x"
                    },
                    "image": {
                        "aspect": 0,
                        "repeat": 0,
                        "fill": 0,
                        "amount": 1,
                        "opacity": 0.8,
                        "color": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        }
                    }
                }
            },
            "scrollHorhandle": {
                "id": "scrollHorhandle",
                "name": "scrollHorhandle",
                "components": {
                    "transform": {
                        "raycast": false,
                        "euler": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "scale": {
                            "x": 1,
                            "y": 1,
                            "z": 1
                        },
                        "anchorMin": {
                            "x": 0,
                            "y": 0
                        },
                        "anchorMax": {
                            "x": 1,
                            "y": 1
                        },
                        "pivot": {
                            "x": 0.5,
                            "y": 0.5
                        },
                        "anchoredPosition": {
                            "x": 0,
                            "y": 0
                        },
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "width": 400,
                            "height": 20
                        },
                        "sizeDelta": {
                            "x": 0,
                            "y": 0
                        }
                    },
                    "image": {
                        "aspect": 0,
                        "repeat": 0,
                        "fill": 0,
                        "amount": 1,
                        "opacity": 1,
                        "color": {
                            "r": 1,
                            "g": 0.1,
                            "b": 0.1,
                            "a": 1
                        }
                    }
                }
            }
        }
    },
    "resources": {
        "10000000": {
            "name": "1.glb",
            "preload": true,
            "meta": {
                "meshes": 1,
                "meshInstances": 1,
                "nodes": 2,
                "skins": 0,
                "vertices": 10199,
                "triangles": 19800,
                "attributes": {
                    "normal": 1,
                    "texCoord0": 1
                }
            },
            "data": {
                "mapping": [
                    {
                        "material": 10000001
                    },
                    {
                        "material": 10000010
                    },
                    {
                        "material": 10000011
                    }
                ]
            },
            "type": "model",
            "file": {
                "filename": "1.glb",
                "size": 1,
                "hash": "5db331615d44043f6e041f28b70eb7ea",
                "url": "files/resources/10000000/1.glb"
            },
            "id": 10000000
        },
        "10000001": {
            "name": "Material #25",
            "preload": true,
            "data": {
                "name": "Material #25",
                "diffuse": {
                    "r": 1,
                    "g": 1,
                    "b": 1
                },
                "diffuseMap": 10000002,
                "diffuseMapUv": 0,
                "diffuseMapOffset": [
                    0,
                    0
                ],
                "diffuseMapScale": [
                    1,
                    1
                ],
                "opacity": 1,
                "opacityMap": null,
                "opacityMapUv": 0,
                "opacityMapOffset": [
                    0,
                    0
                ],
                "opacityMapScale": [
                    1,
                    1
                ],
                "useMetallic": true,
                "metallic": 1,
                "metallicMap": null,
                "metallicMapUv": 0,
                "metallicMapOffset": [
                    0,
                    0
                ],
                "metallicMapScale": [
                    1,
                    1
                ],
                "roughness": 1,
                "roughnessMap": null,
                "roughnessMapUv": 0,
                "roughnessMapOffset": [
                    0,
                    0
                ],
                "roughnessMapScale": [
                    1,
                    1
                ],
                "normalMap": null,
                "normalMapUv": 0,
                "normalMapOffset": [
                    0,
                    0
                ],
                "normalMapScale": [
                    1,
                    1
                ],
                "occlusionMap": null,
                "occlusionMapUv": 0,
                "occlusionMapOffset": [
                    0,
                    0
                ],
                "occlusionMapScale": [
                    1,
                    1
                ],
                "emissive": {
                    "r": 0,
                    "g": 0,
                    "b": 0
                },
                "emissiveMap": null,
                "emissiveMapUv": 0,
                "emissiveMapOffset": [
                    0,
                    0
                ],
                "emissiveMapScale": [
                    1,
                    1
                ],
                "alphaCutoff": 0,
                "doubleSided": false,
                "alphaMode": "OPAQUE",
                "cubeMap": 10000013,
                "cubeMapRot": 0
            },
            "type": "material",
            "file": null,
            "id": 10000001
        },
        "10000002": {
            "name": "cell_texture.jpg",
            "preload": true,
            "meta": {
                "format": "jpg",
                "type": "Bilevel",
                "width": 256,
                "height": 128,
                "alpha": true,
                "depth": 8,
                "srgb": true,
                "interlaced": false,
                "rgbm": false,
                "mipmaps": true
            },
            "data": {
                "addressu": "repeat",
                "addressv": "repeat",
                "minfilter": "linear_mip_linear",
                "magfilter": "linear",
                "anisotropy": 1
            },
            "type": "texture",
            "file": {
                "filename": "cell_texture.jpg",
                "size": 1,
                "hash": "34466a14ae214732f456e4417ca0aff9",
                "url": "files/resources/10000002/cell_texture.jpg"
            },
            "id": 10000002
        },
        "10000003": {
            "name": "a.png",
            "preload": true,
            "meta": {
                "format": "png",
                "type": "Bilevel",
                "width": 256,
                "height": 128,
                "alpha": true,
                "depth": 8,
                "srgb": true,
                "interlaced": false,
                "rgbm": false,
                "mipmaps": true
            },
            "data": {
                "addressu": "repeat",
                "addressv": "repeat",
                "minfilter": "linear_mip_linear",
                "magfilter": "linear",
                "anisotropy": 1
            },
            "type": "texture",
            "file": {
                "filename": "a.png",
                "size": 1,
                "hash": "34466a14ae214732f456e4417ba0aff9",
                "url": "files/resources/10000003/a.png"
            },
            "id": 10000003
        },
        "10000004": {
            "name": "a.png",
            "preload": true,
            "meta": {
                "format": "png",
                "type": "Bilevel",
                "width": 256,
                "height": 128,
                "alpha": true,
                "depth": 8,
                "srgb": true,
                "interlaced": false,
                "rgbm": false,
                "mipmaps": true
            },
            "data": {
                "addressu": "repeat",
                "addressv": "repeat",
                "minfilter": "linear_mip_linear",
                "magfilter": "linear",
                "anisotropy": 1
            },
            "type": "texture",
            "file": {
                "filename": "a.png",
                "size": 1,
                "hash": "34466a14ae214732f456e4417ba0aff9",
                "url": "files/resources/10000004/a.png"
            },
            "id": 10000004
        },
        "10000005": {
            "name": "a.png",
            "preload": true,
            "meta": {
                "width": 66,
                "height": 66,
                "ratio": 1
            },
            "type": "sprite",
            "file": {
                "filename": "a.png",
                "size": 1,
                "hash": "34466a14ae214732f456e4417ba0aff9",
                "url": "files/resources/10000005/a.png"
            },
            "id": 10000005
        },
        "10000006": {
            "name": "a.png",
            "preload": true,
            "meta": {
                "width": 66,
                "height": 66,
                "ratio": 1
            },
            "type": "sprite",
            "file": {
                "filename": "a.png",
                "size": 1,
                "hash": "34466a14ae214732f456e4417ba0vff9",
                "url": "files/resources/10000006/a.png"
            },
            "id": 10000006
        },
        "10000007": {
            "name": "a.png",
            "preload": true,
            "meta": {
                "format": "png",
                "type": "Bilevel",
                "width": 256,
                "height": 128,
                "alpha": true,
                "depth": 8,
                "srgb": true,
                "interlaced": false,
                "rgbm": false,
                "mipmaps": true
            },
            "data": {
                "addressu": "repeat",
                "addressv": "repeat",
                "minfilter": "linear_mip_linear",
                "magfilter": "linear",
                "anisotropy": 1
            },
            "type": "texture",
            "file": {
                "filename": "a.png",
                "size": 1,
                "hash": "34466a14ae214732f456e4417ba0aff9",
                "url": "files/resources/10000007/a.png"
            },
            "id": 10000007
        },
        "10000008": {
            "name": "AE17_02_ornament4.png",
            "preload": true,
            "meta": {
                "format": "png",
                "type": "Bilevel",
                "width": 256,
                "height": 128,
                "alpha": true,
                "depth": 8,
                "srgb": true,
                "interlaced": false,
                "rgbm": false,
                "mipmaps": true
            },
            "data": {
                "addressu": "repeat",
                "addressv": "repeat",
                "minfilter": "linear_mip_linear",
                "magfilter": "linear",
                "anisotropy": 1
            },
            "type": "texture",
            "file": {
                "filename": "AE17_02_ornament4.png",
                "size": 1,
                "hash": "34466a14ae214732f456e4417bd1afb9",
                "url": "files/resources/10000008/AE17_02_ornament4.png"
            },
            "id": 10000008
        },
        "10000009": {
            "name": "yy.jpg",
            "preload": true,
            "meta": {
                "format": "jpg",
                "type": "Bilevel",
                "width": 256,
                "height": 256,
                "alpha": true,
                "depth": 8,
                "srgb": true,
                "interlaced": false,
                "rgbm": false,
                "mipmaps": true
            },
            "data": {
                "addressu": "repeat",
                "addressv": "repeat",
                "minfilter": "linear_mip_linear",
                "magfilter": "linear",
                "anisotropy": 1
            },
            "type": "texture",
            "file": {
                "filename": "yy.jpg",
                "size": 1,
                "hash": "34466a14ae214732f456e4417ba0af39",
                "url": "files/resources/10000009/yy.jpg"
            },
            "id": 10000009
        },
        "10000010": {
            "name": "Material #25",
            "preload": true,
            "data": {
                "name": "Material #25",
                "diffuse": {
                    "r": 1,
                    "g": 1,
                    "b": 1
                },
                "diffuseMap": 10000008,
                "diffuseMapUv": 0,
                "diffuseMapOffset": [
                    0,
                    0
                ],
                "diffuseMapScale": [
                    1,
                    1
                ],
                "opacity": 1,
                "opacityMap": null,
                "opacityMapUv": 0,
                "opacityMapOffset": [
                    0,
                    0
                ],
                "opacityMapScale": [
                    1,
                    1
                ],
                "useMetallic": true,
                "metallic": 1,
                "metallicMap": null,
                "metallicMapUv": 0,
                "metallicMapOffset": [
                    0,
                    0
                ],
                "metallicMapScale": [
                    1,
                    1
                ],
                "roughness": 1,
                "roughnessMap": null,
                "roughnessMapUv": 0,
                "roughnessMapOffset": [
                    0,
                    0
                ],
                "roughnessMapScale": [
                    1,
                    1
                ],
                "normalMap": null,
                "normalMapUv": 0,
                "normalMapOffset": [
                    0,
                    0
                ],
                "normalMapScale": [
                    1,
                    1
                ],
                "occlusionMap": null,
                "occlusionMapUv": 0,
                "occlusionMapOffset": [
                    0,
                    0
                ],
                "occlusionMapScale": [
                    1,
                    1
                ],
                "emissive": {
                    "r": 0,
                    "g": 0,
                    "b": 0
                },
                "emissiveMap": null,
                "emissiveMapUv": 0,
                "emissiveMapOffset": [
                    0,
                    0
                ],
                "emissiveMapScale": [
                    1,
                    1
                ],
                "alphaCutoff": 0,
                "doubleSided": false,
                "alphaMode": "OPAQUE",
                "cubeMap": 10000013,
                "cubeMapRot": 0
            },
            "type": "material",
            "file": null,
            "id": 10000010
        },
        "10000011": {
            "name": "yy",
            "preload": true,
            "data": {
                "name": "Material #25",
                "diffuse": {
                    "r": 1,
                    "g": 1,
                    "b": 1
                },
                "diffuseMap": 10000009,
                "diffuseMapUv": 0,
                "diffuseMapOffset": [
                    0,
                    0
                ],
                "diffuseMapScale": [
                    1,
                    1
                ],
                "opacity": 1,
                "opacityMap": null,
                "opacityMapUv": 0,
                "opacityMapOffset": [
                    0,
                    0
                ],
                "opacityMapScale": [
                    1,
                    1
                ],
                "useMetallic": true,
                "metallic": 1,
                "metallicMap": null,
                "metallicMapUv": 0,
                "metallicMapOffset": [
                    0,
                    0
                ],
                "metallicMapScale": [
                    1,
                    1
                ],
                "roughness": 1,
                "roughnessMap": null,
                "roughnessMapUv": 0,
                "roughnessMapOffset": [
                    0,
                    0
                ],
                "roughnessMapScale": [
                    1,
                    1
                ],
                "normalMap": null,
                "normalMapUv": 0,
                "normalMapOffset": [
                    0,
                    0
                ],
                "normalMapScale": [
                    1,
                    1
                ],
                "occlusionMap": null,
                "occlusionMapUv": 0,
                "occlusionMapOffset": [
                    0,
                    0
                ],
                "occlusionMapScale": [
                    1,
                    1
                ],
                "emissive": {
                    "r": 0,
                    "g": 0,
                    "b": 0
                },
                "emissiveMap": null,
                "emissiveMapUv": 0,
                "emissiveMapOffset": [
                    0,
                    0
                ],
                "emissiveMapScale": [
                    1,
                    1
                ],
                "alphaCutoff": 0,
                "doubleSided": false,
                "alphaMode": "OPAQUE",
                "cubeMap": 10000013,
                "cubeMapRot": 0
            },
            "type": "material",
            "file": null,
            "id": 10000011
        },
        "10000012": {
            "name": "Helipad.dds",
            "preload": true,
            "data": {
                "minfilter": "linear_mip_linear",
                "magfilter": "linear",
                "magFilter": 1,
                "minFilter": 5,
                "anisotropy": 1,
                "rgbm": true
            },
            "type": "cubemap",
            "file": {
                "filename": "Helipad.dds",
                "size": 1,
                "hash": "34466a14ae214732f456e4417bd0affv",
                "url": "files/resources/10000012/Helipad.dds"
            },
            "id": 10000012
        },
        "10000013": {
            "name": "NewCubemap.dds",
            "preload": true,
            "data": {
                "magFilter": 1,
                "minFilter": 5,
                "anisotropy": 1,
                "rgbm": true
            },
            "type": "cubemap",
            "file": {
                "filename": "NewCubemap.dds",
                "size": 1,
                "hash": "34466a14ae214732f456e4417bd0addv",
                "url": "files/resources/10000013/NewCubemap.dds"
            },
            "id": 10000013
        },
        "10000014": {
            "name": "1.mp4",
            "preload": true,
            "data": {},
            "type": "video",
            "file": {
                "filename": "1.mp4",
                "size": 1,
                "hash": "34466a14ae214732f456e4417bd0adbv",
                "url": "files/resources/10000014/1.mp4"
            },
            "id": 10000014
        },
        "10000015": {
            "name": "1.mp3",
            "preload": true,
            "data": {},
            "type": "audio",
            "file": {
                "filename": "1.mp3",
                "size": 1,
                "hash": "34466a14ae214732f456e4417bd0adsv",
                "url": "files/resources/10000015/1.mp3"
            },
            "id": 10000015
        }
    },
    "id": 100000
}