<template>
  <div class="tabs-and-content">
    <div class="tabs">
      <RouterLink :to="{ name: 'medical-file' }" class="tab-item-3">
        <div class="text-wrapper-6">Identification</div>
      </RouterLink>
      <RouterLink :to="{ name: 'gynecology' }" class="tab-item-2">
        <div class="text-wrapper-6">Ant. Gynécologique</div>
      </RouterLink>
      <RouterLink :to="{ name: 'surgery' }" class="tab-item-3">
        <div class="text-wrapper-6">Ant. Chirurgicale</div>
      </RouterLink>
      <RouterLink :to="{ name: 'obstetrical' }" class="tab-item-3">
        <div class="text-wrapper-6">Ant. Obstétricale</div>
      </RouterLink>
      <RouterLink :to="{ name: 'immunology' }" class="tab-item-3">
        <div class="text-wrapper-6">Ant. Immunologique</div>
      </RouterLink>
      <RouterLink :to="{ name: 'family' }" class="tab-item-3">
        <div class="text-wrapper-6">Ant. Familiaux</div>
      </RouterLink>
      <RouterLink :to="{ name: 'toxicology' }" class="tab-item-3">
        <div class="text-wrapper-6">Ant. Toxicologiques</div>
      </RouterLink>
      <RouterLink :to="{ name: 'pregnancy' }" class="tab-item-3">
        <div class="text-wrapper-6">Ant. Grossesse</div>
      </RouterLink>
      <RouterLink :to="{ name: 'symptoms' }" class="tab-item-3">
        <div class="text-wrapper-6">Plaintes</div>
      </RouterLink>
      <RouterLink :to="{ name: 'followup' }" class="tab-item-3">
        <div class="text-wrapper-6">Préférences de suivi</div>
      </RouterLink>
      <RouterLink :to="{ name: 'analysis' }" class="tab-item-3">
        <div class="text-wrapper-6">Analyses</div>
      </RouterLink>
    </div>
    <form class="tab-card px-10 py-10">
      <RouterView />
      <div class="flex justify-end pt-10">
        <button class="button">
          Sauvegarder
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.medical-file .router-link-exact-active {
  background-color: white;
}

.medical-file .router-link-exact-active>div {
  color: var(--pink-500) !important;
}
</style>
