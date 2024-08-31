$(document).ready(function() {
    $('#toDoList').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nomeDaTarefa').val();
        const dataTarefa = $('#dataDaTarefa').val();

        if (nomeTarefa && dataTarefa) {
            const itemDaLista = $(`
                <li class=" d-flex justify-content-between align-items-center">
                    <input type="checkbox" class="completeTask m-1">
                    <span>${nomeTarefa} - ${dataTarefa}</span>
                    <button class="removeTask btn btn-danger btn-sm m-1"> - </button>
                </li>
            `);

            itemDaLista.appendTo('.listaDeTarefas ul');

            this.reset();
        }
    });

    $(document).on('click', '.removeTask', function() {
        $(this).parent('li').remove();
    });

    $(document).on('change', '.completeTask', function() {
        const tarefa = $(this).siblings('span');
        if (this.checked) {
            tarefa.css('text-decoration', 'line-through');
        } else {
            tarefa.css('text-decoration', 'none');
        }
    });

    $(document).on('click', '.listaDeTarefas ul span', function() {
        const checkbox = $(this).siblings('.completeTask');
        checkbox.prop('checked', !checkbox.prop('checked'));
        $(this).css('text-decoration', checkbox.prop('checked') ? 'line-through' : 'none');
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