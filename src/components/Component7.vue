<script setup>
const travels = [
	{
		image: "f1.jpg",
	},
	{
		image: "f2.jpg",
	},
	{
		image: "f3.jpg",
	},
	{
		image: "f4.jpg",
	},
	{
		image: "f5.jpg",
	},
	{
		image: "f6.jpg",
	},
	{
		image: "5.jpg",
	},
	{
		image: "8.jpg",
	},
]

const model = null
</script>

<template>
	<v-col cols=12 sm="12">
		<h4 class="text-center text-indigo-lighten-1">Our Gallery</h4>
		<h1 class="text-center">Best Traveler Share A photo</h1>
		<v-sheet class="mx-auto" elevation="8" max-width="1200">
			<v-slide-group v-model="model" class="pa-4" center-active show-arrows>
				<v-slide-group-item v-for="travel in travels" :key="travel" v-slot="{ isSelected, toggle }">
					<v-card :color="isSelected ? 'primary' : 'grey-lighten-1'" class="ma-4" height="200" width="130"
						@click="toggle" flat>
						<div class="d-flex fill-height align-center justify-center">
							<v-img :src="travel.image" cover height="100%" width="100%"></v-img>
						</div>
					</v-card>
				</v-slide-group-item>
			</v-slide-group>
		</v-sheet>
	</v-col>
	<v-col cols="12" sm="12">
		<v-card>
			<v-img src="/p.jpg" cover height="100%">
				<div class="d-flex justify-center ligne1">
					<h1>Sign up for our newsletter</h1>
				</div>
				<div class="d-flex justify-center ligne2">
					<v-text-field density="compact" placeholder="Enter your e-main here" variant="solo-inverted" color="#393E50"
						rounded="0"></v-text-field>
					<v-btn class="text-none tp" color="indigo-lighten-1" size="large" variant="flat" rounded="0" elevation="12">
						Subscribe Now
					</v-btn>
				</div>
			</v-img>
		</v-card>
	</v-col>
</template>

<style scoped>
.ligne1 {
	margin-top: 150px;
}

.ligne2 {
	margin-top: 10px;
	padding: 0 250px 0 250px;
}

.tp {
	margin-top: -2px;
}
</style>