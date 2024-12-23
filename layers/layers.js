var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TempatIbadah_1 = new ol.format.GeoJSON();
var features_TempatIbadah_1 = format_TempatIbadah_1.readFeatures(json_TempatIbadah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_1.addFeatures(features_TempatIbadah_1);
var lyr_TempatIbadah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatIbadah_1, 
                style: style_TempatIbadah_1,
                popuplayertitle: 'Tempat Ibadah',
                interactive: true,
    title: 'Tempat Ibadah<br />\
    <img src="styles/legend/TempatIbadah_1_0.png" /> Gereja<br />\
    <img src="styles/legend/TempatIbadah_1_1.png" /> Masjid<br />\
    <img src="styles/legend/TempatIbadah_1_2.png" /> Vihara<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_TempatIbadah_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TempatIbadah_1];
lyr_TempatIbadah_1.set('fieldAliases', {});
lyr_TempatIbadah_1.set('fieldImages', {});
lyr_TempatIbadah_1.set('fieldLabels', {});
lyr_TempatIbadah_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});