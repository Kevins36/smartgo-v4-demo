<script lang="ts" setup>
import { useRouter } from 'vue-router';
import InputField from "../../ui/InputField.vue";
import Stepper from "../../ui/Stepper.vue";

const router = useRouter();

// Maneja la navegación al hacer clic en "Continuar"
const handleSubmit = (event: Event) => {
  event.preventDefault(); // Previene el comportamiento por defecto del formulario

  // Redirige a la siguiente página
  router.push('/register3');
};

// Maneja la navegación al hacer clic en "Abandonar"
const handleReturn = () => {
  router.push('/register1');
};
</script>

<template>
  <section
    class="w-2/5 mt-4 rounded-lg flex flex-col h-auto bg-light-light shadow-md border-slate-900/10 border-2"
  >
    <form class="flex flex-col w-full p-12 gap-4">
      <h1 class="text-center text-2xl font-bold mb-2">Registrarse</h1>

      <Stepper step="2" class="mb-4" />

      <div class="flex flex-col gap-1">
        <InputField
          type="text"
          placeholder="Nombre de la organización"
          icon="brief"
        />
      </div>

      <div class="flex flex-col gap-1">
        <InputField type="text" placeholder="Campo 2" icon="map" />
      </div>

      <div class="flex flex-col gap-1">
        <InputField type="text" placeholder="Campo 3" icon="chart" />
      </div>

      <div class="flex flex-col gap-1">
        <InputField type="text" placeholder="Campo 4" icon="camera" />
      </div>

      <div class="flex flex-col gap-1">
        <InputField type="text" placeholder="Campo 5" icon="pencil" />
      </div>

      <div class="mt-2 flex justify-between">
        <button
          type="button"
          class="p-3 text-xs text-gray-50 uppercase bg-blue-500 border-0 hover:bg-blue-400 rounded-md"
          @click="handleReturn"
        >
          Abandonar
        </button>
        <button
          type="button"
          class="p-3 text-xs text-gray-50 uppercase bg-blue-500 border-0 hover:bg-blue-400 rounded-md"
          @click="handleSubmit"
        >
          Continuar
        </button>
      </div>
    </form>
  </section>
</template>
