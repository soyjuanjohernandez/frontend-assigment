import React from 'react'
import { ButtonContainer, MainImage } from './styles'

const Button = ({ text, handleClick }) => (
  <ButtonContainer type='button' onClick={handleClick}>
    <p>{text || 'button'}</p>
  </ButtonContainer>
)

export default Button
