<script lang="ts" setup>

import GoogleButton from '../ui/GoogleButton.vue';
import FacebookButton from '../ui/FacebookButton.vue';
import InputField from '../ui/InputField.vue'
</script>

<template>
  <section class="w-1/3 mt-4 rounded-lg flex flex-col h-auto bg-light-light shadow-md border-slate-900/10 border-2">
    <form action="#" method="POST" class="flex flex-col w-full p-12 gap-4">
      <h1 class="text-center text-2xl font-bold">Iniciar Sesión</h1>

      <div class="flex flex-col gap-1">
        <InputField type="text" placeholder="Correo Electrónico" icon="user"/>
      </div>

      <div class="flex flex-col gap-1">
        <InputField type="password" placeholder="Contraseña" icon="pass"/>
      </div>
      <div class="flex flex-col items-center justify-between gap-2 lg:flex-row">
        <div class="flex items-center justify-start gap-1">
          <input
            type="checkbox"
            name="login_recordar"
            class="w-3 h-3 bg-gray-200 border-gray-300 dark:bg-gray-700 dark:border-gray-800"
          />
          <span class="text-xs">Recordar contraseña</span>
        </div>
        <a
          href="/recover"
          title="Recuperar contraseña"
          class="text-xs text-blue-500 hover:text-blue-400"
          >Recuperar contraseña</a
        >
      </div>

      <button
        type="submit"
        class="w-full p-3 text-xs text-gray-50 uppercase bg-blue-500 border-0 hover:bg-blue-400 rounded-md"
      >
        Ingresar
      </button>

      <div class="flex justify-center gap-2 text-sm">
        <span>¿Aún no tienes una cuenta? </span>
        <a class="text-blue-700 hover:text-blue-800/60" href="/register1"
          >Regístrese ahora</a
        >
      </div>

      <div class="flex flex-col items-center justify-center mt-2 w-full">
        <hr class="w-full border-gray-300" />
        <div class="mt-2 w-full">
          <GoogleButton text="Iniciar sesión con Google" />
        </div>
      </div>

      <div class="flex flex-col items-center justify-center mt-2 w-full">
        <FacebookButton text="Iniciar sesión con Facebook" />
        
      </div>
    </form>
  </section>
</template>
