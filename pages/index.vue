<script setup lang="ts">
const defaultMode = ref(true);

const profile = ref({
  name: "Marthin Hatland",
  title: "Frontend Developer",
  btntext: "Kontakt meg",
});
</script>

<template>
  <div class="mode" @click="defaultMode = !defaultMode">
    <img src="/sun.svg" alt="sun" v-if="defaultMode" />
    <img src="/moon.svg" alt="moon" v-else />
  </div>
  <main v-if="defaultMode">
    <div class="center">
      <h1>{{ profile.name }}</h1>
      <p>{{ profile.title }}</p>
      <button>{{ profile.btntext }}</button>
    </div>
  </main>
  <main data-dark v-else>
    <div class="center">
      <h1>{{ profile.name }}</h1>
      <p>{{ profile.title }}</p>
      <NuxtLink to="/kontakt">
        <button>{{ profile.btntext }}</button>
      </NuxtLink>
    </div>
  </main>
  <div class="person">
    <img src="/lightmode.svg" alt="sun" v-if="defaultMode" />
    <img src="/darkmode.svg" alt="moon" v-else />
  </div>
</template>

<style scoped lang="scss">
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.mode {
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;

  img {
	transition: 0.2s;
	&:hover {
		animation: spin 2s linear infinite;
	}
  }
}

.person {
  position: absolute;
  bottom: 0;
  right: 10px;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .center {
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
