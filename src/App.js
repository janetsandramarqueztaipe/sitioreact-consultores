import { useState } from 'react';
import AppForm from './Componente/AppForm';

function App() {

  const [idActual, setIdActual] = useState('');
  const [docsBD, setDocsBD] = useState('');
 
const fnRead = ()  {
console.log("Lectura a BD");
}

const fnDelete = ()  {
  console.log("Delete");
  }


  return (
    <div style = {{background:"greenyellow",width:"350px"}}>
     <AppForm{...{idActual,setIdActual,fnRead}}/>
    </div>
  );
}

export default App;
const fnRead = ()  {
  