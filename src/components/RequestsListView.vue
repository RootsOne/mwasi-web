<template>
    <div class="w-full h-full flex items-center justify-center">
        <div class="flex flex-col items-center justify-center gap-4">
            <img src="/no-requests.png" alt="No requests" srcset="">
            <RouterLink :to="{ name: 'new-request' }" class="button">
                + Nouvelle requête
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>
