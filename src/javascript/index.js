const btnAdvice = document.getElementById('btn-advice');
const numeroAdvice = document.getElementById('number-advice');
const adviceDisplay = document.getElementById('advice-display');
btnAdvice.addEventListener('click', async function() {
    async function obterConselhoAleatorio() {
        try {
            const url = 'https://api.adviceslip.com/advice';
            const response = await fetch(url);
            const data = await response.json();
            return {
                numero: data.slip.id,
                conselho: data.slip.advice
            };
        }catch(error){
            console.log('Ocorreu um erro ao buscar os dados da API:', error)
        }
    }
    try {
        const { numero, conselho } = await obterConselhoAleatorio();
        adviceDisplay.textContent = `"${conselho}"`;
        numeroAdvice.textContent = numero;
    }catch(error) {
        console.log('Ocorreu um erro ao buscar o conselho:', error);
    }finally{
        console.log('Após clicar no botão, é necessário esperar 5 segundos para a API mostrar outro conselho.')
    }
});

