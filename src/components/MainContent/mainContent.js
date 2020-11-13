import React from 'react'
import { Article } from '../Article/article'
import { ArticlesList } from '../ArticlesList/ArticleList'
import { MainContainer, Image } from './styles'

export const MainContent = () => (
  <MainContainer>
    <Article />
    <ArticlesList />
  </MainContainer>
)
