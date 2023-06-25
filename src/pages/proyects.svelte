<script>
	// @ts-nocheck

	import Icon from '@iconify/svelte';
	import { i } from '@inlang/sdk-js';
	import * as colores from '../colores.json';

	let proyects = [
		{
			name: ['Portfolio'],
			desc: 'portfoliodesc',
			source: 'https://github.com/bbauti/portfoliov2',
			link: '',
			status: '',
			lenguagesColor: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Svelte', 'Vite'],
			lenguages: ['HTML', 'CSS', 'SCSS', 'JS', 'Svelte', 'Vite']
		},
		{
			name: ['Inventory App', '1rem'],
			desc: 'inventorydesc',
			source: 'https://bitbucket.org/arrudeboy/inventory/src',
			link: '',
			status: 'wip',
			lenguagesColor: ['Python', 'Python', 'Jinja2', 'JavaScript', 'HTML', 'CSS', 'SQL'],
			lenguages: ['PY', 'Flask', 'Jinja2', 'JS', 'HTML', 'CSS', 'SQL']
		},
		// {
		// 	name: ['Proximamente'],
		// 	desc: 'Próximamente más proyectos!',
		// 	source: 'https://github.com/bbauti/',
		// 	link: '',
		// 	status: 'wip',
		// 	lenguagesColor: [],
		// 	lenguages: []
		// },
		{
			name: ['Todo App'],
			desc: 'tododesc',
			source: 'https://github.com/bbauti/p5todoapp',
			link: 'https://bbauti.github.io/p5todoapp',
			status: 'done',
			lenguagesColor: ['HTML', 'CSS', 'JavaScript'],
			lenguages: ['HTML', 'CSS', 'JS']
		},
		{
			name: ['Weather Channel'],
			desc: 'weatherdesc',
			source: 'https://github.com/bbauti/p5weatherChannel',
			link: 'https://bbauti.github.io/p5weatherChannel',
			status: 'done',
			lenguagesColor: ['HTML', 'CSS', 'JavaScript'],
			lenguages: ['HTML', 'CSS', 'JS']
		},
		{
			name: ['Color Game'],
			desc: 'colordesc',
			source: 'https://github.com/bbauti/p5colorgame',
			link: 'https://bbauti.github.io/p5colorgame',
			status: 'done',
			lenguagesColor: ['HTML', 'CSS', 'JavaScript'],
			lenguages: ['HTML', 'CSS', 'JS']
		}
	];

	// Compruebo si la propiedad con el nombre del lenguaje existe en el json, y si es asi, retorno ese color

	export const checkColor = (leng) => {
		if (colores[leng]) {
			return colores[leng];
		} else {
			return '#fff';
		}
	};

	import { onMount } from 'svelte';

	onMount(() => {
		document.getElementById('cards').onmousemove = (e) => {
			for (const card of document.getElementsByClassName('card')) {
				const rect = card.getBoundingClientRect(),
					x = e.clientX - rect.left,
					y = e.clientY - rect.top;

				card.style.setProperty('--mouse-x', `${x}px`);
				card.style.setProperty('--mouse-y', `${y}px`);
			}
		};
	});
</script>

<section id="proyects">
	<p class="textheader">{i('page.projects.title')}</p>
	<div id="cards">
		{#each proyects as proyect}
			<div class="card {proyect.desc}">
				<div class="card-content">
					<div class="card-info-wrapper">
						<div class="card-info">
							<div class="card-info-title">
								{#if proyect.name[1]}
									<p class="ptitle" style="font-size:{proyect.name[1]}">{proyect.name[0]}</p>
								{:else}
									<p class="ptitle">{proyect.name[0]}</p>
								{/if}
								<div class="card-icons">
									{#if proyect.status === 'wip'}
										<div class="icon-card disabled">
											<Icon icon="ic:round-construction" />
										</div>
									{:else if proyect.status === 'done'}
										<div class="icon-card">
											<a href={proyect.link} aria-label="link" class="done">
												<Icon icon="ph:arrow-square-out-bold" />
											</a>
										</div>
									{/if}
									<div class="icon-card">
										<a href={proyect.source} class="git" aria-label="git" target="_blank">
											<Icon icon="devicon:git" />
										</a>
									</div>
								</div>
							</div>
							<div class="card-desc">
								<p>{i('page.projects.' + proyect.desc)}</p>
							</div>
							<div class="lengs">
								{#each proyect.lenguages as leng, index}
									<div class="lenguage">
										<span
											class="lengColor"
											style="color:{checkColor(proyect.lenguagesColor[index])}">●</span
										>
										<span class="leng">{leng}</span>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	#cards {
		display: flex;
		flex-wrap: wrap;
		align-items: end;
		justify-content: center;
		gap: 8px;
		width: 100%;
	}

	#cards:hover > .card::after {
		opacity: 1;
	}

	.card {
		cursor: default;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		display: flex;
		height: 200px;
		flex-direction: column;
		position: relative;
		width: 100%;
	}

	.card.inventorydesc {
		/* TODO: Make responsive */
		height: 280px;
	}

	.card:hover::before {
		opacity: 1;
	}

	.card::before,
	.card::after {
		border-radius: inherit;
		content: '';
		height: 100%;
		left: 0px;
		opacity: 0;
		position: absolute;
		top: 0px;
		transition: opacity 500ms;
		width: 100%;
	}

	.card::before {
		background: radial-gradient(
			600px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.06),
			transparent 40%
		);
		z-index: 3;
		pointer-events: none;
	}

	.card::after {
		background: radial-gradient(
			600px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.4),
			transparent 40%
		);
		z-index: 1;
	}

	.card > .card-content {
		background-color: rgb(12, 12, 12);
		border-radius: inherit;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		inset: 1px;
		position: absolute;
		z-index: 2;
		padding: 1.5rem;
	}

	.card-info-wrapper {
		height: 100%;
	}

	.icon-card {
		font-size: 1.5rem;
		padding: 3px;
		width: 25px;
		height: 25px;
		border-radius: 5px;
	}

	.icon-card:has(a.git) {
		font-size: 1.3rem;
		margin-left: 0.2rem;
		display: flex;
		justify-content: center;
	}

	a.git {
		display: flex;
		align-items: center;
	}

	.icon-card:hover {
		background-color: #020202;
	}

	.disabled:hover {
		background-color: unset;
	}

	.card-info {
		flex-direction: column;
		height: 100%;
		display: flex;
		justify-content: space-between;
	}

	.card-icons {
		display: flex;
		flex-direction: row;
	}

	.card-info-title {
		display: flex;
		flex-direction: row;
		text-wrap: balance;
		justify-content: space-between;
	}

	.ptitle {
		display: flex;
		margin: 0;
		align-items: center;
	}

	.card-desc {
		font-family: 'Rubik', sans-serif;
		font-weight: 200;
		text-wrap: balance;
		color: white;
	}

	.lengs {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		gap: 0 1ch;
		font-size: 0.8rem;
	}

	.card-desc {
		font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans,
			sans-serif;
		font-weight: 600;
		font-size: 1em;
		letter-spacing: 0.1rem;
		color: #b8b8b8;
	}

	.icon-card a,
	.icon-card a:visited {
		color: #787878;
		text-decoration: none;
	}

	@media only screen and (min-width: 700px) {
		.card {
			width: 400px;
		}
	}
</style>
