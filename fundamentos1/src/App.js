import './App.css';
import Eventos from './components/Eventos';
import PrimeiroComponente from './components/PrimeiroComponente';
import TemplateExpression from './components/TemplateExpression';

function App() {
  return (
    <div className="App">
      <h1>fundamentos do React 1</h1>
      <PrimeiroComponente/>
      <TemplateExpression/>
      <Eventos></Eventos>
    </div>
  );
}

export default App;
