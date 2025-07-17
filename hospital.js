import Sala from './sala.js';

class hospital {
    constructor(nombre) {
    this.nombre = nombre;
    this.nombre = []; //composicion
    this.pacientes = []; // agregacion
  
   }

   agregarSala(sala) {
    this.salas.push(sala);
   }

   agregarPaciente(paciente) {
    this.paciente.push(paciente);
   }
} 


export default hospital;