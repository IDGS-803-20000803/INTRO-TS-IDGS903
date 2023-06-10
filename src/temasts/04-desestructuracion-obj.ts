//dessestructuracion de objetos y arreglos

interface Alumno1{
    matricula:number;
    nombre:string;
    edad: number;
    correo: string;
    grupo: Grupo;
}

interface Grupo{
    grupo:string;
    year:number;
}

const alumno2: Alumno1={
    matricula:1234,
    nombre:'Daniel',
    edad:35,
    correo:'daniel@gmail.com',
    grupo:{
        grupo:'IDGS',
        year:2023
    }
}

console.log(`La matricula es: ${alumno2.matricula}`)
console.log(`El nombre es: ${alumno2.nombre}`)
console.log(`El año del grupo es: ${alumno2.grupo.year}`)

const {matricula,nombre:nom,grupo:xx}= alumno2
const {grupo,year:anio}=xx

console.log(`La matricula es: ${matricula}`)
console.log(`El nombre es: ${nom}`)
console.log(`El grupo es: ${grupo}`)
console.log(`El año del grupo es: ${anio}`)

//desestructuracion de arreglos
const gps:string[] = ['IDGS','IEVN', 'REDES'];

console.log(`El grupo1 es: ${gps[0]}`)
console.log(`El grupo2 es: ${gps[1]}`)
console.log(`El grupo3 es: ${gps[2]}`)

const[a,,b] = gps

console.log(` grupo1 es: ${a}`)
console.log(` grupo1 es: ${b}`)
