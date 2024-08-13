import type { Editor } from "./common.interfaces";

//====INTERFAZ GLOBAL
export interface Grupo {
  id: number;
  uuid: string;
  codigo: string;
  descripcion: string;
  atributos: string[];
  creador_por: Editor;
  modificado_por: Editor;
  grupo: string;
}

//====INTERFACES DE REPO
export interface CreateGrupo{
  codigo: string;
  grupo: string;
  descripcion: string;
  atributos: string[];
}

export interface UpdateGrupo{
  codigo?: string;
  grupo?: string;
  descripcion?: string;
  atributos?: string[];
}