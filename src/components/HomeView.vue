<template>
  <div class="relative">
    <img class="w-full h-auto" src="/home-bg.jpg" alt="">
    <div class="flex justify-between items-center py-2 absolute top-0 left-0 w-full px-5">
      <RouterLink :to="{ name: 'home' }">
        <img class="w-12 h-12" src="/human-heart.png" alt="">
      </RouterLink>

      <div class="space-x-10">
        <RouterLink to="" class="text-pink-500 font-medium">
          Home
        </RouterLink>
        <RouterLink to="" class="text-pink-500 font-medium">
          About
        </RouterLink>
      </div>

      <div class="flex gap-6">
        <RouterLink :to="{ name: 'login' }" class="bg-white text-pink-500 inline-block px-6 py-1.5 rounded-sm">
          Login
        </RouterLink>
        <RouterLink :to="{ name: 'register' }" class="bg-pink-500 text-white inline-block px-4 py-1.5 rounded-sm">
          Register
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
