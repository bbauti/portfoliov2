<script>
// @ts-nocheck


    import Icon from '@iconify/svelte';

    import * as colores from '../colores.json';  

    let proyects = [
		{
            'name': ['Portfolio'],
            'desc': 'Estas en esta aplicación web, creada para demostrar mis habilidades.',
            'source': 'https://github.com/bbauti/portfoliov2',
            'link': '',
            'status': '',
            'lenguagesColor': ['HTML','CSS','SCSS','JavaScript','Svelte','Vite'],
            'lenguages': ['HTML','CSS','SCSS','JS','Svelte','Vite']
        },
        {
            'name': ['Inventory App', '1rem'],
            'desc': 'Aplicación web dedicada al control del inventario de una institución escolar. Se empleó la metodología SCRUM, y se me ha asignado el rol de desarrollador y DevOps.',
            'source': 'https://bitbucket.org/arrudeboy/inventory/src',
            'link': '',
            'status': 'wip',
            'lenguagesColor': ['Python','Python','Jinja2','JavaScript','HTML','CSS','SQL'],
            'lenguages': ['PY','Flask','Jinja2','JS','HTML','CSS','SQL']
        },
        // {
        //     'name': ['Proximamente'],
        //     'desc': 'Próximamente más proyectos!',
        //     'source': 'https://github.com/bbauti/',
        //     'link': '',
        //     'status': 'wip',
        //     'lenguagesColor': [],
        //     'lenguages': []
        // },
        // {
        //     'name': ['Todo App'],
        //     'desc': 'Pagina web para gestionar tareas con el uso de localStorage.',
        //     'source': 'https://github.com/bbauti/p5todoapp',
        //     'link': 'https://bbauti.github.io/p5todoapp',
        //     'status': 'done',
        //     'lenguagesColor': ['HTML','CSS','JavaScript'],
        //     'lenguages': ['HTML','CSS','JS']
        // },
        // {
        //     'name': ['Weather Channel'],
        //     'desc': 'Pagina web para obtener informacion sobre el clima.',
        //     'source': 'https://github.com/bbauti/p5weatherChannel',
        //     'link': 'https://bbauti.github.io/p5weatherChannel',
        //     'status': 'done',
        //     'lenguagesColor': ['HTML','CSS','JavaScript'],
        //     'lenguages': ['HTML','CSS','JS']
        // },
        // {
        //     'name': ['Color Game'],
        //     'desc': 'El juego Color Game. Se trata sobre adivinar un color en formato rgb, con unos cuadrados de colores aleatorios.',
        //     'source': 'https://github.com/bbauti/p5colorgame',
        //     'link': 'https://bbauti.github.io/p5colorgame',
        //     'status': 'done',
        //     'lenguagesColor': ['HTML','CSS','JavaScript'],
        //     'lenguages': ['HTML','CSS','JS']
        // },
	];


    // Compruebo si la propiedad con el nombre del lenguaje existe en el json, y si es asi, retorno ese color

    export const checkColor = (leng) => {
        if (colores[leng]) {
            return colores[leng];
        } else {
            return '#fff';
        }
    }

</script>

<section id='proyects'>
    <p class='textheader'>Proyectos</p>
    <div class='proyects'>
        {#each proyects as proyect}
            <article>
                <div class='head'>
                    {#if proyect.name[1]}
                        <p class='ptitle' style='font-size:{proyect.name[1]}'>{proyect.name[0]}</p>
                    {:else}
                        <p class='ptitle'>{proyect.name[0]}</p>
                    {/if}
                    <div class='icons'>
                        <span class='statusicon'>
                            {#if proyect.status === 'wip'}
                                <Icon icon="ic:round-construction"></Icon>
                            {:else if proyect.status === 'done'}
                                <a href='{proyect.link}' class='done'>
                                    <Icon icon="ph:arrow-square-out-bold"></Icon>
                                </a>
                            {/if}
                        </span>
                        <a href='{proyect.source}' class='git' target="_blank">
                            <Icon icon="devicon:git"></Icon>
                        </a>
                    </div>
                </div>
                <p class='proyectdesc'>{proyect.desc}</p>
                <p class='lenguages'>
                    {#each proyect.lenguages as leng, index}
                    <div class='lenguage'>
                        <span class='lengColor' style="color:{checkColor(proyect.lenguagesColor[index])}">●</span>
                        <span class='leng'>{leng}</span>
                    </div>
                    {/each}
                </p>
            </article>
        {/each}
    </div>
</section>