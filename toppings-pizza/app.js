
///getElementById ---> SELECIONA UN ID DE UN ELEMENTO O NODO
/*
const titulo = document.getElementById('titulo');
console.log(titulo.innerHTML);

titulo.innerText='Favoritos'; //--->MODIFICAR EL TEXTO DE UN NODO
*/

///getElementsByClassName ---> SELECIONA TODOS VALORES DE UN ELEMENTO SELECIONADO DE UN NODO
/*
const topping = document.getElementsByClassName('topping');
console.log(topping);
console.log(topping[1].id)
*/

///getElementsByTagName ---> SELECIONA TODAS LA ETIQUETAS SELEC DE HTML DE UN NODO
/*
const contenedor = document.getElementsByTagName('li');
console.log(contenedor);

const contenedor = document.getElementsByTagName('a');
console.log(contenedor[0].removeAtribute('href')); //--->ELIMINAR UN ATRIBUTO DE HTML DE UN NODO
console.log(contenedor[0].setAttribute('href','http://')); //--->AÑADIR UN ATRIBUTO DE HTML DE UN NODO 
*/

///getElementsByClassName ---> SELECIONA SOLO LA CLASE SELECIONADA DE UN NODO
/*
const contenedores = document.getElementsByClassName('fondo-maron');
console.log(contenedores);
*/

///querySelector ---> ELEMENTO DEL PRIMER RETORNOS SELECIONANDO DE UN NODO
/*
const aceites = document.querySelector('.topping.fondo-naranja');
const aceite = document.querySelector('ul li.fondo-naranja');

aceites.classList.add('texto-rojo');                         //-->AGREGAMOS UNA CLASE DE ESTILO CSS
console.log(aceites.classList.contains('fondo-naranja'));    //-->VERIFICA EN BOOLENO SI TIENES LA CLASE SELECIONADA
aceites.classList.remove('fondo-naranja');                   //-->ELIMINAMOS UNA CLASE SELECIONADA

console.log(aceite);   
*/

///querySelectorAll ---> ELEMENTO DE RETORNOS DE TODOS SELECIONANDO DE UN NODO
/*
const aceites = document.querySelectorAll('.topping.fondo-naranja');
const aceite = document.querySelectorAll('ul li.fondo-naranja');
console.log(aceite);
*/

//CREAMOS Y AGREGAMOS UN ELEMENTO DE HTML, EN UNA LISTA SELECIONADAD, CON TODO SUS ATRIBUTOS
/*/
const listas = document.getElementById('lista-topping');
//CREAR
const nuevoElem = document.createElement('li');
//AÑADIR EN LA CLASE, 
nuevoElem.classList.add('topping', 'fondo-maron');
//NOMBRE ELEM
nuevoElem.innerText='Queso';

//AÑADE UN NODO DENTRO DE UN ELEM
listas.append(nuevoElem);

//ELIMINO LO QUE CREE O LA LISTA
nuevoElem.remove();
*/


////////EVENTOS HANDLER///////////
function mostrarClic(topping){
    console.log(topping)
}


///EVENTO DE addEventListener A TODA LOS QUE TIENEN LA CLASE DE 'topping' 

const toppings = document.getElementsByClassName('topping');

//opcion 1
for (const toppin of toppings){
    toppin.addEventListener('click', (e)=>{
        console.log(e.target.innerText);
    });
}

//opcion 2
// for (const toppin of toppings){
//     toppin.addEventListener('click', mostrarClick);
// }
// function mostrarClick(e){
//     console.log(e.target.innerText);
// }