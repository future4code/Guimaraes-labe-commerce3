import React from 'react';

//css
import * as S from './styles';

//Components
import Header from './components/Header/index';
import Produto from './components/Produto/index';
import Carrinho from './components/Carrinho/index';

function App() {
  return (
    <S.Container>
      {/* <Header /> */}
      <Produto />
      {/* <Carrinho />       */}
    </S.Container>
  );
}

export default App;
