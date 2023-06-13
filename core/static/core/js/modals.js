window.onload = ()=>{
    
    const btns = document.querySelectorAll('.button-open-modal')
    const modals = document.querySelectorAll('.modal')
    const closeModal = document.querySelectorAll('.close-modal')

    btns.forEach((item, index) =>{
        item.addEventListener('click', () => {

            const cadastrarExperimentoModalIndex = 0;
            const deletarExperimentoModalIndex = 1;        

            if(index === cadastrarExperimentoModalIndex){
                modals[index].classList.add('ativo')
            }

            if(index === cadastrarExperimentoModalIndex && item.classList.contains('ativo')){
                modals[index].classList.remove('ativo')
            }

            if(index === deletarExperimentoModalIndex){
                modals[index].classList.add('ativo')
            }

            if(index === deletarExperimentoModalIndex && item.classList.contains('ativo')){
                modals[index].classList.remove('ativo')
            }
        })
    })

    closeModal.forEach((item, index) =>{
        item.addEventListener('click', () => {
            modals[index].classList.remove('ativo')
        })
    })

    
}
