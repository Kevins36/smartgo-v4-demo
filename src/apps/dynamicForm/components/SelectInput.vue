<script setup lang="ts">

const props = defineProps<{
  element: {
    label: string;
    type: string;
    edit: boolean;
    params: {
      required: boolean;
      desc: string;
      help: string;
      visibility: string;
      fieldOptions: string;
      optionType: string;
    };
    id: string;
  };
}>();

// Convertir las opciones del campo en un array
const options = props.element.params.fieldOptions.split("\n");
</script>

<template>
  <div>
    <!-- Etiqueta del campo -->
    <label
      :for="props.element.id"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >{{ props.element.label }}</label
    >

    <!-- Campo de selección -->
    <select
      :id="props.element.id"
      :required="props.element.params.required"
      class="bg-gray-50 border rounded-xl shadow-sm border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <!-- Opciones del campo -->
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>

    <!-- Descripción y ayuda del campo -->
    <p class="mt-1 text-gray-600 dark:text-gray-400">
      {{ props.element.params.desc }}
    </p>
    <small class="text-gray-500 dark:text-gray-300">{{
      props.element.params.help
    }}</small>
  </div>
</template>
