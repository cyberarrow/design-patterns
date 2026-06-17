const RouteStrategy = require("./RouteStrategy");

class CarRoute extends RouteStrategy {
    calculate(origin, destination) {
        console.log(`Calculating car route from ${origin} to ${destination}.`)
    }
}

module.exports = CarRoute;