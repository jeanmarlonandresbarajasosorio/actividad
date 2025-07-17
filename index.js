import Hospital from './classes/Hospital.js';
import Sala from './classes/Sala.js';
import Paciente from './classes/Paciente.js';
import Medico from './classes/Medico.js';
import Enfermero from './classes/Enfermero.js';

const hospital = new Hospital("Hospital Central");

const sala1 = new Sala(101, "Consultorio");
const sala2 = new Sala(201, "Sala de Cirugía");

hospital.agregarSala(sala1);
hospital.agregarSala(sala2);

const medico1 = new Medico("Dra. Martinez");
const enfermero1 = new Enfermero("Carlos");

medico1.asignarEnfermero(enfermero1);

const paciente1 = new Paciente("Ana Lopez", medico1);
hospital.agregarPaciente(paciente1);

console.log("🏥 Estado del Hospital:", hospital);
console.log("👩‍⚕️ Médico del Paciente:", paciente1.medico.nombre);
console.log("🤝 Asociación Médico-Enfermero:", medico1.enfermero.nombre, "<->", enfermero1.medico.nombre);
