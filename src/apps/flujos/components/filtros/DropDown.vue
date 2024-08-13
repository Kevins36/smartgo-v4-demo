<script lang="ts" setup>
import { ref, computed, defineProps } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/16/solid';

// Definir las props
const props = defineProps<{
  options: Array<{ label: string; value: any }>;
}>();

// Tipo para la opción seleccionada
type OptionType = { label: string; value: any };

// Datos internos
const isDropdownOpen = ref(false);
const selectedOptions = ref(new Set<OptionType>());
const searchQuery = ref('');

// Alternar la visibilidad del dropdown
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Manejar la selección de una opción
const toggleOption = (option: OptionType) => {
  const set = selectedOptions.value;
  const optionExists = Array.from(set).some(o => o.value === option.value);
  if (optionExists) {
    set.forEach(o => {
      if (o.value === option.value) set.delete(o);
    });
  } else {
    set.add(option);
  }
};

// Filtrar opciones basado en la búsqueda
const filteredOptions = computed(() => {
  if (!searchQuery.value) return props.options;
  return props.options.filter(option =>
    option.label.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Obtener las etiquetas seleccionadas
const selectedLabels = computed(() => {
  return Array.from(selectedOptions.value).map(option => option.label).join(', ');
});
</script>

<template>
  <div>
    <!-- Botón para alternar el dropdown -->
    <button
      type="button"
      @click="toggleDropdown"
      class="text-sm flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    >
      <span class="flex-1 text-left rtl:text-right whitespace-nowrap font-semibold">
        {{ selectedLabels || 'Selecciona opciones' }}
      </span>
      <ChevronDownIcon class="size-4" />
    </button>

    <!-- Dropdown List -->
    <ul
      :class="[
        'py-2 space-y-2 text-sm h-60 overflow-y-scroll no-scrollbar',
        { block: isDropdownOpen, hidden: !isDropdownOpen }
      ]"
    >
      <!-- Campo de búsqueda -->
      <li class="w-full p-2">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Buscar..."
          class="w-full p-2 text-gray-900 border rounded-lg text-sm"
        />
      </li>

      <!-- Opciones seleccionadas -->
      <li v-if="selectedOptions.size" class="w-full px-2 bg-gray-100 rounded-lg text-xs">
        <span class="text-gray-700">Seleccionados:</span>
        <ul class="flex flex-wrap gap-2 mt-1">
          <li v-for="option in selectedOptions" :key="option.value" class="bg-blue-500 text-white px-2 py-1 rounded-full">
            {{ option.label }}
          </li>
        </ul>
      </li>

      <!-- Opciones del dropdown -->
      <li
        v-for="option in filteredOptions"
        :key="option.value"
        class="flex w-full items-center gap-2 p-2 hover:bg-light-light transition-colors rounded-lg cursor-pointer"
        @click="toggleOption(option)"
      >
        <input
          type="checkbox"
          :id="option.value"
          :checked="Array.from(selectedOptions).some(o => o.value === option.value)"
          class="h-4 w-4 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 rounded-full"
          @click.stop
        />
        <label :for="option.value" class="text-sm font-medium text-gray-900 dark:text-white">
          {{ option.label }}
        </label>
      </li>
    </ul>
  </div>
</template>
