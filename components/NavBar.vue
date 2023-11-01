<script setup lang=ts>
</script>

<template>
    <nav>
        <h1 data-navLink data-white>
            MH
        </h1>

        <main>
            <NuxtLink to="/" data-navLink>home</NuxtLink>
            <NuxtLink to="/about" data-navLink>about us</NuxtLink>
            <NuxtLink to="/contact" data-navLink>contact</NuxtLink>
        </main>
    </nav>
</template>

<style scoped lang=scss>
nav {
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;

    main {
        display: flex;
        gap: 2rem;
    }

    h1 {
        margin: auto 0;
    }
}
</style>