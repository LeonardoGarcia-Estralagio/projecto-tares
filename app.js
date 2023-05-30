const { argv } = require("process");
const moduloTareas = require("./tareas");
let respuesta;

switch (argv[2]) {
  case "listar":
    moduloTareas.listar();
    break;
  case "agregar":
    if ([argv[3], argv[4]].includes(undefined)) {
      console.log("ERROR: el número y título de la clase son obligatorios");
      break;
    }
    if (isNaN(argv[3]) || argv[3] < 1) {
      console.log("ERROR: el numero de la clase no es valido");
      break;
    }
    respuesta = moduloTareas.agreagar(+argv[3], argv[4]);
    console.log(respuesta);
    break;
  case "filtrar":
    const estados = ["pendiente", "en proceso", "terminado"];
    if (!argv[3]) {
      console.log("ERROR: debes indicar el estado que deseas filtrar");
      break;
    }
    if (!estados.includes(argv[3].toLowerCase())) {
      console.log(
        "ERROR: El estado debe ser uno de los siguentes pendiente | en proceso | terminado"
      );
      break;
    }
    moduloTareas.filtrar(argv[3].toLowerCase());
    break;
  case "editar":
    if ([argv[3], argv[4]].includes(undefined)) {
      console.log("ERROR: el número y el nuevo estado son obligatorios");
      break;
    }
    if (isNaN(argv[3]) || argv[3] < 1) {
      console.log("ERROR: el numero de la clase no es valido");
      break;
    }
    respuesta = moduloTareas.editar(+argv[3], argv[4]);

    console.log(respuesta);
  default:
    break;
}
