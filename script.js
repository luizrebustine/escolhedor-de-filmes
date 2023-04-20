let capafilme = document.querySelector('#capafilme')
let botaoiniciar = document.querySelector('#botaoiniciar')
let i = 0
const filmes = ['procurando_nemo.jpg','toy_story_3.jpg','toy_story_1.jpeg']
botaoiniciar.addEventListener('click', () => {setInterval(() => {
    if(i<filmes.length){
        capafilme.setAttribute('src','imagens/'+ filmes[i])
        i++
    }
    else{
        i=0
    }},200)
})