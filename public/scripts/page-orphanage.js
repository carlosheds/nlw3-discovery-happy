const options = {
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false

}

// create map
const map = L.map('mapid', options).setView([-22.9090215,-43.1757737], 13);

// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon
const icon = L.icon({
    iconUrl:'./public/images/map-marker.svg',
    iconSize:[58,68],
    iconAnchor: [29,68],
    popupAnchor:[170,2]
})

//create and add marker
L
.marker([-22.9090215,-43.1757737], { icon })
.addTo(map)

    
// image gallery
const buttons = document.querySelectorAll('.images button')
    
    //remover todas as classes .active
    buttons.forEach( button => {
        button.addEventListener('click', event => {
            const btn = event.currentTarget
            //remover todas as classes .active
            button.classList.remove('active')

            // selecioando a imagem clicada
            const image = btn.children[0]
            const imageContainer = document.querySelector('.orphanage-details > img')
            
            // atualizar o container da image
            imageContainer.src = image.src
            
            //adicionando a classe .active para este botao
            btn.classList.add('active')
        
        })
        })
    

    // selecioandno a imagem clicada
// }