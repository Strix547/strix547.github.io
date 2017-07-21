
	var map_objs_qnt=1;
	var map_objs_descriptions = new Array ('');
	var map_objs_address = ['г. Краснодар, ул. Красная, 124'];


function init(){ 

	ymaps.geocode('г. Краснодар, ул. Красная, 124', { results: 1 }).then(function (res) {
		var firstGeoObject = res.geoObjects.get(0),
		myMap = new ymaps.Map("map", {
			center: firstGeoObject.geometry.getCoordinates(),
			zoom: 17
		});

    	myMultiGeocoder = new MultiGeocoder({ boundedBy: myMap.getBounds() });
		
		myMultiGeocoder.geocode(
			map_objs_address
		).then(
			function (res) {
				for (var i=0; i<map_objs_qnt; i++){
					item=res.geoObjects.get(i);
					var cont = item.properties.get('balloonContentBody');
					item.properties.set('balloonContentBody', cont + map_objs_descriptions[i]);
					//var icn="/img/map_icon_"+p_status[i]+".png";
					//item.options
					//	.set('iconImageHref', icn)
					//	.set('iconImageSize', [30,45]);
				}
				myMap.geoObjects.add(res.geoObjects);
			},
			function (err) {
				alert(err);
			}
		);

		myMap.controls
			.add('zoomControl', { left: 5, top: 5 })
			.add('typeSelector')
			.add('mapTools', { left: 35, top: 5 });
		
	});

}

function MultiGeocoder(options) {
	this._options = options || {};
}

MultiGeocoder.prototype.geocode = function (requests, options) {
    var self = this,
        opts = ymaps.util.extend({}, self._options, options),
        size = requests.length,
        promise = new ymaps.util.Promise(),
        result = [],
        geoObjects = new ymaps.GeoObjectArray();

    requests.forEach(function (request, index) {
        ymaps.geocode(request, opts).then(
            function (response) {
                var geoObject = response.geoObjects.get(0);

                geoObject && (result[index] = geoObject);
                --size || (result.forEach(geoObjects.add, geoObjects), promise.resolve({ geoObjects: geoObjects }));
            },
            function (err) {
                promise.reject(err);
            }
        );
    });

    return promise;
};

$(document).ready(function(){

//slick sliders initial
	$('.main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
	});
});	