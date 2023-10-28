import './App.css';
import Home from './Components/Pages/Home';
import ContextApi from './contextPai';

function App() {
  return (
    <div className="App">
      <ContextApi>
      <Home/>
      </ContextApi>
    </div>
  );
}

export default App;
