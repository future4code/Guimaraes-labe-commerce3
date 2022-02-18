import React from 'react';

//css
import * as S from './styles';

//assets
import Camiseta from '../../assets/Back.webp'

//components
import ProdutoNav from '../ProdutoNav/index';
import Button from '../../shared/Button/index';
import Header from '../Header/index';

//List
import { ListaProdutos } from '../../utils/List';


class Produto extends React.Component{

	state = {
		totalItemCarrinho: 0
	  }

	handleAddProdutoCarrinho = (produtos) => {
		console.log("Meus produtos: ", produtos);
		const item = localStorage.getItem('itemCarrinho');
		const totalItens = Number(item) + 1
		localStorage.setItem('itemCarrinho', totalItens)
		this.setState({ totalItemCarrinho: totalItens });
	}

    render(){
        return(<>    
			<Header totalItemCarrinho={this.state.totalItemCarrinho} />        
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
	                            <S.InfoMoney>R$ {produto.price}</S.InfoMoney>
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