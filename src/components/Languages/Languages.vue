<template>
	<router-link to="/" class="home">
		<img alt="home page profile image" src="@/assets/Profile.png">
	</router-link>
	<div class="languagesPage">
		<div class="blocks">
			<h3>Languages</h3>
			<ul>
				<li>English</li>
				<li>German</li>
				<li>Dutch</li>
			</ul>
		</div>
	</div>
</template>

<script>
import './Languages.scss'

export default {
	name: 'Languages',
}
</script>
