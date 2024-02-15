<script setup lang="ts">
useHead({
  link: [{ rel: 'icon', type: 'image/png', href: 'logo.svg' }]
})
</script>

<template>
  <NuxtLayout>
    <NavBar />
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped lang="scss"></style>