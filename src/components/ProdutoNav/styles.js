import styled from 'styled-components';


export const Container = styled.div`
    position: relative;
    top: 5%;
    border: 1px solid black;

    width: 250px;
    height: 1150px;

    margin-left: 10px;

    border: 1px solid teal;
    border-radius: 5px;
    box-shadow: 5px -3px teal;

    a{
        text-decoration: none;
        color: black;
    }

    a:hover{
        color: blue;
        font-size: 17px;
    }

    li{
      list-style: none;  
    }

    h3{
        margin-left: 10px;
    }

    b{
        font-size: 19px;
    }
`;