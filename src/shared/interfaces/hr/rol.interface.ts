import type { Area } from "./area.interface";
import type { Editor } from "./common.interfaces";
import type { Empresa } from "./empresa.interface";
import type { Perfil } from "./perfil.interface";
import type { Sucursal } from "./sucursal.interface";

//====INTERFAZ GLOBAL
export interface Rol {
  id: number;
  uuid: string;
  codigo: string;
  descripcion: string;
  atributos: string[];
  creador_por: Editor;
  modificado_por: Editor;
  area: Area;
  empresa: Empresa;
  perfil: Perfil;
  sucursal: Sucursal;
  padre: number;
  usuario: number;
  suplantar: null;
  estado: number;
  rol: string;
}

//====INTERFACES DE REPO
export interface CreateRol {
  atributos: string[];
  area_id: number;
  perfil_id: number;
  empresa_id: number;
  sucursal_id: number;
  codigo: string;
  rol: string;
  descripcion: string;
  id: number;
  estado: number;
  usuario_id: number;
  padre_id: number;
}

export interface UpdateRol {
  atributos?: string[];
  area_id?: number;
  perfil_id?: number;
  empresa_id?: number;
  sucursal_id?: number;
  codigo?: string;
  rol?: string;
  descripcion?: string;
  id?: number;
  estado?: number;
  usuario_id?: number;
  padre_id?: number;
}