<script setup lang=ts>
const loginValue = ref(false)
const username = ref('')
const password = ref('')

const checkUser = () => {
    if (username.value === "nisha" && password.value === "solheim") {
        loginValue.value = true
    } else {
        window.location.href = '/'
    }
}

const HomeObj = {
    title: 'Home',
    totalCurrency: 10000
}

const forbrukObj = {
    title: 'Forbruk',
    lorems: [
        {
            title: 'Lorem ipsum',
            price: 500
        },
        {
            title: 'Lorem ipsum',
            price: 1000
        },
        {
            title: 'Lorem ipsum',
            price: 1500
        },
        {
            title: 'Lorem ipsum',
            price: 2000
        },
        {
            title: 'Lorem ipsum',
            price: 2500
        },
        {
            title: 'Lorem ipsum',
            price: 3000
        }
    ]
}
</script>

<template>
    <div v-if="!loginValue">
        <form @submit.prevent="checkUser">
            <input type="text" placeholder="Username" v-model="username">
            <input type="password" placeholder="Password" v-model="password">
            <input type="submit">
        </form>
    </div>

    <main v-if="loginValue">
        <Home :title="HomeObj.title" :total-currency="HomeObj.totalCurrency" />
        <aside>
            <Forbruk :title="forbrukObj.title" :array="forbrukObj.lorems" />
        </aside>
    </main>
</template>

<style scoped lang=scss>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    background-color: #fff;
    color: #fff;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
            font-size: 1rem;
            margin: 1rem;
            padding: 1rem;
            width: 20rem;
            border-radius: 5px;
        }
    }
}

main {
    padding: 5rem;
    background-color: #141515;
    color: #fff;

    aside {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }
}
</style>