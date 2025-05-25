export function code(){
    let pass = "";

        while (pass.length < 6){
            var num = Math.floor(Math.random() * 10);

            while (!pass.includes(num + '0')){
                pass += num + '0';
            }
        }
    return pass;
}

 export function ChecarTentativa(pass:string, res:string){
    let certo = 0, errado = 0;
    
    for (let i = 0; i < pass.length; i++){
        if (pass[i] === res[i]){
            certo++;
        }
        else{
            errado++;
        }
    }

    return {certo, errado};
}
