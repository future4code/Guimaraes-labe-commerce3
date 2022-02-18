import React,{ useState } from 'react';

import styled from 'styled-components';
import LogoAmazon from '../../assets/logo-amazon'
import IconeLupa from '../../assets/icone-lupa'

//icon
import { BsFillCartCheckFill } from 'react-icons/bs';


const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    width: auto;
    height: 70px;
    border: 1px solid black;
    background-color: #6D6DF2;
    padding: 1em

    
`;

const Logo = styled.div`
    display: flex;
    padding: 1px 0;

    img{
        height: 60px;
        width: 70px;
    }
    

    
`;

const Pesquisa = styled.div`
    display: flex;
    height: 35px;
    padding: 18px 0;
    border-radius: 0.5em; 
    justify-content: space-between;

    img{
        height: 20px;
        width: 20px;
    }

    button{
        background-color: #6700D9;
        border: 1px solid #1E0040;
        border-radius: 0.2em;
    }

    input{
        width: 400px;
        border: 1px solid #1E0040;
        border-radius: 0.2em;
    }
`;


const CarrinhoCompras = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    justify-content: right;
    padding-right: 20px;
    height: 50px;
    padding-top: 16px;
 
`;



class Header extends React.Component{
    render(){
        const item = localStorage.getItem('itemCarrinho');
        return(<>
            <Container className='header'>
                    <Logo className='logo'>
                        <img src={LogoAmazon}/>
                    </Logo>

                    <Pesquisa className='pesquisa'>
                        <input type="search" name='pesquisa' id='pesquisa' method="submit" placeholder='Faça sua busca' required/>
                        <button><img src={IconeLupa}/> </button> 
                        <p>Preço:</p>
                        <button></button>   
                        <button></button>        
                    </Pesquisa>

                    <CarrinhoCompras className='carrinho'>
                        <strong>{item? item : 0 }</strong>
                        <a href='#'><BsFillCartCheckFill size={40}/></a>
                    </CarrinhoCompras>
            </Container>
        </>)
    }
}

export default Header;