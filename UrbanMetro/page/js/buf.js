
function buff(distance) {
    var buf_map = new mapboxgl.Map({
        container: 'chart_14',
        style: 'mapbox://styles/mapbox/dark-v9',
        center: [114.050222,22.602202],
        zoom: 10,
        pitch: 0
    });

    var gjson;

    if (distance == 500)
        gjson = './js/b500.json';
    else
        gjson = './js/b1000.json';
    buf_map.on('load', function () {

        buf_map.addSource('chinab', {
            'type': 'geojson',
            'data': 'https://geo.datav.aliyun.com/areas/bound/geojson?code=440300_full'
        });
        buf_map.addLayer({
            'id': 'ÖÐ¹úb',
            'type': 'fill',
            'source': 'chinab',
            'layout': {},
            'paint': {
                'fill-color': 'rgba(255,255,255,0.8)',
                'fill-opacity': 0.8
            }
        });
        buf_map.addSource('500buf', {
            'type': 'geojson',
            'data': gjson
        });
        buf_map.addLayer({
            'id': 'buff5',
            'type': 'fill',
            'source': '500buf',
            'layout': {},
            'paint': {
                'fill-color': 'rgba(239,15,15,1)',
                'fill-opacity': 0.8
            }
        });

    });
}
