var checkbox = document.getElementById("gomes")
var btn = document.getElementById("subMit")
var entrada = document.querySelectorAll("#input")

function clicar()
{

    if(entrada[0].value == '')
        {
            alert("Preencha o campo nome ")
        }
    if(entrada[1].value == '')
        {
            alert("Preencha o campo Sobrenome ")
        }
    if(entrada[2].value == '')
        {
            alert("Preencha o campo E-mail")
        }
    if(entrada[3].value == '')
        {
            alert("Preencha o campo CPF ")
        }
    if(entrada[4].value == '')
        {
            alert("Preencha o campo CNPJ ")
        }
    if(entrada[5].value == '')
        {
            alert("Preencha o campo Telefone ")
        }
}

btn.addEventListener(onclick, clicar)

