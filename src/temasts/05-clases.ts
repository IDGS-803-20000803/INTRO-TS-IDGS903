class Persona2{
    nombre:String='2';
    edad:number = 2;
    constructor(a:string,b:number){
        this.nombre = a;
        this.edad = b;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre} y edad ${this.edad}`)
    }
}

let persona:Persona2;
persona = new Persona2('Juan',23)
persona.imprimir();


//Modificadores de acceso
 class Dato{
    private valor:number = 0;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor = Math.floor(Math.random()*6)+1;
    }
    public imprimir(){
        console.log(`Valor: ${this.valor}`);
    }
 }


 class Persona3{
    constructor(public nombre:string, public edad:number){}
    imprimir(){
        console.log(`Nombre: ${this.nombre} y Edad ${this.edad}`)
    }
 }

 let dado1 = new Dato();
 dado1.tirar();
 dado1.imprimir();