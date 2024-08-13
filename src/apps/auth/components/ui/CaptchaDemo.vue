<script setup lang="ts">
// Puedes agregar lógica aquí si es necesario, pero para una demo visual no es necesario
</script>

<template>
  <div class="flex justify-center items-center p-4">
    <div class="border border-gray-300 rounded-lg bg-gray-50 w-full">
      <p class="text-lg font-semibold mb-4">CAPTCHA</p>
      <p class="mb-4">¿Cuál es el siguiente número en la secuencia?</p>
      <p class="font-bold mb-4">1, 2, 3, 4, __</p>
      <input
        type="text"
        placeholder="Tu respuesta"
        class="border border-gray-300 p-2 rounded-lg w-full"
      />
    </div>
  </div>
</template>
