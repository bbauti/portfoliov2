<script>
	// @ts-nocheck
	import '../app.scss';
	import Icon from '@iconify/svelte';
	import { blur } from 'svelte/transition';
	import { page } from '$app/stores';
	export let data;
	import { browser } from '$app/environment';
	let mobile = false;
	let current;
	let defaultLeng;
	if (browser) {
		defaultLeng = navigator.languages[0].slice(0, 2);
		if (defaultLeng != 'es') {
			switchLanguage('en');
		}
		current = window.location.pathname;
		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
		) {
			mobile = true;
		} else {
			mobile = false;
		}
	}
	const handleClick = (param) => () => {
		current = param;
	};

	// i18n

	import { i, languages, switchLanguage, language } from '@inlang/sdk-js';

	let reset = {};
	let protocol;

	function restart() {
		current = window.location.pathname;
	}
</script>

{#key data.pathname}
	{#if mobile}
		<slot />
	{:else}
		<div in:blur={{ duration: 150, delay: 300 }} out:blur={{ duration: 150 }}>
			<slot />
		</div>
	{/if}
	<nav class="nav">
		<a
			aria-label="home"
			href="/"
			title="Home"
			id="navhome"
			on:click={handleClick('/')}
			class="logo {current === '/' ? 'current' : ''}"><Icon icon="ant-design:home-filled" /></a
		>
		<a
			aria-label="contact"
			href="/#contact"
			title="Contacto"
			id="navcontact"
			on:click={handleClick('/#!contact')}
			class="links {current === '/#contact' ? 'current' : ''}"><Icon icon="uil:message" /></a
		>
		<a
			aria-label="about"
			href="/about"
			title="About"
			id="navabout"
			on:click={handleClick('/about')}
			class="links {current === '/about' ? 'current' : ''}"
			><Icon icon="fluent:person-48-filled" /></a
		>
		<a href="/" aria-label="cv" title="CV" id="disabled" class="links"><Icon icon="mdi:resume" /></a
		>
	</nav>
	<nav class="navleng">
		<button
			aria-label="es"
			id={language === 'es' ? 'current' : ''}
			on:click={() => switchLanguage('es')}
			on:click={restart}
		>
			<Icon icon="twemoji:flag-argentina" />
		</button>
		<button
			aria-label="en"
			id={language === 'en' ? 'current' : ''}
			on:click={() => switchLanguage('en')}
			on:click={restart}
		>
			<Icon icon="twemoji:flag-united-states" />
		</button>
	</nav>
	<nav class="social">
		<a
			href="https://www.linkedin.com/in/bbauti/"
			target="_blank"
			aria-label="linkedin"
		>
			<Icon icon="mdi:linkedin" />
		</a>
		<a
			href="https://github.com/bbauti/"
			target="_blank"
			aria-label="git"
		>
			<Icon icon="mdi:github" />
		</a>
	</nav>
{/key}
