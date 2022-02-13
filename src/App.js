import React from 'react';

//css
import * as S from './styles';

//Components
import Header from './components/Header/index';
import Produto from './components/Produto/index';
import Carrinho from './components/Carrinho/index';

//assets
//assets
import Camiseta from './assets/Back.webp'

class App extends React.Component{
state = {
  produto: [],
  carrinho: [],
}

  render(){
    return (
        <S.Container>
          {/* <Header />*/}
          <Produto 
            title={'Camiseta espacial H4P5F'}
            price={'R$ 1.000,00'}
            img={Camiseta}
          />
          {/* <Carrinho />*/}
        </S.Container>
      );
    }
  
}

export default App;
