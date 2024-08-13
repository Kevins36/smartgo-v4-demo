<script lang="ts" setup>
import InputField from '../ui/InputField.vue';
import { InformationCircleIcon } from '@heroicons/vue/16/solid';
</script>

<template>
  <section class="w-1/3 mt-4 rounded-lg flex flex-col h-auto bg-light-light shadow-md border-slate-900/10 border-2">
    <form action="#" method="POST" class="flex flex-col w-full p-12 gap-4">
      <h1 class="text-center text-2xl font-bold">Recuperar Contraseña</h1>

      <div class="flex flex-col gap-1">
        <InputField type="text" placeholder="Correo Electrónico" icon="email"/>
      </div>

      <div class="flex flex-col gap-1">
        <InputField type="password" placeholder="Confirmar Correo" icon="email"/>
      </div>

      <div class="flex items-center gap-2 justify-center text-gray-600">
        <InformationCircleIcon class="size-3" />
        <p class="text-sm">Si el correo está registrado recibirás un enlace de ayuda</p>
      </div>

      <div class="flex justify-center gap-2 text-sm">
        <span>Ya tengo una cuenta</span>
        <a class="text-blue-700 hover:text-blue-800/60" href="/login">Ingresar ahora</a>
      </div>

      <button
        type="submit"
        class="w-full p-3 text-xs text-gray-50 uppercase bg-blue-500 border-0 hover:bg-blue-400 rounded-md"
      >Recuperar
        
      </button>

      
    </form>
  </section>
</template>
