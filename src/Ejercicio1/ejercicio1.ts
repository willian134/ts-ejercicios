class persona {
    nombre: string= ""
    edad: number= 0
    constructor (nombre:string , edad:number){
        this.edad = edad
        this.nombre= nombre
    }
    saludar(){
        console.log("Hola soy" + this.nombre);    
    }
}
let lista : persona[]=[
    
    new persona ( 'Juan', 25 ),
    new persona ( 'Ana', 30 ),          
    new persona ( 'María', 35 )
];


console.log(lista); 