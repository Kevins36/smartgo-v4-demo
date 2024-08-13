import type { HrRepo } from "@/shared/utils/services/HR/api-repo.interface";
import { HrApiService } from "@/shared/utils/services/HR/api-service";
import type {
  Empresa,
  CreateEmpresa,
  UpdateEmpresa,
} from "@/shared/interfaces/hr/empresa.interface";

export class EmpresaRepo
  implements HrRepo<Empresa | CreateEmpresa | UpdateEmpresa>
{
  public endpoint = "empresa/";

  async getAll(): Promise<Empresa[]> {
    const specificEndpoint = "empresas/";
    return await HrApiService.getAll<Empresa>(specificEndpoint);
  }

  async getFiltered(
    criteria: (empresa: Empresa) => boolean
  ): Promise<Empresa[]> {
    const empresas = await this.getAll();
    return empresas.filter(criteria);
  }

  async create(
    data: CreateEmpresa
  ): Promise<{ Success?: string; Error?: string }> {
    if (!data) {
      throw new Error("Se necesita la data para crear.");
    }
    return await HrApiService.create<CreateEmpresa>(this.endpoint, data);
  }

  async update(
    id: number,
    data: UpdateEmpresa
  ): Promise<{ Success?: string; Error?: string }> {
    return await HrApiService.update<UpdateEmpresa>(this.endpoint, id, data);
  }

  async delete(id: number): Promise<{ Success?: string; Error?: string }> {
    if (!id) {
      throw new Error("Se necesita id para eliminar.");
    }
    return await HrApiService.delete(this.endpoint, id);
  }
}
