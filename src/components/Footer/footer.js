import React from 'react'
import { FooterContainer, Logo } from './styles'
import images from '../../../public/assets/images/images'

export const Footer = () => (
  <FooterContainer>
    <Logo src={images.logo} />
    <a href='#'>Preguntas frecuentes</a>
    <a href='#'>Contáctanos</a>
    <a href='#'>Información</a>
    <p>DocRed © 2019. Todos los derechos reservados</p>
  </FooterContainer>
)
