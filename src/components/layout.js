import React from 'react'
import styled,{ThemeProvider} from 'styled-components'
import theme from './theme'
import Helmet from 'react-helmet'

const Main = styled.main`
`

const UnstyledLayout = ({
  className,
  children
}) => {
  return (
    <div className={className}>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/vuh7fwm.css"/>
      </Helmet>
      <ThemeProvider theme={theme} className={className}>
        <Main>
          {children}
        </Main>
      </ThemeProvider> 
    </div>
  )
}

const Layout = styled(UnstyledLayout)`
  
`

export default Layout