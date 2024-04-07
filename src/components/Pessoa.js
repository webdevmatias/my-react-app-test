const Pessoa = ({ foto, nome, idade, profissao }) => {
    return (
        <div>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    );
} 

Pessoa.defaultProps = {
    foto: 'url_da_imagem_padrao.jpg',
    nome: 'Nome Padrão',
    idade: 'Idade Padrão',
    profissao: 'Profissão Padrão'
};

export default Pessoa