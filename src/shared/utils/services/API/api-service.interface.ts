export interface ApiService {
  getAll<EntityType>(endpoint: string): Promise<EntityType>;
  getById<EntityType>(endpoint: string, id: string): Promise<EntityType>;
  create<EntityType>(endpoint: string, data: EntityType): Promise<EntityType>;
  update<EntityType>(endpoint: string, id: string, data: EntityType): Promise<EntityType>;
  delete<EntityType>(endpoint: string, id: string): Promise<void>;
}
