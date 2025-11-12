const Caminhao = require("../Transporte/Caminhao")
const Logistica = require("./Logistica")

class LogisticaTerrestre extends Logistica {
    criarTransporte() {
        return new Caminhao()
    }
}

module.exports = LogisticaTerrestre