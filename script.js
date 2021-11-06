function sigmoide(x){
    return 1/(1 + (Math.E) ** -x)
}
function sigmoideDerivado(x){
    return sigmoide(x) * (1 - sigmoide(x))
}
class RedNeuronal{
    constructor(capas){
        this.pesos = []
        this.deltas = []
        for (let i = 1; i < capas.length - 1; i++) {
            r = (2 * (Math.random() * ((capas[i] + 1) - (capas[i - 1] + 1)) + (capas[i - 1] + 1))) - 1
            this.pesos.push(r)
        }
        r = (2 * (Math.random() * ((capas[i + 1]) - (capas[i] + 1)) + (capas[i] + 1))) - 1
        this.pesos.push(r)
    }

    // gradiente(X, y, tasaAprendizaje, epochs){
    //     unos = 
    // }
    // predecir(){

    // }
    // HAY COSAS QUE NO SÉ TRADUCIRLAS A JAVASCRIPT
}