const RouteStrategy = require("./RouteStrategy");

class BusRoute extends RouteStrategy {
    calculate(origin, destination) {
        console.log(`Calculating bus route from ${origin} to ${destination}.`);
    }
}

module.exports = BusRoute;