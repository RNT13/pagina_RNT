$(document).ready(function () {
    const contato = [];
    const ddi = [];
    const numero = [];
    let linhas = '';

    $('#numberForm').on('submit', function (event) {
        event.preventDefault();
        adicionaLinha();
        atualizaTabela();
    });

    function adicionaLinha() {
        const nomeContato = $('#nomeContato').val();
        const ddiContato = $('#ddiContato').val();
        const telefoneContato = $('#telefoneContato').val();

        if (contato.includes(nomeContato)) {
            alert(`O nome: ${nomeContato} já existe`);
        } else {
            contato.push(nomeContato);
            ddi.push(ddiContato);
            numero.push(telefoneContato);

            const linha = `
                <tr>
                    <td>${nomeContato}</td>
                    <td>${ddiContato}</td>
                    <td>${telefoneContato}</td>
                    <td id="iconeButton">
                        <button class=" btn btn-success btn-sm">+</button>
                        <button class="removerContato btn btn-danger btn-sm"> - </button>
                    </td>
                    </tr>`;
            
            linhas += linha;
            $('#totalContatos').text(contato.length);
            limpaCampos();
        }
    }

    function atualizaTabela() {
        $('tbody').html(linhas);
        $('.removerContato').on('click', function () {
            const rowIndex = $(this).closest('tr').index();
            
            contato.splice(rowIndex, 1);
            ddi.splice(rowIndex, 1);
            numero.splice(rowIndex, 1);
            
            $(this).closest('tr').remove();
            
            linhas = '';
            for (let i = 0; i < contato.length; i++) {
                linhas += `
                    <tr>
                        <td>${contato[i]}</td>
                        <td>${ddi[i]}</td>
                        <td>${numero[i]}</td>
                        <td id="iconeButton">
                        <button class=" btn btn-success btn-sm">+</button>
                        <button class="removerContato btn btn-danger btn-sm"> - </button>
                    </td>
                    </tr>`;
            }
    
            $('#totalContatos').text(contato.length);
    
            atualizaTabela();
        });
    }
    

    function limpaCampos() {
        $('#nomeContato').val('');
        $('#ddiContato').val('');
        $('#telefoneContato').val('');
    }

    $('#ddiContato').mask('+00', {
        placeholder: '+??'
    });

    $('#telefoneContato').mask('(00) 00000-0000', {
        placeholder: 'Telefone Do Contato'
    })
});

