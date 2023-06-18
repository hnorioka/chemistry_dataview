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


    //dynamic select
    const select  = document.querySelector('#select-editar-amostra');
    console.log(select)
    select.addEventListener('change',()=>{
        const selectData = (getSelectTemperatureAndConcentration())

        const inputEditarConcentracao = document.querySelector('#editar-concentracao')
        const inputEditarTemperatura = document.querySelector('#editar-temperatura')

        inputEditarConcentracao.value = selectData.concentration;
        inputEditarTemperatura.value = selectData.temperature;
    })

function getTemperatureOfOption(optionText){
    const texto = optionText;
    const padrao = /Temperatura: ([\d.]+)/;
    const resultado = texto.match(padrao);

    if (resultado && resultado.length > 1) {
      const temperatura = resultado[1];
    return temperatura
    } else {
    console.log("Temperatura não encontrada");
    }

}  

function getConcentrationOfoption(optionText){
    const texto = optionText;
    const padrao = /Concentração: ([\d.]+)/;
    const resultado = texto.match(padrao);

    if (resultado && resultado.length > 1) {
        const concentracao = resultado[1];
        return concentracao
    } else {
    console.log("Concentração não encontrada");
}

}

function getSelectTemperatureAndConcentration(){
    const select  = document.querySelector('#select-editar-amostra');
    
    let options = select.options;

    for (let i = 0; i < options.length; i++) {
        const element = options[i];
        if(element.selected){
            
           const temperature = getTemperatureOfOption(element.text);
           const concentration = getConcentrationOfoption(element.text)

           return {
            temperature,
            concentration
           }
           console.log(temperature, concentration)
        }
    }
}
    
}
