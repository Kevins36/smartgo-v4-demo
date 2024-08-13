<!-- ActividadesPage.vue -->
<script lang="ts" setup>
import ActividadesTable from '../components/requerimiento/Table/Table.vue';
import PageHeader from '../components/requerimiento/ui/PageHeader.vue';

const props = defineProps<{
  idFlujo: number;
  flujoNombre: string;
}>();
</script>

<template>
  <PageHeader :flujo="props.flujoNombre" />
  <ActividadesTable :flowId="props.idFlujo" />
</template>
