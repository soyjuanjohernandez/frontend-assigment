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
export const ArticleContent = styled.div`
  font-weight: 500;
  margin-top: 40px;
  padding: 0 15px;
  & p{
    margin: 30px 0px;
    line-height: 1.7;
    text-align: justify;
  }

`
export const ArticleActions = styled.div`
     display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-around;
    max-width: 577px;
    min-width:316px;
    width: 65%;
    border-top-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border: 2px solid rgb(26, 128, 199);
    padding: 8px 10px;
    margin: 0 auto;
    cursor: pointer;
    & button{
      display: flex;
      align-items: center;
      transition: all 0.3s;
      cursor: pointer;
      &:hover{
        opacity:.7
      }
      &:active{
        opacity:1
      }
      & img{
      width:20px;
      margin-right:10px;
      }
    }
    & span{
      color: #9d9d9d;
    }

`
