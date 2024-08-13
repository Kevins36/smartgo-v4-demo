<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

import {
  BookmarkIcon,
  ChartBarSquareIcon,
  ChatBubbleLeftRightIcon,
  MegaphoneIcon,
  CalendarIcon,
  PlusCircleIcon,
} from '@heroicons/vue/16/solid';

// Ref para controlar la visibilidad del editor
const showEditor = ref(false);

// Función para inicializar Quill cuando se muestra el editor
const initQuill = () => {
  if (!showEditor.value) {
    showEditor.value = true;
    setTimeout(() => {
      new Quill('#editor', {
        theme: 'snow',
        modules: {
          syntax: true, // Habilita syntax highlighting
          toolbar: [
            [{ font: [] }, { size: [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ header: '1' }, { header: '2' }, 'blockquote', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }, { align: [] }],
            ['link', 'image', 'video', 'formula'],
            ['clean'],
          ],
        },
      });
    });
  }
};
</script>

<template>
  <div class="flex flex-col gap-2 px-3 py-4 rounded-lg bg-light-light dark:bg-dark-mid shadow-md content-box-editor">
    <h3 class="font-semibold bold text-sm"></h3>
    <div class="flex gap-4">
      <div>
        <img
          src="https://i.pravatar.cc/100"
          alt="Gonzalo Patricio Recabal Mella"
          class="w-14 h-12 rounded-full"
        />
      </div>

      <button
        @click="initQuill"
        type="button"
        class="bg-light-mid border-solid border border-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-3 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full flex justify-center gap-2 hover:text-blue-700 hover:bg-light-darker transition-colors delay-15"
      >
        <PlusCircleIcon class="size-4" />
        Nuevo Formato
      </button>
    </div>

    <div class="flex gap-4 items-center justify-center">
      <button
        class="flex items-center gap-1 px-2 hover:text-blue-700 hover:bg-light-darker rounded-full transition-colors delay-15"
      >
        <BookmarkIcon class="size-4" />Nota
      </button>
      <button
        class="flex items-center gap-1 px-2 hover:text-blue-700 hover:bg-light-darker rounded-full transition-colors delay-15"
      >
        <ChartBarSquareIcon class="size-4" />Estado
      </button>
      <button
        class="flex items-center gap-1 px-2 hover:text-blue-700 hover:bg-light-darker rounded-full transition-colors delay-15"
      >
        <ChatBubbleLeftRightIcon class="size-4" />Mensaje
      </button>
      <button
        class="flex items-center gap-1 px-2 hover:text-blue-700 hover:bg-light-darker rounded-full transition-colors delay-15"
      >
        <MegaphoneIcon class="size-4" />Anuncio
      </button>
      <button
        class="flex items-center gap-1 px-2 hover:text-blue-700 hover:bg-light-darker rounded-full transition-colors delay-15"
      >
        <CalendarIcon class="size-4" />Suceso
      </button>
    </div>

    <!-- Editor Quill -->
    <div v-if="showEditor" id="editor" class="mt-4 bg-white p-2 border rounded">
      
    </div>
    <button
        type="button"
        disabled="true"
        class="bg-light-mid border-solid border border-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-3 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full flex justify-center gap-2 hover:text-blue-700 hover:bg-light-darker transition-colors delay-15"
      >Enviar
      </button>
  </div>
</template>
