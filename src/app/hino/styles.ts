import styled from "styled-components";


export const ContentTitulo =  styled.div`
    display: flex;
    justify-content: center;
   


    @media(max-width: 768px){
       display: flex;
       justify-content: center;
       margin: 5%;
       margin-top: 2%;
       font-size: 16px;
       text-align: center;
    
    }

`;

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 2%;
    margin-bottom: 5%;

    @media(max-width: 768px){
        margin-bottom: 30%;
    }

`;

export const ContentHino = styled.div`
    margin: 20%;
    margin-top: 0;

    text-align: center;
    font-size: 20px;
    


    @media(max-width: 768px){
      margin: 5%;
      margin-top: 0;
      text-align: start; 
      font-size: 14px;
  
    
    }

`;

export const PNoEstrofe = styled.p`
    margin-top: 6px;
    margin-bottom: 6px;
    line-height: 1.2;
    text-align: center;
`

export const P = styled.div`
    margin-top: 0;
    margin-bottom: 6px;
    line-height: 1.2;

`;
export const Rodape = styled.div`
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: gray;
    color: black;
    padding: 1rem 0;
    z-index: 1000;
   

`;
export const ButtonLeft = styled.div`
    display: flex;
    justify-content: center;
    width: 10%;
    height: 10%;
    background-color: gray;
    color: black;
    font-size: 20px;

    @media(max-width: 768){
        width: 15%;
        height: 10%;
    }


`;
