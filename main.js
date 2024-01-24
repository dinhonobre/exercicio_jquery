$(document).ready(function() {

    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#botão-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()
        const novoItem = $('<li></li>')
        $(`img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem)
        
        $(`
            <div class="overlay-image-link">
                    <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver Imagem em Tamanho Real">
                        Ver Imagem em Tamanho Real
                    </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $('#endereco-imagem-nova').val('')
    })
})