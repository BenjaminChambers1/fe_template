<template>
<div id="app">
	<NavBar/>
	<router-view/>
</div>
</template>
<script>
import NavBar from '@/components/navbar.vue';

export default {
	components: {
		NavBar
	}
}
</script>
