
import './App.css';
import Button from './componentes/Button.js';
import Aluno from './componentes/Aluno.js';

function App() {
  return (
    <div className="App">
      <Button  text='Compre'/>
      <Button text='Venda'/>
      <Button text='Alugue'/>    
      <Aluno name='Eduardo' age='30'/>
    </div>
  );
}

export default App;
