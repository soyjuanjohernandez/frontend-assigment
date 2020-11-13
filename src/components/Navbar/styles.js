import styled from 'styled-components'

export const NavContainer = styled.nav`
    position:sticky;
    top:0;
    left:0;
    height:77px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color: white;
    background-color: #1a80c7;
    box-shadow: 0 5px 20px rgba(0, 0, 0, .15);
    padding: 0 45px
`

export const Logo = styled.img`

`
export const SearchBar = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
background-color: white;
    border-top-left-radius: 13px;
    border-bottom-right-radius: 13px;
    height: 37px;
    width: 332px;
    & label{
        height: 100%;
        width: 38px;
        border-right: 3px solid #1a80c7;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition:all .3s;
        & img{
            width:20px
        }
    }
    & label:hover{
        box-shadow: 0 5px 10px rgba(0, 0, 0, .3)
    }
    & label:active{
        box-shadow: initial
    }
    & input{
        width: 85%;
        border-color: transparent;
        outline: transparent;
        padding: 8px 10px;
        border-bottom-right-radius: 13px;
    }
`
export const LeftTools = styled.div`
    max-width: 700px;
    width: 700px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Home = styled.a`
    width:100px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    cursor: pointer;
    transition: all .3s;
    &:hover{
        opacity:.7;
    }
    &:active{
        opacity:1;
    }
    & img{
        width:20px
    }
    & img:last-child{
        width:14px
    }
`

export const RightTools = styled.div`
    width:230px;
    height:53px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border-left: 1px solid rgba(255, 255, 255, .5);
    & img{
        width:20px;
    }
`
export const Notifications = styled.button`

    height:53px;
    position: relative;
    display:flex;
    align-items:center;
    cursor: pointer;
    transition: all .3s;
    &:hover{
        opacity:.7;
    }
    &:active{
        opacity:1;
    }
    & img{
        width:20px;
    }
    & span{
        position: absolute;
        top: 5px;
        right: -9px;
        display: flex;
        align-items: center;
        justify-content: center;
        color:#ffffff;
        background-color: rgb(101, 179, 46);
        min-width: 20px;
        min-height: 20px;
        border-radius: 50%;
        font-size: 12px;
        font-weight: 600;
        padding: 0 4px;
    }
`

export const User = styled.button`
    width:52px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    cursor: pointer;
    transition: all .3s;
    &:hover{
        opacity:.7;
    }
    &:active{
        opacity:1;
    }
    & img:first-child{
        width:34px;
        border-radius:50%;
        border:2px solid #ffffff;
        margin-right:5px
    }
    & img:last-child{
        width:14px;
    }
`
export const Config = styled.a`
    display:flex;
    align-items:center;
    cursor:pointer;
    transition: all .3s;
    &:hover{
        opacity:.7;
    }
    &:active{
        opacity:1;
    }
    & img{
        width:25px;
    }
`
