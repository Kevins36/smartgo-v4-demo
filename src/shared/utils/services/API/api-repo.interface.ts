export interface DataAccessObject<EntityType> {
  getAll(): Promise<EntityType[]>;
  getById?(id: string): Promise<EntityType>;
  getFiltered?(criteria: (entity: EntityType) => boolean): Promise<EntityType[]>; // Método opcional
  create?(data: EntityType): Promise<EntityType>; // Método opcional
  update?(id: string, data: Partial<EntityType>): Promise<EntityType>; // Método opcional
  delete?(id: string): Promise<void>; // Método opcional
}
