import React from 'react';

import * as S from './styles';

class Button extends React.Component{
    render(){
        return(<>
            <S.InputTextField>
                {props.title}
            </S.InputTextField>
        </>)
    }
}

export default Button;