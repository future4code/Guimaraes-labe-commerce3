import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: ((400 * 3) +   (20 * 3 ) )+'px';
    height: 1150px;
`;
export const Imagem = styled.img`
    /* background-image: url(${props => props.src}); */
    width: 170px;
    height: 190px;
`;


export const ProdutoCarrinho = styled.div`
    width: 1260px;
    height: 200px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid black; */

	border: 1px solid teal;
	border-radius: 5px;
	box-shadow: 5px -3px teal;

    margin: 10px 30px;

    > div strong{
        
    }
`;