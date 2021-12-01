import MainApp from "./components/main/MainApp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Consumo de API</h1>
        <MainApp></MainApp> {/* Componente principal */}
      </header>
    </div>
  );
}

export default App;
