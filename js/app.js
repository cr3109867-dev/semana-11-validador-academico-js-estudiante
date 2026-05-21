/*
  SEMANA 11 - EVALUACION PRACTICA
  Archivo corregido.
*/

const form = document.getElementById("formRegistro");
const btnLimpiar = document.getElementById("btnLimpiar");
const btnEjemplos = document.getElementById("btnEjemplos");
const panelMensajes = document.getElementById("panelMensajes");
const tablaRegistros = document.getElementById("tablaRegistros");
const resumen = document.getElementById("resumen");

const registros = [];

form.addEventListener("submit", validarRegistro);
btnLimpiar.addEventListener("click", limpiarFormulario);
btnEjemplos.addEventListener("click", cargarCasosPrueba);

function validarRegistro(evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const edad = Number(document.getElementById("edad").value);
  const nota = Number(document.getElementById("nota").value);
  const asistencia = Number(document.getElementById("asistencia").value);
  const proyecto = document.getElementById("proyecto").value.trim();
  const linea = document.getElementById("linea").value;

  if (nombre.length < 3) {
    mostrarMensaje("El nombre debe tener mínimo 3 caracteres.", "error");
    return;
  }

  if (!correo.includes("@") || !correo.includes(".")) {
    mostrarMensaje("El correo debe tener un formato válido.", "error");
    return;
  }

  if (edad < 12) {
    mostrarMensaje("La edad mínima para participar es de 12 años.", "error");
    return;
  }

  if (nota < 0 || nota > 5) {
    mostrarMensaje("La nota debe estar entre 0.0 y 5.0.", "error");
    return;
  }

  if (asistencia < 0 || asistencia > 100) {
    mostrarMensaje("La asistencia debe estar entre 0 y 100.", "error");
    return;
  }

  if (proyecto === "" || linea === "") {
    mostrarMensaje("Debes registrar el proyecto y seleccionar una línea.", "error");
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
      recomendacion = "Mejorar reglas de validación y mensajes al usuario.";
      break;
    default:
      recomendacion = "Completar la información del proyecto.";
  }

  if (estado === "No aprobado") {
    recomendacion = "Requiere acompañamiento docente y nueva prueba funcional.";
  }

  if (edad < 14) {
    recomendacion += " Sugerencia: trabajar con apoyo de un compañero tutor.";
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
    web: "Página web comunitaria",
    datos: "Registro y manejo de datos",
    automatizacion: "Automatización de tareas",
    formulario: "Formularios y validaciones"
  };

  return etiquetas[linea] || "Sin línea";
}

function claseEstado(estado) {
  if (estado === "Aprobado") return "aprobado";
  if (estado === "Plan de mejora") return "plan";
  return "no-aprobado";
}

function mostrarMensaje(texto, tipo) {
  panelMensajes.textContent = texto;
  panelMensajes.classList.remove("oculto", "error", "success", "warning");
  panelMensajes.classList.add("message", tipo);
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

  registros.push(...casos);

  renderizarTabla();
  actualizarResumen();
  mostrarMensaje("Casos de prueba cargados.", "success");
}
