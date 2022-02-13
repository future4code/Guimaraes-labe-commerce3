import React from 'react';

//css
import * as S from './styles';

//assets
import Camiseta from '../../assets/Back.webp'

class Produto extends React.Component{
    render(){
        return(
            <S.Container>
                <S.ContainerProduto>
                    <S.Title>Camiseta espacil H4P5F</S.Title>
                </S.ContainerProduto>
                
                {/* <S.ProdutoDescription>Camiseta produzida pela NASA</S.ProdutoDescription>  */}

                {/* {/* <span>R$ 18,00</span> */}
                <S.Imagem 
                    src={Camiseta} 
                    alt="camiseta"
                />

                <S.InfoMoney>R$ 1.000,00</S.InfoMoney>
            
            </S.Container>
        )
    }
}

export default Produto;