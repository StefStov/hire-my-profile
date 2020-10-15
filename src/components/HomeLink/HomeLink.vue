<template>
	<router-link to="/" class="home">
		<div class="homeWrapper">
			<img alt="home page profile image" src="@/assets/Profile.png">
			<div class="homeOverlay">
				<h1>Home</h1>
			</div>
		</div>
	</router-link>
</template>

<script>
import './HomeLink.scss'

export default {
	name: 'HomeLink'
}
</script>
