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
					"coordinates": [[113.89569388836652,22.670626481529396],[113.897932,22.537121]]
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
			},  {
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