const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.getElementById("caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual sua percepção geral sobre o uso da inteligência artificial (IA) no ambiente escolar?",
        alternativas: [
            "Sou bastante otimista, vejo a IA como uma ferramenta que pode revolucionar o aprendizado e tornar o ensino mais personalizado",
            "Tenho muitas ressalvas, pois me preocupam os riscos como a dependência tecnológica e a possível perda de habilidades essenciais nos alunos."
        ]
    },

    {
        enunciado: "No contexto do ensino-aprendizagem, você acredita que a IA tende a ser mais um facilitador ou um desafio?",
        alternativas: [
            "Um facilitador, capaz de oferecer recursos adaptativos e suporte individualizado, otimizando o tempo dos professores.",
            "Um desafio, que pode gerar desigualdade no acesso à tecnologia e desviar o foco da interação humana."
        ]
    },

     {
        enunciado: "Pensando no papel do professor, como a IA pode impactar sua atuação?",
        alternativas: [
            "A IA pode empoderar o professor, liberando-o de tarefas repetitivas para que ele se concentre em atividades mais estratégicas e no desenvolvimento socioemocional dos alunos.",
            "A IA pode desvalorizar o professor, automatizando funções que hoje são essenciais e diminuindo a necessidade de sua intervenção direta."
        ]
    },

     {
        enunciado: "Em relação aos estudantes, qual o principal benefício ou risco que você vê na IA?",
        alternativas: [
            "O principal benefício é o acesso a uma educação mais dinâmica e adaptada ao ritmo de cada um, preparando-os para o futuro",
            "O principal risco é a diminuição do pensamento crítico e da criatividade, além da exposição excessiva a telas."
        ]
    },

     {
        enunciado: "A implementação da IA nas escolas deve ser amplamente incentivada ou tratada com cautela e restrições?",
        alternativas: [
            "Deve ser amplamente incentivada, com um bom planejamento e formação, para que possamos colher os frutos dessa inovação.",
            "Deve ser tratada com cautela e restrições, pois ainda precisamos entender melhor seus impactos a longo prazo e garantir um uso ético."
        ]
    },
    
];

let atual = 0;
let perguntaAtual;
function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();

