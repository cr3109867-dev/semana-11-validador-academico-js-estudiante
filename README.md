# Semana 11 - Evaluacion practica: errores frecuentes en JavaScript, depuracion sistematica y control de flujos

## 1. Proposito de la actividad

Esta actividad corresponde a la Semana 11 de la Unidad 2: **Validacion, correccion y presentacion de proyectos de software**.

El reto consiste en abrir un sistema web en Visual Studio Code, ejecutar el proyecto en el navegador, identificar errores frecuentes en JavaScript, corregirlos de manera sistematica y documentar el proceso tecnico.

El producto final no es solamente que el sistema funcione. Tambien se evalua que puedas explicar:

- que error encontraste,
- como lo detectaste,
- por que ocurria,
- que correccion aplicaste,
- que prueba realizaste para verificar la solucion.

## 2. Contexto del sistema

El sistema se llama **Validador academico comunitario**.

Su funcion esperada es registrar estudiantes y validar:

1. Nombre completo.
2. Correo electronico.
3. Edad.
4. Nota final.
5. Porcentaje de asistencia.
6. Nombre del proyecto desarrollado.
7. Linea o tipo de proyecto.

Despues de validar los datos, el sistema debe clasificar al estudiante en uno de estos estados:

- **Aprobado**: nota mayor o igual a 3.5 y asistencia mayor o igual a 70%.
- **Plan de mejora**: nota cercana al minimo o asistencia parcial.
- **No aprobado**: resultados por debajo de los criterios minimos.

## 3. Resultado de aprendizaje esperado

Al terminar la actividad, debes demostrar que puedes:

- reconocer errores de sintaxis, referencia, tipo y logica en JavaScript;
- usar la consola del navegador para leer errores;
- aplicar `console.log()` cuando sea necesario;
- corregir codigo paso a paso;
- usar estructuras de control de flujo como `if`, `else`, `switch` y `for`;
- validar datos de formularios;
- documentar la depuracion en una bitacora tecnica;
- entregar un proyecto funcional y verificable.

## 4. Herramientas necesarias

Debes trabajar con:

- Visual Studio Code.
- Navegador web actualizado: Chrome, Edge, Firefox o Brave.
- Extension recomendada: Live Server.
- Consola del navegador.

No necesitas instalar Node.js para esta actividad. El proyecto funciona como una pagina web local.

## 5. Como abrir el proyecto en VS Code

1. Descarga el archivo ZIP entregado por el docente.
2. Descomprime el ZIP en una carpeta de trabajo.
3. Abre Visual Studio Code.
4. Selecciona **File > Open Folder** o **Archivo > Abrir carpeta**.
5. Elige la carpeta `semana-11-validador-academico-js`.
6. Revisa la estructura del proyecto.
7. Lee este README antes de modificar codigo.

## 6. Como ejecutar el sistema

Opcion recomendada:

1. Instala la extension **Live Server** en VS Code.
2. Abre el archivo `index.html`.
3. Haz clic derecho sobre el archivo.
4. Selecciona **Open with Live Server**.
5. El sistema se abrira en el navegador.

Opcion alternativa:

1. Abre la carpeta del proyecto.
2. Haz doble clic en `index.html`.
3. Abre la consola del navegador con `F12`.

## 7. Archivos del proyecto

```text
semana-11-validador-academico-js/
|
|-- README.md
|-- index.html
|-- css/
|   |-- styles.css
|-- js/
|   |-- app.js
|   |-- errores-originales.js
|-- data/
|   |-- casos-prueba.json
|-- docs/
|   |-- 01-leccion-semana-11.md
|   |-- 02-guia-vscode.md
|   |-- 03-bitacora-depuracion.md
|   |-- 04-cuestionario.md
|   |-- 05-mapa-conceptual-notes.md
|   |-- 06-pruebas-aceptacion.md
|   |-- 07-rubrica-evaluacion.md
|   |-- 08-checklist-entrega.md
|   |-- 09-formato-reflexion.md
|-- evidencias/
|   |-- README.md
```

## 8. Que debes modificar

Debes corregir principalmente el archivo:

```text
js/app.js
```

No debes modificar `js/errores-originales.js`, porque conserva una copia del codigo inicial con errores. Ese archivo sirve para comparar el antes y el despues.

Puedes consultar `index.html` para verificar los identificadores de los elementos, pero evita cambiar la estructura HTML salvo que tengas una justificacion tecnica clara y la documentes en la bitacora.

## 9. Metodo de depuracion recomendado

Aplica este proceso:

1. Ejecuta el sistema.
2. Reproduce el fallo.
3. Abre la consola del navegador.
4. Lee el primer mensaje de error.
5. Ubica archivo y linea aproximada.
6. Formula una hipotesis: que esta fallando y por que.
7. Corrige solo una cosa.
8. Guarda el archivo.
9. Recarga el navegador.
10. Prueba de nuevo.
11. Documenta el hallazgo en la bitacora.
12. Repite hasta que el sistema funcione.

## 10. Tipos de errores que debes buscar

El proyecto contiene errores intencionales relacionados con:

- sintaxis incorrecta;
- identificadores que no coinciden entre HTML y JavaScript;
- variables o elementos no definidos;
- eventos conectados de forma incorrecta;
- ausencia de `preventDefault()` en el formulario;
- datos numericos tratados como texto;
- condiciones mal planteadas;
- operadores incorrectos;
- ciclos con limites equivocados;
- uso incorrecto de propiedades del DOM.

No todos los errores apareceran al mismo tiempo. Algunos se revelan despues de corregir otros.

## 11. Evidencias que debes entregar

Al finalizar, comprime tu carpeta corregida y entrega un ZIP con:

1. `js/app.js` corregido.
2. `docs/03-bitacora-depuracion.md` diligenciada.
3. `docs/04-cuestionario.md` respondido.
4. `docs/05-mapa-conceptual-notes.md` completado.
5. Capturas de pantalla en la carpeta `evidencias/`:
   - consola con al menos un error inicial;
   - codigo corregido;
   - sistema funcionando;
   - tabla con registros validados;
   - resumen final del sistema.

## 12. Criterios generales de exito

El sistema se considera funcional cuando:

- no aparecen errores criticos en consola;
- el formulario no se envia si hay datos invalidos;
- los mensajes de error son claros;
- los datos validos se agregan a la tabla;
- el estado academico se calcula correctamente;
- el resumen se actualiza;
- los casos de prueba se cargan correctamente;
- la bitacora explica el proceso de depuracion.

## 13. Reglas de trabajo individual

Esta es una actividad individual. Puedes consultar apuntes, documentacion, ejemplos de clase y recursos abiertos, pero debes escribir tus propias respuestas y explicar tus propias correcciones.

No se evalua solo el resultado final. Se evalua tambien tu proceso de pensamiento tecnico.

## 14. Recomendacion final

No intentes corregir todo al mismo tiempo. La depuracion profesional se hace de forma ordenada: un error, una hipotesis, una correccion, una prueba y una evidencia.
