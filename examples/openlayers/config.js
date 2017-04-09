/**
 * OpenLayers 示例配置文件：包括示例的分类、名称、缩略图、文件路径
 */
var exampleConfig = {
    "iServer": {
        name: "iServer",
        content: {
            "map": {
                name: "地图",
                content: [{
                    name: "4326底图",
                    thumbnail: "ol_tiledMapLayer4326.png",
                    fileName: "01_tiledMapLayer4326"
                }, {
                    name: "3857底图",
                    thumbnail: "ol_tiledMapLayer3857.png",
                    fileName: "01_tiledMapLayer3857"
                }, {
                    name: "地图叠加",
                    thumbnail: "ol_tiledMapLayerOverlapped.png",
                    fileName: "01_tiledMapLayerOverlapped"

                }, {
                    name: "平面坐标系底图",
                    thumbnail: "ol_tiledMapLayerNoProj.png",
                    fileName: "01_tiledMapLayerNoProj"
                }, {
                    name: "地图信息",
                    thumbnail: "ol_mapService.png",
                    fileName: "01_mapService"

                }, {
                    name: "距离测量",
                    thumbnail: "ol_measure-distance.png",
                    fileName: "01_measure_distance"
                }, {
                    name: "面积测量",
                    thumbnail: "ol_measure-area.png",
                    fileName: "01_measure_area"
                }, {
                    name: "图层信息",
                    thumbnail: "ol_layerService.png",
                    fileName: "01_layerService"
                }, {
                    name: "范围查询",
                    thumbnail: "ol_mapQueryByBounds.png",
                    fileName: "01_mapQueryByBounds"
                }, {
                    name: "距离查询",
                    thumbnail: "ol_mapQueryByDistance.png",
                    fileName: "01_mapQueryByDistance"
                }, {
                    name: "几何查询",
                    thumbnail: "ol_mapQueryByGeometry.png",
                    fileName: "01_mapQueryByGeometry"
                }, {
                    name: "SQL查询",
                    thumbnail: "ol_mapQueryBySQL.png",
                    fileName: "01_mapQueryBySQL"
                }]
            },
            "data": {
                name: "数据",
                content: [{
                    name: "ID查询",
                    thumbnail: "ol_getFeatureByIDs.png",
                    fileName: "02_getFeatureByIDs"
                }, {
                    name: "SQL查询",
                    thumbnail: "ol_getFeatureBySQL.png",
                    fileName: "02_getFeatureBySQL"
                }, {
                    name: "范围查询",
                    thumbnail: "ol_getFeatureByBounds.png",
                    fileName: "02_getFeatureByBounds"
                }, {
                    name: "几何查询",
                    thumbnail: "ol_getFeatureByGeometry.png",
                    fileName: "02_getFeatureByGeometry"
                }, {
                    name: "缓冲区查询",
                    thumbnail: "ol_getFeatureByBuffer.png",
                    fileName: "02_getFeatureByBuffer"
                }, {
                    name: "栅格查询",
                    thumbnail: "ol_getGridCellInfos.png",
                    fileName: "02_getGridCellInfos"
                }, {
                    name: "字段信息",
                    thumbnail: "ol_fieldsService.png",
                    fileName: "02_fieldsService"
                }, {
                    name: "字段查询统计",
                    thumbnail: "ol_fieldStatistics.png",
                    fileName: "02_fieldStatistics"
                }, {
                    name: "地物编辑",
                    thumbnail: "ol_editFeatures.png",
                    fileName: "02_editFeatures"
                }]
            },
            "theme": {
                name: "专题图",
                content: [{
                    name: "点密度专题图",
                    thumbnail: "ol_themeDotDensity.png",
                    fileName: "03_themeDotDensity"
                }, {
                    name: "等级符号专题图",
                    thumbnail: "ol_themeGraduatedSymbol.png",
                    fileName: "03_themeGraduatedSymbol"
                }, {
                    name: "统计专题图",
                    thumbnail: "ol_themeGraph.png",
                    fileName: "03_themeGraph"
                }, {
                    name: "矩阵标签专题图",
                    thumbnail: "ol_themeLabel.png",
                    fileName: "03_themeLabel"
                }, {
                    name: "分段专题图",
                    thumbnail: "ol_themeRange.png",
                    fileName: "03_themeRange"
                }, {
                    name: "单值专题图",
                    thumbnail: "ol_themeUnique.png",
                    fileName: "03_themeUnique"
                }, {
                    name: "栅格分段专题图",
                    thumbnail: "ol_themeGridRange.png",
                    fileName: "03_themeGridRange"
                }, {
                    name: "栅格单值专题图",
                    thumbnail: "ol_themeGridUnique.png",
                    fileName: "03_themeGridUnique"
                }]
            },
            "spatialAnalyst": {
                name: "空间分析",
                content: [{
                    name: "缓冲区分析",
                    thumbnail: "ol_bufferAnalystService.png",
                    fileName: "04_bufferAnalystService"
                }, {
                    name: "缓冲区分析二",
                    thumbnail: "ol_bufferAnalystService_geometry.png",
                    fileName: "04_bufferAnalystService_geometry"
                }, {
                    name: "数据集泰森多边形",
                    thumbnail: "ol_thiessenAnalystService-datasets.png",
                    fileName: "04_thiessenAnalystService_datasets"
                }, {
                    name: "几何泰森多边形",
                    thumbnail: "ol_thiessenAnalystService-geometry.png",
                    fileName: "04_thiessenAnalystService_geometry"
                }, {
                    name: "叠加分析",
                    thumbnail: "ol_overlayAnalystService.png",
                    fileName: "04_overlayAnalystService"
                }, {
                    name: "动态分析",
                    thumbnail: "ol_generateSpatialDataService.png",
                    fileName: "04_generateSpatialDataService"
                }, {
                    name: "点密度插值分析",
                    thumbnail: "ol_interpolationAnalystService-Density.png",
                    fileName: "04_interpolationAnalystService_Density"
                }, {
                    name: "反距离加权插值分析",
                    thumbnail: "ol_interpolationAnalystService-IDW-dataset.png",
                    fileName: "04_interpolationAnalystService_IDW_dataset"
                }, {
                    name: "普通克吕金插值分析",
                    thumbnail: "ol_interpolationAnalystService-Kriging.png",
                    fileName: "04_interpolationAnalystService_Kriging"
                }, {
                    name: "泛克吕金插值分析",
                    thumbnail: "ol_interpolationAnalystService_KrigingUniversal.png",
                    fileName: "04_interpolationAnalystService_KrigingUniversal"
                }, {
                    name: "径向基函数插值分析",
                    thumbnail: "ol_interpolationAnalystService_RBF.png",
                    fileName: "04_interpolationAnalystService_RBF"
                }, {
                    name: "地形曲率计算",
                    thumbnail: "ol_terrainCurvatureCalculationService.png",
                    fileName: "04_terrainCurvatureCalculationService"
                }, {
                    name: "栅格代数运算",
                    thumbnail: "ol_mathExpressionAnalysisService.png",
                    fileName: "04_mathExpressionAnalysisService"
                }, {
                    name: "核密度分析",
                    thumbnail: "ol_densityAnalystService.png",
                    fileName: "04_densityKernelAnalystService"
                }]
            },
            "networkAnalyst": {
                name: "网络分析",
                content: [{
                    name: "服务区分析",
                    thumbnail: "ol_findServiceAreas.png",
                    fileName: "05_findServiceAreas"
                }, {
                    name: "最佳路径分析",
                    thumbnail: "ol_findPathService.png",
                    fileName: "05_findPathService"
                }, {
                    name: "最近设施分析",
                    thumbnail: "ol_findClosetFacilitiesService.png",
                    fileName: "05_findClosestFacilitiesService"
                }, {
                    name: "选址分区分析",
                    thumbnail: "ol_findLocationService.png",
                    fileName: "05_findLocationService"
                }, {
                    name: "多旅行商分析-物流配送",
                    thumbnail: "ol_findMTSPPathsService.png",
                    fileName: "05_findMTSPPathsService"
                }, {
                    name: "旅行商分析-质检巡查",
                    thumbnail: "ol_findTSPPathsService.png",
                    fileName: "05_findTSPPathsService"
                }]
            },
            "trafficTransferAnalyst": {
                name: "交通换乘",
                content: [{
                    name: "交通换乘",
                    thumbnail: "ol_trafficTransferAnalystService.png",
                    fileName: "06_trafficTransferAnalystService"
                }]
            }
        }
    },
    "iPortal": {
        name: "iPortal",
        content: null
    },
    "online": {
        name: "online",
        content: null
    },
    "iManager": {
        name: "iManager",
        content: null
    },
    "plot": {
        name: "标绘",
        content: {
            "draw": {
                name: "点线面绘制",
                content: null
            },
            "drawPlot": {
                name: "动态标绘",
                content: null
            }
        }
    },
    "viz": {
        name: "可视化",
        content: {
            "heat": {
                name: "热力图",
                content: [{
                    name: "随机点",
                    thumbnail: "ol_heatmap.png",
                    fileName: "07_HeatMap"
                }]
            },
            "cluster": {
                name: "聚点图",
                content: [{
                    name: "点聚合",
                    thumbnail: "ol_cluster.png",
                    fileName: "07_Cluster"
                }]
            },
            "animationFeature": {
                name: "动画要素图",
                content: [{
                    name: "动画点",
                    thumbnail: "ol_animationFeature.png",
                    fileName: "07_AnimationFeature"
                }]
            },
            "graphiclayer": {
                name: "高效率点图层",
                content: [{
                    name: "canvas渲染",
                    thumbnail: "graphiclayer_canvas.png",
                    fileName: "07_graphiclayer_canvas"
                }, {
                    name: "webgl渲染",
                    thumbnail: "graphiclayer_webgl.png",
                    fileName: "07_graphiclayer_webgl"
                }
                ]
            },
            // "D3": {
            //     name: "D3-单值专题图",
            //     content: [{
            //         name: "D3-单值专题图",
            //         content: null
            //     }]
            // },
            "ECharts": {
                name: "ECharts",
                content: [
                    {
                        name: "折线图",
                        thumbnail: "ol_echartsLineMarker.png",
                        fileName: "echartsLineMarker"
                    },
                    {
                        name: "柱状图",
                        thumbnail: "ol_echartsBar.png",
                        fileName: "echartsBar"
                    },
                    {
                        name: "散点图",
                        thumbnail: "ol_echartsScatter.png",
                        fileName: "echartsScatter"
                    },
                    {
                        name: "饼图",
                        thumbnail: "ol_echartsPie.png",
                        fileName: "echartsPie"
                    }
                ]

            }
        }
    },
    "OGC": {
        name: "OGC",
        content: {
            "WMTS": {
                name: "",
                content: [{
                    name: "WMTS图层",
                    thumbnail: "ol_WMTSLayer.png",
                    fileName: "WMTSLayer"
                }]
            },
            "WMS": {
                name: "",
                content: [{
                    name: "WMS图层",
                    thumbnail: "ol_WMSLayer.png",
                    fileName: "WMSLayer"
                }]
            }
        }
    },
    "mapping": {
        name: "互联网地图",
        content: {
            "Baidu": {
                name: "",
                content: [{
                    name: "百度地图",
                    thumbnail: "ol_baiduLayer.png",
                    fileName: "baiduLayer"
                }]
            }
        }
    }
}