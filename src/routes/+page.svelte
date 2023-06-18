
<script>

	import Header from "../components/header.svelte";
    import Stack from "../components/stack.svelte";
    import Proyects from "../components/proyects.svelte";
    import Contact from "../components/contact.svelte";

    import Icon from '@iconify/svelte';

</script>

<nav>
    <a href='/' class='logo'>inicio</a>
    <a href="#contact" class='links'>contacto</a>
    <a href="/" id='disabled' class='links'>cv</a>
</nav>
<main>
    <Header/>
    <Stack/>
    <Proyects/>
    <Contact/>
</main>
