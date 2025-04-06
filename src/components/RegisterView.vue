<template>
  <div class="flex px-5 py-5 relative">
    <RouterLink :to="{ name: 'home' }">
      <img class="w-12 h-12 absolute top-5 left-5" src="/human-heart.png" alt="">
    </RouterLink>
    <div class="w-1/2 flex flex-col justify-center items-center space-y-10">
      <div class="intro">
        <div class="text-wrapper">
          Get Started Now
        </div>
        <p class="today-is-a-new-day">
          Today is a new day. It&#39;s your day. You shape it. <br />Login to delve into a healthier life.
        </p>
      </div>
      <div class="space-y-6 w-[410px]">
        <InputItem name="Name" value="John Doe" />
        <InputItem name="Email" value="example@email.com" />
        <InputItem name="Password" value="At least 8 characters" />
        <InputItem name="Confirm Password" value="At least 8 characters" />
        <p class="text-zinc-400 text-right">
          Forgot Password?
        </p>
        <RouterLink :to="{ name: 'dashboard' }"
          class="bg-pink-500 text-white inline-block px-4 py-2.5 rounded-md w-full text-center">
          Register
        </RouterLink>
        <p class="text-center text-zinc-700">
          Already have an account? <RouterLink class="text-pink-500" :to="{ name: 'login' }">Login</RouterLink>
        </p>
      </div>
    </div>
    <div class="w-1/2">
      <img class="w-full h-full object-center" src="/couple.png" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import InputItem from './ui/InputItem.vue';
</script>

<style scoped></style>
