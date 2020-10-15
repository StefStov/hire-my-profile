<template>
	<HomeLink/>
	<div class="codePage">
		<div v-for="code in codes" :key="code.id" class="blocks">
			<h3>{{ code.title }}</h3>
			<ul>
				<li v-for="skill in code.skills" :key="skill.name">
					{{skill.name}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import './Code.scss'
import HomeLink from "@/components/HomeLink/HomeLink";

export default {
	name: 'Code',
	components: {HomeLink},
	computed: {
		codes() {
			return this.$store.state.codes
		}
	}
}
</script>
