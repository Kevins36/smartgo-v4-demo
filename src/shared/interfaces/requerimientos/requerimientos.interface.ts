export interface Requerimiento{
    idRequerimiento:  number;
    estado:           number;
    idFlujo:          number;
    fechaInicio:      Date;
    fechaCompromiso:  Date;
    fechaFin:         Date;
    prioridad:        number;
    flujo:            string;
    codigoFlujo:      string;
    grupo:            string;
    color:            string;
    creador:          Creador;
    valor:            Valor;
    tipoFinalizacion: string;
    titulo:           string;
    codigo:           string;
    idVinculo:        number;
    entidad:          Entidad[];
    responsable:      Creador[];
    atributo:         Atributo;
    flagLeido:        boolean;
    flagImportante:   boolean;
    tag:              any[];
}

//DEFINIR SI ACÁ IRÁ INFO O NO
export interface Atributo {
}

export interface Creador {
    idUsuario: number;
    nombre:    string;
    apellido:  string;
    imagen:    string;
    usuario:   string;
    rol?:      string;
}

export interface Entidad {
    entidad:           string;
    codigo:            string;
    codigoTipoEntidad: string;
    idEntidad:         number;
}

export interface Valor {
    moneda: string;
    monto:  number;
}