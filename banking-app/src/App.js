
import Accounts from './features/acounts'
import Transactions from './features/transactions';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
          <Router>
       
        <Routes>
          <Route path="/" element={<Accounts/>} />
          <Route path='/transaction/:id' element={<Transactions/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
