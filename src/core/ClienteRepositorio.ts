import Cliente from './Cliente';

export default interface ClienteRepositorio{
    salvar(cliente: Cliente): Promisse<Cliente>
    excluir(cliente: Cliente): Promisse<void>
    obterTodos(): Promisse<Cliente[]>
}