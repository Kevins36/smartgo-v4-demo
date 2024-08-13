<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import AreaEdit from '../components/AreaEdit.vue';
import type { Area } from '@/shared/interfaces/hr/area.interface';

// Props que recibirá el componente
const props = defineProps<{
  area: Area; // El área debe ser pasada como prop
}>();

const emit = defineEmits(['cancel', 'save']);

function handleSave() {
  emit('save'); // Emitir evento de guardar
}

function handleCancel() {
  emit('cancel'); // Emitir evento de cancelación
}
</script>

<template>
  <div>
    <h2>Editar Área</h2>
    <!-- Usa el componente AreaEdit y pasa el área como prop -->
    <AreaEdit
      :area="props.area"
      @save="handleSave"
      @cancel="handleCancel"
    />
  </div>
</template>
