<script setup lang=ts>
const props = defineProps<{
    title: String,
    array: Array<{
        title: String,
        price: Number | any
    }>
}>()
</script>

<template>
    <section>
        <h1>{{ props.title }} <i>⌄</i></h1>
        <hr class="darkblue">
        <div class="forbruk">
            <div class="bar" v-for="i in props.array">
                <h2>{{ i.title }}</h2>
                <b>{{ i.price }}</b>
                <hr class="blackbar">
            </div>
        </div>
    </section>
</template>

<style scoped lang=scss>
section {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #222222;
    padding: 1rem;
    height: 800px;
    width: 600px;

    h1 {
        text-align: center;
        margin: 1rem;
    }

    .darkblue {
        width: 300px;
    }

    .forbruk {
        display: flex;
        flex-direction: column;
        padding: 5rem 0;
        gap: 1.5rem;
        width: 400px;
    }
}
</style>