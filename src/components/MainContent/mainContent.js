import React from 'react'
import { Article } from '../Article/article'
import { ArticlesList } from '../ArticlesList/ArticleList'
import { Footer } from '../Footer/footer'
import { MainContainer, MainBody } from './styles'

export const MainContent = () => (
  <MainContainer>
    <MainBody>
      <Article />
      <ArticlesList />
    </MainBody>
    <Footer />
  </MainContainer>
)
