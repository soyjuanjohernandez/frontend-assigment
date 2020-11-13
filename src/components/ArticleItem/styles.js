import styled from 'styled-components'

export const ItemContainer = styled.a`
  display: flex;
  position:relative;
  width:100%;
  padding: 0px 15px;
  border-bottom: 1px solid #edebeb;
  transition: all .3s;
  cursor:pointer;
  & hr{
    border-top: 1px solid #edebeb
 }
 &:hover{
   opacity:.7
 }
 &:active{
   opacity:1
 }
`
export const ImageContainer = styled.div`
  & img + div{
    left: 16px;
    top: 25px;
}
`

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 6px;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 127px;
  width: 127px;
  min-width: 127px;
  min-height: 127px;
`
export const ItemInfo = styled.div`
 font-size:14px;

 & p:last-child{
   color:#9d9d9d;
   font-weight:500;
   font-size:13px
 }
`
export const ItemRight = styled.div`
 margin:15px;
`
export const ItemIcons = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-around;
  & div{
    display:flex;
    align-items:center;
   width:100%;
  }
  & img{
    width:20px;
  }
  & span{
    color:#9d9d9d;
   font-weight:500;
   font-size:13px;
   margin-left:5px;
  }

`
