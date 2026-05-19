# 02 - Guia rapida de trabajo en Visual Studio Code

## 1. Abrir carpeta

1. Abre VS Code.
2. Selecciona `Archivo > Abrir carpeta`.
3. Escoge la carpeta del proyecto.
4. Verifica que puedas ver `index.html`, `css`, `js` y `docs`.

## 2. Instalar Live Server

1. Ve al panel de extensiones.
2. Busca `Live Server`.
3. Instala la extension de Ritwick Dey.
4. Abre `index.html`.
5. Clic derecho > `Open with Live Server`.

## 3. Abrir consola del navegador

Usa una de estas opciones:

- `F12`
- `Ctrl + Shift + I`
- clic derecho > `Inspeccionar` > pestana `Console`

## 4. Interpretar mensajes de error

Un error de consola suele mostrar:

- tipo de error;
- descripcion;
- archivo;
- linea aproximada.

Ejemplo:

```text
Uncaught TypeError: Cannot read properties of null
app.js:15
```

Esto indica que probablemente JavaScript intento usar un elemento inexistente.

## 5. Buscar coincidencia de IDs

Si el error dice que algo es `null`, revisa:

1. El ID usado en JavaScript.
2. El ID real en HTML.
3. Si el script carga despues del HTML.

## 6. Prueba minima recomendada

Cada vez que corrijas algo:

1. Guarda con `Ctrl + S`.
2. Recarga el navegador.
3. Mira consola.
4. Ejecuta una prueba concreta.
5. Escribe el resultado en la bitacora.
