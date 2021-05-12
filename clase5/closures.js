/*
1_¿En qué parte del código se genera un closure? ¿Por qué?

function cambiarDimensionFuente(size) {
    return function() { 
        document.body.style.fontSize = size + 'px';
        };
}

Porque tenemos una function() (sin nombre) que accede a una variable size, 
declarada fuera de su contexto. size pertenece al contexto de 
cambiarDimensiónFuente(), donde también se declara la function().

----------------------------------------------------------

2_¿En qué parte del código se establece que al hacer click sobre el elemento con id fuente-8 se 
cambie el tamaño de las fuentes de la página?

En la función setClicks(), especificamente 

function setClicks(){
    document.getElementById('fuente-8').onclick = size8; <------------------ Aquí
    document.getElementById('fuente-16').onclick = size16;
    document.getElementById('fuente-24').onclick = size24;
}

-----------------------------------------------------------

3_Supone que eliminamos la función setClicks y dejamos su código “libre” dentro de las etiquetas 
<script> … </script>. ¿Qué mensaje de error te muestra la consola de depuración? 
(Activa la consola si no la tienes activada) ¿Por qué aparece ese mensaje de error?


"<a class='gotoLine' href='#54:49'>54:49</a> Uncaught ReferenceError: size8 is not defined"
(El único que me sale es la falta de definición de size8)
Aparece porquen las variables size8, 16 y 24 se definian fuera de la función setClicks() y 
si solo se copia el codigo de la función, estas variables no están declaradas.

----------------------------------------------------------

4_¿Debemos escribir document.getElementById('fuente-8').onclick = size8; 
ó document.getElementById('fuente-8').onclick = size8(); ?¿Por qué?

size8, debido a que size8 es una variable que almacena la function sin nombre 
que existe dentro de la función cambiarDimensionFuente(size) y onclick necesita 
recibir una función para ejecutar cuando se realice el click

---------------------------------------------------------

5_Supón que al cargar la página queremos que el tamaño inicial de fuente sea 8 y para 
ello nos valemos de la función setClicks. ¿Debemos escribir dentro de esta función 
size8; ó size8();? ¿Por qué?

Debemos escribir size8() debido a que al escribirlo como una función, 
function() { 
    document.body.style.fontSize = size + 'px';
};
esta se ejecuta y realiza el cambio de tamaño de la fuente sin que se realice el click.

---------------------------------------------------------

6_Las closures no siempre son necesarias, incluso a veces se generan involuntariamente o 
innecesariamente consumiendo recursos del sistema que podrían ahorrarse. ¿Qué ventajas 
le ves al uso de closures en este código? ¿Y qué inconvenientes?

Luego de intentar modificar el código diría que su mayor ventaja es el poder resumir código.
Si bien es cierto que es probable que mi falta de experiencia en el lenguaje
podría impedir que encontrara una mejor solución, si intentaba usar la función cambiar
con parámetros el código no cumplia con modificar el tamaño del texto al momento del click. 
En cuanto a inconvenientes, sería principalmente la comprensión de su utilidad. Al verlo por
primera vez no parecía tener una función clara hasta que tuve que modificarla, ahí fue
más claro.


*/

var cambiar8 = function(){
	document.body.style.fontSize = '8px';
}
var cambiar16 = function(){
	document.body.style.fontSize = '16px';
}
var cambiar24 = function(){
	document.body.style.fontSize = '24px';
}
document.getElementById('fuente-8').addEventListener("click",cambiar8);
document.getElementById('fuente-16').addEventListener("click",cambiar16);
document.getElementById('fuente-24').addEventListener("click",cambiar24);