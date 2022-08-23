import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background: #000000;
    width: 100%;
    height: 10vh; 
    color: #FFF;
    justify-content: flex-end;
    border-bottom: 3px solid #8484E4;
    position: fixed;
    z-index: 2000;

    ul {
        display: flex;
        list-style: none;
        gap: 25px;
    }

    ul li {
        font-family: Arial;
        font-weight: bold;
        font-size: 26px;
        cursor: pointer;

        &:hover{
        color: #8484E4;
        }

    }

    @media only screen and (max-width: 999px) {
        display: flex;
        justify-content: space-between;
        position: fixed;
        z-index: 2000;
        
        ul {
            display: flex;
            justify-content: center;
        }

        ul li {

            font-size: 22px;
        }
    }

`
export const Menu = styled.div`
    width: 600px;
    height: 10vh;

    @media only screen and (max-width: 999px) {
        width: auto;
    }
`