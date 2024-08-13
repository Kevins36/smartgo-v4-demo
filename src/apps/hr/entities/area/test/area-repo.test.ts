import { describe, it, expect } from 'vitest';
import { AreaRepo } from '../api/area-repo';
import type { Area, CreateArea, UpdateArea } from '@/shared/interfaces/hr/area.interface';

describe('AreaRepo', () => {
  const repo = new AreaRepo();
  const originalEndpoint = repo.endpoint;

  //========TEST 1:
  // PROBAR EL MÉTODO DE GETALL DEL REPOSITORIO
  it('Debería mostrar todas las áreas', async () => {
    console.log('Iniciando test de getAll');
    console.log("endpoint:", repo.endpoint);
    const areas = await repo.getAll();
    console.log(areas);
    expect(areas).toBeTruthy(); // ASEGURAR QUE EXISTAN DATOS (SOLO DENTRO DEL TEST)
  });

  //========TEST 2:
  // // FORZAR UN ERROR AL HACER GET ALL PARA PROBAR LAS EXCEPCIONES
  // it('Debería mostrar un error si el fetch falla', async () => {
  //   console.log('Iniciando test de error forzado');
  //   repo.endpoint = 'URL_INCORRECTA'; // FORZAR LA URL INCORRECTA
  //   console.log('El endpoint forzado es:', repo.endpoint); // MOSTRAR EXCEPCION FORZADA

  //   // Espera que la promesa sea rechazada
  //   await expect(repo.getAll()).rejects.toThrow('Error:');

  //   repo.endpoint = originalEndpoint; // LIMPIAR EL ENDPOINT PARA VOLVER A USARLO
  // });

  //========TEST 3:
  // PROBAR EL MÉTODO DE FILTRADO DE DATOS USANDO CRITERIA
  // it('Debería mostrar el área según el criterio aplicado', async () => {
  //   console.log('Iniciando test de filtro');

  //   // DEFINIR EL CRITERIO DE FILTRADO
  //   const criteria = (area: Area) => area.id === 10;

  //   // EJECUTA LA FUNCIÓN DEL REPO QUE TIENE CRITERIA
  //   const filteredAreas = await repo.getFiltered(criteria);

  //   // LOG DE LOS ÁREAS FILTRADAS
  //   console.log('Áreas filtradas:', filteredAreas);

  //   // VERIFICAR QUE EL RESULTADO NO ESTÉ VACÍO
  //   expect(filteredAreas).toBeTruthy();
  //   filteredAreas.forEach(area => {
  //     expect(area.id).toBe(10);
  //   });
  // });

  //========TEST 4:
  // PROBAR EL MÉTODO DE DELETE DEL REPOSITORIO
  // it('Debería eliminar un área correctamente', async () => {
  //   console.log('Iniciando test de delete');

  //   // Suponiendo que el área con ID 10 existe para pruebas
  //   const testAreaId = 10;

  //   // Llamar al método delete
  //   const deleteResponse = await repo.delete(testAreaId);

  //   // Verificar que la respuesta sea la esperada
  //   expect(deleteResponse.Success).toBeDefined();

  //   // Verificar que el área ha sido eliminada
  //   const filteredAreas = await repo.getFiltered(area => area.id === testAreaId);
  //   expect(filteredAreas).toHaveLength(0);
  // });

  //========TEST 5:
  // PROBAR EL MÉTODO DE CREATE DEL REPOSITORIO
  // it('Debería crear un área correctamente', async () => {
  //   console.log('Iniciando test de create');

  //   // Datos para crear el área
  //   const newArea: CreateArea = { codigo: 'C001', area: 'Área Nueva', descripcion: 'Descripción del área nueva', atributos: {} };

  //   // Llamar al método create
  //   const createResponse = await repo.create(newArea);

  //   // Verificar que la respuesta sea la esperada
  //   expect(createResponse.Success).toBeDefined();

  //   // Verificar que el área ha sido creada
  //   const createdAreas = await repo.getFiltered(area => area.codigo === 'C001');
  //   expect(createdAreas).toHaveLength(1);

  //   // Limpieza opcional: Eliminar el área creada
  //   if (createdAreas.length > 0) {
  //     await repo.delete(createdAreas[0].id);
  //   }
  // });

  //========TEST 6:
  // PROBAR EL MÉTODO DE UPDATE DEL REPOSITORIO
  // it('Debería actualizar un área correctamente', async () => {
  //   console.log('Iniciando test de update');

  //   // Crear un área de prueba (si es necesario)
  //   const areaIdToUpdate = 10; // Suponiendo que este ID ya existe en la base de datos de prueba
  //   const updateData: UpdateArea = { codigo: 'C002', descripcion: 'Área Actualizada' };

  //   // Llamar al método update
  //   const updateResponse = await repo.update(areaIdToUpdate, updateData);

  //   // Verificar que la respuesta sea la esperada
  //   expect(updateResponse.Success).toBeDefined();

  //   // Verificar que el área ha sido actualizada
  //   const updatedAreas = await repo.getFiltered(area => area.id === areaIdToUpdate);
  //   expect(updatedAreas).toHaveLength(1);
  //   expect(updatedAreas[0].codigo).toBe('C002');
  //   expect(updatedAreas[0].descripcion).toBe('Área Actualizada');
  // });
});
