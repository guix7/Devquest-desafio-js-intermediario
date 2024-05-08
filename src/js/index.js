const botao = document.getElementById('btn');

botao.addEventListener('click', (event)=>{
    event.preventDefault()

    let campos = document.querySelectorAll('.input');

    let mensagem = document.querySelectorAll('.obrigatorio');

    campos.forEach((item, index) =>{
        if(item.value.trim() !== ""){
            item.classList.add('borda-verde');
        }else{
            item.classList.add('borda-vermelha');
            mensagem[index].classList.remove('invisivel');
            mensagem[index].classList.add('cor-vermelha');
        }
    })
})