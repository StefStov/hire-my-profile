<template>
	<HomeLink/>
	<div class="hobbiesPage">
		<div class="block">
			<h3>Hobbies</h3>
			<ul>
				<li v-for="hobby in hobbies" :key="hobby.id">
					{{ hobby.title }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import './Hobbies.scss'
import HomeLink from "@/components/HomeLink/HomeLink";

export default {
	name: 'Hobbies',
	components: {HomeLink},
	computed: {
		hobbies() {
			return this.$store.state.hobbies
		}
	}
}
</script>
