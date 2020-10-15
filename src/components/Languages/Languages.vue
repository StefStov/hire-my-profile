<template>
	<HomeLink/>
	<div class="languagesPage">
		<div class="block">
			<div>
				<h3>Languages</h3>
				<ul>
					<li v-for="language in languages" :key="language.id">
						{{ language.title }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import './Languages.scss'
import HomeLink from "@/components/HomeLink/HomeLink";

export default {
	name: 'Languages',
	components: {HomeLink},
	computed: {
		languages() {
			return this.$store.state.languages
		}
	}
}
</script>
