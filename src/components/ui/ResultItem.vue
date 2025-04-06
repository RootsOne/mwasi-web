<template>
    <div class="text-sm space-y-1.5 py-2" :class="parentStyle">
        <p class="text-zinc-900 font-bold">
            {{ name }}
        </p>
        <p class="text-zinc-600 font-medium">
            {{ value }}
        </p>
        <p v-if="description" class="font-medium" :class="textStyle">
            {{ description }}
        </p>
    </div>
</template>
<script setup lang="ts">

const props = defineProps({
    name: {
        type: String,
        default: '', // Optional prop
    },
    value: {
        type: String,
        default: '', // Optional prop
    },
    description: {
        type: String,
        default: '', // Optional prop
    },
    status: {
        type: String,
        default: 'good', // Optional prop
    },
});

// Since defineProps returns props, you can access them directly:
const { name, value, description, status } = props;
let textStyle = '', parentStyle = '';
switch (status) {
    case 'bad':
        textStyle = 'text-red-600';
        parentStyle = 'border-l-4 pl-4 border-red-600 bg-red-50';
        break;

    case 'attention':
        textStyle = 'text-amber-600';
        parentStyle = 'border-l-4 pl-4 border-amber-600 bg-amber-50';
        break;

    default:
        break;
}
</script>
