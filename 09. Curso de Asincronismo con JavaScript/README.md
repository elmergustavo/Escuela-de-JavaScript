# Curso de Asincronismo con JavaScript

[![GitMoji](https://img.shields.io/badge/gitmoji-%20馃槣-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/Asynchronism-JS-Platzi?color=blue&label=Total%20Lines)](https://github.com/UltiRequiem/Asynchronism-JS-Platzi)

![Image](./others/img/wall.png)

Puedes encontrar alguna de mis notas en [others/](./others/).

El curso se encuentra en: [Platzi](https://platzi.com/clases/asincronismo-js)

## Curso Anterior

[UltiRequiem/ECMAScript6Plus-Platzi](https://github.com/UltiRequiem/ECMAScript6Plus-Platzi)

### LICENSE

[MIT](./LICENSE)
# Curso de Asincronismo con JavaScript

# AsincronismoConJS
Curso de asincronismo con Javascript.

Javascript es un lenguaje de programaci贸n as铆ncrono y no bloqueante. Tiene un manejador de eventos (EventLoop) implementado en un 煤nico hilo para las interfaces de entrada / salida (I/O).

**Async / Await** es recomendable a utilizar en vez de promesas ya que conseguimos que nuestro c贸digo sea s铆ncrono.

### Callbacks

***Ventajas:***

- Es simple
- Una funci贸n que llama a otra funci贸n
- Son universales y funcionan en cualquier navegador

***Desventajas:***

- Composici贸n complicada
- Callback Hell
- Manejo de errores tedioso ya que no se pueden manejar excepciones

### Promesas
***Ventajas:*** 

- Facilmente enlazables con then
- C贸digo m谩s intuitivo
- Permite trabajar con asincronismo 
  
***Desventajas:***

- No maneja excepciones, solo un catch final.
- Propenso a errores si no retornamos la siguiente llamada
- Necesita un traspilador para poder usarse en algunos navegadores.
  
### Asyn - Await
***Ventajas:*** 

- Se pueden manejar excepciones mediante try-cath
- Mejor legibilidad del c贸digo 

***Desventajas:***
- Necesita un traspilador para poder usarse en algunos navegadores.

### Instalaci贸n de dependencias
-  npm install xmlhttprequest --save
* https://www.youtube.com/watch?v=bWvnWhVCHAc

API
Interfaz de programaci贸n de aplicaciones (Application Programming Interface). Es un conjunto de
rutinas que provee acceso a funciones de un determinado software.
Concurrencia
Cuando dos o m谩s tareas progresan simult谩neamente.
Paralelismo
Cuando dos o m谩s tareas se ejecutan, literalmente, a la vez, en el mismo instante de tiempo.
Bloqueante
Una llamada u operaci贸n bloqueante no devuelve el control a nuestra aplicaci贸n hasta que se ha
completado. Por tanto el thread queda bloqueado en estado de espera.
S铆ncrono
Es frecuente emplear 鈥榖loqueante鈥? y 鈥榮铆ncrono鈥? como sin贸nimos, dando a entender que toda la
operaci贸n de entrada/salida se ejecuta de forma secuencial y, por tanto, debemos esperar a que
se complete para procesar el resultado.
As铆ncrono
La finalizaci贸n de la operaci贸n I/O se se帽aliza m谩s tarde, mediante un mecanismo espec铆fico
como por ejemplo un callback, una promesa o un evento, lo que hace posible que la respuesta
sea procesada en diferido.
Call Stack
La pila de llamadas, se encarga de albergar las instrucciones que deben ejecutarse. Nos indica en
que punto del programa estamos, por donde vamos.
Heap
Regi贸n de memoria libre, normalmente de gran tama帽o, dedicada al alojamiento din谩mico de
objetos. Es compartida por todo el programa y controlada por un recolector de basura que se
encarga de liberar aquello que no se necesita.
Cola o Queue
Cada vez que nuestro programa recibe una notificaci贸n del exterior o de otro contexto distinto al
de la aplicaci贸n, el mensaje se inserta en una cola de mensajes pendientes y se registra su
callback correspondiente.
Eventloop o Loop de eventos
Cuando la pila de llamadas (call stack) se vac铆a, es decir, no hay nada m谩s que ejecutar, se
procesan los mensajes de la cola. Con cada 鈥榯ick鈥? del bucle de eventos, se procesa un nuevo
mensaje.
Hoisting
Sugiere que las declaraciones de variables y funciones son f铆sicamente movidas al comienzo del
c贸digo en tiempo de compilaci贸n.
DOM
DOM permite acceder y manipular las p谩ginas XHTML como si fueran documentos XML. De
hecho, DOM se dise帽贸 originalmente para manipular de forma sencilla los documentos XML.
XML
Lenguaje de marcado creado para la transferencia de informaci贸n, legible tanto para seres
humanos como para aplicaciones inform谩ticas, y basado en una sencillez extrema y una r铆gida
sintaxis. As铆 como el HTML estaba basado y era un subconjunto de SGML, la reformulaci贸n del
primero bajo la sintaxis de XML dio lugar al XHTML; XHTML es, por tanto, un subconjunto de
XML.
Events
Comportamientos del usuario que interact煤a con una p谩gina que pueden detectarse para lanzar
una acci贸n, como por ejemplo que el usuario haga click en un elemento (onclick), que elija una
opci贸n de un desplegable (onselect), que pase el rat贸n sobre un objeto (onmouseover), etc.
Compilar
Compilar es generar c贸digo ejecutable por una m谩quina, que puede ser f铆sica o abstracta como
la m谩quina virtual de Java.
Transpilar
Transpilar es generar a partir de c贸digo en un lenguaje c贸digo en otro lenguaje. Es decir, un
programa produce otro programa en otro lenguaje cuyo comportamiento es el mismo que el
original.

![](https://static.platzi.com/media/user_upload/photo4949621016464828752-eae94edc-51d5-4e73-ba83-4905550ea08c.jpg)

## Algunas APIS
* https://swapi.dev/
* https://github.com/public-apis/public-apis
* https://developer.marvel.com/
* https://rickandmortyapi.com/

## Definici贸n Estructura Callback
Quisiera comentar algo y si estoy mal, por favor me corrigen:
La definici贸n que el profe Oscar nos da: 鈥淓s una funci贸n que al crearla le pasamos como par谩metro una segunda funci贸n鈥?. Seg煤n lo que entiendo, eso no har铆a referencia directamente al callback, sino a la funci贸n que recibe como par谩metro otra funci贸n.
Una funci贸n que recibe otra funci贸n como par谩metro se le denomina funci贸n de orden superior (higher-order function).
El callback en este caso ser铆a la funci贸n que es pasada como par谩metro, mas no la funci贸n que lo recibe.

Por si a alguien le cuesta aun asimilar el concepto de los Callback鈥?

Primero: Los callbacks son el nombre de una convenci贸n para usar funciones que llaman a otras en JavaScript. No hay una palabra reservada llamada 鈥渃allback鈥? en el lenguaje JavaScript que haga que nuestro c贸digo sea diferente o especial,
es mas una convenci贸n.
Tal es el caso que en lugar de llamar 鈥渃allback鈥? en el ejemplo de la clase, podemos llamarlo 鈥渟uma鈥? y funcionara igualmente.
![](https://static.platzi.com/media/user_upload/Img1-b8ed05d4-7155-439f-9858-9f2f5473a82a.jpg)
![](https://static.platzi.com/media/user_upload/Img2-2cf59f32-8f8f-4543-99f4-d4fe2d655b17.jpg)
Segundo y para que sirven? La mayor铆a estamos acostumbrados a programar de manera sincrona, es decir le indicamos al c贸digo que
por ejemplo defina un Valor 鈥淴鈥? y con otro valor 鈥淵鈥? y realizamos un calculo (Por ejemplo una multiplicaci贸n).

El problema radica en que por ejemplo si quisi茅ramos crear un programa que nos convierta nuestra moneda (pesos) a su equivalente en Bitcoin,
podemos definir X (Valor de nuestro dinero) pero NO podemos definir de manera impl铆cita 鈥淵鈥? (Precio del Bitcoin) por que es algo muy vol谩til. Entonces necesitamos obtener el precio del Bitcoin de una API, nuestro programa realiza una multiplicaci贸n de X * Y sin embargo no tenemos Y (precio del bitcion)
porque tenemos que esperar que el API nos conteste cual es este valor. Es ah铆 donde sirven los callback
.
Existen dos Metodos A y B
-El m茅todo B hace el calculo de nuestros Pesos * PrecioBitcoin
-El m茅todo A obtiene el precio del API de Bitcoin
Entonces el m茅todo B es llamado por el m茅todo A cuando por fin lee y obtiene el precio del Bitcoin, solo hasta entonces tiene sentido que multipliquemos nuestros valores.

## Peticiones a APIs usando Callbacks

Aclaraci貌n de varias cosas que quiz谩s no entiendas si estas empezando:

XMLHttpRequest es la forma antigua de hacer llamados, como el profesor lo menciona usa ese y no Fetch que es el actual, por que no conocemos a霉n las promesas y fecth es con promesas, para saber por que el profesor uso OPEN y todas esas funciones aqui est脿 la forma de usar XMLHttpRequest : https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest.

" new Error " que el profesor crea, es una nueva instancia de la clase Error que tiene Javascript, son clases ya implicitas que tiene javascript en este caso es para monstrar bien un mensaje de error podemos usarla, m脿s informaci貌n aqui : https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Error.

Para los que son fron-end y est谩n aprendiendo de Back, el profesor uso GET por que hace parte de los m茅todo http, en este caso necesitamos pedir informaci贸n a las url ,m脿s informaci贸n: https://developer.mozilla.org/es/docs/Web/HTTP/Methods

Por ultimo recomiendo una escucha atenta a lo que dice el profesor por que el explica el por que de cada cosa que hace y si no la conoces recomiendo buscarlas en Internet y as矛 avanzas en el curso.
    
## Implementando Promesas
Mes estaba preguntando por que somethingWillHappend lo declaraba como funci贸n y retornaba la promesa en lugar de declarar de una vez la promesa en la variable. Pues probando me di cuenta que para encapsular la promesa y que no se ejecute hasta que se llame a la funci贸n ya que si se declara la promesa directamente en la variable la promesa se ejecutara al cargar la variable.
```js
/**
 * Aqui la promesa se ejecuta al cargar el archivo
*/
const somethingWillHapped = new Promise( (resolve, reject) => {
    if (true) {
        console.log('Hey dude!');
        resolve('Hey!');
    } else {
        reject('Whoops!');
    }
});

/**
 *Aqui la promesa no se ejecuta hasta que se llame a la funcion
*/
const somethingWillHapped = () => {
    return new Promise( (resolve, reject) => {
        if (true) {
            console.log('Hey dude!');
            resolve('Hey!');
        } else {
            reject('Whoops!');
        }
    });
}
```

M茅todos de las promesas

Promise.all(iterable)
Devuelve una de dos promesas:

una que se cumple cuando todas las promesas en el argumento iterable han sido cumplidas,

o una que se rechaza tan pronto como una de las promesas del argumento iterable es rechazada.

Si la promesa retornada es cumplida, lo hace con un arreglo de los valores de las promesas cumplidas en el mismo orden definido en el iterable.

Si la promesa retornada es rechazada, es rechazada con la raz贸n de la primera promesa rechazada en el iterable. Este m茅todo puede ser 煤til para agregar resultados de m煤ltiples promesas

Promise.race(iterable)
Devuelve una promesa que se cumple o rechaza tan pronto como una de las promesas del iterable se cumple o rechaza, con el valor o raz贸n de esa promesa.

Promise.reject(reason)
Devuelve un objeto Promise que es rechazado con la raz贸n dada.

fuente: MDN

* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

```js
const somethingWillHappen = () => new Promise((resolve, reject) => true ? resolve('Hey!') : reject('Whoops!'));

somethingWillHappen()
  .then( response => console.log(response))
  .catch( err => console.log(err));

const error = new Error('Woops!!'); // Error que nos permite ver en consola m谩s detalles del error

const somethingWillHappen2 = () => new Promise((resolve, reject) => true ? setTimeout(() => resolve('True'), 5000) : reject(error)
);

somethingWillHappen2()
  .then( response => console.log(response))
  .catch( err => console.log(err));

// Para correr todas las promesas tenemos el m茅todo Promise.all() que nos retornara un array con la respuesta de todas las promesas que pasemos como parametro.

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then( response => console.log(response))
  .catch(err => console.log(err))
  ```
  
## Resolver problema con Promesas

Igual que como coment茅 en la clase final de los callbacks, resolv铆 el ejercicio con el m贸dulo HTTPS nativo de node, para no requerir la instalaci贸n de ning煤n paquete con npm, todo funciona nativamente. Si bien el resultado es el mismo, desistir de paquetes que no nos son realmente necesarios siempre ser谩 la mejor opci贸n para nuestros desarrollos a medida que van creciendo, para evitar llenarlos de dependencias.

```js
const https = require("https");
const API_BASE = 'https://rickandmortyapi.com/api/';

const APIRequest = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            res.setEncoding('utf8');
            if(res.statusCode === 200) {
                let body = '';
                res.on('data', (data) => {
                    body += data;
                });
                res.on('end', () => { 
                    resolve(JSON.parse(body));
                });
            } else reject(new Error(`REQUEST ERROR ON ${url}. Status ${res.statusCode}`));
        });
    });
}

APIRequest(API_BASE + 'character/')
    .then((response) => {
        console.log(response.info.count)
        return APIRequest(API_BASE + 'character/' + response.results[0].id);
    })
    .then((response) => {
        console.log(response.name)
        return APIRequest(response.origin.url);
    })
    .then((response) => {
        console.log(response.dimension)
    })
    .catch((error) => console.error(error));
```

Les dejo mi c贸digo comentado 馃槂

La funci贸n


```js
// modulo para hacer las peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


// funcion principal
const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    // instanciamos la conexion
    const xhttp = new XMLHttpRequest();
    // abrir una conexion con el metodo, la ruta y si es asincrono
    xhttp.open('GET', url_api, true);
    // validacion del llamado
    xhttp.onreadystatechange = (() => {
      // comparamos el 4 porque eso indica que se completo la peticion
      if(xhttp.readyState === 4){
        // verificamos que el status este en 200, 200 es que es correcto
        xhttp.status === 200
          // si esta en 200
          ? resolve(JSON.parse(xhttp.responseText))
          // si no esta en 200
          : reject(new Error('Error ' + url_api))
      }
    });
    // por ultimo enviamos la peticion
    xhttp.send();
  });
}

// exportamos la funcion
module.exports = fetchData;
```
Las peticiones

```js
// importamos la funcion
const fetchData = require('./../utils/fetchData');
// declaramos la ruta de la api
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
  .then(data => {
    // imprimimos el numero de personajes
    console.log(data.info.count);
    // volvemos a hacer la promesa de pedir algo, en este caso el personaje 1: Rick
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then(data => {
    // esperamos la promesa anterior y vemos el nombre de rick
    console.log(data.name);
    // volvemos a hacer la promesa, pero esta es sobre la dimension de Rick
    return fetchData(data.origin.url)
  })
  .then(data => {
    // vemos la dimension de rick
    console.log(data.dimension);
  })
  // si hay error
  .catch(err => {
    console.log(err);
  })
```

## Conociendo Async/await

Async/await no es mas que Syntax Sugar. Es una manera mas bonita de hacer lo mismo que estabamos haciendo con .then(). La clave es recordar que si una funci贸n regresa un promesa, podemos usar el keyword await, que le indicia al navagador: 鈥淓spera a que la promesa se resuleva y almacena su resultado en esta variable鈥?. Todo esto toma lugar dentro de una funci贸n asincrona, asi que usamos async para lograr esto

```js
const doSomethingAsync = () => {
  return new Promise ((resolve, reject) => {
    (true)
      ? setTimeout(() => {
        resolve('Do Something Async')
      }, 3000)
      : reject(new Error('Test Error'))
  })
}

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
}

(async () => {
  console.log('Before');
  await doSomething();
  console.log('After');
})()

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  console.log('Before 1');
  await anotherFunction();
  console.log('After 1');
})()

```

```js
const doSomethingAsync = () => {
    return new Promise((resolve,reject) =>{
    (true)
        ? setTimeout(()=> resolve('Do Something Async'),3000)
        :reject(new Error('Test Error'))
    })
}

const doSomething = async () =>{
    const something =await doSomethingAsync()
    console.log(something)
}

console.log('Before')
doSomething()
console.log('After')

const anotherFunction = async () =>{
    try{
     const something=await doSomethingAsync();
     console.log(something)
    }catch(error){
        console.log(error)
    }
}

console.log('Before 1')
anotherFunction();
console.log('After 1')
```
## Resolver problema con Async/Await

Esta es una forma de hacer que async/await espere a varios llamados al vez:
```js
async function foo() {
	const [characters , episodes, locations] = await Promise.all([
		getCharacters(),
		getEpisodes(),
		getLocations(),
	])

	console.log(characters)
	console.log(episodes)
	console.log(locations)
}
```
Me preguntaba por qu茅 no utilizamos directamente fetch (quiza tu tambien) pues bueno, primero al estar utilizando node, no contamos con fetch, por ello hay que instalarlo.

```js
// const fetchData = require('../utils/fetchData')
const fetch =require('node-fetch')
let API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => {
    try {
        // const data = await fetchData(url_api);
        // const character = await fetchData(`${API}${data.results[0].id}`)
        // const origin = await fetchData(character.origin.url);
     
     
        const data = await (await fetch(url_api)).json();
        const character = await (await fetch(`${API}${data.results[0].id}`)).json();
        const origin = await (await fetch(character.origin.url)).json()



        console.log((data.info.count))
        console.log(character.name)
        console.log(origin.dimension)

    } catch (error) {
        console.error(error)
    }
}

console.log('Before')
anotherFunction(API)
console.log('After')
```

Yo hice el reto desde la consola con fetch


```js
function getData(){
return fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(json => json)
}
async function anotherFunction(){
  try{
const data = await getData()
const character = await data.results[0]
const origin = await fetch(character.origin.url)
.then(response => response.json())
.then(json => json)
console.log(data.info.count)
console.log(character.name)
console.log(origin.dimension)
}catch(error){
console.error(error)}
}
```
```js
const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

const getFromApi = async () => {
  const data1 = await fetchData(API)
  const { count } = data1.info
  const { id } = data1.results[0]

  const data2 = await fetchData(`${API}/${id}`)
  const { name } = data2
  const { url } = data2.origin

  const data3 = await fetchData(url)
  const { dimension } = data3

  console.log(count)
  console.log(name)
  console.log(dimension)
}
getFromApi()
```
