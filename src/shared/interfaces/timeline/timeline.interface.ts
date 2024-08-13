export interface Timeline {
    uuid:        string;
    fecha:       Date;
    creador:     Creador;
    tipo:        string;
    formato:     string;
    valores:     Valores;
    reacciones:  Reacciones;
    comentarios: number;
    compartir:   number;
    esLeido:     boolean;
    pin:         boolean;
}

export interface Creador {
    nombre:   string;
    apellido: string;
    usuario:  string;
    imagen:   string;
}

export interface Reacciones {
    like:    number;
    interes: number;
    apoyo:   number;
}

export interface Valores {
    TRAMITE:             { [key: string]: C1 };
    "RENDICION DIRECTA": RendicionDirecta;
}

export interface RendicionDirecta {
    C1: C1;
}

export interface C1 {
    titulo:  string;
    value:   string;
    tipo:    string;
    data?:   Data;
    format?: string;
}

export interface Data {
    value: string;
    text:  string;
}