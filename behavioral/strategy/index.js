const Navigator = require("./models/Navigator");
const BikeRoute = require("./models/BikeRoute");

const navigator = new Navigator();

navigator.setStrategy(new BikeRoute());
navigator.calculateRoute("Brasília", "Lisboa");