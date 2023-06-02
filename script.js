let idPokemon = document.querySelector('#id-pokemon')
let nomePokemon = document.querySelector('#nome-pokemon')
let imagemPokemon = document.querySelector('#imagem-pokemon')

let form = document.querySelector('#form')
var input= document.querySelector
('#busca')

var btnPrev = document.querySelector('.btn-prev')
var btnNext = document.querySelector('.btn-next')

var countPokemon = 1

const fetchPokemon = async(pokemon)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    const respostaApi = await fetch(url)
    console.log(respostaApi)
    if(respostaApi.status == 200){
        const json = await respostaApi.json()
        console.log(json)
        return json
    }

   
}

const preencherPokemon = async (pokemon)=>{
    nomePokemon.innerHTML = "Loading..."
    const dados  = await fetchPokemon(pokemon)

    if(dados){
        idPokemon.innerHTML = dados.id
         nomePokemon.innerHTML = dados.name
        imagemPokemon.src = dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    }else{
        nomePokemon.innerHTML = "Not found"
        idPokemon.innerHTML = ""
    }

    
}

btnPrev.addEventListener('click', ()=>{
    if(countPokemon > 1){
        countPokemon--
        preencherPokemon(countPokemon)
    }
  
})

btnNext.addEventListener('click', ()=>{
    countPokemon++
    preencherPokemon(countPokemon)
})


form.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    console.log(input.value)
    preencherPokemon(input.value)

})



preencherPokemon(countPokemon)


