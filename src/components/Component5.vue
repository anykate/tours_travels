<script setup>
const offers = [
	{
		image: "i1.png",
		title: " Different Coutries",
	},
	{
		image: "i2.png",
		title: " Bus Tours",
	},
	{
		image: "i3.png",
		title: " Food Tours",
	},
	{
		image: "i4.png",
		title: " Summer Rest",
	},
	{
		image: "i5.png",
		title: "Ship Cruises",
	},
	{
		image: "i6.png",
		title: "Mountains Tours",
	},
]
</script>

<template>
	<v-col cols="12" sm="12">
		<h4 class="text-center text-indigo-lighten-1">Inventore Veritatis</h4>
		<h1 class="text-center">Select Offres For Travelings</h1>
		<v-row justify="center">
			<v-col cols="12" sm="10">
				<v-row>
					<v-col cols="12" sm="2" v-for="(offer, i) in offers" :key="i">
						<v-card class="mx-auto px-2 pt-6" height="200px" flat>
							<div align="center" justify="center">
								<v-img :src="offer.image" height="100px" width="100px" cover></v-img>

							</div>
							<v-card-title class="text-center">
								<h6>{{ offer.title }}</h6>
							</v-card-title>
						</v-card>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-col>
</template>