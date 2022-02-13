import React from 'react';

//css
import * as S from './styles';

//assets
import Camiseta from '../../assets/Back.webp'

//components
import ProdutoNav from '../ProdutoNav/index';
import Button from '../../shared/Button/index';


class Produto extends React.Component{
    render(){
        return(<>            
            <S.ContainerCard>
                <ProdutoNav /> 
                <S.Container>
                    <S.ContainerProduto>
                        <S.Title>{this.props.title}</S.Title>
                    </S.ContainerProduto>
                    
                    {/* <S.ProdutoDescription>Camiseta produzida pela NASA</S.ProdutoDescription>  */}

                    {/* {/* <span>R$ 18,00</span> */}
                    <S.Imagem 
                        src={this.props.img} 
                        alt="camiseta"
                    />

                    <S.InfoMoney>{this.props.price}</S.InfoMoney>
                    <Button>Adicionar</Button>
            </S.Container>
            </S.ContainerCard>
            </>
        )
    }
}

export default Produto;