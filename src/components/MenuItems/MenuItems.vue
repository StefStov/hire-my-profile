<template>
	<div class="menuItems">
		<router-link
			v-for="menuItem in menuItems"
			:key="menuItem.id"
			:to="'/' + menuItem.link"
			:class="'menuItem ' + menuItem.class"
		>
			<img :alt="menuItem.altText" :src="require(`@/assets/${menuItem.imgPath}`)" />
		</router-link>
	</div>
</template>

<script>
import './MenuItems.scss'

export default {
	name: 'MenuItems',
	computed: {
		menuItems() {
			return this.$store.state.menuItems
		}
	}
}
</script>
