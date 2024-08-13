<script lang="ts" setup>
import { defineProps } from 'vue';
import { UserIcon, AtSymbolIcon, LockClosedIcon, GlobeAmericasIcon, BriefcaseIcon, PresentationChartLineIcon, MapPinIcon, PencilIcon, CameraIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

const props = defineProps<{
  type: string;
  placeholder: string;
  icon: 'user' | 'email' | 'pass'| 'globe' | 'brief' | 'map' | 'chart' | 'pencil'|'camera'| 'search';
}>();

// Define un objeto para mapear íconos
const icons = {
  user: UserIcon,
  email: AtSymbolIcon,
  pass: LockClosedIcon,
  globe:GlobeAmericasIcon,
  brief:BriefcaseIcon,
  chart:PresentationChartLineIcon,
  map: MapPinIcon,
  pencil: PencilIcon,
  camera:CameraIcon,
  search:MagnifyingGlassIcon
};

// Obtén el ícono correspondiente
const IconComponent = icons[props.icon] || PencilIcon; // Usa un ícono por defecto en caso de que el valor no coincida
</script>

<template>
  <div class="relative">
    <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
      <component :is="IconComponent" class="w-5 h-5 text-slate-500" />
    </div>
    <input
      :type="type"
      :placeholder="placeholder"
      class="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required
    />
  </div>
</template>
