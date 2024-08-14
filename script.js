const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Cientistas desenvolveram uma tecnologia que consiste em criar novos órgãos a partir de células embrionárias. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa descoberta pode gerar. "
            },
            {
                texto: "Isso é incrível!",
                afirmacao: "Quis saber como funciona o processo."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada CLonagem Terapêutica, uma professora de Biologia da escola decidiu fazer uma sequência de aulas sobre este estudo. No fim de uma aula ela pede que você escreva um trabalho sobre a sua perpectiva a respeito da clonagem. Qual a sua primeira opinião?",
        alternativas: [
            {
                texto: "Escreve o trabalho com visão a favor, pois acredita que o uso das células embrionárias é inovador e pode salvar vidas",
                afirmacao: "A favor, a clonagem pode ajudar muitas pessoas e progredir nas pesquisas para cura de doenças."
            },
            {
                texto: "Escreve o trabalho com visão contra, pois acredita que o uso das células embrionárias tira a chance de outra vida se desenvolver",
                afirmacao: "Contra, a clonagem é antiética e desrespeita a ordem natural da vida."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a clonagem terapêutica impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a sua ideia de que a clonagem pode criar novas oportunidades de pesquisas na Medicina e melhorar a vida de muitos.",
                afirmacao: "A favor, essa tecnologia deve se desenvolver."
            },
            {
                texto: "Me preocupo com o desenvolvimento dessa tecnologia, pois não sabemos como a humanidade lidaria com ela.",
                afirmacao: "Contra, tenho receio do que pode se criado com essa tecnologia."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, vocês precisaram chegar em um consenso. E agora?",
        alternativas: [
            {
                texto: "Concordamos no ponto de vista a favor.",
                afirmacao: "A maior parte da sala era a favor."
            },
            {
                texto: "Concordamos no ponto de vista contra.",
                afirmacao: "A maior parte da sala era contra."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia sobre esse assunto para entregar na semana seguinte, e alguns integrantes do seu grupo vão contra a sua ideia. O que você faz? ",
        alternativas: [
            {
                texto: "Tento convencê-los de que minha opinião é a mais correta.",
                afirmacao: "Uma única opinião é melhor para o desenvolvimento da atividade."
            },
            {
                texto: "Tudo bem, cada um com o seu ponto de vista.",
                afirmacao: "Os dois pontos de vista são válidos, e mostrar ambas opiniões enriquece o trabalho. "
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
