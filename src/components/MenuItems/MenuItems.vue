<template>
	<div class="menuItems">
		<router-link to="/Code" class="code menuItem">
			<img alt="code icon" src="@/assets/CodeIcon.png">
		</router-link>
		<router-link to="/Languages" class="languages menuItem">
			<img alt="languages icon" src="@/assets/LanguagesIcon.png">
		</router-link>
		<router-link to="/Music" class="music menuItem">
			<img alt="music icon" src="@/assets/MusicIcon.png">
		</router-link>
		<img class="profile" alt="profile image" src="@/assets/Profile.png">
		<router-link to="/Hobbies" class="hobbies menuItem">
			<img alt="hobbies icon" src="@/assets/HobbiesIcon.png">
		</router-link>
		<router-link to="/Skills" class="skills menuItem">
			<img alt="skills icon" src="@/assets/SkillIcon.png">
		</router-link>
	</div>
</template>

<script>
import './MenuItems.scss'

export default {
	name: 'MenuItems',
}
</script>
