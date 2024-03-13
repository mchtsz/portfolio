<script setup lang=ts>
import { ref } from 'vue'

const profile = ref({
    name: 'Marthin Hatland',
    title: 'Frontend Developer',
    btntext: 'Kontakt meg'
})
</script>

<template>
    <section>
        <h1>{{ profile.name }}</h1>
        <p>{{ profile.title }}</p>
        <a href="/kontakt">
            <button>
                {{ profile.btntext }}
            </button>
        </a>
    </section>
    <div class="coding">
        <img src="../../public/koding.svg" alt="koding">
    </div>
</template>

<style scoped lang=scss>
.coding {
    display: none;
    position: absolute;
    left: 0;
    width: 50%;
    z-index: -1;
    height: 100vh;
    img {
        width: 300px;
        object-fit: fill;
    }

}
section {
    display: flex;
    background: transparent;
    position: absolute;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-family);
    left: 0;
    right: 0;
    z-index: 20;
    gap: 1rem;
    height: 100vh;

    h1 {
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 2rem;
    }

    p {
        font-size: 1.5rem;
    }

    button {
        padding: 1rem 2rem;
        font-family: var(--font-family);
        border: none;
        background-color: #000;
        color: white;
        font-size: 1rem;
        border-radius: 2rem;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
            opacity: 0.8;
            transform: scale(1.1);
        }
    }
}
</style>