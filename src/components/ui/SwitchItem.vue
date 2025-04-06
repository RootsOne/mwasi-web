<template>
    <div class="flex items-center space-x-2">
        <Switch :id="name" :checked="value" />
        <Label :for="name">{{ name }}</Label>
    </div>
</template>
<script setup lang="ts">
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

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
<script setup lang="ts">

</script>
