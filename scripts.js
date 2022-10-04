function calcular()
    {
        var limite = 50; //Definindo o limite de velocidade.
        var txtv = document.getElementById('txtvel');
        var res = document.getElementById('res');
        var vel = Number(txtv.value) //Pegando em numero o valor digitado no input com Id 'txtv'.

        //Exibindo a velocidade em Km/h que a pessoa escolheu.
        res.innerHTML = `<p>Sua velocidade atual é de ${vel} Km/h.</p>`;

        //Se a velocidade for maior que 50, ele exibe a mensagem de multa.
        if (vel >= limite)
        {
            res.innerHTML += '<p>Você foi <strong>multado</strong>!</p>';
        }
        else //Senão, ele exibe a mensagem de consciencia no volante.
        {
            res.innerHTML += '<p>Continue consciente no volante</p>';
        }
    }