function suma():void{
    console.log(3+4)
}
function suma2(a:number,b:number):number{
    return a+b
}

function multiplicar(n1:number, otronumero:number, nuevoNumero=3):number{
    let tem = n1*nuevoNumero
    return tem*otronumero
}

interface Mascota{
    nombre:String;
    edad:number;
    mostrarEdad:()=>void;
}

function calcular(mascota:Mascota,x:number):void{
    mascota.edad+=x;
    console.log(mascota)
}

const nuevaMascota:Mascota={
    nombre:'Juan',
    edad:3,
    mostrarEdad(){
        console.log('La edad es: ', this.edad)
    },
}
calcular(nuevaMascota,5)

console.log("?? ~ file: 03-funciones.ts:9 ~ multiplicar ~ multiplicar:", multiplicar(2,3,0))
console.log(suma2(23,10))

//Funciones anonimas
const funcSumar = function(valor1:number, valor2:number):number {
    return valor1+valor2
}

console.log(funcSumar(4,5))

//Funciones con parametros opcionales
function calcular1(n1:number, n2:number,n3?:number):number {
    if(n3)
        return n1+n2+n3;
    else
        return n1+n2;
}

console.log(calcular1(3,2,5))
console.log(calcular1(3,2))

//Parametros Rest
//Le podemos pasar un vector, puede recibir una cantidad n de numeros
function calcular2(...valores:number[]) {
    let suma=0;
    for (let index = 0; index < valores.length; index++) {
        suma += valores[index]
    return suma
        
    }
    
}

console.log(calcular2(3,2,5))
console.log(calcular2(3,2))
