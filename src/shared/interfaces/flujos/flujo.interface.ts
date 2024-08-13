export interface Flujo {
  idFlujo: string;
  flujo: string;
  descripcion: string;
  fechaCreacion: Date;
  prioridad: string;
  estado: string;
  idCreador: string;
  idModifica: string;
  ultimaModificacion: Date;
  version: null;
  nombre: string;
  apellido: string;
  nombreMod: string;
  apellidoMod: string;
  imgCreador: string;
  imgModifica: string;
  idActividad: string;
  idFinalizacion: string;
  flagChecklist: string;
  flagCompromiso: string;
  color: string;
  grupo: string;
  idTipoEntidad?: string;
  flagCheckin?: string;
  codigo: string;
  idGrupo: string;
  seguridad: string;
}

export interface CreateFlujoRequest {
  flujo: string;
  descripcion: string;
  prioridad: string;
  estado: string;
  idCreador: string;
  idModifica: string;
  nombre: string;
  apellido: string;
  nombreMod: string;
  apellidoMod: string;
  imgCreador: string;
  imgModifica: string;
  idActividad: string;
  idFinalizacion: string;
  flagChecklist: string;
  flagCompromiso: string;
  color: string;
  grupo: string;
  idTipoEntidad?: string;
  flagCheckin?: string;
  codigo: string;
  idGrupo: string;
  seguridad: string;
}

export interface UpdateFlujoRequest {
  flujo?: string;
  descripcion?: string;
  prioridad?: string;
  estado?: string;
  nombreMod?: string;
  apellidoMod?: string;
  imgModifica?: string;
  idActividad?: string;
  idFinalizacion?: string;
  flagChecklist?: string;
  flagCompromiso?: string;
  color?: string;
  grupo?: string;
  idTipoEntidad?: string;
  flagCheckin?: string;
  codigo?: string;
  idGrupo?: string;
  seguridad?: string;
}

export interface FlujoBoxType {
  idFlujo: string;
  nombre: string;
  ultimaModificacion: Date;
  color: string;
  estado:string;
}