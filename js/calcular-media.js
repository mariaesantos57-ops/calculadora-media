document.getElementById("novocalculo").style.display = "none";

function calcularMedia() {

    let nome = document.getElementById("nome").value;

    let disciplina = document.getElementById("disciplina").value;

    let n1 = Number(document.getElementById("nota1").value);

    let n2 = Number(document.getElementById("nota2").value);

    let n3 = Number(document.getElementById("nota3").value);

    let n4 = Number(document.getElementById("nota4").value);


    // verificar se todos os campos foram preenchidos

    if (
        nome == "" ||
        disciplina == "" ||
        document.getElementById("nota1").value == "" ||
        document.getElementById("nota2").value == "" ||
        document.getElementById("nota3").value == "" ||
        document.getElementById("nota4").value == ""
    ) {

        alert("Preencha todos os campos!");

    }

    else if (
        n1 < 0 || n1 > 10 ||
        n2 < 0 || n2 > 10 ||
        n3 < 0 || n3 > 10 ||
        n4 < 0 || n4 > 10
    ) {

        alert("As notas devem estar entre 0 e 10!");

    }

    else {

        /* operações matemáticas */

        let soma = n1 + n2 + n3 + n4;

        let media = soma / 4;


        // verificar situação do aluno

        let situacao;

        let classeSituacao;


        if (media >= 7) {

            situacao = "APROVADO";

            classeSituacao = "aprovado";

        }

        else if (media >= 5) {

            situacao = "EM RECUPERAÇÃO";

            classeSituacao = "recuperacao";

        }

        else {

            situacao = "REPROVADO";

            classeSituacao = "reprovado";

        }


        // exibir o resultado

        let resultado = document.getElementById("resultado");

        resultado.innerHTML =
            "Aluno: " + nome + "<br><br>" +
            "Disciplina: " + disciplina + "<br><br>" +
            "Média: " + media.toFixed(1) + "<br><br>" +
            "Situação: <span class='" + classeSituacao + "'>" +
            situacao + "</span>";


        // esconder o botão calcular

        document.getElementById("calcular").style.display = "none";

        // mostrar o botão calcular novamente

        document.getElementById("novocalculo").style.display = "block";

    }
}


function calcularnovo() {

    document.getElementById("nome").value = "";

    document.getElementById("disciplina").value = "";

    document.getElementById("nota1").value = "";

    document.getElementById("nota2").value = "";

    document.getElementById("nota3").value = "";

    document.getElementById("nota4").value = "";


    document.getElementById("resultado").innerHTML =
        "<p>Preencha os dados acima e clique em calcular</p>";


    document.getElementById("calcular").style.display = "block";

    document.getElementById("novocalculo").style.display = "none";

}