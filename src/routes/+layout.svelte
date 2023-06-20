<script>
// @ts-nocheck

	import '../app.scss';
	import Icon from '@iconify/svelte';
	import { blur } from 'svelte/transition';
	import { page } from '$app/stores';
 	export let data
	let current = '/'
	 const handleClick = (param) => () => {
		current = param
	} 
</script>
{#key data.pathname}
	<div in:blur="{{ duration: 150, delay: 300 }}" out:blur="{{ duration: 150 }}">
    	<slot />
  	</div>
  	<nav>
		<a href='/' on:click={handleClick('/')} class="logo {current === '/' ? 'current' : ''}"><Icon icon="ant-design:home-filled" /></a>
		<a href="/#contact" on:click={handleClick('/#contact')} class='links {current === '/#contact' ? 'current' : ''}'><Icon icon="uil:message" /></a>
		<a href="/about" on:click={handleClick('/about')} class='links {current === '/about' ? 'current' : ''}'><Icon icon="fluent:person-48-filled" /></a>
		<a href="/" id='disabled' class='links'><Icon icon="mdi:resume" /></a>
	</nav>
{/key}
