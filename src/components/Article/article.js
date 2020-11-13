import React, { useEffect } from 'react'
import Button from '../Button/button'
import TagLabel from '../TagLabel/tagLabel'
import ArticleMainImage from '../ArticleMainImage/articleMainImage'
import images from '../../../public/assets/images/images'
import { ArticleContainer, ArticleTitle, ArticleInfo, Categories } from './styles'
import Category from '../Category/category'
import { content } from '../../../public/assets/article.json'

export const Article = () => (
  <ArticleContainer>

    <ArticleMainImage url={images.bacterium}>
      <TagLabel text='noticia' />
    </ArticleMainImage>

    <ArticleTitle>
      <h2>Lorem ipsum dolor: Volutpat consequat </h2>
      <Button text='Guardar' />
    </ArticleTitle>

    <ArticleInfo>
      <img src={images.news} alt='info' />
      <div>
        <h4>Noticias DocRed</h4>
        <span>Hace 12h | </span>
        <span>Publicado: 17/01/18 | </span>
        <span>Lectura: 3 min.</span>
      </div>
    </ArticleInfo>

    <Categories>
      <Category text='Medicina interna' />
      <Category text='Pediatría' />
      <Category text='Obstetricia' />
    </Categories>

  </ArticleContainer>
)
