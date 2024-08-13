<script lang="ts" setup>
import { computed, ref } from "vue";
import FilterWindow from "../../../filtros/FilterWindow.vue";
import SearchFilter from "../../../filtros/SearchFilter.vue";
import { AdjustmentsVerticalIcon } from "@heroicons/vue/16/solid";

const isFilterWindowVisible = ref(false);

const showFilterWindow = () => {
  isFilterWindowVisible.value = true;
};

const hideFilterWindow = () => {
  isFilterWindowVisible.value = false;
};

const handleSearch = (search:Event)=>{

}

const filteredData = computed (()=>{
  
})
</script>

<template>
  <div class="flex items-end justify-start gap-4">
    <SearchFilter @search="handleSearch" />

    <button
      id="btn-filtros"
      class="interactive-control flex items-center justify-center gap-2"
      @click="showFilterWindow"
    >
      <AdjustmentsVerticalIcon class="size-4" />
      Filtros
    </button>
    <FilterWindow v-if="isFilterWindowVisible" @close="hideFilterWindow" />
  </div>
</template>
