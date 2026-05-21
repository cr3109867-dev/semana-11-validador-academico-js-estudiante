# 04 - Cuestionario Semana 11

Responde el cuestionario en este mismo archivo. Algunas preguntas son de seleccion multiple y otras son abiertas.

## Preguntas de seleccion multiple

### 1. Que es un error de sintaxis en JavaScript?

A. Un error que ocurre cuando el codigo esta mal escrito.  
B. Un error que ocurre cuando el resultado no coincide con lo esperado, pero el programa corre.  
C. Un error de conexion a internet.  
D. Un error exclusivo de CSS.

Respuesta:Respuesta: A. Un error que ocurre cuando el código está mal escrito



### 2. Que herramienta del navegador permite revisar errores de JavaScript?

A. Historial.  
B. Consola.  
C. Marcadores.  
D. Descargas.

Respuesta:B. Consola



### 3. Que significa que `document.getElementById("btnEnviar")` devuelva `null`?

A. Que el boton tiene demasiados estilos.  
B. Que no existe un elemento con ese ID o no esta disponible en ese momento.  
C. Que JavaScript no permite botones.  
D. Que el navegador no soporta HTML.

Respuestab:B. Que no existe un elemento con ese ID o no esta disponible en ese momento



### 4. Que hace `event.preventDefault()` en un formulario?

A. Evita que el formulario recargue o envie la pagina automaticamente.  
B. Borra todos los datos del navegador.  
C. Cierra la consola.  
D. Cambia el color del formulario.

Respuesta:A. Evita que el formulario recargue o envie la pagina automaticamente. 



### 5. Cual es una buena practica al depurar?

A. Cambiar muchas cosas al tiempo.  
B. Ignorar los mensajes de consola.  
C. Corregir una cosa, probar y documentar.  
D. Borrar todo el archivo.

Respuesta:a. Corregir una cosa, probar y documentar. 



### 6. Que estructura permite tomar decisiones?

A. `if`.  
B. `table`.  
C. `body`.  
D. `src`.

Respuesta:A. `if`.



### 7. Que estructura permite recorrer varios registros?

A. `for`.  
B. `alert`.  
C. `placeholder`.  
D. `href`.

Respuesta:A. `for`.



### 8. Que problema puede causar este codigo?

```js
let nota = document.getElementById("nota").value;
let suma = nota + 1;
```

A. Que `nota` se trate como texto y no como numero.  
B. Que el HTML se borre.  
C. Que el CSS no cargue.  
D. Ningun problema posible.

Respuesta:A. Que `nota` se trate como texto y no como numero. 



### 9. Que operador debe usarse para comparar igualdad estricta en JavaScript?

A. `=`  
B. `==`  
C. `===`  
D. `=>`

Respuesta:C. `===`



### 10. Que error hay en este fragmento?

```js
if (edad >= 18 {
  console.log("Mayor de edad");
}
```

A. Falta un parentesis de cierre.  
B. Falta una etiqueta HTML.  
C. Sobra la palabra edad.  
D. No se puede usar `if`.

Respuesta:A. Falta un parentesis de cierre. 



## Preguntas abiertas

### 11. Explica con tus palabras que es depurar codigo.

Respuesta: Es el proceso de identificar, analizar y corregir errores en un programa de manera sistemática, usando la consola, pruebas y documentación.



### 12. Cual es la diferencia entre un error de sintaxis y un error logico?

Respuesta: El error de sintaxis impide que el código se ejecute porque está mal escrito; el error lógico permite que el programa corra, pero el resultado es incorrecto.



### 13. Por que es importante documentar los errores encontrados?

Respuesta: Porque ayuda a entender el proceso de corrección, evita repetir fallos en el futuro y demuestra el aprendizaje técnico.



### 14. Describe una prueba que realizaste para comprobar que el sistema funcionaba.

Respuesta:

Respuesta: Ingresé una nota fuera de rango (6.0) y verifiqué que el sistema mostrara el mensaje de error y no agregara el registro a la tabla.

### 15. Que relacion tiene el control de flujos con la validacion de formularios?

Respuesta:Respuesta: El control de flujos (if, else, switch) permite decidir si los datos son válidos o inválidos y mostrar mensajes adecuados antes de procesarlo
