import React from 'react';

//css
import * as S from './styles';

//Components
import Header from './components/Header/index';
import Produto from './components/Produto/index';
import Carrinho from './components/Carrinho/index';

//List
import { ListaProdutos } from './utils/List';


class App extends React.Component{

  state = {
    totalItemCarrinho: 0,
  }

  componentDidUpdate(){
    this.setState({ totalItemCarrinho: localStorage.getItem('totalItemCarrinho') })
  }

  componentDidMount(){
	} 

  handleAddProdutoCarrinho = () => {
		console.log("Meus produtos: ");
		const item = localStorage.getItem('totalItemCarrinho');
		const totalItens = Number(item) + 1
		localStorage.setItem('totalItemCarrinho', totalItens)
		this.setState({ totalItemCarrinho: totalItens });
		// this.setState({ carrinho: [...this.state.carrinho, produtos] })
		localStorage.setItem('carrinho', JSON.stringify(this.state.carrinho));		
	}



  render(){

    const totalItem = this.state.totalItemCarrinho;

    return (
        <S.Container>
          <Produto 
            // totalItemCarrinho={totalItem} 
            // onClick={() => this.handleAddProdutoCarrinho()}
            // ListaProdutos={ListaProdutos}
          />
          {/* <Carrinho /> */}
        </S.Container>
      );
    }
  
}

export default App;
