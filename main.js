//# 3️⃣ Escrevendo as classes de um Jogo


class Heroi{
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let tipoAtaque;

        switch (this.tipo) {
            case 'mago':
                tipoAtaque = 'magia';
                break;
            case 'guerreiro':
                tipoAtaque = 'espada';
                break;
            case 'monge':
                tipoAtaque = 'artes marciais';
                break;
            case 'ninja':
                tipoAtaque = 'shuriken';
                break;
            default:
                tipoAtaque = 'realizou um ataque';
        }

        console.log(`O ${this.tipo} atacou usando ${tipoAtaque}`);
    }
}


// Instanciando herois
const heroiGuerreiro = new Heroi('Aragorn', 30, 'guerreiro');
const heroiMago = new Heroi('Gandalf', 1000, 'mago');
const heroiMonge = new Heroi('Bruce Lee', 32, 'monge');
const heroiNinja = new Heroi('Hattori Hanzo', 25, 'ninja');

heroiNinja.atacar()