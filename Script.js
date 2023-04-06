function calcularIdade() {
    var dataNascimento = new Date(document.getElementById("dob").value);
    var hoje = new Date();
    var diff = hoje - dataNascimento;
    var anos = Math.floor(diff / (365 * 24 * 60 * 60 * 1000));
    diff -= anos * (365 * 24 * 60 * 60 * 1000);
    var meses = Math.floor(diff / (30 * 24 * 60 * 60 * 1000));
    diff -= meses * (30 * 24 * 60 * 60 * 1000);
    var dias = Math.floor(diff / (24 * 60 * 60 * 1000));

    document.getElementById("resultado").innerHTML = "Idade: " + anos + " anos, " + meses + " meses e " + dias + " dias.";
}
{
    var mensagem = "";
            if (anos >= 13 && anos <= 16) {
                mensagem = "Tá crescido";
            } else if (anos >= 17 && anos <= 26) {
                mensagem = "Tá bem crescido";
            } else if (anos >= 27 && anos <= 38) {
                mensagem = "Adultão pra caralho";
            } else if (anos >= 39 && anos <= 48) {
                mensagem = "Grande homem!!!";
            } else if (anos >= 49 && anos <= 55) {
                mensagem = "Na flor da idade";
            } else if (anos >= 56 && anos <= 66) {
                mensagem = "Olá, meu bom senhor";
            } else if (anos >= 67 && anos <= 78) {
                mensagem = "Agora sim, na flor da idade :D";
            } else if (anos >= 79 && anos <= 86) {
                mensagem = "Parabéns por ter chegado até aqui";
            } else if (anos >= 87 && anos <= 94) {
                mensagem = "Olá, dinossauro";
            } else if (anos >= 95 && anos <= 108) {
                mensagem = "Porra, tudo isso";
            } else if (anos >= 110) {
                mensagem = ":OOOO";
            }

            document.getElementById("mensagem").innerHTML = mensagem;
}
