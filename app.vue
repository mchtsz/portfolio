<script setup lang="ts">
import Analytics from "@vercel/analytics";

useHead({
  link: [{ rel: 'icon', type: 'image/png', href: 'logo.svg' }]
})
</script>

<template>
  <NuxtLayout>
    <NavBar />
    <NuxtPage />
    <Analytics />
  </NuxtLayout>
</template>

<style scoped lang="scss"></style>