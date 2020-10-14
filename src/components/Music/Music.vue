<template>
	<router-link to="/" class="home">
		<img alt="home page profile image" src="@/assets/Profile.png">
	</router-link>
	<div class="musicPage">
		<div class="blocks">
			<h3>Focus</h3>
			<p>Classical music</p>
		</div>
		<div class="blocks">
			<h3>For fun</h3>
			<p>Metal</p>
		</div>
		<div class="blocks">
			<h3>Relaxing</h3>
			<p>Jazz</p>
		</div>
	</div>
</template>

<script>
import './Music.scss'

export default {
	name: 'Music',
}
</script>
