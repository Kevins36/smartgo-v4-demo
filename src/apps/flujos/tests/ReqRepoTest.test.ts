import { describe, it, expect } from 'vitest';
import { RequerimientoRepo } from '../../api/requerimiento-repo';
import type { Requerimiento } from '@/shared/interfaces/requerimientos/RequerimientoType';

describe('RequerimientoRepo', () => {
  const repo = new RequerimientoRepo();
  const originalEndpoint = repo.endpoint;

  //========TEST 1:
  // PROBAR EL MÉTODO DE GETALL DEL REPOSITORIO
  it('should fetch all requerimientos', async () => {
    console.log('Iniciando test de getAll');
    const requerimientos = await repo.getAll();
    console.log(requerimientos);
    expect(requerimientos).toBeTruthy(); // ASEGURAR QUE EXISTAN DATOS (SOLO DENTRO DEL TEST)
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
  it('should filter requerimientos based on criteria', async () => {
    console.log('Iniciando test de filtro');

    // DEFINIR EL CRITERIO DE FILTRADO
    const criteria = (requerimiento: Requerimiento) => requerimiento.idRequerimiento === 949680;

    // EJECUTA LA FUNCIÓN DEL REPO QUE TIENE CRITERIA
    const filteredRequerimientos = await repo.getFiltered(criteria);

    // LOG DE LOS REQUERIMIENTOS FILTRADOS
    console.log('Requerimientos filtrados:', filteredRequerimientos);

    // VERIFICAR QUE EL RESULTADO NO ESTÉ VACÍO
    expect(filteredRequerimientos).toBeTruthy();

    // VERIFICAR QUE EL/LOS RESULTADOS TENGAN EL FILTRO/CRITERIO APLICADO
    filteredRequerimientos.forEach(req => {
      expect(req.idRequerimiento).toBe(949680);
    });
  });
});
