<script lang="ts" setup>
import { useRouter } from 'vue-router';
import InputField from "../../ui/InputField.vue";
import PhoneInput from "../../ui/PhoneInput.vue";
import Stepper from "../../ui/Stepper.vue";

const router = useRouter();

// Maneja la navegación al hacer clic en "Continuar"
const handleContinue = (event: Event) => {
  event.preventDefault(); // Previene el comportamiento por defecto del formulario

  // Redirige a la siguiente página
  router.push('/register4');
};

// Maneja la navegación al hacer clic en "Volver"
const handleReturn = (event: Event) => {
  event.preventDefault(); // Previene el comportamiento por defecto del formulario

  // Redirige a la página anterior
  router.push('/register2');
};
</script>

<template>
  <section
    class="w-2/5 mt-4 rounded-lg flex flex-col h-auto bg-light-light shadow-md border-slate-900/10 border-2"
  >
    <form class="flex flex-col w-full p-12 gap-4">
      <h1 class="text-center text-2xl font-bold mb-2">Registrarse</h1>

      <Stepper step="3" class="mb-4" />

      <div class="flex flex-col gap-1">
        <InputField
          type="text"
          placeholder="Nombre de usuario"
          icon="user"
        />
      </div>

      <div class="flex flex-col gap-1">
        <InputField
          type="email"
          placeholder="Correo Electrónico"
          icon="email"
        />
      </div>

      <div class="flex flex-col gap-1">
        <PhoneInput />
      </div>

      <div class="flex flex-col gap-1">
        <InputField type="text" placeholder="Campo 4" icon="globe" />
      </div>

      <div class="mt-2 flex justify-between">
        <button
          type="button"
          class="p-3 text-xs text-gray-50 uppercase bg-blue-500 border-0 hover:bg-blue-400 rounded-md"
          @click="handleReturn"
        >
          Volver
        </button>
        <button
          type="button"
          class="p-3 text-xs text-gray-50 uppercase bg-blue-500 border-0 hover:bg-blue-400 rounded-md"
          @click="handleContinue"
        >
          Continuar
        </button>
      </div>
    </form>
  </section>
</template>
