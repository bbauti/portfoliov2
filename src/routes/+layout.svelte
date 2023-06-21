<script>
	// @ts-nocheck

	import '../app.scss';
	import Icon from '@iconify/svelte';
	import { blur } from 'svelte/transition';
	import { page } from '$app/stores';
	export let data;
	import { browser } from '$app/environment';
	let mobile = false;
	if (browser) {
		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
		) {
			mobile = true;
		} else {
			mobile = false;
		}
	}
	let current = '/';
	const handleClick = (param) => () => {
		current = param;
	};
</script>

{#key data.pathname}
	{#if mobile}
		<slot />
	{:else}
		<div in:blur={{ duration: 150, delay: 300 }} out:blur={{ duration: 150 }}>
			<slot />
		</div>
	{/if}
	<nav>
		<a
			href="/"
			title="Home"
			on:click={handleClick('/')}
			class="logo {current === '/' ? 'current' : ''}"><Icon icon="ant-design:home-filled" /></a
		>
		<a
			href="/#contact"
			title="Contacto"
			on:click={handleClick('/#contact')}
			class="links {current === '/#contact' ? 'current' : ''}"><Icon icon="uil:message" /></a
		>
		<a
			href="/about"
			title="About"
			on:click={handleClick('/about')}
			class="links {current === '/about' ? 'current' : ''}"
			><Icon icon="fluent:person-48-filled" /></a
		>
		<a href="/" title="CV" id="disabled" class="links"><Icon icon="mdi:resume" /></a>
	</nav>
{/key}
