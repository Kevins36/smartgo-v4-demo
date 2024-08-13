<script lang="ts" setup>
import { ref } from 'vue';
import { AreaRepo } from '../api/area-repo';
import type { CreateArea } from "@/shared/interfaces/hr/area.interface";

const areaRepo = new AreaRepo();
const area = ref<CreateArea>({
    codigo: '', area: '', descripcion: '',
});

async function save() {
  try {
    const response = await areaRepo.create(area.value);
    if (response.Success) {

      console.log('Área creada con éxito:', response.Success);
    } else if (response.Error) {

      console.error('Error al crear área:', response.Error);
    }
  } catch (error) {
    console.error('Error inesperado:', error);
  }
}

const emit = defineEmits(["cancel", "save"]);

function cancel() {
  emit("cancel");
}

</script>

<template>
  <div class="bg-light-light dark:bg-dark-light mt-8 ml-4 rounded-lg p-8 ">
    <form class="m-4 max-w-sm mx-auto" @submit.prevent="save">
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="codigo"
            id="codigo"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            v-model="area.codigo"
            required
          />
          <label
            for="codigo"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Código</label
          >
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="area"
            id="area"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            v-model="area.area"
            required
          />
          <label
            for="area"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Área</label
          >
        </div>
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <label
          for="descripcion"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
          >Descripción</label
        >
        <textarea
          id="descripcion"
          rows="8"
          class="block p-2.5 w-full text-sm resize-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Max xx caracteres"
          v-model="area.descripcion"
        ></textarea>
      </div>

      <div class="flex gap-4 items-center justify-end">
        <button
          type="button"
          @click="cancel"
          class="transition-all text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-3xl text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Cancelar
        </button>
        <button
          type="submit"
          class="transition-all text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Guardar
        </button>
      </div>
    </form>
  </div>
</template>
