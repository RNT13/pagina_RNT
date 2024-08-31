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