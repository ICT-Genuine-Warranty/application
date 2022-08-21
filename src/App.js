import {useState} from 'react'
import Main from './pages/main.js';
import StatusBar from './components/statusBar';
import './App.css';

function App() {
  const [status, setStatus] = useState("main");
  const [itemCode,setItemCode] = useState("");
  const [tradeCode, setTradeCode] = useState("");
  return (
    <div className="App">
        <StatusBar status={status} setStatus={setStatus} itemCode={itemCode} setItemCode={setItemCode}/>
        <div className='components'>
          <Main status={status} setStatus={setStatus} tradeCode={tradeCode} setTradeCode={setTradeCode} itemCode={itemCode}/>
        </div>

    </div>
  );
}

export default App;
