import React from 'react'
import { MainContent } from './components/MainContent/mainContent'
import { Navbar } from './components/Navbar/navbar'
import { GlobalStyle } from './globalStyles'

export const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <MainContent />

  </>
)
