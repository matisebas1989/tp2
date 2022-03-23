function  esPar (num) {
    if (num % 2 == 0){
        return true
    } else {
        return false
    }
}

let listado = [
    "uno",
    "cinco",
    "azul",
    "blanco",
    "violeta",
    "aabbttrrxxvva"
];

for (var i = 0; i < listado.length; i++){
    if (esPar(listado[i].length)){
        console.log(listado[i]);
    }
}