const LogisticaMaritima = require("./Logistica/LogisticaMaritima")
const LogisticaTerrestre = require("./Logistica/LogisticaTerrestre")

const tipoDeLogistica = "maritima"

let transporte

tipoDeLogistica === "terrestre" ?  transporte = new LogisticaTerrestre() : transporte = new LogisticaMaritima()

transporte.entregarCarga()