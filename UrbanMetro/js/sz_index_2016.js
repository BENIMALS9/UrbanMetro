mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuaW1hbHMiLCJhIjoiY2tndGQ5Z2l6MDFlcjJzcDdnaGRyMnR4byJ9.6ws--J8yhIAi5dhwXzsyrw';

var chart_map = new mapboxgl.Map({
    container: 'chart_map',
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [114.050222,22.602202],
    zoom: 10,
    pitch: 0
});

chart_map.on('load', function () {
// Add a GeoJSON source containing place coordinates and information.
    chart_map.addSource('subway', {
        'type': 'geojson',
        'data':  {"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"geometry": {
				"type": "LineString",
				"coordinates": [[113.8308976602316,22.767122531930664],[113.83937798384173,22.589614217283163],[113.89817133100091,22.53721140697178],[113.89833267367408,22.521781493731144],[113.89839818254764,22.5217765395604]]
				},
				"properties": {
					"Id": 11,
					"name": "11号线",
					'color': '#703945'
				}
			}, {
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": [[113.89569388836652, 22.670626481529396], [113.897932, 22.537121]]
				},
				"properties": {
					"Id": 1,
					"name": "1号线",
					'color': '#46ac59'
				}
			}, {
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": [[113.89788818359375,22.537109375000007],[113.88128662109375,22.53729248046875],[113.91912841796875,22.5819091796875],[114.1361083984375,22.581115722656246],[114.136474609375,22.54608154296875]]
				},
				"properties": {
					"Id": 5,
					"name": "5号线",
					"color": "#7f3a7e"
				}
			}, {
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": [[113.897525,22.47922700000001],[113.91091321620598,22.479695112112765],[113.974216,22.5369],[113.9811306457854,22.54794444394073],[114.1434336144658,22.547733770206698]]
				},
				"properties": {
					"Id": 2,
					"name": "2（8）号线",
					"color": "#8b440e"
				}
			}, {
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": [[113.89839818254764,22.5217765395604],[113.94270352442123,22.51842590603508],[113.96863753933233,22.525145874025593],[113.98101733678334,22.525306858671108],[114.0260355666204,22.53625080251092],[114.05351123624526,22.546924874421013]]
				},
				"properties": {
					"Id": 11,
					"name": "11号线",
					'color': '#703945'
				}
			}, {
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": [[114.05558563027633,22.51242064355597],[114.05558134583089,22.55432366997366],[114.06167276600581,22.560224733268118],[114.11592447693874,22.560034376387655],[114.11534248158851,22.646737856538987],[114.20527905714597,22.64632684137581],[114.277422,22.728806000000002]]
				},
				"properties": {
					"Id": 3,
					"name": "3号线",
					"color": "#1b9ac5"
				}
			}, {
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": [[113.897932,22.537121],[114.02583,22.536247],[114.095173,22.540618],[114.11592447693874,22.56003437638765],[114.118666,22.532083]]
				},
				"properties": {
					"Id": 1,
					"name": "1号线",
					'color': '#46ac59'
				}
			}, {
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": [[114.06223590511051,22.50778141269954],[114.0618742270376,22.672649506871423],[114.076271,22.721616],[114.09065618736413,22.721837724783946]]
				},
				"properties": {
					"Id": 4,
					"name": "4号线",
					'color': 'red'
				}
			},  {
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": [[113.9656982421875,22.59368896484375],[113.9656982421875,22.56671142578125],[114.02587890625,22.53631591796875],[114.026123046875,22.523681640625],[114.0850830078125,22.523681640625],[114.0950927734375,22.56011962890625],[114.130126953125,22.56732177734375],[114.1370849609375,22.573486328125]]
				},
				"properties": {
					"Id": 7,
					"name": "7号线",
					'color': '#181d70'
				}
			}, {
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": [[113.94270352442123,22.51842590603508],[113.94397133374773,22.531781660658773],[114.02608501378812,22.533139053369464],[114.0260355666204,22.53625080251092],[114.02592872349148,22.541292450603024],[114.04354859532383,22.5534227828612],[114.0434805917694,22.57294223413844],[114.10412069124213,22.573246727608876],[114.10452061932541,22.562033706251384],[114.10941791557515,22.553757750749384],[114.10967905629514,22.534870767448087],[114.12094818555359,22.534794610288372]]
				},
				"properties": {
					"Id": 9,
					"name": "9号线",
					'color': '#6e6356'
				}
			}]
		}
    });
    chart_map.addSource('china', {
        'type': 'geojson',
		'data': 'https://geo.datav.aliyun.com/areas/bound/geojson?code=440300_full'
    });    
	chart_map.addLayer({
        'id': '中国',
        'type': 'fill',
        'source': 'china',
        'layout': {},
        'paint': {
            'fill-color': 'rgba(255,255,255,0.8)',
            'fill-opacity': 0.8
        }
    });
	chart_map.addLayer({
        "id": "lighten_subway",
        'type': 'line',
        'source': 'subway',
        'layout': {
			"line-cap":"round",
			"line-join":"round"
        },
        "paint": {
            "line-color": "#fff",
            "line-width": 4
        }
    });
    chart_map.addLayer({
        'id': 'subway_map',
        'type': 'line',
        'source': 'subway',
        'layout': {
			"line-cap":"round",
			"line-join":"round"
        },
        'paint': {
            "line-color": ['get','color'],
			"line-width":4,
			"line-opacity": 0.8
		}
    });
});