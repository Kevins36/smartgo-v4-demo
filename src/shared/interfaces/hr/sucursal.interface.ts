import type { Editor } from "./common.interfaces";

//====INTERFAZ GLOBAL
export interface Sucursal {
  id: number;
  uuid: string;
  codigo: string;
  descripcion: string;
  atributos: string[];
  creador_por: Editor;
  modificado_por: Editor;
  sucursal: string;
}

//====INTERFACES DE REPO
export interface CreateSucursal {
  codigo: string;
  sucursal: string;
  descripcion: string;
  atributos: string[];
}

export interface UpdateSucursal {
  codigo?: string;
  sucursal?: string;
  descripcion?: string;
  atributos?: string[];
}