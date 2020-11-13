import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items:center;
  justify-content:center;
  background-color:#65b32e;
  color: #ffffff;
  border-top-left-radius:12px;
  border-bottom-right-radius:12px;
  height:28px;
  padding:6px 10px;
  width:100px;
  transition: all .3s;
  cursor: pointer;
  &:hover{
    box-shadow: 0px 0px 15px rgba(119, 216, 50, 1);
  }
  &:active{
    box-shadow: initial;
  }
  & p{
    font-size:12px;
    font-weight:600;
  }

`
