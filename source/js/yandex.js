var myMap;

function init(ymaps) {

    myMap = new ymaps.Map('mymap', {

        center: [34.77031874048443,-111.70493329296872], // Москва
        zoom: 8,
        controls: ['zoomControl'],
        type: 'yandex#hybrid'
    });
    myMap.controls.add('zoomControl');
}
