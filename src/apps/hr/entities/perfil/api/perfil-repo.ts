import type { HrRepo } from "@/shared/utils/services/HR/api-repo.interface";
import { HrApiService } from "@/shared/utils/services/HR/api-service";
import type {
  Perfil,
  CreatePerfil,
  UpdatePerfil,
} from "@/shared/interfaces/hr/perfil.interface";

export class PerfilRepo
  implements HrRepo<Perfil | CreatePerfil | UpdatePerfil>
{
  public endpoint = "empresa/";

  async getAll(): Promise<Perfil[]> {
    const specificEndpoint = "empresas/";
    return await HrApiService.getAll<Perfil>(specificEndpoint);
  }

  async getFiltered(
    criteria: (empresa: Perfil) => boolean
  ): Promise<Perfil[]> {
    const empresas = await this.getAll();
    return empresas.filter(criteria);
  }

  async create(
    data: CreatePerfil
  ): Promise<{ Success?: string; Error?: string }> {
    if (!data) {
      throw new Error("Se necesita la data para crear.");
    }
    return await HrApiService.create<CreatePerfil>(this.endpoint, data);
  }

  async update(
    id: number,
    data: UpdatePerfil
  ): Promise<{ Success?: string; Error?: string }> {
    return await HrApiService.update<UpdatePerfil>(this.endpoint, id, data);
  }

  async delete(id: number): Promise<{ Success?: string; Error?: string }> {
    if (!id) {
      throw new Error("Se necesita id para eliminar.");
    }
    return await HrApiService.delete(this.endpoint, id);
  }
}
