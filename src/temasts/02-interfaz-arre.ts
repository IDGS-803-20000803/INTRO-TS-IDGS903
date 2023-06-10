interface Alumno{
    matricula:number;
    nombre:String;
    email:String;
}

const alumno: Alumno ={
    nombre: 'Daniel',
    matricula: 2333,
    email:"daniel@gmail.com"
}

let mascotas = ['perro','gato','perico']
mascotas[1] = "shhhhhh"
mascotas.push('sssssssssss')

let tem:(number|string)[]=[]
tem.push('nombre')
tem.push(224)

console.table( mascotas)
console.log("?? ~ file: 02-interfaz-arre.ts:12 ~ alumno: Alumno.email:", alumno)
