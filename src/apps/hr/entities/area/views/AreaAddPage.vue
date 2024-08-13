<script lang="ts" setup>
import { defineEmits } from 'vue';
import AreaAdd from '../components/AreaAdd.vue';

const emit = defineEmits(['cancel', 'save']);

function handleSave() {
  emit('save'); // Emitir evento de guardar cuando se implemente un store o estado de vuex o pinia
}

function handleCancel() {
  emit('cancel'); // Emitir evento de cancelación cuando se implemente un store o estado de vuex o pinia
}
</script>

<template>
  <div>
    <AreaAdd
      @save="handleSave"
      @cancel="handleCancel"
    />
  </div>
</template>
