// Classe Funcionario, que define um funcionário com nome, salário e data de admissão
class Funcionario {
    // Construtor que inicializa as propriedades do funcionário
    constructor(nome, salario, dataAdmissao) {
        this.nome = nome;               // Atribui o nome do funcionário
        this.salario = salario;         // Atribui o salário do funcionário
        this.dataAdmissao = dataAdmissao; // Atribui a data de admissão do funcionário
    }

    // Método para calcular o bônus do funcionário (10% do salário)
    calcularBonus() {
        return this.salario * 0.1; // Retorna o bônus de 10% sobre o salário
    }

    // Método para exibir os detalhes do funcionário
    exibirDetalhes() {
        console.log(`O(a) funcionario(a) se chama: ${this.nome}, seu salário é de : ${this.salario}, 
        ele(a) foi admitido em ${this.dataAdmissao} e vai receber uma bonificação de: R$${this.calcularBonus()}.`);
        // Exibe nome, salário, data de admissão e o bônus calculado
    }
}

// Criação de uma instância da classe Funcionario e exibição dos detalhes
const infoFuncionario = new Funcionario("Julia Custódio dos Santos", "7000", "25/06/2020");
infoFuncionario.exibirDetalhes(); // Chama o método exibirDetalhes para mostrar as informações de Julia

// Classe Gerente que herda da classe Funcionario
class Gerente extends Funcionario {
    // Construtor que inicializa as propriedades do gerente, incluindo o departamento
    constructor(nome, salario, dataAdmissao, departamento) {
        super(nome, salario, dataAdmissao); // Chama o construtor da classe pai (Funcionario)
        this.departamento = departamento;   // Atribui o nome do departamento ao gerente
    }

    // Sobrescrita do método calcularBonus para o gerente, que recebe 20% de bônus
    calcularBonus() {
        return this.salario * 0.2; // Retorna o bônus de 20% sobre o salário
    }

    // Método para exibir os detalhes do gerente, incluindo o departamento
    Departamento () {
        console.log(`O(a) gerente se chama: ${this.nome}, recebe um salário de R$${this.salario}, 
        foi admitido em ${this.dataAdmissao}, seu departamento é: ${this.departamento} 
        e recebe uma bonificação de R$${this.calcularBonus()}`);
        // Exibe nome, salário, data de admissão, departamento e bônus do gerente
    }
}

// Criação de uma instância da classe Gerente e exibição dos detalhes
const tipo = new Gerente("Bruno Carvalho Freitas", "10000" ,"28/04/2012","Reprodução Bovina");
tipo.Departamento(); // Chama o método Departamento para mostrar as informações do gerente
