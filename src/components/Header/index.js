import React,{ useState } from 'react';

import styled from 'styled-components';
import LogoAmazon from '../../assets/logo-amazon'
import IconeLupa from '../../assets/icone-lupa'

//icon
import { BsFillCartCheckFill, BsSearch } from 'react-icons/bs';


const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    width: auto;
    height: 100px;
    border: 1px solid black;
    background-color: #6D6DF2; 
    border-radius: 5px;
    border-style: none;

    
`;

const Logo = styled.div`
    display: flex;
    padding: 20px 50px 20px 50px;

    width: 96.03px;
    height: 60px;
`;

const Pesquisa = styled.div`
    display: flex;
    height: 40px;
    padding: 30px 0;
    border-radius: 0.5em; 
    justify-content: center;

    img{
        height: 20px;
        width: 20px;
    }

    input{
        width: 500px;
        border-radius: 5px;
        border-style: none;
        padding-left: 30px;
    }

    button{
        width: 50px;
        border-radius: 5px;
        border-style: none;
        margin-left: 3px;

        :hover{
            background-color: grey;
        }
    }
`;


const CarrinhoCompras = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    justify-content: right;
    padding-right: 50px;
    height: 50px;
    padding-top: 25px;

    h3{
        position: absolute;
        padding-right: 50px;
        padding-top: 2px;
        top:10px;
    }

    strong{
        position: absolute;
        top: 10px;
        padding-right: ${props => props.count >= 10? '11px' : '15px' };
        color: white;
    }
 
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
                        <button>< BsSearch size={23}/></button>            
                    </Pesquisa>

                    <CarrinhoCompras className='carrinho' count={item}>
                        
                        <h3>Carrinho</h3> 
                        <strong>{item? item : 0 }</strong>
                        <a href='#'><BsFillCartCheckFill size={40} color={'black'}/></a>
                    </CarrinhoCompras>
            </Container>
        </>)
    }
}

export default Header;