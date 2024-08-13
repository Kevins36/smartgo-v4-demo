// api-service.interface.ts
export interface HrApiService {
  getAll<EntityType>(endpoint: string): Promise<EntityType[]>;
  read<EntityType>(endpoint: string, id: number): Promise<EntityType>;
  create<EntityType>(endpoint: string, data: EntityType): Promise<{ "Success"?: string; "Error"?: string }>;
  update<EntityType>(endpoint: string, id: number, data: EntityType): Promise<{ "Success"?: string; "Error"?: string }>;
  delete<EntityType>(endpoint: string, id: number): Promise<{ "Success"?: string; "Error"?: string }>;
}
