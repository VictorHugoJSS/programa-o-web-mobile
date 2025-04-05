if (window.location.href === window.location.origin + "/portifolio/jogoDaSenha.html"){
    function GenerateCode(){
        let pass = [];

        while (pass.length < 6){
            let num = Math.floor(Math.random() * 10);

            while (!pass.includes(num)){
                pass.push(num);
            }
        }
        return pass.join('')
    }

    const codigo = GenerateCode();
    let anteriores = 0;

    function verificandoAcertosErros(pass, resposta){
        let numCertos = 0;
        let numErrados = 0;

        for (let i = 0; i < 6; i++){
            if (pass[i] === resposta[i]){
                numCertos++;
            }
            else{
                numErrados++;
            }
        }

        return { numCertos, numErrados };
    }

    function History(resposta, acertos, erros){
        const tentativaPassada = document.createElement('li');
        const anterior = document.getElementById('tentativas');
        tentativaPassada.innerHTML = resposta + ' Acertou: ' + acertos + ' Errou: ' + erros;

        if (anterior.firstChild){
            anterior.insertBefore(tentativaPassada, anterior.firstChild);
        }
        else{
            anterior.appendChild(tentativaPassada);
        }
        anteriores++;
    }

    function verificandoResposta(){
        let res = document.getElementById("res").value;
        let pas = codigo.split('');
        let arr = res.split('');
        const { numCertos, numErrados } = verificandoAcertosErros(pas, arr);
        History(res, numCertos, numErrados);
        if (numCertos === 6 && anteriores <= 10){
            alert("Você acertou!!!");
            alert("Deseja jogar novamente? (Pressione F5 para reiniciar)");
        }
        else if (tentativas > 10){
            alert("Que pena. Você perdeu! :( ");
            alert("A resposta era: " + codigo);
            alert("Deseja jogar novamente? (Pressione F5 para reiniciar)");
        }
    }
}