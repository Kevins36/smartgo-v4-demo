<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  id: string;
  value: string;
  placeholder: string;
  required: boolean;
}>();

const emit = defineEmits(['update']);

// Maneja la entrada y asegura que el evento es de un HTMLInputElement
function handleInput(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target) {
    emit('update', target.value);
  }
}
</script>

<template>
  <input
    type="text"
    :id="id"
    :value="value"
    :placeholder="placeholder"
    :required="required"
    @input="handleInput"
  />
</template>


