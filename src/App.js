import './App.css';
// import HelloWorld from './components/HelloWorld'
// import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {

  return (
    <div className="App">
      <Pessoa
        nome = "luka"
        idade="19"
        profissao ="progamador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App
