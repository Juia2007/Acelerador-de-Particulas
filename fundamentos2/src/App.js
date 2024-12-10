
import './App.css';
import Condicional from './assets/Condicional';
import outono from './assets/outono.png';
import GerenciaDados from './components/GerenciaDados';
import Listas from './components/Listas';


function App() {
  return (
    <div className="App">
        <h1>Fundamentos do React 2</h1>
        {/* Imagem em public */}
        <img src="/outono2.jpeg" alt="Paisagem natural" ></img>
        <img src={outono}  alt="outono"></img>
        <GerenciaDados></GerenciaDados>
        <Listas></Listas>
        <Condicional></Condicional>
    </div>
  );
}

export default App;
