
export const estadoMapping: { [key: number]: { class: string; label: string } } = {
    0: { class: 'activities-estado-pendiente', label: 'Pendiente' },
    1: { class: 'activities-estado-aprobado', label: 'Aprobado' },
    2: { class: 'activities-estado-terminado', label: 'Terminado' },
    3: { class: 'activities-estado-cancelado', label: 'Cancelado' },
  };
  
  export const prioridadMapping: { [key: number]: { class: string; label: string } } = {
    1: { class: 'activities-prioridad-baja', label: 'Baja' },
    2: { class: 'activities-prioridad-normal', label: 'Normal' },
    3: { class: 'activities-prioridad-alta', label: 'Alta' },
  };
  