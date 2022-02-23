import React,{ useState } from 'react';

import styled from 'styled-components';
import LogoSpace from '../../assets/logo.png'

//icon
import { BsFillCartCheckFill, BsSearch } from 'react-icons/bs';
// import Produto from '../Produto';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    // width: auto;
    // height: auto;
    border: 1px solid black;
    background-color: #22705A; 
    border-style: none;

    
`;

const Logo = styled.div`
    display: flex;
    padding: 20px 50px 20px 50px;

    width: 96.03px;
    height: 80px;

    img{
        display: flex;
        height: 180px;
        width: 180px;

    }
`;

const Pesquisa = styled.div`
    display: flex;
    height: 40px;
    border-radius: 0.5em; 
    justify-content: center;
    border: 1px solid whitesmoke;
    padding: 0.2em;
    top: 50%;
       
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
        width: 30px;
        border-radius: 5px;
        border-style: none;
        margin-left: 1px;
        background-color: white;
        cursor: pointer;
        background: none;
        color: whitesmoke;
        align-items: center;
    :hover{
        background-color: white;
        color: black
        }
    }
`;

const CarrinhoCompras = styled.div`
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

// const MinMax = styled.div`
//         width: 30px;
//         height: 40px;
//         display: flex;

//     p{
//         align-items: center;
//         justify-content: center;
//     }    


// `;



class Header extends React.Component{

    state = {
        carrinho: 0,
        possuiItemNoCarrinho: localStorage.getItem('possuiItemNoCarrinho'),
        gotoCarrinho: this.props.gotoCarrinho,
        isLoading: this.props.isLoading
    }

    handleNavToCarringo = () => {
        localStorage.setItem('gotoCarrinho', true);
        // this.setState({ gotoCarrinho: true })
        // this.setState({ gotoCarrinho: true })
    }

    componentDidMount(){
        // localStorage.setItem('possuiItemNoCarrinho', false);
    }

    componentDidUpdate(){
        // localStorage.setItem('gotoCarrinho', true);
    }

    render(){
        const item = localStorage.getItem('totalItemCarrinho');

        // if(localStorage.getItem('car') === '1'){
        //     return <Produto />
        // }

        return(<>            
            <Container className='header'>
                    <Logo className='logo'>
                        <img src={LogoSpace}/>
                    </Logo>

                    <Pesquisa className='pesquisa'>
                        <input type="texto" name='pesquisa' id='pesquisa' placeholder='Faça sua busca' required/>
                        <button>< BsSearch size={23}/></button>
                                  
                    </Pesquisa>
                    {/* <MinMax>
                        <input type="texto" name='Min' id='pesquisa' placeholder='Min' required/>
                        <p>-</p>
                        <input type="texto" name='Max' id='pesquisa' placeholder='Max' required/>
                    </MinMax> */}

                    <CarrinhoCompras className='carrinho' count={item}>
                        
                        <h3>Carrinho</h3> 
                        <strong>{item}</strong>
                        <a href='' onClick={this.handleNavToCarringo}><BsFillCartCheckFill size={40} color={'black'}/></a>
                    </CarrinhoCompras>
            </Container>
        </>)
    }
}

export default Header;