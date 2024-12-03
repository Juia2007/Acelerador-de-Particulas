const TemplateExpression = () => {
    const nome = "Julia"
    const dados = {
        idade: 17,
        profissao: "estudante"
    }
    return(
        <div>
            <h3>Olá, {nome}! Seja bem-vindo</h3>
            <h3>Você é {dados.profissao} e tem {dados.idade} anos.</h3>
            <p>{console.log("Usando o React")}</p>
        </div>
    );
};

export default TemplateExpression;