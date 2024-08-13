import type { HrRepo } from "@/shared/utils/services/HR/api-repo.interface";
import { HrApiService } from "@/shared/utils/services/HR/api-service";
import type {
  Grupo,
  CreateGrupo,
  UpdateGrupo,
} from "@/shared/interfaces/hr/grupo.interface";

export class GrupoRepo
  implements HrRepo<Grupo | CreateGrupo | UpdateGrupo>
{
  public endpoint = "empresa/";

  async getAll(): Promise<Grupo[]> {
    const specificEndpoint = "empresas/";
    return await HrApiService.getAll<Grupo>(specificEndpoint);
  }

  async getFiltered(
    criteria: (empresa: Grupo) => boolean
  ): Promise<Grupo[]> {
    const empresas = await this.getAll();
    return empresas.filter(criteria);
  }

  async create(
    data: CreateGrupo
  ): Promise<{ Success?: string; Error?: string }> {
    if (!data) {
      throw new Error("Se necesita la data para crear.");
    }
    return await HrApiService.create<CreateGrupo>(this.endpoint, data);
  }

  async update(
    id: number,
    data: UpdateGrupo
  ): Promise<{ Success?: string; Error?: string }> {
    return await HrApiService.update<UpdateGrupo>(this.endpoint, id, data);
  }

  async delete(id: number): Promise<{ Success?: string; Error?: string }> {
    if (!id) {
      throw new Error("Se necesita id para eliminar.");
    }
    return await HrApiService.delete(this.endpoint, id);
  }
}
