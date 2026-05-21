# 03 - Bitacora de depuracion

Completa esta tabla durante el desarrollo. Debes registrar minimo 8 hallazgos.


| No. | Error encontrado | Tipo de error | Archivo y linea aproximada | Como lo detecte | Solucion aplicada | Prueba realizada | Resultado |
|---:|---|---|---|---|---|---|---|
| 1 |form.addEventListener("submit", validarRegistro()); |Error en eventos |15 |
Boton no respondia | Quitar paréntesis→ validarRegistro	|Enviar formulario | vento capturado|
| 2 |if (nombre.length < 3 { |Sintaxis |32 |Consola: Unexpected token |Agregar ) |Probar nombre corto |Mensaje correcto |
| 3 |Validación edad if (edad >= 12) |Lógica |42 |Permitía menores |Cambiar a < 12	|Edad 10 |Mensaje correcto |
| 4 | Validación nota if (nota < 0 && nota > 5)| Lógica|47 |Nunca se cumplía |Usar `	 | |` |  
| 5 |if (estado = "No aprobado") |Asignación |103 |Consola sin error pero lógica incorrecta | Usar ===	| Nota baja| Recomendación correcta|
| 6 |Ciclo for (let i = 0; i <= registros.length; i++) | Lógica| 131| Último registro undefined|Cambiar a < registros.length |Tabla |Correcta |
| 7 | panelResultado.textContent|Referencia |165 |Elemento inexistente | Usar panelMensajes| Mensaje| Correcto|
| 8 |panelMensajes.classlist.remove(...) |Error de tipo | app.js:166|Consola: classlist is undefined |Usar classList |Validación | Clases aplicadas correctamente|

|9 |Campos numéricos tratados como texto| Tipo |  app.js:25–29| Suma de texto en vez de número | Convertir con Number() | 	Nota y asistencia|Valores correctos|




## Preguntas de cierre

1. Cual fue el error mas dificil de encontrar y por que?

Respuesta:El de asignación estado = "No aprobado", porque no generaba error en consola, pero alteraba la lógica del sistema.




2. Que herramienta te ayudo mas: consola, `console.log()`, lectura del codigo o pruebas manuales?

Respuesta:
La consola del navegador, porque mostraba mensajes claros de sintaxis y referencia. También console.log() para verificar valores.



3. Que aprendiste sobre control de flujos?

Respuesta:Que las condiciones deben estar bien planteadas (>=, ||, ===) para que el sistema clasifique correctamente los registros.




4. Que buena practica aplicarias en tus proximos proyectos?

Respuesta:Corregir una cosa a la vez, documentar cada hallazgo en la bitácora y probar con datos válidos e inválidos.



