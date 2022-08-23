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

    span {
        color: #CB56C5;
    }

    @media only screen and (max-width: 999px) {
        font-size: 12px;
    }
`

export const ContainerImage = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
        
`