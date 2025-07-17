┌─────────────┐
│  Hospital   │
├─────────────┤
│ - nombre    │
│ - salas[]   │◄─┐ (composición)
│ - pacientes[]│◄──────┐ (agregación)
├─────────────┤        │
│+agregarPaciente(p)   │
│+agregarSala(s)       │
└─────────────┘        │
                       │
     ┌─────────────────┘
     │
┌─────────────┐
│   Sala      │ (o Consultorio)
├─────────────┤
│ - numero    │
│ - tipo      │
└─────────────┘

┌─────────────┐
│  Paciente   │
├─────────────┤
│ - nombre    │
│ - medico    │─────► (asociación unidireccional)
└─────────────┘

┌─────────────┐
│  Medico     │
├─────────────┤
│ - nombre    │
│ - enfermer@ │◄─────► (asociación bidireccional)
└─────────────┘

┌──────────────┐
│ Enfermer@    │
├──────────────┤
│ - nombre     │
│ - medico     │◄─────► (asociación bidireccional)
└──────────────┘

PARA LA EJECUCION node index.js
