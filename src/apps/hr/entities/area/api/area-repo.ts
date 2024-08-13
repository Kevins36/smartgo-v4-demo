import type { HrRepo } from "@/shared/utils/services/HR/api-repo.interface";
import { HrApiService } from "@/shared/utils/services/HR/api-service";
import type {
  Area,
  CreateArea,
  UpdateArea,
} from "@/shared/interfaces/hr/area.interface";

export class AreaRepo implements HrRepo<Area | CreateArea | UpdateArea> {
  public endpoint = "area/";

  async getAll(): Promise<Area[]> {
    const specificEndpoint = "areas/";
    return await HrApiService.getAll<Area>(specificEndpoint);
  }

  async getFiltered(criteria: (area: Area) => boolean): Promise<Area[]> {
    const areas = await this.getAll();
    return areas.filter(criteria);
  }

  async create(
    data: CreateArea
  ): Promise<{ Success?: string; Error?: string }> {
    if (!data) {
      throw new Error("Se necesita la data para crear.");
    }
    return await HrApiService.create<CreateArea>(this.endpoint, data);
  }

  async update(
    id: number,
    data: UpdateArea
  ): Promise<{ Success?: string; Error?: string }> {
    return await HrApiService.update<UpdateArea>(this.endpoint, id, data);
  }

  async delete(id: number): Promise<{ Success?: string; Error?: string }> {
    if (!id) {
      throw new Error("Se necesita id para eliminar.");
    }
    return await HrApiService.delete(this.endpoint, id);
  }
}
