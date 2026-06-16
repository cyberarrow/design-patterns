class Navigator {
    calculateRoute(type, origin, destination) {
        if(type === "car") {
            console.log(`Calculating car route from ${origin} to ${destination}.`);
        } else if(type === "bus") {
            console.log(`Calculating bus route from ${origin} to ${destination}.`);
        } else if(type === "bike") {
            console.log(`Calculating bike route from ${origin} to ${destination}.`);
        } else {
            console.log('unknown route type...')
        }
    }
}

const navigator = new Navigator();

navigator.calculateRoute("car", "Brasília", "Belo Horizonte");
navigator.calculateRoute("bus", "Asa Sul", "Asa Norte");
navigator.calculateRoute("bike", "Mercado superbom", "café bomtempo");
navigator.calculateRoute("plane", "Brasília", "Lisboa");