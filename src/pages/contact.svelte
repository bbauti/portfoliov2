<script>
	// @ts-nocheck

	// i18n
	import { i } from '@inlang/sdk-js';

	//validation
	import * as yup from 'yup';
	const schema = yup.object().shape({
		access_key: yup.string(),
		name: yup
			.string()
			.required(i('page.contact.errors.required'))
			.min(4, i('page.contact.errors.tooshort')),
		email: yup
			.string()
			.required(i('page.contact.errors.required'))
			.email(i('page.contact.errors.badmail')),
		message: yup.string().required(i('page.contact.errors.messagerequired'))
	});

	let values = {};
	let errors = {};
	let statustext = '';
	let statusvalue = '';

	async function submitHandler() {
		try {
			statustext = i('page.contact.status.sending');
			statusvalue = 'formsending';
			window.scrollTo(0, document.body.scrollHeight);
			await schema.validate(values, { abortEarly: false });
			errors = {};
			values.access_key = import.meta.env.VITE_ACCESS_KEY;
			const json = JSON.stringify(values);
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: json
			});
			const result = await response.json();
			if (result.success) {
				statustext = i('page.contact.status.sent');
				statusvalue = 'formsent';
			}
		} catch (err) {
			statustext = i('page.contact.status.error');
			statusvalue = 'formerror';
			errors = extractErrors(err);
		}
	}
	function extractErrors(err) {
		return err.inner.reduce((acc, err) => {
			return { ...acc, [err.path]: err.message };
		}, {});
	}

	//contact and home navbar selected

	import { inview } from 'svelte-inview'; // check if is in view

	let isInView;

	let navhome;
	let navcontact;
	function leaveContact() {
		navhome = document.getElementById('navhome');
		navcontact = document.getElementById('navcontact');
		navcontact.classList.remove('current');
		navhome.classList.add('current');
	}
	function enterContact() {
		navhome = document.getElementById('navhome');
		navcontact = document.getElementById('navcontact');
		navcontact.classList.add('current');
		navhome.classList.remove('current');
	}
</script>

<section id="contact">
	<p class="textheader">
		{i('page.contact.title')}
	</p>
	<form
		on:submit|preventDefault={submitHandler}
		use:inview
		on:inview_enter={() => enterContact()}
		on:inview_leave={() => leaveContact()}
	>
		<div class="divInput">
			<input
				class="inputs"
				type="text"
				name="name"
				bind:value={values.name}
				placeholder={i('page.contact.name')}
			/>
			{#if errors.name}<p class="error">{errors.name}</p>{/if}
		</div>
		<div class="divInput">
			<input
				class="inputs"
				type="text"
				name="email"
				bind:value={values.email}
				placeholder={i('page.contact.email')}
			/>
			{#if errors.email}<p class="error">{errors.email}</p>{/if}
		</div>
		<div class="divInput">
			<textarea
				class="inputs"
				name="message"
				cols="30"
				rows="5"
				bind:value={values.message}
				placeholder={i('page.contact.textfield')}
			/>
			{#if errors.message}<p class="error">{errors.message}</p>{/if}
		</div>
		<div class="divInput">
			<input type="submit" value={i('page.contact.send')} />
			<div class="status {statusvalue}">{statustext}</div>
		</div>
	</form>
</section>
