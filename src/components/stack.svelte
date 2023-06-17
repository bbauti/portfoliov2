<script>
    import Icon from '@iconify/svelte';
</script>

<section id='stack'>
    <p class='textheaderstack'>Tech stack</p>
    <div class="techs iconstack">
        <div class='tooltip iconstack'>
            <Icon icon="devicon:javascript"></Icon>
            <span class="tooltiptext iconpopup iconstack">
                <Icon icon='devicon:nodejs'></Icon>
                <Icon icon='devicon:svelte'></Icon>
                <Icon icon='devicon:vuejs'></Icon>
                <Icon icon='logos:nuxt-icon'></Icon>
            </span>
        </div>
        
        <Icon icon="devicon:html5"></Icon>
        
        <div class='tooltip iconstack'>
            <Icon icon="devicon:css3"></Icon>
            <span class="tooltiptext iconpopup iconstack">
                <Icon icon="vscode-icons:file-type-scss"></Icon>
                <Icon icon="logos:bulma"></Icon>
                <Icon icon="logos:bootstrap"></Icon>
            </span>
        </div>

        <Icon icon="devicon:php"></Icon>

        <div class='tooltip iconstack'>
            <Icon icon="devicon:python"></Icon>
            <span class="tooltiptext iconpopup iconstack">
                <Icon icon="bxl:flask"></Icon>
                <Icon icon="simple-icons:jinja"></Icon>
            </span>
        </div>

        <div class='tooltip iconstack'>
            <Icon icon="tabler:sql"></Icon>
            <span class="tooltiptext iconpopup iconstack">
                <Icon icon="devicon:postgresql"></Icon>
                <Icon icon="devicon:mysql"></Icon>
                <Icon icon="devicon:mariadb"></Icon>
                <Icon icon="simple-icons:microsoftsqlserver"></Icon>
            </span>
        </div>

        <Icon icon="devicon:docker"></Icon>
        <Icon icon="logos:bash-icon"></Icon>
        <Icon icon="devicon:git"></Icon>

    </div>
</section>