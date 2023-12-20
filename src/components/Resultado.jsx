import styled  from '@emotion/styled'



const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 30px;

`;

const Imagen = styled.img`
    display: block;
    width: 120px;
`;
const Texto = styled.p`
    font-size: 18px;

    span{
        font-weight: 700;
    }
`;

const Precio = styled.p`
  font-size: 24px;

  
  span{
        font-weight: 700;
    }
`;

const Resultado = ({resultado}) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;

  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt ="imagen de crpto"></Imagen>
        <div>
            <Precio>El precio es de: <samp>{PRICE}</samp></Precio>
            <Texto >Precio mas alto del dia: <samp>{HIGHDAY}</samp></Texto>
            <Texto >Precio mas bajo del dia:<samp>{LOWDAY}</samp></Texto>
            <Texto >Variacion ultimas 24 horas : <samp>{CHANGEPCT24HOUR}</samp></Texto>
            <Texto >Ultima actualizacion : <samp>{LASTUPDATE}</samp></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado
