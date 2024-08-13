<script lang="ts" setup>
import { EyeIcon, TagIcon, ShareIcon } from "@heroicons/vue/16/solid";
import { CheckBadgeIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-2">
    <div class="flex flex-col items-center">
      <div id="avatar">
        <img
          src="https://i.pravatar.cc/100"
          alt="Gonzalo Patricio Recabal Mella"
          class="w-8 h-8 rounded-full"
        />
      </div>
      <div class="flex flex-col items-center">
        <h3 class="font-semibold">Maura Andrea Barrios Vergara</h3>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          Mie. 14 de feb 2023, 10:45
        </p>
      </div>

      <div class="mt-4 flex flex-col items-center">
        <CheckBadgeIcon class="size-16" />
        <span class="text-lg">He iniciado un nuevo flujo</span>
      </div>
    </div>

    <div
      class="flex justify-end w-full border-b border-gray-300 dark:border-gray-700 pb-2 mb-4"
    >
      <button class="hover:text-blue-700 transition-colors delay-15">
        <EyeIcon class="size-5 mx-1" />
      </button>
      <button class="hover:text-blue-700 transition-colors delay-15">
        <TagIcon class="size-5 mx-1" />
      </button>
      <button class="hover:text-blue-700 transition-colors delay-15">
        <ShareIcon class="size-5 mx-1" />
      </button>
    </div>

    <div id="comment" class="flex flex-col">
      <div class="flex justify-center gap-4" id="user-info">
        <div id="avatar">
          <img
            src="https://i.pravatar.cc/100"
            alt="Gonzalo Patricio Recabal Mella"
            class="w-4 h-4 rounded-full"
          />
        </div>
        <div class="flex flex-col items-center">
          <h3 class="font-semibold">Maura Andrea Barrios Vergara</h3>
        </div>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          Mie. 14 de feb 2023, 10:45
        </p>
      </div>

      <p class="text-pretty mx-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem culp
      </p>
    </div>
    <div id="comment-separator" class="border-l border-gray-300 h-6 ml-2"></div>
    <div id="comment" class="flex flex-col">
      <div class="flex justify-center gap-4" id="user-info">
        <div id="avatar">
          <img
            src="https://i.pravatar.cc/100"
            alt="Gonzalo Patricio Recabal Mella"
            class="w-4 h-4 rounded-full"
          />
        </div>
        <div class="flex flex-col items-center">
          <h3 class="font-semibold">Maura Andrea Barrios Vergara</h3>
        </div>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          Mie. 14 de feb 2023, 10:45
        </p>
      </div>

      <p class="text-pretty mx-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem culp
      </p>
    </div>
    <div id="comment-separator" class="border-l border-gray-300 h-6 ml-2"></div>
    <div id="comment" class="flex flex-col">
      <div class="flex justify-center gap-4" id="user-info">
        <div id="avatar">
          <img
            src="https://i.pravatar.cc/100"
            alt="Gonzalo Patricio Recabal Mella"
            class="w-4 h-4 rounded-full"
          />
        </div>
        <div class="flex flex-col items-center">
          <h3 class="font-semibold">Maura Andrea Barrios Vergara</h3>
        </div>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          Mie. 14 de feb 2023, 10:45
        </p>
      </div>

      <p class="text-pretty mx-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem culp
      </p>
    </div>
    <div
      class="flex w-full items-center gap-2 border-t border-gray-300 dark:border-gray-700 pb-2 mb-4"
    >
      <div class="mt-4" id="avatar">
        <img
          src="https://i.pravatar.cc/100"
          alt="Gonzalo Patricio Recabal Mella"
          class="w-6 h-6 rounded-full"
        />
      </div>
      <input
        type="text"
        id="small-input"
        placeholder="Escribe un comentario"
        class="mt-4 block w-full p-2 text-gray-900 border-gray-300 rounded-full text-xs focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  </div>
</template>
