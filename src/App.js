
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Add from './Pages/Add';
import Edit from './Pages/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/add' element ={<Add/>} />
        <Route path='/edit' element ={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
