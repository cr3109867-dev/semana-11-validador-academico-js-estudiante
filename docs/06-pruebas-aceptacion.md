# 06 - Pruebas de aceptacion

Usa esta guia para comprobar que el sistema funciona despues de corregirlo.

## Prueba 1 - Nombre vacio

Datos:

- Nombre: vacio
- Correo: estudiante@correo.com
- Edad: 15
- Nota: 4.0
- Asistencia: 90
- Proyecto: Feria digital
- Linea: web

Resultado esperado:

- El sistema muestra mensaje de error.
- No agrega registro a la tabla.

## Prueba 2 - Correo invalido

Datos:

- Nombre: Laura Gomez
- Correo: laura
- Edad: 15
- Nota: 4.0
- Asistencia: 90
- Proyecto: Feria digital
- Linea: web

Resultado esperado:

- El sistema muestra mensaje de correo invalido.
- No agrega registro.

## Prueba 3 - Edad menor a 12

Datos:

- Nombre: Juan Perez
- Correo: juan@correo.com
- Edad: 10
- Nota: 4.0
- Asistencia: 90
- Proyecto: Registro rural
- Linea: datos

Resultado esperado:

- El sistema muestra mensaje de edad invalida.
- No agrega registro.

## Prueba 4 - Nota fuera de rango

Datos:

- Nombre: Maria Ruiz
- Correo: maria@correo.com
- Edad: 16
- Nota: 6
- Asistencia: 90
- Proyecto: Formularios
- Linea: formulario

Resultado esperado:

- El sistema muestra mensaje de nota invalida.
- No agrega registro.

## Prueba 5 - Registro aprobado

Datos:

- Nombre: Ana Torres
- Correo: ana@correo.com
- Edad: 15
- Nota: 4.2
- Asistencia: 92
- Proyecto: Feria digital rural
- Linea: web

Resultado esperado:

- Se agrega a la tabla.
- Estado: Aprobado.
- El resumen se actualiza.

## Prueba 6 - Plan de mejora

Datos:

- Nombre: Luis Mejia
- Correo: luis@correo.com
- Edad: 13
- Nota: 3.2
- Asistencia: 68
- Proyecto: Registro de cultivos
- Linea: datos

Resultado esperado:

- Se agrega a la tabla.
- Estado: Plan de mejora.

## Prueba 7 - No aprobado

Datos:

- Nombre: Sara Rios
- Correo: sara@correo.com
- Edad: 16
- Nota: 2.8
- Asistencia: 54
- Proyecto: Formulario de asistencia
- Linea: formulario

Resultado esperado:

- Se agrega a la tabla.
- Estado: No aprobado.
- Recomendacion: requiere acompanamiento docente.

## Prueba 8 - Cargar casos de prueba

Accion:

- Presiona el boton `Cargar casos de prueba`.

Resultado esperado:

- Se agregan tres registros.
- La tabla muestra los datos.
- El resumen se actualiza.
- No aparecen errores en consola.
