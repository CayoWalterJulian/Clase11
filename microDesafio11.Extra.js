numeroArray = [4,7,54,36,343,1,33,72,84,912]

let [numero0,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9] = numeroArray
let restoDeNumero = [numero1,numero3,numero5,numero6,numero7,numero8,numero9]
console.log(numero0);
console.log(numero2);
console.log(numero4);
console.log(restoDeNumero);

mascota = {
    nombre:"Lily",
    tipoDeMascota:"perro",
    color:"negro",
    raza:"bulldog"
}
let {nombre,tipoDeMascota,color,raza} = mascota


console.log("Hola les presento a mi mascota su nombre es:",nombre,", es un hermoso",tipoDeMascota,", de color:",color," y su raza es:",raza,);