<script setup lang=ts>
const route = useRoute()
let currentPageName: any = route.name

if (currentPageName === "index") {
  currentPageName = "hjem"
}

useHead({
  title: currentPageName + " | Portfolio",
  link: [{ rel: 'icon', type: 'image/png', href: 'logo.svg' }]
})
</script>

<template>
    <NuxtLayout>
        <NavBar/>
        <NuxtPage/>
    </NuxtLayout>
</template>

<style scoped lang=scss>
</style>