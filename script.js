function q5(){

    var numero = document.getElementById('inNumero')
    var numero2 = document.getElementById('inNumero2')
    var numero3 = document.getElementById('inNumero3')
    var outTabuada = document.getElementById('txtoutTabuada')

    var x = Number(numero.value)
    var y = Number(numero2.value)
    var z = Number(numero3.value)
    var resposta = ""
    
    if( x+y > z && x+z > y && y+z > x)
    {
        resposta ="É um triangulo"

        if(x == y && x == z)
        {
            resposta ='Triangulo Equilatero'
        }else if(x == y || x == z || z == y)
        {
            resposta ='Triangulo Isosceles'
        }
        else
        {
            resposta = resposta + 'Triangulo Escaleno'
        }
    }

    
    txt.textContent = resposta
    
}
var btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener("click", q5)