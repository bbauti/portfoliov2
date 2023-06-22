<script>
	import Icon from '@iconify/svelte';
	import Proyects from './proyects.svelte';
	import { i } from '@inlang/sdk-js';
</script>

<section id="stack">
	<p class="textheaderstack">Tech stack</p>
	<div class="techs iconstack">
		<!-- <Icon icon="devicon:javascript"></Icon> -->
		<div class="iconsection" data-title="Javascript">
			<Icon icon="devicon:nodejs" />
			<Icon icon="devicon:svelte" />
			<Icon icon="devicon:vitejs" />
			<!-- <Icon icon='devicon:vuejs'></Icon>
            <Icon icon='logos:nuxt-icon'></Icon> -->
		</div>

		<div class="icon" data-title="HTML">
			<Icon icon="devicon:html5" />
		</div>

		<div class="iconsection" data-title="CSS">
			<Icon icon="vscode-icons:file-type-scss" />
			<Icon icon="logos:bulma" />
			<!-- <Icon icon="logos:bootstrap"></Icon> -->
		</div>

		<div class="icon" data-title="PHP">
			<Icon icon="devicon:php" />
		</div>

		<div class="iconsection" data-title="Python">
			<Icon icon="bxl:flask" />
			<Icon icon="simple-icons:jinja" />
		</div>

		<div class="iconsection" data-title="SQL">
			<Icon icon="simple-icons:microsoftsqlserver" />
			<Icon icon="devicon:postgresql" />
		</div>

		<!-- <div class='tooltip iconstack'>
            <div class='iconsection'>
                <Icon icon="simple-icons:microsoftsqlserver"></Icon>
                <Icon icon="devicon:postgresql"></Icon>
            </div>
            <span class="tooltiptext iconpopup iconstack">
                <p>sql<p/>
            </span>
        </div> -->

		<div class="icon" data-title="Docker">
			<Icon icon="devicon:docker" />
		</div>
		<div class="icon" data-title="Bash">
			<Icon icon="logos:bash-icon" />
		</div>
		<div class="icon" data-title="Git">
			<Icon icon="devicon:git" />
		</div>
	</div>
</section>
