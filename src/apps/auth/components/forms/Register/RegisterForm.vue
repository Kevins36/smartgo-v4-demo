<script lang="ts" setup>
import { useRouter } from 'vue-router';
import GoogleButton from '../../ui/GoogleButton.vue';
import FacebookButton from '../../ui/FacebookButton.vue';
import InputField from '../../ui/InputField.vue'
import Stepper from '../../ui/Stepper.vue';

const router = useRouter();

const handleSubmit = (event: Event) => {
  event.preventDefault(); // Previene el comportamiento por defecto del formulario

  // Realiza aquí cualquier lógica de validación o envío de datos

  // Redirige a la siguiente página
  router.push('/register2');
};
</script>

<template>
  <section class="w-2/5 mt-4 rounded-lg flex flex-col h-auto bg-light-light shadow-md border-slate-900/10 border-2">
    <form @submit="handleSubmit" class="flex flex-col w-full p-12 gap-4">
      <h1 class="text-center text-2xl font-bold mb-2">Registrarse</h1>

      <Stepper step="1" class="mb-4" />

      <div class="flex flex-col gap-1">
        <InputField type="text" placeholder="Correo Electrónico" icon="email"/>
      </div>

      <div class="flex flex-col gap-1">
        <InputField type="password" placeholder="Contraseña" icon="pass"/>
      </div>

      <div class="flex flex-col gap-1">
        <InputField type="password" placeholder="Confirmar Contraseña" icon="pass"/>
      </div>

      <button
        type="submit"
        class="w-full p-3 text-xs text-gray-50 uppercase bg-blue-500 border-0 hover:bg-blue-400 rounded-md"
      >
        Crear cuenta
      </button>

      <div class="flex justify-center gap-2 text-sm">
        <span>Ya tengo una cuenta</span>
        <a class="text-blue-700 hover:text-blue-800/60" href="/login">Ingresar ahora</a>
      </div>

      <div class="flex flex-col items-center justify-center mt-2 w-full">
        <hr class="w-full border-gray-300" />
        <div class="mt-2 w-full">
          <GoogleButton text="Registrarse con Google" />
        </div>
      </div>

      <div class="flex flex-col items-center justify-center mt-2 w-full">
        <FacebookButton text="Registrarse con Facebook" />
      </div>
    </form>
  </section>
</template>
