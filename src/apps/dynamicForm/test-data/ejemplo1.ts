export const formData = 

{
  "elements": [
      {
          "label": "Nombre del Evento",
          "type": "text",
          "edit": false,
          "params": {
              "required": true,
              "desc": "Ingrese el nombre del evento",
              "help": "Nombre completo del evento",
              "visibility": ""
          },
          "id": "E0"
      },
      {
          "label": "Fecha del Evento",
          "type": "date",
          "edit": false,
          "params": {
              "required": true,
              "desc": "Seleccione la fecha del evento",
              "help": "Formato: AAAA-MM-DD",
              "visibility": ""
          },
          "id": "E1"
      },
      {
          "label": "Número de Asistentes",
          "type": "number",
          "edit": false,
          "params": {
              "required": true,
              "desc": "Ingrese el número de asistentes esperados",
              "help": "Cantidad de personas",
              "visibility": ""
          },
          "id": "E2"
      },
      {
          "label": "Descripción del Evento",
          "type": "rich-text",
          "edit": false,
          "params": {
              "required": false,
              "desc": "Ingrese una descripción detallada del evento",
              "help": "Descripción del evento",
              "visibility": ""
          },
          "id": "E3"
      }
  ],
  "title": "Formulario de Registro de Evento"
}
