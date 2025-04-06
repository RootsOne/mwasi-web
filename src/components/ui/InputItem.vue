<template>
    <div class="space-y-4">
        <Label :for="name">{{ name }}</Label>
        <Input class="" :placeholder="value" />
    </div>
</template>
<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const props = defineProps({
    name: {
        type: String,
        default: '', // Optional prop
    },
    value: {
        type: String,
        default: '', // Optional prop
    },
});

// Since defineProps returns props, you can access them directly:
const { name, value } = props;
</script>
