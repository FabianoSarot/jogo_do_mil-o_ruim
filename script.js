const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "As tartarugas marinhas podem viver entre 150 e 200 anos, dependendo da espécie, de acordo com um artigo publicado pela National Geographic Espanha. Seus primeiros anos de vida, no entanto, são um mistério para aqueles que estudam o animal de perto.",
        alternativas: [
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
        enunciado: "Ciência e tecnologia no Brasil são produzidas em grande parte nas universidades públicas e institutos de pesquisa. Neste campo de conhecimento o Brasil obteve, nas últimas décadas, uma posição significativa no cenário internacional.",
        alternativas: [
            {
                texto: "Bizonho!",
                afirmacao: "afirmação"
            },
            {
                texto: "Radical",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O mercado industrial foi marcado por inovações, o conceito de indústria 4.0 se mostra cada vez mais promissor. A automação passa a contar com sensores que geram dados em tempo real, plugando à robótica e a Internet das Coisas. O conceito de indústria 4.0 aumenta a performance não só da linha de produção, mas também de toda a jornada da matéria prima ao produto e a entrega do produto ao consumidor. Com o advento do 5G no Brasil, esse conceito ficará ainda mais forte.",
        alternativas: [
            {
                texto: "Doideira",
                afirmacao: "afirmação"
            },
            {
                texto: "Quem?",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O Universo é vasto e deve existir a pelo menos 13 bilhões de anos. Apesar de conter um número gigantesco de galáxias, estrelas e planetas, o Universo é mais vazio do que imaginamos: a distância que separa os corpos celestes é geralmente muito grande.",
        alternativas: [
            {
                texto: "Legal",
                afirmacao: "afirmação"
            },
            {
                texto: "Chatão",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O sexo de um bebê jacaré é definido pela temperatura, quanto mais quente o ninho, maiores são as probabilidades do nascimento de fêmeas, é o aquecimento global prejudica estes animais, diminuindo a quantidade de machos existente no globo.",
        alternativas: [
            {
                texto:  "Jaré",
                afirmacao: "afirmação"
            },
            {
                texto:  "Putz",
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
    caixaPerguntas.textContent = "Como já dizia Nat Rutz Tudo vira bosta...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
