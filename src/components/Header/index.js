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
    padding: 15px 0;
    border-radius: 0.5em; 
    justify-content: center;

    img{
        height: 20px;
        width: 20px;
    }
`;


const CarrinhoCompras = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    justify-content: right;
    padding-right: 50px;
    height: 50px;
    padding-top: 30px;
/* 
    margin: 5px;
    padding: 5px; */
    /* height: 20em; */
 
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
                        <input type="texto" name='pesquisa' id='pesquisa' placeholder='Faça sua busca' required/>
                        <button><img src={IconeLupa}/> </button>            
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