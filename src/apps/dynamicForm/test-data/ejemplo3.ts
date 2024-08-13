export const formData = 
{
  "elements": [
      {
          "label": "Nombre del Producto",
          "type": "text",
          "edit": false,
          "params": {
              "required": true,
              "desc": "Ingrese el nombre del producto",
              "help": "Nombre del producto",
              "visibility": ""
          },
          "id": "P0"
      },
      {
          "label": "Precio del Producto",
          "type": "number",
          "edit": false,
          "params": {
              "required": true,
              "desc": "Ingrese el precio del producto",
              "help": "Precio en USD",
              "visibility": ""
          },
          "id": "P1"
      },
      {
          "label": "Categoría",
          "type": "options",
          "edit": false,
          "params": {
              "required": true,
              "desc": "Seleccione la categoría del producto",
              "help": "Categoría del producto",
              "visibility": "",
              "fieldOptions": "Electrónica\nRopa\nHogar",
              "optionType": "select"
          },
          "id": "P2"
      },
      {
          "label": "Fecha de Lanzamiento",
          "type": "date",
          "edit": false,
          "params": {
              "required": false,
              "desc": "Ingrese la fecha de lanzamiento del producto",
              "help": "Formato: AAAA-MM-DD",
              "visibility": ""
          },
          "id": "P3"
      },
      {
          "label": "Descripción del Producto",
          "type": "rich-text",
          "edit": false,
          "params": {
              "required": false,
              "desc": "Ingrese una descripción detallada del producto",
              "help": "Descripción del producto",
              "visibility": ""
          },
          "id": "P4"
      },
      {
          "label": "¿Está Disponible?",
          "type": "options",
          "edit": false,
          "params": {
              "required": false,
              "desc": "Marque si el producto está disponible",
              "help": "Disponibilidad del producto",
              "visibility": "",
              "fieldOptions": "Sí\nNo",
              "optionType": "radio"
          },
          "id": "P5"
      }
  ],
  "title": "Formulario de Registro de Producto"
}
