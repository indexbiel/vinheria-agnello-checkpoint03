const vinhos = [
  { nome: "Vinho Tinto", tipo: "tinto", safra: 2020, estoque: 12 },
  { nome: "Vinho Branco", tipo: "branco", safra: 2022, estoque: 3 },
  { nome: "Vinho Rosé", tipo: "rosé", safra: 2023, estoque: 4 },
  { nome: "Vinho Suave", tipo: "tinto", safra: 2019, estoque: 8 },
  { nome: "Vinho Seco", tipo: "branco", safra: 2021, estoque: 2 }
];

function adicionarVinho(nome, tipo, safra, estoque) {
  const novoVinho = {
    nome: nome,
    tipo: tipo,
    safra: safra,
    estoque: estoque
  };

  vinhos.push(novoVinho);

  console.log("Vinho adicionado: " + novoVinho.nome);
}

function listarVinhos() {
  console.log(" Lista de vinhos:");

  vinhos.forEach(function (vinho) {
    console.log(
      "Nome: " + vinho.nome +
      " | Tipo: " + vinho.tipo +
      " | Safra: " + vinho.safra +
      " | Estoque: " + vinho.estoque
    );
  });

  const lista = vinhos.map(function (vinho) {
    return vinho.nome + " - " + vinho.tipo +
      " - Safra: " + vinho.safra +
      " - Estoque: " + vinho.estoque;
  });

  return lista.join("\n");
}

function mostrarEstoqueBaixo() {
  console.log(" Vinhos com estoque baixo");

  const estoqueBaixo = vinhos.filter(function (vinho) {
    return vinho.estoque < 5;
  });

  estoqueBaixo.forEach(function (vinho) {
    console.log(vinho.nome + ": " + vinho.estoque + " unidades");
  });

  if (estoqueBaixo.length === 0) {
    console.log("Nenhum vinho com estoque baixo.");
  }

  return estoqueBaixo;
}

function calcularEstoqueTotal() {
  const total = vinhos.reduce(function (soma, vinho) {
    return soma + vinho.estoque;
  }, 0);

  console.log("Estoque total: ");
  console.log(total + " unidades");

  return total;
}

function mostrarNomesMaiusculos() {
  console.log("Nome dos vinhos em caixa alta: ");

  const nomes = vinhos.map(function (vinho) {
    return vinho.nome.toUpperCase();
  });

  nomes.forEach(function (nome) {
    console.log(nome);
  });

  return nomes;
}

adicionarVinho("Vinho Rosé Seco", "rosé", 2022, 6);

const listaCompleta = listarVinhos();
const vinhosEstoqueBaixo = mostrarEstoqueBaixo();
const estoqueTotal = calcularEstoqueTotal();
const nomesMaiusculos = mostrarNomesMaiusculos();

let textoEstoqueBaixo = "";

vinhosEstoqueBaixo.forEach(function (vinho) {
  textoEstoqueBaixo += vinho.nome + ": " +
    vinho.estoque + " unidades\n";
});

if (vinhosEstoqueBaixo.length === 0) {
  textoEstoqueBaixo = "Nenhum vinho com estoque baixo.";
}

alert(
  "SISTEMA DA VINÍCOLA AGNELLO\n\n" +
  "LISTA COMPLETA:\n" + listaCompleta + "\n\n" +
  "ESTOQUE ABAIXO DE 5:\n" + textoEstoqueBaixo + "\n\n" +
  "ESTOQUE TOTAL: " + estoqueTotal + " unidades\n\n" +
  "NOMES EM CAIXA ALTA:\n" + nomesMaiusculos.join("\n")
);