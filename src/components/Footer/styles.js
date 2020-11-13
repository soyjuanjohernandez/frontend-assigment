import styled from 'styled-components'

export const FooterContainer = styled.footer`
    position:sticky;
    /* bottom:0; */
    z-index:1;
    height:77px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color: white;
    background-color: #1a80c7;
    box-shadow: 0 5px 20px rgba(0, 0, 0, .15);
    padding: 0 45px;
    & a{
        text-decoration:none;
        color:#ffffff;
        transition: all .3s;
    }
    & a:last-child{
       opacity:.7
    }
    & a:hover{
       opacity:.7
    }
    & a:active{
       opacity:1
    }
`

export const Logo = styled.img`

`
