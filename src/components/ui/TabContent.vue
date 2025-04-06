<template>
    <div>
        <div class="title-subtitle pb-16">
            <div class="title">
                <div class="title-2 capitalize">
                    <slot name="title" class="title-2"></slot>
                </div>
            </div>
            <div class="p">
                <slot name="subtitle" class="p"></slot>
            </div>
        </div>
        <slot name="intermediate"></slot>
        <div class="grid grid-cols-3 gap-10">
            <div class="space-y-6 flex flex-col">
                <slot name="col1">
                </slot>
            </div>
            <div class="space-y-6 flex flex-col">
                <slot name="col2">
                </slot>
            </div>
            <div class="space-y-6 flex flex-col">
                <slot name="col3">
                </slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
