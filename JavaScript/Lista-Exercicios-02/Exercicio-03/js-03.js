class Heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }
  correr() {
    return "O herói está correndo";
  }
  andar() {
    return "O herói está andando";
  }
  atacar() {
    return "O herói está atacando";
  }
  defender() {
    return "O herói está defendendo";
  }
}

const homemAranha = new Heroi("Homem-Aranha", 100, 100, 120);
homemAranha.teia = 1;

homemAranha.sentidoAranha = () => {
  return "detectou perigo!!";
};

const superman = new Heroi("Superman", 500, 500, 1000);
superman.podeVoar = 1;

superman.visaoCalor = () => {
  return "utilizando visão de calor!!";
};

const batman = new Heroi("Batman", 100, 50, 6);
batman.esconder = 1;

batman.investigar = () => {
  return "investigando um crime!!";
};

document.write(`<p>O herói ${homemAranha.nome} possui força ${homemAranha.forca} e utilizando o sentido aranha ${homemAranha.sentidoAranha()}</p>`);
document.write(`<p>O ${superman.nome} possui vida ${superman.vida} e está ${superman.visaoCalor()}</p>`);
document.write(`<p>O ${batman.nome} possui velocidade ${batman.velocidade} e está ${batman.investigar()}</p>`);

