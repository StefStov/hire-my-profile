<template>
	<div class="hello">
		<div class="greeting">
			<p>{{greeting}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				greeting: "Hello and Welcome!",
			}
		},
	}
</script>