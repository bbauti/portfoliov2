<script>
// @ts-nocheck

	import * as yup from 'yup';
	const schema = yup.object().shape({
        access_key: yup.string(),
        name: yup.string().required('Introduce tu nombre.').min( 4, "El nombre ingresado es demasiado corto. Por favor, intenta nuevamente."),
		email: yup.string().required('Introduce tu correo electrónico.').email("Asegúrate de ingresar un correo electrónico válido."),
		message: yup.string().required('El campo del mensaje no puede estar vacío.')
	});

	let values = {};
	let errors = {};
    let statustext = "";
    let statusvalue = ""

	async function submitHandler() {
		try {
            statustext = 'Enviando...'
            statusvalue = 'formsending'
            window.scrollTo(0, document.body.scrollHeight);
			// `abortEarly: false` to get all the errors
			await schema.validate(values, { abortEarly: false });
			errors = {};
            values.access_key = import.meta.env.VITE_ACCESS_KEY
            const json = JSON.stringify(values);        
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json
            });    
            const result = await response.json();
            if (result.success) {
                statustext = "Mensaje enviado correctamente!"
                statusvalue = 'formsent'
            }
		} catch (err) {
            statustext = 'Ha ocurrido un error en el formulario.'
            statusvalue = 'formerror'
			errors = extractErrors(err);
		}
	}
	function extractErrors(err) {
		return err.inner.reduce((acc, err) => {
			return { ...acc, [err.path]: err.message };
		}, {});
	}

</script>
<section id='contact'>
    <p class='textheader'>Contactame</p>
    <form on:submit|preventDefault={submitHandler}>
        <div class='divInput'>
            <input class="inputs" type="text" name="name" bind:value={values.name} placeholder="Tu nombre y apellido" />
            {#if errors.name}<p class='error'>{errors.name}</p>{/if}
        </div>
        <div class='divInput'>
            <input class="inputs" type="text" name="email" bind:value={values.email} placeholder="Tu correo" />
            {#if errors.email}<p class='error'>{errors.email}</p>{/if}
        </div>
        <div class='divInput'>
            <textarea class="inputs" name="message" cols="30" rows="5" bind:value={values.message} placeholder="Cuéntame un poco mas sobre vos o tu proyecto" ></textarea>
            {#if errors.message}<p class='error'>{errors.message}</p>{/if}
        </div>
        <div class='divInput'>
            <input type="submit" value="Enviar"/>
            <div class='status {statusvalue}' >{statustext}</div>
        </div>
    </form>
</section>