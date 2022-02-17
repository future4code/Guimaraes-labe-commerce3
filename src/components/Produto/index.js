import React from 'react';

//css
import * as S from './styles';

//assets
import Camiseta from '../../assets/Back.webp'

//components
import ProdutoNav from '../ProdutoNav/index';
import Button from '../../shared/Button/index';

//List
import { ListaProdutos } from '../../utils/List';


class Produto extends React.Component{

	state = {
		produto: [],
		carrinho: [],
	  }

	handleAddProdutoCarrinho = (produtos) => {
		console.log("Meus produtos: ", produtos);
	}

    render(){
        return(<>            
            <S.ContainerCard>
                <ProdutoNav /> 
				<S.ContainerGrid>
                {ListaProdutos.map( ( produto, index ) => {
                    return( <div key={index}>						
	                            <S.Container index={index}>
	                            <S.ContainerProduto>
	                                <S.Title>{produto.title}</S.Title>
	                            </S.ContainerProduto>
	                            <S.Imagem 
	                                src={Camiseta} 
	                                alt="camiseta"
	                            />
	                            <S.InfoMoney>{produto.price}</S.InfoMoney>
	                            <Button onClick={() => this.handleAddProdutoCarrinho(produto)}>Adicionar</Button>
	                        </S.Container>
                    </div>)
                })}
				</S.ContainerGrid>					
            </S.ContainerCard>


            </>
        )
    }
}

export default Produto;