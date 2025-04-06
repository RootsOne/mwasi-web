<template>
    <div class="flex items-center space-x-2">
        <Checkbox :checked="value" id="terms" />
        <Label for="terms">{{ name }}</Label>
    </div>
</template>
<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const props = defineProps({
    name: {
        type: String,
        default: '', // Optional prop
    },
    value: {
        type: Boolean,
        default: false, // Optional prop
    },
});

// Since defineProps returns props, you can access them directly:
const { name, value } = props;
</script>
