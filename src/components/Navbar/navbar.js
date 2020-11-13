import React from 'react'
import { NavContainer, Logo, SearchBar, Home, LeftTools, RightTools, Notifications, User, Config } from './styles'
import images from '../../../public/assets/images/images'

export const Navbar = () => (
  <NavContainer>
    <LeftTools>
      <Logo src={images.logo} />
      <SearchBar>
        <label for='search'>
          <img src={images.search} alt='Buscar' />
        </label>
        <input id='search' type='text' placeholder='¿Qué estás buscando?' name='search' />
      </SearchBar>
      <Home>
        <img src={images.home} alt='Inicio' />
        <span>Inicio</span>
        <img src={images.down} alt='Ir a inicio' />
      </Home>
    </LeftTools>
    <RightTools>
      <Notifications type='button'>
        <img src={images.bell} alt='Notificaciones' />
        <span>1</span>
      </Notifications>
      <User>
        <img src={images.face} alt='Usuario' />
        <img src={images.down} alt='Ir a usuario' />
      </User>
      <Config>
        <img src={images.cog} alt='Configuración' />
      </Config>
    </RightTools>

  </NavContainer>
)
