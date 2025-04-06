<template>
    <div class="space-y-4">
        <Label for="place">{{ name }}</Label>
        <Select>
            <SelectTrigger class="w-full">
                <SelectValue :placeholder="value" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{{ label ?? name }}</SelectLabel>
                    <SelectItem v-for="option in options" :value="option">
                        {{ option }}
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
</template>
<script setup lang="ts">
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

const props = defineProps({
    name: {
        type: String,
        default: '', // Optional prop
    },
    value: {
        type: String,
        default: '', // Optional prop
    },
    label: {
        type: String,
        default: '', // Optional prop
    },
    options: {
        type: Array<String>,
        default: [], // Optional prop
    }
});

// Since defineProps returns props, you can access them directly:
const { name, value, options } = props;
</script>
