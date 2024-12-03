const Eventos = () => {

    //aqui é uma função de manipulção de eventos 
    const handleMeuEvento = ()=> {
        console.log("Clicou no Botão");
    }
    return(
        <div>
            <div>
                {/* comentário */}
                <button onClick={handleMeuEvento}>Clique aqui!</button>
            </div>
            {/* outro comentário com control /  */}
            <div>
                <button onClick={() => console.log("Botão foi clicado")}>Clique aqui também!</button>
            </div>
        </div>
    );
};

export default Eventos;