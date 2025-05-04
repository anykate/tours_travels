<script setup>
const transparent = "rgba(255, 255, 255, 0)"
const icons = ["mdi-rewind", "mdi-play", "mdi-fast-forward"]
</script>

<template>
	<v-col cols="12" sm="12">
		<h4 class="text-center text-indigo-lighten-1">Featured Tours</h4>
		<h1 class="text-center">Beautiful Places Arround The World</h1>
		<v-row justify="center">
			<v-col cols="12" sm="10">
				<v-row>
					<v-col cols="12" sm="4">
						<v-hover v-slot="{ isHovering, props }">
							<v-card :elevation="isHovering ? 12 : 2" :class="{ 'on-hover': isHovering }" v-bind="props" class="card1">
								<v-img src="/5.jpg" cover height="100%">
									<div class="d-flex flex-row-reverse">
										<v-btn class="text-none mr-2 mt-2" color="indigo-lighten-1" size="x-large" variant="flat"
											rounded="0" elevation="12">
											3 Packages
										</v-btn>
									</div>
									<div class="text-white top">
										<h1 class="mt-4">Paris</h1>
										<div>
											<p class="ma-0 text-body-1 font-weight-bold">Starting From $1200</p>
										</div>
									</div>
									<div class="d-flex justify-center">
										<v-btn v-for="(icon, index) in icons" :key="index" variant="text"
											:class="{ 'show-btns': isHovering }" :color="transparent" :icon="icon"></v-btn>
									</div>
								</v-img>
							</v-card>
						</v-hover>
					</v-col>
					<v-col cols="4" class="d-flex flex-column">
						<v-row>
							<v-col cols="12" sm="12">
								<v-hover v-slot="{ isHovering, props }">
									<v-card :elevation="isHovering ? 12 : 2" :class="{ 'on-hover': isHovering }" v-bind="props"
										class="card1">
										<v-img src="/6.jpg" cover height="100%">
											<div class="d-flex flex-row-reverse">
												<v-btn class="text-none mr-2 mt-2" color="indigo-lighten-1" size="x-large" variant="flat"
													rounded="0" elevation="12">
													3 Packages
												</v-btn>
											</div>
											<div class="text-white ">
												<h1 class="mt-10 ml-4">Brazil</h1>
												<div>
													<p class="ma-0 text-body-1 font-weight-bold ml-4">Starting From $1900</p>
												</div>
											</div>
											<div class="d-flex justify-center">
												<v-btn v-for="(icon, index) in icons" :key="index" variant="text"
													:class="{ 'show-btns': isHovering }" :color="transparent" :icon="icon"></v-btn>
											</div>
										</v-img>
									</v-card>
								</v-hover>
							</v-col>
							<v-col cols="12" sm="12">
								<v-hover v-slot="{ isHovering, props }">
									<v-card :elevation="isHovering ? 12 : 2" :class="{ 'on-hover': isHovering }" v-bind="props"
										class="card1">
										<v-img src="/7.jpg" cover height="100%">
											<div class="d-flex flex-row-reverse">
												<v-btn class="text-none mr-2 mt-2" color="indigo-lighten-1" size="x-large" variant="flat"
													rounded="0" elevation="12">
													3 Packages
												</v-btn>
											</div>
											<div class="text-white ">
												<h1 class="mt-10 ml-4">Japon</h1>
												<div>
													<p class="ma-0 text-body-1 font-weight-bold ml-4">Starting From $1500</p>
												</div>
											</div>
											<div class="d-flex justify-center">
												<v-btn v-for="(icon, index) in icons" :key="index" variant="text"
													:class="{ 'show-btns': isHovering }" :color="transparent" :icon="icon"></v-btn>
											</div>
										</v-img>
									</v-card>
								</v-hover>
							</v-col>
						</v-row>
					</v-col>
					<v-col cols="12" sm="4">
						<v-hover v-slot="{ isHovering, props }">
							<v-card :elevation="isHovering ? 12 : 2" :class="{ 'on-hover': isHovering }" v-bind="props" class="card1">
								<v-img src="/8.jpg" cover height="100%">
									<div class="d-flex flex-row-reverse">
										<v-btn class="text-none mr-2 mt-2" color="indigo-lighten-1" size="x-large" variant="flat"
											rounded="0" elevation="12">
											3 Packages
										</v-btn>
									</div>
									<div class="text-white top">
										<h1 class="mt-4">London</h1>
										<div>
											<p class="ma-0 text-body-1 font-weight-bold">Starting From $1600</p>
										</div>
									</div>
									<div class="d-flex justify-center">
										<v-btn v-for="(icon, index) in icons" :key="index" variant="text"
											:class="{ 'show-btns': isHovering }" :color="transparent" :icon="icon"></v-btn>
									</div>
								</v-img>
							</v-card>
						</v-hover>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-col>
</template>

<style scoped>
.top {
	margin-top: 100%;
	margin-left: 20px;
}

.v-card.card1 {
	transition: opacity 0.4s ease-in-out;
}

.v-card.card1:not(.on-hover) {
	opacity: 0.6;
}

.show-btns {
	color: rgba(255, 255, 255, 1) !important;
}
</style>