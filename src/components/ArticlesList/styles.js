import styled from 'styled-components'

export const ListContainer = styled.div`
  overflow: auto;
  width: 25%;
  margin-left:30px;
  @media (max-width: 768px) {
    display:none
  }

  
`
export const List = styled.ul`
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    height: inherit;
    padding-top:15px;
`
export const ListTitle = styled.div`
   display:flex;
   align-items:center;
   justify-content:space-between;
   color:#1a80c7;
   margin-bottom:20px;
   & div{
    height: 1px;
    width: 39%;
    background-color: rgb(26, 128, 199);
   }
   & h4{
      margin:0;
    }
`

export const Item = styled.li`
  display:flex;
  flex-direction: column;
  height:162px;
`
