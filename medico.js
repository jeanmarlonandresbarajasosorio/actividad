class medico {
    constructor(nombre) {
    this.nombre = nombre;
    this.enfermero = null;
    
   }

   asignarEmfermero(emfermero) {
    this.enfermero = enfermero;
    this.enfermero.asignarMedico(this);
   }
}

 export default medico;