import styled from 'styled-components'

export const CategoryContainer = styled.a`
  display: flex;
  align-items:center;
  justify-content:center;
  background-color:#f4f8fc;
  color: #1a80c7;
  border-radius:4px;
  height:30px;
  padding:6px 10px;
  min-width:100px;
  transition: all .3s;
  margin-left:15px;
  cursor: pointer;
  &:hover{
    box-shadow: 0px 0px 15px #D4EDFF;
  }
  &:active{
    box-shadow: initial;
  }
  & p{
    font-size:12px;
    font-weight:600;
  }

`
