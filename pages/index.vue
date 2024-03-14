<script setup lang="ts">

const profile = ref({
    name: 'Marthin Hatland',
    title: 'Frontend Developer',
    btntext: 'Kontakt meg'
})
</script>

<template>
    <main>
        <div class="box">
            <h1>{{ profile.name }}</h1>
            <p>{{ profile.title }}</p>
            <button>{{ profile.btntext }}</button>
        </div>
    </main>
</template>

<style scoped lang="scss">
main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .box {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        text-align: center;
        align-items: center;
        width: 100%;
        h1 {
            font-size: 4rem;
        }
        p {
            font-size: 2rem;
        }
        button {
            border-radius: 2rem;
            padding: 1rem 2rem;
            width: 200px;
            font-size: 1.2rem;
            border: none;
            background-color: #000;
            color: #fff;
            cursor: pointer;

            &:hover {
                background-color: #333;
            }
        }
    }
}
</style>