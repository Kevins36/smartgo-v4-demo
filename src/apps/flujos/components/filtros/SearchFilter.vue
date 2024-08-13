<script lang="ts" setup>
import InputField from '@/apps/auth/components/ui/InputField.vue';
const emit = defineEmits(['search']);

const search = (e: Event) => {
    const target = e.target as HTMLInputElement | null;
    if (target) {
        emit('search', target.value);
    }
};

</script>

<template>
    <form class="">
        <InputField type="text" placeholder="Palabra clave" icon="search" @input="search" />
    </form>
</template>