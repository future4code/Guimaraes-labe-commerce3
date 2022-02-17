import React, { useState } from 'react';
import Button from '../../shared/Button';

const paginaProdutos = 'produtos';
const paginaCarrinho = 'carrinho';

function Carrinho () {

  const [carrinho, setCarrinho] = useState([]);
  const [pagina, setPagina] = useState(paginaProdutos)
  const [valorTotalProdutos, setValorTotalProduto] = useState(0);

  const [item] = useState ([
    {
      name: 'Camiseta Branca Nasa',
      custo: 2.99,
      imagem: 'https://img.elo7.com.br/product/zoom/2255380/camiseta-camisa-nasa-exploracao-espacial-liga.jpg',
    },

    {
      name: 'Camiseta Preta Nasa',
      custo: 5.99,
      imagem: "https://img.elo7.com.br/product/zoom/2DD1F10/camiseta-nasa.jpg",
    },
  ]);

  const adicionarCarrinho = (item) => {
    
    setCarrinho([...carrinho, {...item}]);
    setValorTotalProduto( valorTotalProdutos + item.custo )

    // console.log("Meu Carrinho: ",carrinho);
    // console.log( "Valor total produtos", valorTotalProdutos);

  };

  const removerProduto = (itemRemover) => {
    setCarrinho (carrinho.filter(item => item !== itemRemover))
    setValorTotalProduto( valorTotalProdutos - itemRemover.custo );
  };


  const navigateTo = (proximaPagina) => {
    setPagina(proximaPagina);
  };


  const renderProdutos = () => (
    <><h1>Produtos</h1>
    <div className="produtos">
    {item.map((item, index) =>(
       <div className="produtoNovo" key={index}>
       <h3>{item.name}</h3>
       <h4>{item.custo}</h4>
       <img src={item.imagem}/>
       <button onClick={() => adicionarCarrinho(item)}>Adicionar Produto</button>
     </div>
    
    )) }
    </div>
    </>
  );

  const renderCarrinho = () => (
    <><h1>Carrinho</h1>
    <div className="produtos">
    {carrinho.map((item, index) =>(
       <div className="produtoNovo" key={index}>
       <h3>{item.name}</h3>
       <h4>{item.custo}</h4>
       <img src={item.imagem}/>
       <button onClick={() => removerProduto(item)}>Remover Produto</button>
     </div>
    
    )) }
    </div>
    </>

  );

  return (<div className="App">
    <header>
      <Button onClick={() => navigateTo(paginaCarrinho)}>Ir para o carrinho de compras ({carrinho.length})</Button>
      <Button onClick={() => navigateTo(paginaProdutos)}>Ver produtos no carrinho ({carrinho.length})</Button>
      <h3>{valorTotalProdutos}</h3>
      </header>

      {pagina === paginaProdutos && renderProdutos()}
      {pagina === paginaCarrinho && renderCarrinho()}
       </div>
      );
}
 

      


export default Carrinho;