import styled from 'styled-components';


export const Nav = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    background-color:pink;
    width:100%;
    padding:0 50px;
    ul{
        height:70px;
        width:100%;
        list-style:none;
        display:flex;
        align-items:center;
        li{
            padding:0 20px;
            a{
                text-decoration:none;
                font-family:'verdana';
                font-size:18px;
            }
        }
        
    }
`
export const Logo = styled.div`
    font-size:24px;
    color:#fff;
    padding-right:100px;
    a{
        text-decoration:none;
        font-family:'verdana';
        
    }
`