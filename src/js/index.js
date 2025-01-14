import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import bunquers from '../images/bunquers.jpg';
import catedral from '../images/catedral.jpg';
import hotelcorona from '../images/hotelcorona.jpg';
import logocastillo from '../images/logo-castillo.png';
import logocomida from '../images/logo-comida.png';
import mercat from '../images/mercat.jpg';
import museu from '../images/museu.jpg';
import pavello from '../images/pabellomunicipal.png';
import parador from '../images/parador.jpg';
import piscines from '../images/piscines.jpg';
import reialscolegis from '../images/reialscolegis.png';
import restaurantparc from '../images/restaurantelparc.jpg';
import teatre from '../images/teatre.jpg';
import vaixell from '../images/vaixell.jpg';
import waypointIcon from '../images/waypoint.png';

// Inicialitza el mapa centrant-lo en Tortosa
const map = L.map('map').setView([40.8128, 0.5215], 13);

// Afegeix una capa de mapa d'OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Dibuixa un cercle de 5 km de radi amb transparència al voltant de Tortosa
const circle = L.circle([40.8128, 0.5215], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.2,
    radius: 5000
}).addTo(map);

// Icones per a cada categoria
const icons = {
    Gastronomia: L.icon({
        iconUrl: logocomida,
        iconSize: [30, 40],
        iconAnchor: [15, 40],
        popupAnchor: [0, -35]
    }),
    Historia: L.icon({
        iconUrl: logocastillo,
        iconSize: [30, 40],
        iconAnchor: [15, 40],
        popupAnchor: [0, -35]
    }),
    Turisme: L.icon({
        iconUrl: waypointIcon,
        iconSize: [30, 40],
        iconAnchor: [15, 40],
        popupAnchor: [0, -35]
    }),
};

// Punts d'interès amb les seves coordenades, títols, enllaços i categories
const locations = [
    { coords: [40.8144637664588, 0.522115554069435], title: 'Catedral', url: 'https://ca.wikipedia.org/wiki/Catedral_de_Tortosa', category: 'Historia', imageUrl:catedral },
    { coords: [40.8156470830823, 0.524501681824228], title: 'Parador Nacional', url: 'https://ca.wikipedia.org/wiki/Castell_de_la_Suda', category: 'Historia', imageUrl:parador },
    { coords: [40.8111438517804, 0.519881483475489], title: 'Mercat', url: 'https://ca.wikipedia.org/wiki/Mercat_de_Tortosa', category: 'Gastronomia', imageUrl:mercat },
    { coords: [40.8105453703909, 0.522213026608439], title: 'Búnquers', url: 'https://www.tortosaturisme.cat/es/experiencia/visita-al-refugio-antiaereo-no4-de-tortosa/', category: 'Historia', imageUrl:bunquers },
    { coords: [40.8076504359825, 0.519869786770809], title: 'Restaurant el Parc', url: 'https://www.restaurantelparc.cat/', category: 'Gastronomia' , imageUrl:restaurantparc},
    { coords: [40.8107617594275, 0.519039320738504], title: 'Visita turística en vaixell', url: 'https://www.tortosaturisme.cat/es/experiencia/crucero-por-el-rio-ebro-en-tortosa-60-minutos/', category: 'Turisme' , imageUrl:vaixell},
    { coords: [40.8160798611555, 0.521959598007032], title: 'Museu', url: 'https://www.museudetortosa.cat/', category: 'Turisme', imageUrl:museu },
    { coords: [40.8134987883227, 0.513729016813624], title: 'Equipaments esportius', url: 'https://www.tortosasport.cat/instal%C2%B7lacions-esportives/tortosa/complex-esportiu-tortosa/pavello-municipal-de-ferreries/', category: 'Turisme' , imageUrl:pavello},
    { coords: [40.8059115258867, 0.517074274352204], title: 'Teatre', url: 'https://www.teatreauditoritortosa.cat/', category: 'Turisme', imageUrl:teatre },
    { coords: [40.8128242783528, 0.514547786141248], title: 'Piscines', url: 'https://www.wintortosa.cat/activitats-dirigides/piscina/', category: 'Turisme' , imageUrl:piscines},
    { coords: [40.8165282348349, 0.5129492365016], title: 'Restaurant Hotel Corona', url: 'https://www.hotelcoronatortosa.com', category: 'Gastronomia' , imageUrl:hotelcorona},
    { coords: [40.8148185665008, 0.524911066488041], title: 'Reials Col.legis', url: 'https://www.tortosaturisme.cat/es/lugar/los-reales-colegios-y-la-exposicion-permanente-ciudad-y-fiesta-del-renacimiento/', category: 'Historia', imageUrl:reialscolegis },
];

// Afegim els marcadors al mapa segons la seva categoria
locations.forEach(location => {
    const icon = icons[location.category];  // Selecciona la icona segons la categoria
    L.marker(location.coords, { icon: icon }).addTo(map)
        .bindPopup(`
            <h3>${location.title}</h3>
            <img src="${location.imageUrl}" alt="${location.title}" style="width: 200px; height: auto; margin-top: 5px;">
            <div>
            <a href="${location.url}" target="_blank">Més informació</a>
            </div>
        `);
});
