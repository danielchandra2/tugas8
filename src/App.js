import './App.css';
import Usingdidmount from './atom';
//import Toggle from './event';
import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('');

  function decrementCount(){
    setCount(prevCount => prevCount -1)
    setTheme('Berkurang Menjadi ')
  }

  function incrementCount(){
    setCount(prevCount => prevCount +1)
    setTheme('Bertambah Menjadi ')
  }

  return(
  <div>
   <Usingdidmount></Usingdidmount>
    <div class="container">
      <button class="btn btn-primary" onClick={ decrementCount }>-</button>
                <span>{theme}</span>
                <span>{count}</span> 
      <button class="btn btn-warning" onClick={ incrementCount }>+</button>
    </div>
  </div>
  );
}

export default App;
