import type { DataAccessObject } from "@/shared/utils/services/API/api-repo.interface";
import { apiService } from "@/shared/utils/services/API/api-service";
import type { Requerimiento } from "@/shared/interfaces/requerimientos/requerimientos.interface";

export class RequerimientoRepo implements DataAccessObject<Requerimiento> {
  public endpoint = "/requerimientos";

  async getAll(): Promise<Requerimiento[]> {
    return await apiService.getAll<Requerimiento[]>(this.endpoint);
  }

  async getFiltered(criteria: (requerimiento: Requerimiento) => boolean): Promise<Requerimiento[]> {
    const requerimientos = await this.getAll();
    return requerimientos.filter(criteria);
  }

  async delete(id: string): Promise<void> {
    await apiService.delete(this.endpoint, id);
  }
}
