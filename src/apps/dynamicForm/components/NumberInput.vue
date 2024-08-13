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
    };
    id: string;
    min?: number; // Añadido como opcional
    max?: number; // Añadido como opcional
    step?: number; // Añadido como opcional
  };
}>();
</script>

<template>
  <div>
    <!-- Etiqueta del campo de entrada -->
    <label
      :for="props.element.id"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {{ props.element.label }}
    </label>

    <!-- Contenedor del campo de entrada con botones -->
    <div class="relative flex items-center max-w-[8rem]">
      <!-- Botón de decremento -->
      <button
        type="button"
        class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
      >
        <svg
          class="w-3 h-3 text-gray-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 2"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h16"
          />
        </svg>
      </button>

      <!-- Campo de entrada numérico -->
      <input
        type="number"
        :id="props.element.id"
        :required="props.element.params.required"
        :min="props.element.min"
        :max="props.element.max"
        :step="props.element.step"
        class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full rounded-none py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="999"
      />

      <!-- Botón de incremento -->
      <button
        type="button"
        class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
      >
        <svg
          class="w-3 h-3 text-gray-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </button>
    </div>

    <!-- Descripción y ayuda del campo -->
    <p
      v-if="props.element.params.desc"
      class="mt-2 text-sm text-gray-600 dark:text-gray-400"
    >
      {{ props.element.params.desc }}
    </p>
    <small
      v-if="props.element.params.help"
      class="text-xs text-gray-500 dark:text-gray-300"
    >
      {{ props.element.params.help }}
    </small>
  </div>
</template>
