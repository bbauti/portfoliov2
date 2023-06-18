<script>
// @ts-nocheck

    let status = "";
    const submit = async data => {
      status = 'Enviando'
      const formData = new FormData(data.currentTarget)
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);    
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
          status = result.message || "Enviado"
      }
    }

    </script>
    
    <form on:submit|preventDefault={submit}>
        <input class='inputs' type="hidden" name="access_key" value="de6d8ec6-0e50-4cfd-8860-ac281e92544f">
        <input class='inputs' type="text" name="name" required />
        <input class='inputs' type="email" name="email" required/>
        <textarea class='inputs' name="message" required cols="40" rows="10" placeholder="Contame un poco mas sobre vos o tu proyecto"></textarea>
        <input type="submit" />
    </form>
    
    <div>{status}</div>