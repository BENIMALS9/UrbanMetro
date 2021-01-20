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
					"coordinates": [[113.96928448351409,22.539843511750796],[113.98041149159182,22.53640080709205],[114.02583,22.536247],[114.095173,22.540618],[114.11592447693874,22.56003437638765],[114.118666,22.532083]]
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
					"coordinates": [[114.0621996453467,22.519590742030836],[114.06221289983768,22.551887791988683]]
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