import type { Editor } from "./common.interfaces";

//====INTERFAZ GLOBAL
export interface Perfil {
  id: number;
  uuid: string;
  codigo: string;
  descripcion: string;
  atributos: string[];
  creador_por: Editor;
  modificado_por: Editor;
  perfil: string;
}

//====INTERFACES DE REPO
export interface CreatePerfil {
  codigo: string;
  perfil: string;
  descripcion: string;
  atributos: string[];
}

export interface UpdatePerfil {
  codigo?: string;
  perfil?: string;
  descripcion?: string;
  atributos?: string[];
}