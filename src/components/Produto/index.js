import React from 'react';

//css
import * as S from './styles';

//assets
import Camiseta from '../../assets/Back.webp'

//components
import ProdutoNav from '../ProdutoNav/index';
import Button from '../../shared/Button/index';
import Header from '../Header/index';
import Carrinho from '../Carrinho';

//List
import { ListaProdutos } from '../../utils/List';
import { Camisetas } from '../../utils/Camisetas';




class Produto extends React.Component{

	state = {
		totalItemCarrinho: localStorage.getItem('totalItemCarrinho'),
		possuiItemNoCarrinho: localStorage.getItem('possuiItemNoCarrinho'),
		carrinho: [],
		gotoCarrinho: localStorage.getItem('gotoCarrinho'),
		isLoading: false, //localStorage.getItem('isLoading'),
	  }

	handleAddProdutoCarrinho = (produtos) => {
		console.log("Meus produtos: ", produtos);
		const item = localStorage.getItem('totalItemCarrinho');
		const totalItens = Number(item) + 1
		localStorage.setItem('totalItemCarrinho', totalItens)
		localStorage.setItem('isLoading', true)
		this.setState({ totalItemCarrinho: totalItens });
		this.setState({ carrinho: [...this.state.carrinho, produtos] })
		localStorage.setItem('carrinho', JSON.stringify(this.state.carrinho));
		
		this.showCarrinho();
	}

	showCarrinho = () => { 
		this.setState({ possuiItemNoCarrinho: true, isLoading: true });
		localStorage.setItem('possuiItemNoCarrinho', true);
	}



	componentDidUpdate(){
		localStorage.setItem('carrinho', JSON.stringify(this.state.carrinho));
	}

	componentDidMount(){	
		if(!localStorage.getItem('totalItemCarrinho')){
			localStorage.setItem('totalItemCarrinho', 0);
			this.setState({ totalItemCarrinho: 0 })
		}

		// this.setState({ gotoCarrinho: localStorage.getItem('gotoCarrinho')});
	}


    render(){

		const { gotoCarrinho } = this.state;

        return(<>  
			<Header 
				totalItemCarrinho={this.state.totalItemCarrinho} 
				isLoading={this.props.isLoading}
				gotoCarrinho={this.props.gotoCarrinho}
				
			/>
            <S.ContainerCard>
                <ProdutoNav /> 
				<S.ContainerGrid>
				{gotoCarrinho ? ( 
					<Carrinho />
				) : (			
					Camisetas.map( ( produto, index ) => {
                    return( <div key={index}>						
	                            <S.Container index={index}>
	                            <S.ContainerProduto>
	                                <S.Title>{produto.title}</S.Title>
	                            </S.ContainerProduto>
	                            <S.Imagem 
	                                src={produto.url} 
	                                alt="camiseta"
	                            />
	                            <S.InfoMoney>R$ {produto.price}</S.InfoMoney>
	                            <Button onClick={() => this.handleAddProdutoCarrinho(produto)}>Adicionar</Button>
	                        </S.Container>
                    </div>)
                })

				)}
				</S.ContainerGrid>					
            </S.ContainerCard>


            </>
        )
    }
}

export default Produto;