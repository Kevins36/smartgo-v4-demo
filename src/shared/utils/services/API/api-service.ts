// Importar la interfaz de api para los servicios que se utilizarán
import type { ApiService } from "./api-service.interface";

// URL base común para todos los endpoints
const BASE_URL = "https://run.mocky.io/v3/";
const TEST_URL = "http://localhost:3000/";

// Manejador de respuestas de las solicitudes HTTP
const handleResponse = async <EntityType>(
  response: Response
): Promise<EntityType> => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Error: ${errorData.message || 'Error en la conexión'}`);
  }
  const data = await response.json();
  return data;
};

// Método para manejar las solicitudes GET
const getData = async <EntityType>(endpoint: string): Promise<EntityType> => {
  const response = await fetch(`${TEST_URL}${endpoint}`);
  return handleResponse<EntityType>(response);
};

// Método para manejar las solicitudes POST, PUT, DELETE.
const sendData = async <EntityType>(
  endpoint: string,
  method: "POST" | "PUT" | "DELETE",
  data?: EntityType
): Promise<EntityType | void> => {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${TEST_URL}${endpoint}`, options);

  if (method === "DELETE") {
    if (!response.ok) {
      throw new Error("Error de red");
    }
    return; 
  }
  return handleResponse<EntityType>(response);
};

// Servicios que se ejecutarán/dispondrá la Api
export const apiService: ApiService = {
  getAll: async <EntityType>(endpoint: string): Promise<EntityType> => {
    return getData<EntityType>(endpoint);
  },
  getById: async <EntityType>(endpoint: string, id: string): Promise<EntityType> => {
    return getData<EntityType>(`${endpoint}/${id}`);
  },
  create: async <EntityType>(
    endpoint: string,
    data: EntityType
  ): Promise<EntityType> => {
    return sendData<EntityType>(endpoint, "POST", data) as Promise<EntityType>;
  },
  update: async <EntityType>(
    endpoint: string,
    id: string,
    data: EntityType
  ): Promise<EntityType> => {
    return sendData<EntityType>(`${endpoint}/${id}`, "PUT", data) as Promise<EntityType>;
  },
  delete: async (endpoint: string, id: string): Promise<void> => {
    return sendData<void>(`${endpoint}/${id}`, "DELETE");
  },
};
