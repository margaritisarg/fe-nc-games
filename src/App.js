import { BrowserRouter } from "react-router-dom";

import './App.css';
import PrimaryContainer from './components/PrimaryContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PrimaryContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
