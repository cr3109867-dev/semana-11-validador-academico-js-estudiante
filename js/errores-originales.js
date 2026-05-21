/*
  SEMANA 11 - EVALUACION PRACTICA
  Archivo con errores intencionales.

  Instruccion:
  - Corrige este archivo usando VS Code y la consola del navegador.
  - No borres la funcionalidad esperada.
  - Documenta cada error en docs/03-bitacora-depuracion.md.
  - Debes conservar evidencia del antes y del despues.
*/

const form = document.getElementById("formRegistro");
const btnLimpiar = document.getElementById("btnLimpiar");
const btnEjemplos = document.getElementById("btnEjemplo");
const panelMensajes = document.getElementById("panelMensaje");
const tablaRegistros = document.getElementById("tablaRegistros");
const resumen = document.getElementById("resumen");

const registros = [];

form.addEventListener("submit", validarRegistro);
btnLimpiar.addEventListener("click", limpiarFormulario);
btnEjemplos.addEventListener("click", cargarCasosPrueba);

function validarRegistro(evento) {
  evento.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("email").value.trim();
  const edad = document.getElementById("edad").value;
  const nota = document.getElementById("nota").value;
  const asistencia = document.getElementById("asistencia").value;
  const proyecto = document.getElementById("proyecto").value.trim();
  const linea = document.getElementById("linea").value;

  if (nombre.length < 3) {

    mostrarMensaje("El nombre debe tener minimo 3 caracteres.", "error");
    return;
  }

  if (!correo.includes("@") || !correo.includes("."))
{
    mostrarMensaje("El correo debe tener un formato valido.", "error");
    return;
  }

  if (edad < 12)
 {
    mostrarMensaje("La edad minima para participar es de 12 anos.", "error");
    return;
  }

  if (nota < 0 || nota > 5)
 {
    mostrarMensaje("La nota debe estar entre 0.0 y 5.0.", "error");
    return;
  }

  if (asistencia < 0 || asistencia > 100) {
    mostrarMensaje("La asistencia debe estar entre 0 y 100.", "error");
    return;
  }

  if (proyecto === "" || linea === "") {
    mostrarMensaje("Debes registrar el proyecto y seleccionar una linea.", "error");
    return;
  }

  const estado = calcularEstado(nota, asistencia);
  const recomendacion = obtenerRecomendacion(estado, edad, linea);

  const registro = {
    nombre,
    correo,
    edad,
    nota,
    asistencia,
    proyecto,
    linea,
    estado,
    recomendacion
  };

  registros.push(registro);

  renderizarTabla();
  actualizarResumen();
  mostrarMensaje("Registro validado correctamente.", "success");
  limpiarFormulario();
}

function calcularEstado(nota, asistencia) {
  if (nota >= 3.5 && asistencia >= 70) {
    return "Aprobado";
  } else if (nota >= 3.0 || asistencia >= 60) {
    return "Plan de mejora";
  }

  return "No aprobado";
}

function obtenerRecomendacion(estado, edad, linea) {
  let recomendacion = "";

  switch (linea) {
    case "web":
      recomendacion = "Fortalecer estructura HTML, estilos CSS y validaciones JS.";
      break;
    case "datos":
      recomendacion = "Revisar calidad de datos, entradas, salidas y consistencia.";
      break;
    case "automatizacion":
      recomendacion = "Documentar tareas repetitivas y validar resultados automatizados.";
      break;
    case "formulario":
      recomendacion = "Mejorar reglas de validacion y mensajes al usuario.";
      break;
    default:
      recomendacion = "Completar la informacion del proyecto.";
  }

  if (estado === "No aprobado")
 {
    recomendacion = "Requiere acompanamiento docente y nueva prueba funcional.";
  }

  if (edad < 14) {
    recomendacion += " Sugerencia: trabajar con apoyo de un companero tutor.";
  }

  return recomendacion;
}

function renderizarTabla() {
  tablaRegistros.innerHTML = "";

  if (registros.length === 0) {
    tablaRegistros.innerHTML = '<tr><td colspan="7" class="empty">No hay registros validados.</td></tr>';
    return;
  }

  for (let i = 0; i < registros.length; i++) {
    const registro = registros[i];
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${registro.nombre}<br><small>${registro.correo}</small></td>
      <td>${registro.edad}</td>
      <td>${registro.nota}</td>
      <td>${registro.asistencia}%</td>
      <td>${formatearLinea(registro.linea)}</td>
      <td><span class="estado ${claseEstado(registro.estado)}">${registro.estado}</span></td>
      <td>${registro.recomendacion}</td>
    `;

    tablaRegistros.appendChild(fila);
  }
}

function actualizarResumen() {
  const aprobados = registros.filter((registro) => registro.estado === "Aprobado").length;
  const mejora = registros.filter((registro) => registro.estado === "Plan de mejora").length;
  const noAprobados = registros.filter((registro) => registro.estado === "No aprobado").length;

  resumen.innerHTML = `
    <strong>Resumen:</strong>
    <span>Total: ${registros.length} |
    Aprobados: ${aprobados} |
    Plan de mejora: ${mejora} |
    No aprobados: ${noAprobados}</span>
  `;
}

function formatearLinea(linea) {
  const etiquetas = {
    web: "Pagina web comunitaria",
    datos: "Registro y manejo de datos",
    automatizacion: "Automatizacion de tareas",
    formulario: "Formularios y validaciones"
  };

  return etiquetas[linea] || "Sin linea";
}

function claseEstado(estado) {
  if (estado === "Aprobado") return "aprobado";
  if (estado === "Plan de mejora") return "plan";
  return "no-aprobado";
}

function mostrarMensaje(texto, tipo) {
  panelMensajes.textContent = texto;
  panelMensajes.classList.remove("oculto", "error", "success", "warning");
  panelMensajes.classList.add(tipo);
}

function limpiarFormulario() {
  form.reset();
}

function cargarCasosPrueba() {
  const casos = [
    {
      nombre: "Ana Torres",
      correo: "ana.torres@colegio.edu",
      edad: 15,
      nota: 4.2,
      asistencia: 92,
      proyecto: "Feria digital rural",
      linea: "web"
    },
    {
      nombre: "Luis Mejia",
      correo: "luis.mejia@colegio.edu",
      edad: 13,
      nota: 3.2,
      asistencia: 68,
      proyecto: "Registro de cultivos",
      linea: "datos"
    },
    {
      nombre: "Sara Rios",
      correo: "sara.rios@colegio.edu",
      edad: 16,
      nota: 2.8,
      asistencia: 54,
      proyecto: "Formulario de asistencia",
      linea: "formulario"
    }
  ];

  for (let i = 0; i < casos.length; i++) {
    registros.push(casos[i]);
  }

  renderizarTabla();
  actualizarResumen();
  mostrarMensaje("Casos de prueba cargados.", "success");
}
