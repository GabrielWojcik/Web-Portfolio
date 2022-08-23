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

    @media only screen and (max-width: 999px) {
        flex-direction: column;
        font-size: 13px;
    }
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
        flex-direction: column;
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
    border: 1px solid;
    border-color: #8484E4;
    width: 350px;
    height: 200px;
    margin: auto;
    flex-wrap: wrap;
    cursor: pointer;
    transition:  all 0.5s;


    &:hover{
        border-color: #CB56C5;
        -webkit-transform: scale(1.5);
        transform: scale(1.3);
    }

    p {
        padding-left: 20px;
        margin-top: 5px;
        height: 10px;
    }

    @media only screen and (max-width: 999px) {
        width: 275px;

}
`
export const DescriptionImage = styled.div`

    display: flex;
    /* background-color: red; */
    width: 100%;
    
    ul{
        font-size: 16px;
        letter-spacing: 1px;
    }
  
  
`

export const ImageContainer = styled.div`
    display: flex;
    /* background-color: red; */
    width: 100%;
`