import { createWebHistory, createRouter } from "vue-router";
import MenuItems from "@/components/MenuItems/MenuItems";
import Code from "@/components/Code/Code.vue";
import Languages from "@/components/Languages/Languages.vue";
import Music from "@/components/Music/Music.vue";
import Hobbies from "@/components/Hobbies/Hobbies.vue";
import Skills from "@/components/Skills/Skills.vue";

const routes = [
	{
		path: "/",
		name: "MenuItems",
		component: MenuItems,
	},
	{
		path: "/code",
		name: "Code",
		component: Code
	},
	{
		path: "/languages",
		name: "Languages",
		component: Languages
	},
	{
		path: "/music",
		name: "Music",
		component: Music
	},
	{
		path: "/hobbies",
		name: "Hobbies",
		component: Hobbies
	},
	{
		path: "/skills",
		name: "Skills",
		component: Skills
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;