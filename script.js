function onEachFeature(feature, layer) {
    if (feature.properties && Object.keys(feature.properties).length > 0) {
        const colonyName = Object.keys(feature.properties)[0];
        const wikipediaUrl = `https://pt.wikipedia.org/wiki/${encodeURIComponent(colonyName)}`;
        
        layer.bindPopup(`<b>${colonyName}</b><br><a href="${wikipediaUrl}" target="_blank">Abrir na Wikipédia</a>`);
        layer.on('click', function () {
            window.open(wikipediaUrl, '_blank');
        });
    } else {
        console.warn('Feature sem propriedades detectada:', feature);
    }
}
