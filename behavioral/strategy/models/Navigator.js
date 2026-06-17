class Navigator {
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculateRoute(origin, destination) {
        if(!this.strategy) {
            console.log('No strategy has been defined.');
            return;
        }
        this.strategy.calculate(origin, destination);
    } 
}

module.exports = Navigator;