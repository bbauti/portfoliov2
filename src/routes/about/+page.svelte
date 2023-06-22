<script>
	import { i } from '@inlang/sdk-js';
	//	{i('page.home.title')}
</script>

<main>
	<h1 class="title">Bautista Igarzabal</h1>
	<h3 class="title">{i('page.about.desc')}</h3>
	<p class="about">
		<span class="aboutsection">
			{@html i('page.about.section1')}
		</span>
		<span class="aboutsection">
			{@html i('page.about.section2')}
		</span>
		<span class="aboutsection">
			{@html i('page.about.section3')}
		</span>
		<span class="aboutsection">
			{@html i('page.about.section4')}
		</span>
	</p>
</main>
