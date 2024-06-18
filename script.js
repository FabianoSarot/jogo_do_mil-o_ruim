const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "As tartarugas marinhas podem viver entre 150 e 200 anos, dependendo da espécie, de acordo com um artigo publicado pela National Geographic Espanha. Seus primeiros anos de vida, no entanto, são um mistério para aqueles que estudam o animal de perto.": [
            {
                texto: "Interessante",
                afirmacao: "Afirmação"
            },
            {
                texto: "Perguntei?",
                afirmacao: "é esse"
            }
        ]
    },
    {
        enunciado: "rinocerontes são dinossaouros?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "No horizonte, vislumbramos um futuro turbulento, onde conflitos geopolíticos e rivalidades entre nações definem o curso dos acontecimentos. O aumento da escassez de recursos naturais e as mudanças climáticas exacerbam as tensões globais, levando a crises humanitárias e conflitos armados. Enquanto isso, a evolução rápida da tecnologia cria novas ameaças à segurança cibernética e à privacidade individual. Nesse mundo de incertezas, a cooperação internacional se torna mais crucial do que nunca para enfrentar os desafios comuns da humanidade.",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "À medida que a ciência avança, a humanidade se vê diante de novas fronteiras éticas e sociais. Avanços na engenharia genética permitem modificações no DNA humano, oferecendo a promessa de curar doenças genéticas e melhorar características físicas e cognitivas. No entanto, isso levanta preocupações sobre desigualdades socioeconômicas e discriminação genética. Enquanto exploramos as possibilidades e os limites da manipulação genética, também enfrentamos questões profundas sobre identidade, igualdade e o que significa ser humano.",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "À medida que olhamos para o céu, vemos um futuro de possibilidades infinitas. A exploração espacial se torna uma prioridade global, com a humanidade estabelecendo colônias em Marte e além. Essa busca por novos horizontes não apenas impulsiona a tecnologia e a inovação, mas também promove a cooperação internacional e a paz mundial. Enquanto nos aventuramos no espaço sideral, também encontramos novas formas de nos unirmos como uma única espécie, transcendendo fronteiras e diferenças. Nesse futuro de integração global e exploração cósmica, a humanidade se torna verdadeiramente uma civilização interplanetária.",
        alternativas: [
            {
                texto:  "Isso é assustador!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Possibilidades que amedrontam nossa civilização, o medo do desconhecido, ASS: Senegalia e Gregório...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
