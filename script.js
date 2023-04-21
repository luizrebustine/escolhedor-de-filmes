let capafilme = document.querySelector('#capafilme')
let botaoiniciar = document.querySelector('#botaoiniciar')
let botaoparar = document.querySelector('#botaoparar')
let nomefilme = document.querySelector('#nomefilme')
let switchmodoescuro = document.querySelector('#switchmodoescuro')
let divmodoescuro = document.querySelector('.modoescuro')
let main = document.querySelector('main')
let vetormodoescuro = [main,nomefilme]
let menuicone = document.querySelector('#menuicone')
let menu = document.querySelector('.menu')
let intervalo;
menuicone.addEventListener('click', ()=>{
    menu.classList.toggle('show')
    divmodoescuro.classList.toggle('showmodoescuro')
})
if(switchmodoescuro.checked == true){
    vetormodoescuro.forEach((el) => el.classList.add('escuro'))
}
else{
    vetormodoescuro.forEach((el) => el.classList.remove('escuro'))

}
switchmodoescuro.addEventListener('change', ()=>{
    vetormodoescuro.forEach((el) => el.classList.toggle('escuro'))
})
const filmes = ['procurando_nemo','toy_story_3','toy_story_1','a_viagem_de_chihiro']
const i = () =>{
    return Math.floor(Math.random() * filmes.length)
}
capafilme.setAttribute('src','imagens/'+filmes[i()]+'.jpg')
botaoiniciar.addEventListener('click', () => {
    let segundos = 0
    intervalo = setInterval(() => {
        let index = i()
        capafilme.setAttribute('src','imagens/'+ filmes[index] + '.jpg')
        capafilme.classList.remove('capafilme')
        nomefilme.innerHTML = filmes[index].replace(/_/g,' ').toUpperCase()
        segundos++
        if(segundos == 50){
            clearInterval(intervalo)
        }},100)
})
botaoparar.addEventListener('click', () =>{
    clearInterval(intervalo)
})