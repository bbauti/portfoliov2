<script>
	// @ts-nocheck

	import Header from '../pages/header.svelte';
	import Stack from '../pages/stack.svelte';
	import Proyects from '../pages/proyects.svelte';
	import Contact from '../pages/contact.svelte';

	import { onMount } from 'svelte';

	onMount(() => {
		let cursorinner = document.getElementById('cursor');
		let cursorclass;

		document.addEventListener('mouseenter', function (e) {
			cursorinner.classList.add('cursor2');
			cursorclass = document.getElementsByClassName('cursor2');
		});

		document.addEventListener('mouseleave', function (e) {
			cursorinner.classList.remove('cursor2');
		});

		document.addEventListener('mousemove', function (e) {
			var x = e.clientX;
			var y = e.clientY;
			cursorinner.style.left = x + 'px';
			cursorinner.style.top = y + 'px';
		});
	});
</script>

<div id="cursor" />
<main>
	<Header />
	<Stack />
	<Proyects />
	<Contact />
</main>
