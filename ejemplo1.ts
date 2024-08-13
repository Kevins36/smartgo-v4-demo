export const formData =
{
    "elements": [
        {
            "label": "Despacho",
            "type": "text",
            "edit": false,
            "params": {
                "required": true,
                "desc": "desc texto",
                "help": "Texto ayuda",
                "visibility": ""
            },
            "id": "C0"
        },
        {
            "label": "Campo 2 num",
            "type": "number",
            "edit": false,
            "params": {
                "required": false,
                "desc": "campo numerico",
                "help": "...",
                "visibility": ""
            },
            "id": "C1"
        },
        {
            "label": "campo Select",
            "type": "options",
            "edit": false,
            "params": {
                "required": true,
                "desc": "seleccion multiple",
                "help": "seleccione un campo",
                "visibility": "C1 >10",
                "fieldOptions": "opc1\nopc2\nopc3",
                "optionType": "select"
            },
            "id": "C2"
        },
        {
            "label": "Fecha",
            "type": "date",
            "edit": false,
            "params": {
                "required": true,
                "desc": "campo fecha",
                "help": "fecha de ____",
                "visibility": ""
            },
            "id": "C3"
        },
        {
            "label": "Check",
            "type": "options",
            "edit": false,
            "params": {
                "required": false,
                "desc": "checkbox",
                "help": "...",
                "visibility": "",
                "fieldOptions": "con foto\ncon documento\n",
                "optionType": "checkbox"
            },
            "id": "C4"
        },
        {
            "label": "Subir Documento",
            "type": "file",
            "edit": false,
            "params": {
                "required": true,
                "desc": "archivo",
                "help": "",
                "visibility": "C4 \"con documento\""
            },
            "id": "C5"
        },
        {
            "label": "Subir Foto",
            "type": "media",
            "edit": false,
            "params": {
                "required": true,
                "desc": "foto de ____",
                "help": "archivo multimedia",
                "visibility": "C4 \"con foto\""
            },
            "id": "C6"
        },
        {
            "label": "Insertar ubicacion",
            "type": "map",
            "edit": false,
            "params": {
                "required": false,
                "desc": "",
                "help": "",
                "visibility": ""
            },
            "id": "C7"
        },
        {
            "label": "Codigo Calculado",
            "type": "calculated",
            "edit": false,
            "params": {
                "required": true,
                "desc": "campo calculado",
                "help": "se calcula en base a otros campos",
                "visibility": "",
                "formula": "C0+C3"
            },
            "id": "C8"
        },
        {
            "label": "Usuario",
            "type": "hr",
            "edit": false,
            "params": {
                "required": true,
                "desc": "hr",
                "help": "seleccione un usuario",
                "visibility": ""
            },
            "id": "C9"
        },
        {
            "label": "Cliente",
            "type": "entity",
            "edit": false,
            "params": {
                "required": true,
                "desc": "entidad",
                "help": "seleccione un cliente",
                "visibility": ""
            },
            "id": "C10"
        },
        {
            "label": "via",
            "type": "options",
            "edit": false,
            "params": {
                "required": true,
                "desc": "",
                "help": "",
                "visibility": "",
                "fieldOptions": "maritimo\naereo\nterrestre",
                "optionType": "radio"
            },
            "id": "C11"
        },
        {
            "label": "Texto enriquecido",
            "type": "rich-text",
            "edit": false,
            "params": {
                "required": false,
                "desc": "campo de etiqueta",
                "help": "",
                "visibility": ""
            },
            "id": "C12"
        }
    ],
    "title": "Formulario Actividad 01"
}