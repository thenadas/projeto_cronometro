import { useEffect, useState } from 'react';

import ImgCronometro from './assets/cronometro.png';
import './global.css';

function App() {

  const[tempo, setTempo] = useState(0);
  const[estado, setEstado] = useState('Iniciar');

    useEffect(() => {
      let timer = null;

      if(estado === 'Iniciar'){
        clearInterval(timer);
      }else{
        timer = setInterval(() => {
          setTempo((tempo)=> tempo + 0.1)
          setEstado('Parar')
        }, 100);
      }
      return() =>{
        clearInterval(timer)
      }
    }, [estado])

  function StartStop() {
      if(estado === 'Parar'){
        setEstado('Iniciar');
        return;
      }
      setEstado('Parar');
  }

  function Limpar(){
    setEstado('Iniciar');
    setTempo(0);
  }

  return (
    <div className='container'>
      <h1>Projeto Cronômetro</h1>
      <img src={ImgCronometro} alt='Imagem de um Cronômetro' className='imgCronometro'/>
      <strong>{tempo.toFixed(1)}</strong>
      <div className='container-btn'>
        <button onClick={StartStop}>{estado}</button>
        <button onClick={Limpar}>Limpar</button>
      </div>
    </div>
  );
}

export default App;
