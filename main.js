//declaraçao das cartas
var cartas = [
    {
      nome: "Goku",
      carta:
        "https://raw.githubusercontent.com/MarceloAraujo14/CursoAlura-SupertrunfoDBZ/main/img/goku.png",
      atributos: { ataque: 6, defesa: 5, poder: 9 }
    },
    {
      nome: "Vegeta",
      carta:
        "https://raw.githubusercontent.com/MarceloAraujo14/CursoAlura-SupertrunfoDBZ/main/img/vegeta.png",
      atributos: { ataque: 5, defesa: 6, poder: 9 }
    },
    {
      nome: "Piccolo",
      carta:
        "https://raw.githubusercontent.com/MarceloAraujo14/CursoAlura-SupertrunfoDBZ/main/img/picollo.png",
      atributos: { ataque: 4, defesa: 6, poder: 10 }
    },
    {
      nome: "Cell",
      carta:
        "https://raw.githubusercontent.com/MarceloAraujo14/CursoAlura-SupertrunfoDBZ/main/img/cell.png",
      atributos: { ataque: 8, defesa: 3, poder: 9 }
    }
  ];
  //parseInt(Math.random()) * cartas.length
  var cartaMaquina;
  var cartaJogador;
  
  //captar função do botão Sortear cartas
  function sortearCarta() {
    //atribuir um valor aleatorio da lista cartas para maquina
    cartaMaquina = cartas[Math.floor(Math.random() * cartas.length)];
    console.log("A carta da Maquina é " + cartaMaquina.nome);
    //atribuir um valor aleatorio da lista cartas para jogador que seja dif de maquina
    cartaJogador = cartas[Math.floor(Math.random() * cartas.length)];
    while (cartaJogador == cartaMaquina) {
      cartaJogador = cartas[Math.floor(Math.random() * cartas.length)];
    }
  
    document.getElementById("btnSortear").disabled = true; //desabilitar o botao sortear
  
    exibirOpcao();
  }
  
  function exibirOpcao() {
    var cartaUm = document.getElementById("cartaJogador");
    var elemento = "";
  
    elemento =
      elemento + "<img class='cartaJogador' src='" + cartaJogador.carta + "'>";
  
    elemento =
      elemento +
      "<div class='botoes' ><button class='botaoCarta'  id='ataque' type='button' onclick='atacar()'> ATAQUE: " +
      cartaJogador.atributos.ataque +
      "</button>";
  
    elemento =
      elemento +
      "<button class='botaoCarta' id='defesa' type='button' onclick='defender()'> DEFESA: " +
      cartaJogador.atributos.defesa +
      "</button>";
  
    elemento =
      elemento +
      "<button class='botaoCarta' id='poder' type='button' onclick='ki()'> PODER: " +
      cartaJogador.atributos.poder +
      "</button></div>";
  
    cartaUm.innerHTML = elemento;
  
    var cartaDois = document.getElementById("cartaMaquina");
    var elemento =
      "<img class='cartaMaquina' src='https://raw.githubusercontent.com/MarceloAraujo14/CursoAlura-SupertrunfoDBZ/main/img/supertrunfoback.png'>";
  
    cartaDois.innerHTML = elemento;
    resultado.innerHTML = "";
  }
  
  var btAtaque = document.getElementById("ataque");
  var btDefesa = document.getElementById("defesa");
  var btPoder = document.getElementById("poder");
  
  function atacar() {
    escolha = "ataque";
    atb = "O Ataque";
    document.getElementById("btnJogar").disabled = false; //habilitar o botao jogar
    btAtaque.disabled = true;
    btDefesa.disabled = false;
    btPoder.disabled = false;
    console.log(escolha);
    return escolha;
  }
  
  function defender() {
    escolha = "defesa";
    atb = "A Defesa";
    document.getElementById("btnJogar").disabled = false; //habilitar o botao jogar
    document.getElementById("ataque").disabled = false;
    document.getElementById("defesa").disabled = true;
    document.getElementById("poder").disabled = false;
    console.log(escolha);
    return escolha;
  }
  
  function ki() {
    escolha = "poder";
    atb = "O Poder";
    document.getElementById("btnJogar").disabled = false; //habilitar o botao jogar
    document.getElementById("ataque").disabled = false;
    document.getElementById("defesa").disabled = false;
    document.getElementById("poder").disabled = true;
    console.log(escolha);
    return escolha;
  }
  
  function jogar() {
    var escolhaJogador = cartaJogador.atributos[escolha];
    var escolhaMaquina = cartaMaquina.atributos[escolha];
  
    if (escolhaJogador > escolhaMaquina) {
      var resultado = document.getElementById("resultado");
      resultado.innerHTML =
        "<div><h2>" +
        atb +
        " do Oponente é: " +
        escolhaMaquina +
        ".<br> Você venceu!</h2></div>";
    }
    if (escolhaJogador == escolhaMaquina) {
      var resultado = document.getElementById("resultado");
      resultado.innerHTML =
        "<div><h2>" +
        atb +
        " do Oponente é: " +
        escolhaMaquina +
        ".<br> Empate!</h2></div>";
    }
    if (escolhaJogador < escolhaMaquina) {
      var resultado = document.getElementById("resultado");
      resultado.innerHTML =
        "<div><h2>" +
        atb +
        " do Oponente é: " +
        escolhaMaquina +
        ".<br> Você perdeu!</h2></div>";
    }
  
    var cartaDois = document.getElementById("cartaMaquina");
    var elemento = "<img class='cartaMaquina' src='" + cartaMaquina.carta + "'>";
  
    cartaDois.innerHTML = elemento;
  
    document.getElementById("ataque").disabled = true;
    document.getElementById("defesa").disabled = true;
    document.getElementById("poder").disabled = true;
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnSortear").disabled = false;
  }
  