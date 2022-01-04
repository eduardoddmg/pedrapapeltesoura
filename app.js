const btn_pedra_1 = document.querySelector('.pedra1')
const btn_papel_1 = document.querySelector('.papel1')
const btn_tesoura_1 = document.querySelector('.tesoura1')
const btn_pedra_2 = document.querySelector('.pedra2')
const btn_papel_2 = document.querySelector('.papel2')
const btn_tesoura_2 = document.querySelector('.tesoura2')
const btn_modal = document.querySelector('.btn-modal')

const modal_title = document.querySelector('.modal-title')
const modal_text = document.querySelector('.modal-text')

let contador = 0;

let pedra_1 = 0;
let papel_1 = 0;
let tesoura_1 = 0;
let pedra_2 = 0;
let papel_2 = 0;
let tesoura_2 = 0;


btn_pedra_1.addEventListener('click', () =>
{
    btn_pedra_1.style.color = "gray"
    btn_papel_1.style.color = "white"
    btn_tesoura_1.style.color = "white"
    pedra_1 = 1;
    papel_1 = 0;
    tesoura_1 = 0;
    contador++
})


btn_papel_1.addEventListener('click', () =>
{
    btn_pedra_1.style.color = "white"
    btn_papel_1.style.color = "gray"
    btn_tesoura_1.style.color = "white"
    papel_1 = 1;
    pedra_1 = 0;
    tesoura_1 = 0;
    contador++
})


btn_tesoura_1.addEventListener('click', () =>
{
    btn_pedra_1.style.color = "white"
    btn_papel_1.style.color = "white"
    btn_tesoura_1.style.color = "gray"
    tesoura_1 = 1;
    pedra_1 = 0;
    papel_1 = 0;
    contador++
})


btn_pedra_2.addEventListener('click', () =>
{
    btn_pedra_2.style.color = "gray"
    btn_papel_2.style.color = "white"
    btn_tesoura_2.style.color = "white"
    pedra_2 = 1;
    papel_2 = 0;
    tesoura_2 = 0;
    contador++
})


btn_papel_2.addEventListener('click', () =>
{
    btn_pedra_2.style.color = "white"
    btn_papel_2.style.color = "gray"
    btn_tesoura_2.style.color = "white"
    papel_2 = 1;
    pedra_2 = 0;
    tesoura_2 = 0;
    contador++
})


btn_tesoura_2.addEventListener('click', () =>
{
    btn_pedra_2.style.color = "white"
    btn_papel_2.style.color = "white"
    btn_tesoura_2.style.color = "gray"
    tesoura_2 = 1;
    pedra_2 = 0;
    papel_2 = 0;
    contador++
})

btn_modal.addEventListener('click', () => 
{
    if (contador > 1)
        {
        if (pedra_1 == 1 && tesoura_2 == 1)
        {
            contador = 0;
            pedra_1 = 0;
            tesoura_2 = 0;
            modal_title.innerHTML = "Jogador 1 venceu"
            btn_pedra_1.style.color = "white"
            btn_tesoura_2.style.color = "white"
        }
        if (papel_1 == 1 && pedra_2 == 1)
        {
            contador = 0
            modal_title.innerHTML = "Jogador 1 venceu"
            papel_1 = 0;
            pedra_2 = 0;
            btn_papel_1.style.color = "white"
            btn_pedra_2.style.color = "white"
        }
        if (tesoura_1 == 1 && papel_2 == 1)
        {
            contador = 0
            modal_title.innerHTML = "Jogador 1 venceu"
            tesoura_1 = 0;
            papel_2 = 0;
            btn_tesoura_1.style.color = "white"
            btn_papel_2.style.color = "white"
        }
        if (pedra_2 == 1 && tesoura_1 == 1)
        {
            contador = 0
            modal_title.innerHTML = "Jogador 2 venceu"
            pedra_2 = 0;
            tesoura_1 = 0;
            btn_pedra_2.style.color = "white"
            btn_tesoura_1.style.color = "white"
        }
        if (papel_2 == 1 && pedra_1 == 1)
        {
            contador = 0
            modal_title.innerHTML = "Jogador 2 venceu"
            papel_2 = 0;
            pedra_1 = 0;
            btn_papel_2.style.color = "white"
            btn_pedra_1.style.color = "white"
        }
        if (tesoura_2 == 1 && papel_1 == 1)
        {
            contador = 0
            modal_title.innerHTML = "Jogador 2 venceu"
            tesoura_2 = 0;
            papel_1 = 0;
            btn_tesoura_2.style.color = "white"
            btn_papel_1.style.color = "white"
        }
        if (pedra_1 == 1 && pedra_2 == 1)
        {
            contador = 0
            modal_title.innerHTML = "Deu empate"
            pedra_1 = 0;
            pedra_2 = 0;
            btn_pedra_1.style.color = "white"
            btn_pedra_2.style.color = "white"
        }
        if (papel_1 == 1 && papel_2 == 1)
        {
            contador = 0
            modal_title.innerHTML = "Deu empate"
            papel_1 = 0;
            papel_2 = 0;
            btn_papel_1.style.color = "white"
            btn_papel_2.style.color = "white"
        }
        if (tesoura_1 == 1 && tesoura_2 == 1)
        {
            contador = 0
            modal_title.innerHTML = "Deu empate"
            tesoura_1 = 0;
            tesoura_2 = 0;
            btn_tesoura_1.style.color = "white"
            btn_tesoura_2.style.color = "white"
        }
    }
    else
    {
        modal_title.innerHTML = "os 2 jogadores precisam jogar"
    }
    
})