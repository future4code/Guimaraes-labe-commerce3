import React from 'react';

import * as S from './styles';

class Button extends React.Component{
    render(){
        return(<>
            <S.ButtonTextField>
                {this.props.children}
            </S.ButtonTextField>
        </>)
    }
}

export default Button;