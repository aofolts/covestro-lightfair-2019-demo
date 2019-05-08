import React,{useState} from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout'
import {Link} from 'gatsby'
import Header from '../../components/header-page'

const data = {
  solutions: [
    {
      title: 'PAR30 Downlight',
      color: 'blue',
      description: '1'
    },
    {
      title: 'In-Mold Assembly',
      color: 'green',
      description: '2'
    },
    {
      title: 'Two Shot Reflector',
      color: 'yellow',
      description: '3'
    },
  ]
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`

const NavItem = styled.div`
  padding: 0 ${props => props.theme.padding.small};
  height: ${props => props.theme.padding.mediumLarge};
  display: flex;
  align-items: center;
  background: ${props => props.theme.color.grey.lightest};
  margin-right: ${props => props.theme.padding.extraSmall};
  font-size: 2rem;

  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${props => props.theme.color[props.index === props.activeItemIndex ? 'pink' : 'blue']};
    content: '';
    width: 100%;
    height: 7px;
  }
`

// const NavItemTitle = styled.div`
//   font-size: ${props => props.theme.padding.mediumSmall};
// `

// const NavItemArrow = styled.div`
//   font-size: ${props => props.theme.padding.mediumSmall};
// `

const NavMenu = styled.div`
  display: flex;
`

const NavItemTitle = styled.div`
  font-weight: 500;
`

const Main = styled.main`
  padding: ${props => props.theme.padding.medium};
`

const VideoContainer = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  background: grey;
`

const Description = styled.div`
  font-size: 1.4rem;
  margin-top: ${props => props.theme.padding.small};
`

const ExitLine = styled.div`
  width: 2px;
  height: 60%;
  background: ${props => props.theme.color.grey.medium};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: ${props => props.theme.color.grey.darkest};
`

const Exit = styled(Link)`
  width: ${props => props.theme.padding.mediumLarge}; 
  height: ${props => props.theme.padding.mediumLarge};
  background: ${props => props.theme.color.grey.lightest};  
`

const LeftExitLine = styled(ExitLine)`
  transform: translate(-50%,-50%) rotate(-45deg);
`

const RightExitLine = styled(ExitLine)`
  transform: translate(-50%,-50%) rotate(45deg);
`

const UnstyledIndexPage = ({
  className
}) => {
  const [activeItemIndex,setActiveItemIndex] = useState(0)

  const navItems = data.solutions.map((item,index) => {
    const onClick = () => setActiveItemIndex(index)

    const itemProps = {
      setActiveItemIndex,
      activeItemIndex,
      onClick
    }

    return (
      <NavItem key={item.title} item={item} index={index} {...itemProps}>
        <NavItemTitle>{item.title}</NavItemTitle>
      </NavItem>
    )
  })

  return (
    <div className={className}>
      <Layout>
        <Main>
          <Header title='Design Solutions'>
            <Nav>
              <NavMenu>
                {navItems}
              </NavMenu>
              <Exit to='/'>
                <LeftExitLine/>
                <RightExitLine/>
              </Exit>
            </Nav>
          </Header>
          <VideoContainer>

          </VideoContainer>
          <Description>{data.solutions[activeItemIndex].description}</Description>
        </Main>
      </Layout>
    </div>
  )
}

const IndexPage = styled(UnstyledIndexPage)`
  
`

export default IndexPage 