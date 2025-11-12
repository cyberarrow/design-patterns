const Navio = require("../Transporte/Navio")
const Logistica = require("./Logistica")

class LogisticaMaritima extends Logistica {
    criarTransporte() {
        return new Navio()
    }
}

module.exports = LogisticaMaritima