<script setup lang="ts">
const defaultMode = ref(true);

const profile = ref({
	name: "Marthin Hatland",
	title: "Developer",
	btntext: "post@marthin.no",
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
			<a href="mailto:post@marthin.no">
				<button data-btndark>{{ profile.btntext }}</button>
			</a>
		</div>
	</main>
	<main data-dark v-else>
		<div class="center">
			<h1>{{ profile.name }}</h1>
			<p>{{ profile.title }}</p>
			<a href="mailto:post@marthin.no">
				<button data-transparent>{{ profile.btntext }}</button>
			</a>
		</div>
	</main>
	<div class="person">
		<img src="/lightmode.svg" alt="sun" v-if="defaultMode" />
		<img src="/darkmode.svg" alt="moon" v-else />
	</div>
</template>

<style scoped lang="scss">
@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

.mode {
	position: absolute;
	top: 10px;
	left: 10px;
	cursor: pointer;
	
	img {
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
			font-size: 5rem;
		}
		p {
			font-size: 3rem;
		}
		button {
			border-radius: 2rem;
			padding: 1rem 2rem;
			font-size: 1.2rem;
			color: #fff;
			cursor: pointer;
			
			&:hover {
				background-color: #333;
			}
		}
	}
}

@media screen and (max-width: 1000px) {
	main {
		.center {
			gap: 0;
			h1 {
				font-size: 2.5rem;
				line-height: 4rem;
			}
			p {
				font-size: 2rem;
			}
		}
	}
	.person {
		img {
			width: 150px;
		}
	}
}
</style>
