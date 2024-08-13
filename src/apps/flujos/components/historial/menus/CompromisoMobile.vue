<script lang="ts" setup>

</script>
<template>
    <div class="content-box lg:hidden dark:bg-dark-mid">
      <div class="content-box-header">
        <h2 class="content-box-heading">Compromiso</h2>
      </div>
      <div class="flex items-start justify-start gap-5">
        <div class="flex flex-col items-stretch justify-start w-20 flex-none">
          <span
            class="bg-blue-500 dark:bg-blue-400 text-xs uppercase text-gray-50 text-center px-1 py-1"
            >Enero</span
          >
          <div
            class="h-20 grid place-content-center text-center bg-gray-100 dark:bg-gray-800"
          >
            <span class="font-bold text-4xl text-gray-900 dark:text-gray-50"
              >27</span
            >
            <span class="text-xs text-gray-500 dark:text-gray-400"
              >Miércoles</span
            >
          </div>
          <span
            class="bg-gray-300 dark:bg-gray-700 text-xs text-gray-500 dark:text-gray-400 text-center px-1 py-1"
            >2024</span
          >
        </div>
        <div class="flex flex-col gap-4">
          <div class="space-y-0.5">
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-0.5">
              Estado
            </p>
            <!-- COLORES DE ESTADOS
                                - Pendiente: bg-amber-500
                                - Cancelado: bg-red-500
                                - Aprobado: bg-indigo-500
                                - Terminado: bg-emerald-500
                            -->
            <span
              class="px-1 py-1.5 bg-amber-500 text-gray-50 text-center rounded-md"
              >Pendiente</span
            >
          </div>
          <div>
            <p class="text-sm text-gray-500 dark:text-gray-400">Ingreso</p>
            <p class="text-sm">Mier 27 ene. 2021, 10:45</p>
          </div>
        </div>
      </div>

      <div class="w-full flex flex-col items-start justify-start gap-3">
        <h3 class="font-bold text-sm">Responsables</h3>
        <div
          class="w-full p-2 flex flex-col gap-2 bg-gray-100 rounded-md dark:bg-gray-800"
        >
          <div class="flex items-center gap-2">
            <picture class="w-6 h-6 flex-none rounded-full overflow-hidden">
              <img
                src="https://i.pravatar.cc/100"
                alt="Gonzalo Patricio Recabal Mella"
                class="w-full h-full object-fill"
              />
            </picture>
            <h4 class="font-semibold text-sm">Planificador de rutas</h4>
          </div>
          <div>
            <p class="text-sm">Gonzalo Patricio Recabal Mella</p>
            <p class="text-sm">No asignado</p>
          </div>
        </div>
        <div
          class="w-full p-2 flex flex-col gap-2 bg-gray-100 rounded-md dark:bg-gray-800"
        >
          <div class="flex items-center gap-2">
            <picture class="w-6 h-6 flex-none rounded-full overflow-hidden">
              <img
                src="https://i.pravatar.cc/100"
                alt="Maura Andrea Barrios Vergara"
                class="w-full h-full object-fill"
              />
            </picture>
            <h4 class="font-semibold text-sm">Maura Andrea Barrios Vergara</h4>
          </div>
          <div>
            <p class="text-sm">Administrador Trámites Arica</p>
            <p class="text-sm">Administrador de trámites</p>
          </div>
        </div>
      </div>
    </div>
</template>