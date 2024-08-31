$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'Seu Telefone'
    });

    $('#cpf').mask('00000000 - 00');

    $('#nascimento').mask("00/00/0000");

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
            cpf: { 
                required: true
            },
            nascimento: {
                required: true
            },
            aceitoTermos: {
                required: true
            }

        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor, insira o seu telefone',
            email: 'Por favor, insira um e-mail válido',
            cpf: 'Por favor, insira seu CPF',
            nascimento: 'Por favor, insira sua data de nascimento',
            aceitoTermos: 'Por favor, aceite os termos',

        },
        submitHandler: function(form) {
            alert('Obrigado pelo Cadastro!');
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