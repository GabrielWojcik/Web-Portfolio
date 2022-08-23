import styled from "styled-components";

export const Container = styled.div`
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
    
`

export const ContainerTitle = styled.div`
    width: 100%;
`

export const Title = styled.div`
    width: 70%;
    display: flex;


`

export const ContainerImage = styled.div`
    width: 70%;
    margin: auto;
    justify-content: center;
    font-size: 32px;
    font-weight: bold;
    
    p {
        width: 100%;
        font-size: 27px;
    }

    @media only screen and (max-width: 999px) {
        font-size: 13px;
    }
`
export const ContainerCard = styled.div`
    display: flex;
    width: 100%;

    @media only screen and (max-width: 999px) {
        flex-direction: column;
        gap: 25px;

    }
`
export const ProjectCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid;
    border-color: #8484E4;
    width: 350px;
    height: 200px;
    margin: auto;
    flex-wrap: wrap;
    transition:  all 0.5s;
    cursor: pointer;

    &:hover{
        border-color: #CB56C5;
        -webkit-transform: scale(1.5);
        transform: scale(1.3);
    }

    p {
        font-size: 45px;
        padding-left: 20px;
        margin-top: 5px;
        height: 10px;
    }

    span {
        color: #8484E4;
    }

    #hub {
        color: #CB56C5;
    }

    @media only screen and (max-width: 999px) {
        width: 270px;
    }

    
`
export const DescriptionImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    ul{
        font-size: 16px;
        letter-spacing: 1px;
    }
  
`
export const ImageContainer = styled.div`
    display: flex;
    width: 100%;
`