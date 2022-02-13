import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    width: 400px;
    height: 200px;
    margin: 10px 20px;
    border: 1px solid black;

    border-radius: 5px;

    :hover{
        border: 2px solid blue;
    }

    /* background: #101AF2; */
`;

export const ContainerProduto = styled.div`
    position: relative;
    /* border: 1px solid blue; */
    
    height: 30px;
    max-width: 100%;

    margin: 20px 20px;

`;

export const Title = styled.span`
    margin: 0px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`;

export const Imagem = styled.img`
    position: absolute;
    width: 180px;
    height: 200px;

    top: 80%;
    left: 50%;

    transform: translate(-50%, -50%);

    :hover{
        width: 280px;
        height: 300px;
    }

`;

export const InfoMoney = styled.strong`
    position: absolute;
    left: 75%;
    top: 80%;

    :hover{
        color: blue;
    }
`;

export const ProdutoDescription = styled.span`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    
`;