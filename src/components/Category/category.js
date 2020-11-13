import React from 'react'
import { CategoryContainer, MainImage } from './styles'

const Category = ({ text, handleClick }) => (
  <CategoryContainer>
    <p>{text || 'Category'}</p>
  </CategoryContainer>
)

export default Category
