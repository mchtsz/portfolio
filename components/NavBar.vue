<script setup lang="ts">
const nav_links = ref([
    { id: '/', text: 'hjem' },
    { id: '/info', text: 'info' }
])
</script>

<template>
    <nav>
        <NuxtLink to="/" data-black data-navLink>
            MH
        </NuxtLink>

        <div class="nav-links">
            <NuxtLink v-for="link in nav_links" :to="link.id">
                {{ link.text }}
            </NuxtLink>
        </div>

        <a href="https://github.com/mchtsz" target="_blank">
            <img src="/github.png" alt="github">
        </a>
    </nav>
</template>

<style lang=scss scoped>
nav {
    padding: 1.5rem 3rem;
    display: flex;
    font-family: 'Roboto', sans-serif;
    justify-content: space-between;
    align-items: center;
    background-color: #ffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);


    a {
        cursor: pointer;
        transition: 0.3s ease-in-out;

        &:hover {
            transform: scale(1.3);
        }

        img {
            margin: auto;
            height: 40px;
        }
    }

    .nav-links {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 4rem;

        a {
            transition: 0.5s ease-in-out;
            font-size: 1.2rem;
            text-transform: lowercase;
            text-decoration: none;
            color: #000;

            &:hover {
                color: #000;
                transform: scale(1.3);
            }

            &::after {
                content: '';
                transition: width .3s ease-in-out;
                border-radius: 1rem;
                display: block;
                width: 0;
                height: 2px;
                background: #000;
            }

            &:hover::after {
                width: 100%;
            }
        }

        &:has(a.router-link-exact-active) {
            a.router-link-exact-active {
                color: #000;
                transform: scale(1.3);

                &:after {
                    width: 100%
                }
            }
        }
    }
}


@media screen and (max-width: 768px) {
    nav {
        height: auto;

        .nav-links {
            justify-content: space-evenly;
            a {
                font-size: 1.4rem;
            }
        }

        a {
            img {
                display: none;
            }

            &[data-navLink] {
                display: none;
            }
        }
    }
}
</style>