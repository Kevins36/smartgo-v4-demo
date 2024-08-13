//====INTERFACES GLOBALES
export interface Editor {
    usuario: Usuario;
    ts: Date;
  }
  
  export interface Usuario {
    id: number;
    usuario: string;
    imagen: string;
  }
  