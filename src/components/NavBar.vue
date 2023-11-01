<script setup lang=ts>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav>
        <h1 data-navLink data-white>
            MH
        </h1>
        
        <main>
            <RouterLink to="/" data-navLink>home</RouterLink>
            <RouterLink to="/about" data-navLink>about us</RouterLink>
            <RouterLink to="/contact" data-navLink>contact</RouterLink>
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