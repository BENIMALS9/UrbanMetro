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
				"coordinates": [[113.83069178742431,22.7671184409737],[113.83917237418173,22.589610167310372],[113.89796578742431,22.5372074409737],[113.89812715289563,22.521777530505346],[113.89819266176373,22.521772576419053]]
				},
				"properties": {
					"Id": '11line',
					"name": "11号线",
					'color': '#703945'
				}
			}, {
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": [[113.89569388836652,22.670626481529396],[113.897932,22.537121]]
				},
				"properties": {
					"Id": '1line',
					"name": "1号线",
					'color': '#46ac59'
				}
			}, {
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": [[113.89752197265625,22.47930908203125],[113.8958740234375,22.52227783203125],[113.89788818359375,22.537109375],[113.88128662109375,22.53729248046875],[113.91912841796875,22.5819091796875],[114.1361083984375,22.58111572265625],[114.136474609375,22.54608154296875]]
				},
				"properties": {
					"Id": '5line',
					"name": "5号线",
					"color": "#7f3a7e"
				}
			}, {
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": [[113.897525,22.479227],[113.91091321620598,22.479695112112765],[113.974216,22.5369],[113.97417443939848,22.54628538653279],[114.148765,22.547688],[114.14867316023843,22.564618124691247],[114.174291,22.564118],[114.183207,22.55785],[114.23749045221153,22.55786395800129]]
				},
				"properties": {
					"Id": '2line',
					"name": "2（8）号线",
					"color": "#8b440e"
				}
			}, {
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": [[113.89819266176373,22.521772576419053],[113.942498,22.518422],[113.968432,22.525142],[113.98081179485419,22.52530300042561],[114.02583,22.536247],[114.05330564869585,22.54692110532225]]
				},
				"properties": {
					"Id": '11line',
					"name": "11号线",
					'color': '#703945'
				}
			}, {
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": [[114.055586,22.507884],[114.05558134583089,22.55432366997366],[114.06167276600581,22.560224733268118],[114.11592447693874,22.56003437638765],[114.11534248158851,22.64673785653899],[114.20527905714597,22.64632684137581],[114.277422,22.728806]]
				},
				"properties": {
					"Id": '3line',
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
					"Id": '1line',
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
					"Id": '4line',
					"name": "4号线",
					'color': 'red'
				}
			}, {
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": [[113.83117758243898,22.75695020180883],[113.94745387880391,22.757263933392405],[113.949663,22.683253],[114.06194333805254,22.641145796328274],[114.06199031482083,22.619731807365305],[114.089851,22.568308],[114.09497653761505,22.560107877929138],[114.095173,22.540618]]
				},
				"properties": {
					"Id": '6line',
					"name": "6号线",
					'color': '#57e1ca'
				}
			}, {
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": [[113.9656982421875,22.59368896484375],[113.9656982421875,22.56671142578125],[114.02587890625,22.53631591796875],[114.026123046875,22.523681640625],[114.0850830078125,22.523681640625],[114.0950927734375,22.56011962890625],[114.130126953125,22.56732177734375],[114.1370849609375,22.573486328125]]
				},
				"properties": {
					"Id": '7line',
					"name": "7号线",
					'color': '#181d70'
				}
			}, {
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": [[113.895809,22.522332],[113.93980427700153,22.52229042133908],[113.93961392012106,22.53390219104753],[114.02587945176441,22.533135251417907],[114.02583,22.536247],[114.02572314942684,22.541288647151646],[114.043343,22.553419],[114.04327496751888,22.572938448096526],[114.10391505536029,22.573243019105274],[114.104315,22.56203],[114.10921230762406,22.55375405204368],[114.1094734762699,22.534867072003223],[114.12074260359351,22.534790929251034]]
				},
				"properties": {
					"Id": '9line',
					"name": "9号线",
					'color': '#6e6356'
				}
			}, {
				"type": "Feature",
				"geometry": {
					"type": "LineString",
					"coordinates": [[114.06276941564748,22.508017234013103],[114.06272217997395,22.52364789353173],[114.07309686390585,22.539226442223907],[114.07325416362323,22.573089021658074],[114.0758756849755,22.581223287461924],[114.0760314641417,22.64339627857328],[114.10617159124271,22.64339826081528],[114.10629820813587,22.700122628952276]]
				},
				"properties": {
					"Id": '10line',
					"name": "10号线",
					'color': '#fa7ab3'
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