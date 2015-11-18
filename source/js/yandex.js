var myMap;

function init(ymaps) {

    myMap = new ymaps.Map('mymap', {

        center: [34.77031874048443,-111.70493329296872],
        zoom: 8,
        controls: ['zoomControl'],
        type: 'yandex#hybrid'
    });
    var myPlacemark = new ymaps.Placemark([34.85413348182351,-111.79557049999997], {
        hintContent: 'седона'
    }, {
        iconImageHref: '../img/map-marker.svg',
        iconImageSize: [27, 27],
        iconImageOffset: [-3, -27]
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.add('zoomControl');
}
