<template>
	<router-link to="/" class="home">
		<img alt="home page profile image" src="@/assets/Profile.png">
	</router-link>
	<div class="hobbiesPage">
		<div class="blocks">
			<h3>Hobbies</h3>
			<ul>
				<li>Walking</li>
				<li>Gaming</li>
				<li>Nature</li>
				<li>Baking</li>
			</ul>
		</div>
	</div>
</template>

<script>
import './Hobbies.scss'

export default {
	name: 'Hobbies',
}
</script>
