$(document).ready(function () {// array de clicar no botão e não fazer a pagina resetar/ fazer o form descer
    document.querySelector("header button").addEventListener("click", function (e) {
        $("form").slideDown();
    })

    $("form").on("reset", function () {
        $("#endereço-da-imagem-nova").val('');
        $("form").slideUp();
    })

    $("form").on("submit", function (e) {
        e.preventDefault();

        const endereçoDaNovaImagem = $("#endereço-da-imagem-nova").val();
        console.log(endereçoDaNovaImagem);
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${endereçoDaNovaImagem}" />`).appendTo(novoItem);//esse comando enfia o comando dessa linha de código na função desejada
        $(`<div class="overlay-imagem-link">
            <a href="${endereçoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
            </div>`).appendTo(novoItem)

            $(novoItem).appendTo("ul");
            $(novoItem).fadeIn(1000);
            $("#endereço-da-imagem-nova").val('');
    })
})

