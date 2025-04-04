

class Funcionario {
    constructor(nome, salario, dataAdmissao) {
        this.nome = nome;
        this.salario = salario;
        this.dataAdmissao = dataAdmissao;

    }

    calcularBonus() {
        return this.salario * 0.1;

    }

    exibirDetalhes() {
        console.log(`O funcionario(a) se chama: ${this.nome}, seu salário é de : ${this.salario}, ele(a) foi admitido em ${this.dataAdmissao} e vai receber uma bonificação de: R$${this.calcularBonus()}. `);
    }
}

const infoFuncionario = new Funcionario("Julia Custódio dos Santos", "7000", "25/06/2020");
infoFuncionario.exibirDetalhes();


class Gerente extends Funcionario {
    constructor(nome, salario, dataAdmissao, departamento) {
        super(nome, salario, dataAdmissao);
        this.departamento = departamento;
    }

    calcularBonus() {
        return this.salario * 0.2
    }

    Departamento () {
        console.log(`O(a) gerente se chama: ${this.nome}, recebe um salário de R$${this.salario}, foi admitido em ${this.dataAdmissao}, seu departamento é: ${this.departamento} e recebe uma bonificação de R$${this.calcularBonus()}`);
    }

    
}

const tipo = new Gerente("Bruno Carvalho Freitas", "10000" ,"28/04/2012","Reprodução Bovina");

tipo.Departamento();