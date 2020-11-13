import React from 'react'
import { TagContainer, MainImage } from './styles'

const TagLabel = (props) => (
  <TagContainer>
    <p>{props.text}</p>
  </TagContainer>
)

export default TagLabel
