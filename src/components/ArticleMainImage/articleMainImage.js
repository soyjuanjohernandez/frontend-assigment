import React from 'react'
import Button from '../Button/button'
import { ArticleContainer, MainImage } from './styles'

const ArticleMainImage = ({ children, url }) => (

  <MainImage>
    {children}
    {url && <img src={url} />}
  </MainImage>

)

export default ArticleMainImage
