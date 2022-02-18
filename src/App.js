import React from 'react';

//css
import * as S from './styles';

//Components
import Header from './components/Header/index';
import Produto from './components/Produto/index';
import Carrinho from './components/Carrinho/index';

class App extends React.Component{
  render(){
    return (
        <S.Container>
          {/* <Header /> */}
          <Produto />
          {/* <Carrinho /> */}
        </S.Container>
      );
    }
  
}

export default App;
