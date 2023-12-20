import styled from "@emotion/styled"

const Texto = styled.div`
    background-color: #B7322C;
    color: #fff;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: 22px;
    padding: 15px;
`;

const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error
