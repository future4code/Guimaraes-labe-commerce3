import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 400px;
    height: 200px;
    margin: 10px 20px 60px 20px;
    border: 1px solid teal;


    border-radius: 5px;

    box-shadow: 5px -3px grey;

    :hover{
        border: 2px solid teal;
    }

    /* background: #101AF2; */

    /*left: ${props => props.index === undefined || props.index === 0? 
        '260px' : (260 + ((400+20) * props.index)) +'px'
    };
*/
    margin-right: 20px;


    top: 5%;

    button{
        position: absolute;
        left: 80%;
        top: 83%;   

        border-radius: 5px;
        background: teal;

        :hover{
            cursor: pointer;
        }
    }
`;

export const ContainerProduto = styled.div`
    position: relative;
    /* border: 1px solid blue; */
    
    height: 30px;
    max-width: 100%;

    margin: 20px 20px;

`;

export const ContainerCard = styled.div`
    position: relative;
    height: calc(400px * 5);
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
		background-size: under;
    }

`;

export const InfoMoney = styled.strong`
    position: absolute;
    left: 3%;
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

export const ContainerGrid = styled.div`
	position: absolute;
	width: ((400 * 3) +   (20 * 3 ) )+'px';
	height: 1150px;
	top: 5%;
	left: 11%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(4, 1fr);

	border: 1px solid teal;
	border-radius: 5px;
	box-shadow: 5px -3px teal;

`;