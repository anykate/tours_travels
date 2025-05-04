<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
	<Navbar />

	<v-main>
		<router-view />
	</v-main>

	<Footer />
</template>