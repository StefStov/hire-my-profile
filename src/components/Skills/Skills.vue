<template>
	<HomeLink/>
	<div class="skillsPage">
		<div class="block">
			<h3>Skills</h3>
			<ul>
				<li v-for="skill in skills" :key="skill.id">
					{{ skill.title }}
				</li>
			</ul>
		</div>
			<div class="block animation">
				<div class="ball"></div>
			</div>
	</div>
</template>

<script>
import './Skills.scss'
import HomeLink from "@/components/HomeLink/HomeLink"

export default {
	name: 'Skills',
	components: {HomeLink},
	computed: {
		skills() {
			return this.$store.state.skills
		}
	}
}
</script>
