<template>
	<router-link to="/" class="home">
		<img alt="home page profile image" src="@/assets/Profile.png">
	</router-link>
	<div class="skillsPage">
		<div class="blocks">
			<h3>Skills</h3>
			<ul>
				<li>Sass</li>
				<li>EDM</li>
				<li>Drupal</li>
				<li>Wordpress</li>
			</ul>
		</div>
	</div>
</template>

<script>
import './Skills.scss'

export default {
	name: 'Skills',
}
</script>
