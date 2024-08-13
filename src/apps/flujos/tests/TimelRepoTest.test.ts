import { describe, it, expect } from 'vitest';
import { TimelineRepo } from '../api/TimelineRepo';
import type { Timeline } from '@/shared/interfaces/timeline/TimelineType';

describe('TimelineRepo', () => {
  const repo = new TimelineRepo();
  const originalEndpoint = repo.endpoint;

  //========TEST 1:
  // PROBAR EL MÉTODO DE GETALL DEL REPOSITORIO
  it('should fetch all timelines', async () => {
    console.log('Iniciando test de getAll');
    const timelines = await repo.getAll();
    console.log(timelines);
    expect(timelines).toBeTruthy(); // ASEGURAR QUE EXISTAN DATOS (SOLO DENTRO DEL TEST)
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
  // PROBAR EL MÉTODO DE FILTRADO DE DATOS USANDO CRITERIA
  it('should filter timelines based on criteria', async () => {
    console.log('Iniciando test de filtro');

    // DEFINIR EL CRITERIO DE FILTRADO
    const criteria = (timeline: Timeline) => timeline.uuid === "1625489721283";

    // EJECUTA LA FUNCIÓN DEL REPO QUE TIENE CRITERIA
    const filteredTimelines = await repo.getFiltered(criteria);

    // LOG DE LOS TIMELINES FILTRADOS
    console.log('Timelines filtrados:', filteredTimelines);

    // VERIFICAR QUE EL RESULTADO NO ESTÉ VACÍO
    expect(filteredTimelines).toBeTruthy();

    // VERIFICAR QUE EL/LOS RESULTADOS TENGAN EL FILTRO/CRITERIO APLICADO
    filteredTimelines.forEach(timeline => {
      expect(timeline.uuid).toBe("1625489721283");
    });
  });
});
