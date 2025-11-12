class Logistica {
    criarTransporte() {
        throw new Error("O método criarTransporte() precisa ser implementado")
    }

    entregarCarga() {
        const transporte = this.criarTransporte()
        transporte.entregar()
    }
}

module.exports = Logistica