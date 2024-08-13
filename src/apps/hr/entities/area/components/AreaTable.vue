<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; // Importar useRouter
import TableData from './TableData.vue';
import { AreaRepo } from '../api/area-repo';
import type { Area } from '@/shared/interfaces/hr/area.interface';
import AreaEditPage from '../views/AreaEditPage.vue'; // Importar el componente de edición

const router = useRouter(); // Crear instancia del router
const areaRepo = new AreaRepo();
const areas = ref<Area[]>([]);
const loading = ref<boolean>(true);
const editingArea = ref<Area | null>(null); // Estado para el área en edición

onMounted(async () => {
  areas.value = await areaRepo.getAll();
  loading.value = false;
});

function handleEdit(area: Area) {
  editingArea.value = area; // Establecer el área en edición
}

function handleAdd() {
  router.push('/hr/area/add'); // Navegar a la página de agregar área
}
</script>

<template>
 <div class="ml-4 mb-4">
  <button
    type="button"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    @click="handleAdd"
  >
    Agregar
  </button>
 </div>
  <div class="activities-table-container ml-4">
    <template v-if="loading">
      <div class="loading-message">Cargando...</div>
    </template>
    <template v-else>
      <template v-if="editingArea">
        <AreaEditPage :area="editingArea" @cancel="editingArea = null" />
      </template>
      <template v-else>
        <table class="activities-table">
          <thead class="hidden lg:table-header-group">
            <tr>
              <th class="w-6 pl-2">&nbsp;</th>
              <th class="activities-text-heading w-20">Código</th>
              <th class="activities-text-heading w-24">Área</th>
              <th class="activities-text-heading">Creado por</th>
              <th class="activities-text-heading">Descripción</th>
              <th class="activities-text-heading">Modificado por</th>
              <th class="activities-text-heading w-10 pr-2">Ver</th>
            </tr>
          </thead>
          <TableData :data="areas" @edit="handleEdit" />
        </table>
      </template>
    </template>
  </div>
</template>

<style scoped>
.loading-message {
  text-align: center;
  font-size: 1.5rem;
  margin: 2rem 0;
}
</style>
