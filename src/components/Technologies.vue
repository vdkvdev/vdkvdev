<template>
	<section>
		<h2>Technologies</h2>
		<div class="cards_tech">
			<div v-for="tech in technologies" :key="tech.name" class="tech_card">
				<img :src="tech.svg" :alt="tech.name" />
				<p>{{ tech.name }}</p>
			</div>
		</div>
	</section>
</template>

<script>
	import html5 from '../icons/html5.svg';
	import css from '../icons/css.svg';
	import javascript from '../icons/javascript.svg';
	import python from '../icons/python.svg';
	import git from '../icons/git.svg';
	import vue from '../icons/vue.svg';
	import electron from '../icons/electron.svg';
	import nodejs from '../icons/nodejs.svg';
	import npm from '../icons/npm.svg';
	import vitejs from '../icons/vitejs.svg';
	import debian from '../icons/debian.svg';
	import linux from '../icons/linux.svg';
	import raspberry_pi from '../icons/raspberry_pi.svg';
	import phaser from '../icons/phaser.png';
	import Three from '../icons/Three.svg';
	import Vercel_dark from '../icons/Vercel_dark.svg';

	export default {
		name: 'Technologies',
		data() {
			return {
				technologies: [
					{ name: 'HTML', svg: html5 },
					{ name: 'CSS', svg: css },
					{ name: 'JavaScript', svg: javascript },
					{ name: 'Python', svg: python },
					{ name: 'Git', svg: git },
					{ name: 'Vue', svg: vue },
					{ name: 'Electron', svg: electron },
					{ name: 'Node', svg: nodejs },
					{ name: 'NPM', svg: npm },
					{ name: 'Vite', svg: vitejs },
					{ name: 'Debian', svg: debian },
					{ name: 'Linux', svg: linux },
					{ name: 'Raspberry PI', svg: raspberry_pi },
					{ name: 'Phaser', svg: phaser },
					{ name: 'Three', svg: Three },
					{ name: 'Vercel', svg: Vercel_dark }
				],
			};
		},
	};
</script>

<style scoped>
	section {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		margin: 70px 0px;
		width: 600px;
	}

	h2 {
		color: #d1d1d1;
		font-weight: normal;
		font-size: 18px;
		margin-bottom: 15px;
	}

	.cards_tech {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 15px;
	}

	.tech_card {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10px;
		border-radius: 3px;
		border: 1px solid #272729;
	}

	.tech_card img {
		width: 30px;
		margin-right: 10px;
	}

	.tech_card p {
		font-size: 16px;
		color: #999999;
		margin: 0;
	}
</style>