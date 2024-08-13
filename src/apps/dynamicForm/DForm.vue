<script setup lang="ts">
import { ref } from 'vue';
import { formData } from './test-data/ejemplo4';
import ButtonGroup from './components/ButtonGroup.vue';
import Checkbox from './components/Checkbox.vue';
import DateInput from './components/DateInput.vue';
import DropSearch from './components/DropSearch.vue'; // opcional si decides usarlo
import FileInput from './components/FileInput.vue';
import ImageInput from './components/ImageInput.vue';
import MoneyInput from './components/MoneyInput.vue';
import NumberInput from './components/NumberInput.vue';
import RichText from './components/Richtext.vue';
import SelectInput from './components/SelectInput.vue';
import TextInput from './components/TextInput.vue';

interface FormElement {
  label: string;
  type: string;
  edit: boolean;
  params: {
    required: boolean;
    desc: string;
    help: string;
    visibility: string;
    fieldOptions?: string;  
    optionType?: string;     
  };
  id: string;
}

interface FormData {
  elements: FormElement[];
  title: string;
}

const form = ref<FormData>(formData);

function getComponentType(type: string) {
  switch (type) {
    case 'text':
      return TextInput;
    case 'number':
      return NumberInput;
    case 'options':
      return SelectInput;
    case 'date':
      return DateInput;
    case 'checkbox':
      return Checkbox;
    case 'file':
      return FileInput;
    case 'rich-text':
      return RichText;
    case 'button-group':
      return ButtonGroup;
    case 'money':
      return MoneyInput;
    case 'file':
      return FileInput; 
    default:
      return 'div';
  }
}

function handleSubmit() {
  console.log('Formulario submit');
}
</script>

<template>
  <div>
    <h2>{{ form.title }}</h2>
    <form @submit.prevent="handleSubmit">
      <div v-for="element in form.elements" :key="element.id" class="mb-4">
        <component :is="getComponentType(element.type)" :element="element"></component>
      </div>
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
    </form>
  </div>
</template>
