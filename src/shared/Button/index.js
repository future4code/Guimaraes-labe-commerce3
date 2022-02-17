import React from 'react';

import * as S from './styles';

class Button extends React.Component{
    render(){
        return(<>
            <S.ButtonTextField onClick={this.props.onClick}>
                {this.props.children}
            </S.ButtonTextField>
        </>)
    }
}

export default Button;