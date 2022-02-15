import React from 'react';

//css
import * as S from './styles';

class ProdutoNav extends React.Component{
    render(){
        return(<>
            <S.Container>
                <h3>Categoria</h3>
                <ul>
                    <li><a href="#"><b>></b> Satélites antigos</a></li>
                    <li><a href="#"><b>></b> Roupas espaciais</a></li>
                    <li><a href="#"><b>></b> Camisetas com estampas espaciais</a></li>
                    <li><a href="#"><b>></b> Viagens espaciais</a></li>
                    <li><a href="#"><b>></b> Meteoritos / Aerolitos como pedras preciosas</a></li>
                    <li><a href="#"><b>></b> Brinquedos e produtos infantis temáticos</a></li>
                    <li><a href="#"><b>></b> Nave / Foguetes / Ônibus espaciais</a></li>
                </ul>
            </S.Container>
        </>)
    }
}


export default ProdutoNav;