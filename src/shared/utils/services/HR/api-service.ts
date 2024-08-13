// api-service.ts
import type { HrApiService as Api } from "./api-service.interface";

const BASE_URL = "https://smartgo-hr-api-zwld4o6y6q-tl.a.run.app/";
const TEST_URL = "http://localhost:3000/"

const handleResponse = async <ResponseType>(response: Response): Promise<ResponseType> => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Error: ${errorData.message || 'Error en la conexión'}`);
  }
  const data = await response.json();
  return data;
};

const getData = async <ResponseType>(endpoint: string): Promise<ResponseType> => {
  const response = await fetch(`${TEST_URL}${endpoint}`);
  return handleResponse<ResponseType>(response);
};

const sendData = async <ResponseType>(
  endpoint: string,
  method: "POST" | "PUT" | "DELETE",
  data?: any
): Promise<ResponseType> => {
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
  return handleResponse<ResponseType>(response);
};

export const HrApiService: Api = {
  getAll: async <ResponseType>(endpoint: string): Promise<ResponseType[]> => {
    return getData<ResponseType[]>(endpoint);
  },
  read: async <ResponseType>(endpoint: string, id: number): Promise<ResponseType> => {
    return getData<ResponseType>(`${endpoint}/${id}`);
  },
  create: async <ResponseType>(endpoint: string, data: any): Promise<{ "Success"?: string; "Error"?: string }> => {
    return sendData<{ "Success"?: string; "Fail"?: string }>(endpoint, "POST", data);
  },
  update: async <ResponseType>(endpoint: string, id: number, data: any): Promise<{ "Success"?: string; "Error"?: string }> => {
    return sendData<{ "Success"?: string; "Fail"?: string }>(`${endpoint}/${id}`, "PUT", data);
  },
  delete: async <ResponseType>(endpoint: string, id: number): Promise<{ "Success"?: string; "Error"?: string }> => {
    return sendData<{ "Success"?: string; "Fail"?: string }>(`${endpoint}/${id}`, "DELETE");
  },
};
