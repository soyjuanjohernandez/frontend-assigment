import styled from 'styled-components'

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius:8px;
  width:75%;
  height: inherit;
  padding:28px;
`
export const ArticleTitle = styled.div`
  display: flex;
  align-items: center;
  border-radius:8px;
  padding:28px 0 10px 28px;
  & button{
    margin-left:60px
  }
`
export const ArticleInfo = styled.div`
  display: flex;
  align-items: center;
  border-radius:8px;
  padding:20px 28px;
  & img{
    height:30px;
    margin-right:15px;
  }
  & h4{
    margin:initial;
  }
  & span{
    color:#9d9d9d;
    font-size:14px;
    font-weight:600
  }

`
export const Categories = styled.div`
  display: flex;
  align-items: center;

`
