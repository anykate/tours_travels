<script setup></script>

<template>
	<v-col cols=12>
		<v-row>
			<v-col cols="12" sm="6">
				<h1 class="title1">
					It's a big world<br />
					Out There, Go<br />Explore
				</h1>
				<p class="par1">
					Conveniently customize proactive web service for <br />
					leverage without continual aggregate friction
					<br />ou wellies richard.and very customize continually.
				</p>
				<v-btn class="text-none mt-8 bt1" color="indigo-lighten-1" size="x-large" variant="flat" rounded="0">
					Get Exploration
				</v-btn>
				<v-btn class="text-none ml-2 text-indigo-lighten-1 mt-8" size="x-large" variant="flat" rounded="0">
					Read More
				</v-btn>
			</v-col>
			<v-col cols="12" sm="6">
				<v-img src="/3.jpg" class="img1" />
			</v-col>
		</v-row>
	</v-col>
</template>

<style scoped>
.title1 {
	color: #1f3347;
	font-size: 50px;
	font-style: bold;
	margin-left: 100px;
	margin-top: 70px;
}

.par1 {
	color: #AAA1B4;
	margin-left: 100px;
}

.bt1 {
	margin-left: 100px;
}

.img1 {
	width: 1000px !important;
	height: 1000px !important;
	z-index: 1;
	margin-top: -200px;
}
</style>