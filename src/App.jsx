
import { useState, useEffect } from 'react';
import styled  from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'

import Formulario from './components/Formulario'
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';



// Permite realizar componentes de codigo css para ser utilizados dentro del proyecto
// se deben seguir las convenciones de html normales
const Heading = styled.h1`
   font-family : 'Lato', san-serif;
   color: #fff;
   text-align: center;
   font-weight: 700;
   margin-top: 80px;
   margin-bottom: 50px;
   font-size: 34px;

   &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
   }
`;

const Contenedor= styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
    @media( min-width: 992px){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap:2rem;
    }
`;

const Imagen= styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;
function App() {

  const [monedas , setMonedas] = useState({});
  const [resultado , setResultado] = useState({});
  const [cargando , setCragando]  = useState (false);

  useEffect(()=>{
    if(Object.keys(monedas).length > 0){

      const cotizarCripto= async () =>{

        setCragando(true);
        setResultado({})
        //se destruye el objeto
        const {moneda, criptoMoneda} = monedas;

        // se inyectan las variables a la url para que traiga la informacion que se ocupa
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
        
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado.DISPLAY[criptoMoneda][moneda]);
        setCragando(false);
      }

      cotizarCripto();
    }
  },[monedas]);

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt='Imagen cripto-monedas'></Imagen>
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>  
        <Formulario
          setMonedas = {setMonedas}
        ></Formulario>

        {cargando && <Spinner/>}
        {resultado.PRICE && <Resultado  resultado = {resultado}/>}
      </div>
    </Contenedor>
  )
}

export default App
