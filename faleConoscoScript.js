$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'Seu Telefone'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: { 
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor, insira o seu telefone',
            email: 'Por favor, insira um e-mail válido',
            mensagem: 'Por favor, insira sua mensagem'
        },
        submitHandler: function(form) {
            alert('Obrigado pelo feedback!');
            location.reload();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campo(s) incorreto(s)`);
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const modalExemplo = new bootstrap.Modal('#exemplo-modal')
    setTimeout(function(){
        modalExemplo.show();
    }, 1000);

    const ativadorToast = document.getElementById('btn-checar-emails')
        const mensagem = document.getElementById('mensagens-alerta')

        if(ativadorToast){
            ativadorToast.addEventListener('click', function(){
                const toast = new bootstrap.Toast(mensagem)
                toast.show();
            })
        }
})