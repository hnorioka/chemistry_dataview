window.onload = ()=>{
    
    const btns = document.querySelectorAll('.button-open-modal')
    const modals = document.querySelectorAll('.modal')
    const modalsGraficos = document.querySelectorAll('.modal-grafico')
    const btnsGraficos = document.querySelectorAll('.caixa-visualizar')
    console.log(btnsGraficos)
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
            if(modals.length !== 0){
                modals[index].classList.remove('ativo')
            }

            if(modalsGraficos.length !== 0){
                modalsGraficos[index].classList.remove('ativo')
            }
            
            
        })
    })

    btnsGraficos.forEach((item, index) =>{
        item.addEventListener('click', () => {

            const adicionarAmostraModalIndex = 0;
            const deletarAmostraModalIndex = 1;   
            const editarAmostraModalIndex = 2    

            if(index === adicionarAmostraModalIndex){
                modalsGraficos[index].classList.add('ativo')
            }

            if(index === deletarAmostraModalIndex){
                modalsGraficos[index].classList.add('ativo')
            }

            if(index === editarAmostraModalIndex){
                modalsGraficos[index].classList.add('ativo')
            }
        })
    })

    
}
