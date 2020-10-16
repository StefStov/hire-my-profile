<template id="hobbiesPage">
	<transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
		<div>
			<HomeLink/>
			<div class="hobbiesBlock">
				<div class="block">
					<h3>Hobbies</h3>
					<ul>
						<li v-for="hobby in hobbies" :key="hobby.id">
							{{ hobby.title }}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import './Hobbies.scss'
import HomeLink from "@/components/HomeLink/HomeLink"
import { TimelineMax, Power4, TweenMax } from 'gsap'

export default {
	name: 'Hobbies',
	components: {HomeLink},
	computed: {
		hobbies() {
			return this.$store.state.hobbies
		}
	},
	template: `#hobbiesPage`,
	methods: {
		enter(el, done) {
			const tl = new TimelineMax({
				onComplete: done
			})

			tl.set(el, {
				autoAlpha: 0,
				rotationX: 90,
				transformOrigin: '50% 50%'
			})

			tl.to(el, 2, {
				autoAlpha: 1,
				rotationX: 0,
				ease: Power4.easeOut
			})
		},
		leave(el, done) {
			TweenMax.to(el, 1, {
				scale: 0,
				ease: Power4.easeOut,
				onComplete: done
			});
		}
	}
}
</script>
