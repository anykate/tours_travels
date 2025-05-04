<script setup>
import Component2 from '@/components/Component2.vue';
import Component3 from '@/components/Component3.vue';
import Component4 from '@/components/Component4.vue';
import Component5 from '@/components/Component5.vue';
import Component6 from '@/components/Component6.vue';
import Component7 from '@/components/Component7.vue';
import Hero from '@/components/Hero.vue';
</script>

<template>
	<v-container fluid>
		<v-row>
			<Hero />
			<Component2 />
			<Component3 />
			<Component4 />
			<Component5 />
			<Component6 />
			<Component7 />
		</v-row>
	</v-container>
</template>

<style scoped></style>