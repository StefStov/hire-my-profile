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
		<svg width="200" height="200">
			<polygon :points="points"></polygon>
			<circle cx="100" cy="100" r="90"></circle>
		</svg>
	</div>
</template>

<script>
import './Languages.scss'
import HomeLink from "@/components/HomeLink/HomeLink";
import { TweenLite } from 'gsap'

export default {
	name: 'Languages',
	components: {HomeLink},
	computed: {
		languages() {
			return this.$store.state.languages
		}
	},
	data: function() {
		const defaultSides = 100;
		const stats = Array.apply(null, { length: defaultSides }).map(
			function() {
				return 100;
			}
		);
		return {
			stats: stats,
			points: generatePoints(stats),
			sides: defaultSides,
			minRadius: 23,
			interval: null,
			updateInterval: 500
		};
	},
	watch: {
		sides: function(newSides, oldSides) {
			const sidesDifference = newSides - oldSides;
			if (sidesDifference > 0) {
				for (let i = 1; i <= sidesDifference; i++) {
					this.stats.push(this.newRandomValue());
				}
			} else {
				const absoluteSidesDifference = Math.abs(sidesDifference);
				for (let i = 1; i <= absoluteSidesDifference; i++) {
					this.stats.shift();
				}
			}
		},
		stats: function(newStats) {
			TweenLite.to(this.$data, this.updateInterval / 1000, {
				points: generatePoints(newStats)
			});
		},
		updateInterval: function() {
			this.resetInterval();
		}
	},
	mounted: function() {
		this.resetInterval();
	},
	methods: {
		randomizeStats: function() {
			const vm = this;
			this.stats = this.stats.map(function() {
				return vm.newRandomValue();
			});
		},
		newRandomValue: function() {
			return Math.ceil(
				this.minRadius + Math.random() * (100 - this.minRadius)
			);
		},
		resetInterval: function() {
			const vm = this;
			clearInterval(this.interval);
			this.randomizeStats();
			this.interval = setInterval(function() {
				vm.randomizeStats();
			}, this.updateInterval);
		}
	}
}

function valueToPoint(value, index, total) {
	const x = 0;
	const y = -value * 0.9;
	const angle = ((Math.PI * 2) / total) * index;
	const cos = Math.cos(angle);
	const sin = Math.sin(angle);
	const tx = x * cos - y * sin + 100;
	const ty = x * sin + y * cos + 100;
	return { x: tx, y: ty };
}

function generatePoints(stats) {
	const total = stats.length;
	return stats
		.map(function(stat, index) {
			const point = valueToPoint(stat, index, total);
			return point.x + "," + point.y;
		})
		.join(" ");
}
</script>
