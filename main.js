/*--- mobile ---*/
const menu = document.querySelector('#menu-mobile')
const icone_menu = document.querySelector('.icone-menu')
const menu_excluir = document.querySelector('#menu-excluir')

function abrirMenuMobile() {
    menu.classList.remove('display-menu')
}

function fecharMenuMobile() {
    menu.classList.add('display-menu')
}

icone_menu.onclick = abrirMenuMobile
menu_excluir.onclick = fecharMenuMobile

/*--- div - interesses ---*/
const lista_de_interesses = document.querySelectorAll('.icones-interesses')

for(let i = 0; i < lista_de_interesses.length; i++) {
    const interesses = lista_de_interesses[i]
    let idInteresses = interesses.id
    
    interesses.onclick = function() {
        mostraTexto(idInteresses)
    }
}

const descricoes_interesses = {
    'interesse-serie': 'Adoro assistir séries, principalmente C-dramas e K-dramas!',
    'interesse-filme': 'Eu gosto muito de assistir filmes de romance e drama.',
    'interesse-livro': 'Esse é um hábito que eu tento manter constante, lendo livros técnicos e não técnicos',
    'interesse-viagem': 'Sou apaixonada por viagens, já visitei algumas cidades da Europa, a mais linda foi Barcelona, agora estou me aventurando por terras brasileiras!',
    'interesse-crossfit': 'O crossfit é um dos esportes que eu mais gosto de fazer, a sensação de WOD completo é sensacional!',
    'interesse-corrida': 'Aprendi a gostar de correr durante pandemia, já realizei algumas provas de rua, e a melhor foi a corrida integração - 10km!'
}

function mostraTexto (idInteresses) {
    let texto = document.querySelector('#texto-interesse')
    let caixaDisplay = document.querySelector('#caixa-texto-interesses')

    caixaDisplay.classList.remove('display-informacoes-interesses')

    texto.innerHTML = descricoes_interesses[idInteresses] || ''
}
