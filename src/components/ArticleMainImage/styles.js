import styled from 'styled-components'

export const MainImage = styled.div`
    overflow: hidden;
    position: relative;
    background: linear-gradient(41deg, rgb(33, 164, 251) 0%, rgb(11, 200, 177) 100%);
    object-fit: cover;
    max-width: 100%;
    height: 533px;
    & img{
      width: 100%;
      height: auto;
    }
`
