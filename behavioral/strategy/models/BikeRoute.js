const RouteStrategy = require("./RouteStrategy");

class BikeRoute extends RouteStrategy {
    calculate(origin, destination) {
        console.log(`Calculating bike route from ${origin} to ${destination}.`);
    }
}

module.exports = BikeRoute;