# 01 - Leccion Semana 11

## Tema

**Errores frecuentes en JavaScript; depuracion sistematica; control de flujos.**

## Introduccion

En programacion, los errores no son fracasos. Son senales que permiten comprender mejor el comportamiento del codigo. Un estudiante que aprende a depurar deja de depender de la adivinanza y empieza a trabajar con evidencia: mensajes de consola, pruebas, valores de variables y comparacion entre el resultado esperado y el resultado obtenido.

Esta semana se enfoca en tres competencias:

1. Reconocer errores frecuentes en JavaScript.
2. Aplicar un metodo sistematico para depurar.
3. Usar estructuras de control de flujo para tomar decisiones y repetir procesos.

## 1. Errores frecuentes en JavaScript

### 1.1 Error de sintaxis

Ocurre cuando el codigo esta escrito de una forma que JavaScript no puede interpretar.

Ejemplos:

```js
let nombre = "Ana;
```

```js
if (edad >= 18 {
  console.log("Mayor de edad");
}
```

Senales comunes:

- falta una comilla;
- falta un parentesis;
- falta una llave;
- hay un simbolo en una posicion incorrecta.

### 1.2 Error de referencia

Ocurre cuando el codigo intenta usar algo que no existe o que no fue declarado.

Ejemplo:

```js
console.log(nombreUsuario);
```

Si `nombreUsuario` no existe, aparece un error de referencia.

Tambien ocurre cuando un ID del HTML no coincide con el usado en JavaScript.

```js
document.getElementById("btnEnviar")
```

Si en el HTML no existe `id="btnEnviar"`, el resultado sera `null`.

### 1.3 Error de tipo

Ocurre cuando un valor se usa como si fuera de otro tipo.

Ejemplo:

```js
let edad = "15";
let resultado = edad + 5;
console.log(resultado); // "155"
```

El valor `"15"` es texto. Para convertirlo:

```js
let edad = Number("15");
```

### 1.4 Error logico

Ocurre cuando el programa se ejecuta, pero el resultado es incorrecto.

Ejemplo:

```js
if (nota > 3.5) {
  console.log("Aprobado");
}
```

Si la regla institucional dice que se aprueba con 3.5 o mas, la condicion correcta es:

```js
if (nota >= 3.5) {
  console.log("Aprobado");
}
```

### 1.5 Error en eventos

Ocurre cuando un boton, formulario o elemento interactivo no responde como se espera.

Ejemplo incorrecto:

```js
boton.addEventListener("click", saludar());
```

Forma correcta:

```js
boton.addEventListener("click", saludar);
```

## 2. Depuracion sistematica

Depurar no es cambiar lineas al azar. Es seguir un proceso.

### Metodo recomendado

1. Reproducir el error.
2. Leer la consola.
3. Identificar archivo y linea.
4. Revisar la variable o instruccion relacionada.
5. Formular una hipotesis.
6. Corregir una cosa.
7. Probar de nuevo.
8. Documentar.

## 3. Uso de la consola

La consola permite observar errores, advertencias y datos internos.

Ejemplo:

```js
console.log("Valor de nota:", nota);
```

Esto ayuda a verificar si el valor que llega al programa es realmente el esperado.

## 4. Control de flujos

El control de flujos permite que el programa tome decisiones.

### 4.1 if / else

```js
if (edad >= 18) {
  console.log("Puede ingresar");
} else {
  console.log("No puede ingresar");
}
```

### 4.2 else if

```js
if (nota >= 4.5) {
  console.log("Excelente");
} else if (nota >= 3.5) {
  console.log("Aprobado");
} else {
  console.log("Plan de mejora");
}
```

### 4.3 switch

```js
switch (linea) {
  case "web":
    console.log("Proyecto web");
    break;
  case "datos":
    console.log("Proyecto de datos");
    break;
  default:
    console.log("Linea no reconocida");
}
```

### 4.4 for

```js
for (let i = 0; i < registros.length; i++) {
  console.log(registros[i]);
}
```

## 5. Buenas practicas

- Usa nombres de variables claros.
- Verifica que los ID del HTML coincidan con JavaScript.
- Convierte valores de formularios con `Number()` cuando sean numericos.
- Usa `===` para comparar.
- Evita cambiar muchas cosas al mismo tiempo.
- Documenta cada error y solucion.
- Realiza pruebas con datos validos e invalidos.
