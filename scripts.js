function calcular() {
    var limite = 70; //Definindo o limite de velocidade.
    var txtv = document.getElementById('txtvel');
    var res = document.getElementById('res');
    var vel = Number(txtv.value) //Pegando em numero o valor digitado no input com Id 'txtv'.

    //Exibindo a velocidade em Km/h que o usuário "escolheu".
    if (vel > 0) {
        res.innerHTML = `<p>Sua velocidade atual é de ${vel} Km/h.</p>`;
    }

    //Se a velocidade for maior que o limite, ele exibe a mensagem de multa.
    //Senão, ele exibe a mensagem de consciencia no volante.
    if (vel > limite) {
        res.innerHTML += `<p> O limite é ${limite} Km/h! Você foi <strong>multado</strong>!</p>`;
    }
    else if (vel == 0) {
        res.innerHTML = '<p>...</p>';
    }
    else if (vel < 0) {
        res.innerHTML = '<p>Você foi <strong>multado</strong> pela gracinha.</p>';
    }
    else {
        res.innerHTML += '<p>Continue consciente no volante :)</p>';
    }
}
