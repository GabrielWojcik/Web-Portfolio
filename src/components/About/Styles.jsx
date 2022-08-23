import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background: #000000;
    color: #FFF;
    font-family: Arial;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    border-top: 4px solid;
    border-color: #8484E4;

    @media only screen and (max-width: 999px) {
        font-size: 13px;
        height: 55vh;
    
    }
`

export const ContainerImage = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: space-between;
    font-size: 32px;
    font-weight: bold;
    
    p {
        width: 100%;
        font-size: 27px;
    }
    @media only screen and (max-width: 999px) {
        font-size: 13px;
        
        p {
            font-size: 16px;
        }
    }
`