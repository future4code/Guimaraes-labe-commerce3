import React,{ useState } from 'react';

import styled from 'styled-components';

//icon
import { BsFillCartCheckFill } from 'react-icons/bs';


const Container = styled.div`
    width: auto;
    height: 70px;

    /* border: 1px solid black; */
    
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
                    <CarrinhoCompras className='carrinho'>
                        <strong>{item? item : 0 }</strong>
                        <a href='#'><BsFillCartCheckFill size={40}/></a>
                    </CarrinhoCompras>
            </Container>
        </>)
    }
}

export default Header;