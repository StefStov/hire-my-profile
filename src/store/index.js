import {createStore} from "vuex";

const store = createStore({
	state() {
		return {
			menuItems: [
				{
					id: '0',
					link: 'Code',
					class: 'code',
					altText: 'code icon',
					imgPath: 'CodeIcon.png',
					text: 'Code'
				},
				{
					id: '1',
					link: 'Languages',
					class: 'languages',
					altText: 'languages icon',
					imgPath: 'LanguagesIcon.png',
					text: 'Languages'
				},
				{
					id: '2',
					link: 'Music',
					class: 'music',
					altText: 'music icon',
					imgPath: 'MusicIcon.png',
					text: 'Music'
				},
				{
					id: '3',
					link: '',
					class: 'profile',
					altText: 'home link profile image',
					imgPath: 'Profile.png',
					text: 'Home'
				},
				{
					id: '4',
					link: 'Hobbies',
					class: 'hobbies',
					altText: 'hobbies icon',
					imgPath: 'HobbiesIcon.png',
					text: 'Hobbies'
				},
				{
					id: '5',
					link: 'Skills',
					class: 'skills',
					altText: 'skills icon',
					imgPath: 'SkillIcon.png',
					text: 'Skills'
				}
			],
			codes: [
				{
					id: '0',
					title: 'PHP',
					skills: [
						{name: 'WordPress'},
						{name:'Drupal 7'},
						{name:'Magento'},
						{name:'Created my own CMS in PHP'}
						]
				},
				{
					id: '1',
					title: 'HTML',
					skills: [
						{name:'WordPress'},
						{name:'Drupal 7'},
						{name:'React'},
						{name:'Vue'}
						]
				},
				{
					id: '2',
					title: 'CSS/CSS3',
					skills: [
						{name:'WordPress'},
						{name:'Drupal 7'},
						{name:'React'},
						{name:'Vue'}
						]
				},
				{
					id: '3',
					title: 'Javascript',
					skills: [
						{name:'React'},
						{name:'Vue 7'}
						]
				},
				{
					id: '4',
					title: 'Jquery',
					skills: [
						{name:'WordPress'},
						{name:'Drupal 7'},
						{name:'Bootstrap'}
						]
				},
				{
					id: '5',
					title: 'SCSS',
					skills: [
						{name:'WordPress'},
						{name:'Drupal 7'},
						{name:'Magento'},
						{name:'Created my own CMS in PHP'}
						]
				},
			],
			languages: [
				{id: '0', title: 'English'},
				{id: '1', title: 'German'},
				{id: '2', title: 'Dutch'}
			],
			music: [
				{id: '0', title: 'Focus', genre: 'Classical music'},
				{id: '1', title: 'For fun', genre: 'Metal'},
				{id: '2', title: 'Relaxing', genre: 'Jazz'}
			],
			hobbies: [
				{id: '0', title: 'Walking'},
				{id: '1', title: 'Gaming'},
				{id: '2', title: 'Nature'},
				{id: '3', title: 'Baking'}
			],
			skills: [
				{id: '0', title: 'Sass'},
				{id: '1', title: 'EDM'},
				{id: '2', title: 'Drupal'},
				{id: '3', title: 'Wordpress'}
			]
		}
	}
})

export default store;