import { describe, it, expect } from 'vitest';
import { FlujoRepo } from '../api/flujo-repo';
import type { Flujo } from '@/shared/interfaces/flujos/FlujoType';

describe('FlujoRepo', () => {
  const repo = new FlujoRepo();
  const originalEndpoint = repo.endpoint;

  //========TEST 1:
  // PROBAR EL MÉTODO DE GETALL DEL REPOSITORIO
  it('should fetch all flujos', async () => {
    console.log('Iniciando test de getAll');
    const flujos = await repo.getAll();
    console.log(flujos);
    expect(flujos).toBeTruthy(); // ASEGURAR QUE EXISTAN DATOS (SOLO DENTRO DEL TEST)
  });

  //========TEST 2:
  // FORZAR UN ERROR AL HACER GET ALL PARA PROBAR LAS EXCEPCIONES
  it('should throw an error if fetch fails', async () => {
    console.log('Iniciando test de error forzado');
    repo.endpoint = 'URL_INCORRECTA'; // FORZAR LA URL INCORRECTA
    console.log('El endpoint forzado es:', repo.endpoint); // MOSTRAR EXCEPCION FORZADA
    await expect(repo.getAll()).rejects.toThrow();
    repo.endpoint = originalEndpoint; // LIMPIAR EL ENDPOINT PARA VOLVER A USARLO
  });

  //========TEST 3:
  // PROBAR EL METODO DE FILTRADO DE DATOS USANDO CRITERIA
  it('should filter flujos based on criteria', async () => {
    console.log('Iniciando test de filtro');

    // DEFINIR EL CRITERIO DE FILTRADO
    const criteria = (flujo: Flujo) => flujo.idFlujo === "1";

    // EJECUTA LA FUNCIÓN DEL REPO QUE TIENE CRITERIA
    const filteredFlujos = await repo.getFiltered(criteria);

    // LOG DE LOS FLUJOS FILTRADOS
    console.log('Flujos filtrados:', filteredFlujos);

    // VERIFICAR QUE EL RESULTADO NO ESTÉ VACÍO
    expect(filteredFlujos).toBeTruthy();

    // VERIFICAR QUE EL/LOS RESULTADOS TENGAN EL FILTRO/CRITERIO APLICADO
    filteredFlujos.forEach(flujo => {
      expect(flujo.idFlujo).toBe("1");
    });
  });
});
