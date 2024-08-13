import type { Editor } from "./common.interfaces";

//====INTERFAZ GLOBAL
export interface Area {
  id: number;
  uuid: string;
  codigo: string;
  descripcion: string;
  atributos: string[];
  creado_por: Editor;
  modificado_por: Editor;
  area: string;
}

//====INTERFACES DE REPO
export interface CreateArea {
  codigo: string;
  area: string;
  descripcion: string;

}

export interface UpdateArea {
  codigo?: string;
  area?: string;
  descripcion?: string;
  atributos?: string[];
}
