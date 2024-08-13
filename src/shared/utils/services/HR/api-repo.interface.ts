export interface HrRepo<EntityType> {
  getAll(): Promise<EntityType[]>;
  getById?(id: number): Promise<EntityType>;
  getFiltered?(criteria: (entity: EntityType) => boolean): Promise<EntityType[]>; // Opcional
  create?(data: EntityType): Promise<{ "Success"?: string; "Error"?: string }>; // Opcional
  update?(id: number, data: Partial<EntityType>): Promise<{ "Success"?: string; "Error"?: string }>; // Opcional
  delete?(id: number): Promise<{ "Success"?: string; "Error"?: string }>; // Opcional
}
