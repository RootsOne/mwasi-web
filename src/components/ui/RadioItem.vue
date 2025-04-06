<template>
    <Label :for="name">{{ name }}</Label>
    <RadioGroup :default-value="value">
        <div v-for="option in options" class="flex items-center space-x-2">
            <RadioGroupItem id="option" :value="option" />
            <Label for="r1">{{ option }}</Label>
        </div>
    </RadioGroup>
</template>
<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
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
    options: {
        type: Array<String>,
        default: [], // Optional prop
    }
});

// Since defineProps returns props, you can access them directly:
const { name, value } = props;
</script>
