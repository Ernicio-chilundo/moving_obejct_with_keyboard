var SETA_ESQUERDA = 37
var SETA_DIREITA = 39

function Teclado(elemento){
    this.elemento = elemento

    this.pressionadas = []

    var teclado =this

    elemento.addEventListener("keydown", function(evento){
        teclado.pressionadas[evento.keyCode]=true
    })

    elemento.addEventListener("keyup", function(evento){
        teclado.pressionadas[evento.keyCode]=false
    })

}

Teclado.prototype ={
    pressionado:function(tecla){
        return this.pressionadas[tecla]
    }
}

// var SETA_ESQUERDA = 37
// var SETA_DIREITA = 39

// function Teclado(elemento){
//     this.elemento = elemento

//     this.pressionadas = []

//     var teclado = this

//     elemento.addEventListener("heydown", function(evento){
//         teclado.pressionadas[evento.keyCode]=true
//     })

//     elemento.addEventListener("keyup", function(evento){
//         teclado.pressionadas[evento.keyCode]=false
//     })
// }

// Teclado.prototype = {
//     pressioda:function(tecla){
//         return this.pressionadas[tecla]
//     }
// }