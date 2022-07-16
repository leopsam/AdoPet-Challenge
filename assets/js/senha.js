	const senha = document.querySelector('.senha');
	const confirme = document.querySelector('.confirme');

	const btn__senha = document.querySelector('.btn__senha');
	const btn__confirmar = document.querySelector('.btn__confirmar');

	btn__senha.onclick = () =>
	{
		if (senha.type === 'password') 
		{
			senha.type = 'text'
			btn__senha.src = 'assets/img/olho.png'
		}
		else
		{
			senha.type = 'password'
			btn__senha.src = 'assets/img/ocultar.png'
		}
	}

	btn__confirmar.onclick = () =>
	{
		if (confirme.type === 'password') 
		{
			confirme.type = 'text'
			btn__confirmar.src = 'assets/img/olho.png'
		}
		else
		{
			confirme.type = 'password'
			btn__confirmar.src = 'assets/img/ocultar.png'
		}
	}