<template>
	<HomeLink/>
	<div class="musicPage">
		<div v-for="type in music" :key="type.id" class="blocks">
			<h3>{{ type.title }}</h3>
			<p>{{ type.genre }}</p>
		</div>
	</div>
</template>

<script>
import './Music.scss'
import HomeLink from "@/components/HomeLink/HomeLink";

export default {
	name: 'Music',
	components: {HomeLink},
	computed: {
		music() {
			return this.$store.state.music
		}
	}
}
</script>
