import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.header`
  text-align: center;
  padding-top: 50px;
`

function Header() {
  return (
    <HeaderStyled>
      <h1>FlahCardGame</h1>
    </HeaderStyled>
  )
}

export default Header
