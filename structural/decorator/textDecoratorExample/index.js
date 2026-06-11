const NegritoDecorator = require("./src/NegritoDecorator")
const Texto = require("./src/Texto")


let texto = new Texto("Nice work!")

texto = new NegritoDecorator(texto);

console.log(texto.renderizar())