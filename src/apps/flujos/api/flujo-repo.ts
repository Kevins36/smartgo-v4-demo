import type { DataAccessObject } from "@/shared/utils/services/API/api-repo.interface";
import { apiService } from "@/shared/utils/services/API/api-service";
import type { Flujo } from "@/shared/interfaces/flujos/flujo.interface";

export class FlujoRepo implements DataAccessObject<Flujo> {
  public endpoint = "flujos/";

  async getAll(): Promise<Flujo[]> {
    return await apiService.getAll<Flujo[]>(this.endpoint);
  }

  async getFiltered(criteria: (flujo: Flujo) => boolean): Promise<Flujo[]> {
    const flujos = await this.getAll();
    return flujos.filter(criteria);
  }

  async getById(id: string): Promise<Flujo> {
    return await apiService.getById<Flujo>(this.endpoint, id);
  }
  
  async delete(id: string): Promise<void> {
    await apiService.delete(this.endpoint, id);
  }
}
