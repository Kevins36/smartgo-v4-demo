import type { Editor } from "./common.interfaces";

//====INTERFAZ GLOBAL
export interface Empresa {
  id: number;
  uuid: string;
  codigo: string;
  descripcion: string;
  atributos: string[];
  creador_por: Editor;
  modificado_por: Editor;
  empresa: string;
}

//====INTERFACES DE REPO
export interface CreateEmpresa {
  codigo: string;
  empresa: string;
  descripcion: string;
  atributos: string[];
}

export interface UpdateEmpresa {
  codigo?: string;
  empresa?: string;
  descripcion?: string;
  atributos?: string[];
}
