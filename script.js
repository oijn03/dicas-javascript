// let nome = prompt("Qual seu nome?");
// let valor = prompt("Qual o valor do seu empréstimo?");

// let declara variavel

// alert(`Olá ${nome}!`); quando eu coloco a string (texto) entre crases eu consigo puxar uma variável
// alert(`Você gostaria de emprestar R$${valor}, certo?`);

let lista = ["ok", 1, 2, 3]; // tudo dentro do colchetes é um verto (lista) só
let julio = {
    nome: "Julio",
    idade: 17,
    estudante: true,
    caracteristicas: ["alto", 1.75, "cabelo preto", "olhos castanhos"],
    gatos: [
        {
            nome: "augusto",
            raca: "vira-lata"
        },
        {
            nome: "gabriel",
            raca: "tomba-lata"
        }
    ],
    namorada: undefined
};

let yasmin = {
    nome: "Yasmin",
    idade: 18,
    estudante: true,
    caracteristicas: ["estatura média", 1.65, "cabelo longo", "olhos castanhos"],
    cachorros: [
        {
            nome: "Sol",
            idade: 11
        },
        {
            nome: "Pipoca",
            idade: 6
        }
    ],
    namorado: julio
};
// julio.namorada = yasmin;