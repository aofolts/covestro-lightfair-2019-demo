import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import logoSrc from '../images/logo.png'
import {Link} from 'gatsby'

const Header = styled.header`
  padding: ${props => props.theme.padding.medium};
  text-align: center;
`

const Logo = styled.img`
  width: 15rem;
  padding-bottom: ${props => props.theme.padding.mediumSmall};
`

const Headline = styled.h1`
  font-size: 3rem;
  margin-bottom: 0;
`

const data = {
  categories: [
    {
      slug: 'design-solutions',
      title: 'Consolidated Design Solutions',
      shortTitle: 'Design Solutions',
      color: 'blue'
    },
    {
      slug: 'covestro-materials',
      title: 'Covestro Materials',
      shortTitle: 'Design Solutions',
      color: 'green'
    },
    {
      slug: 'case-studies',
      title: 'Value Proposition Case Studies',
      shortTitle: 'Value Proposition Case Studies',
      color: 'yellow'
    },
    {
      slug: 'design-considerations',
      title: 'Design Considerations',
      shortTitle: 'Design Considerations',
      color: 'orange'
    },
    {
      slug: 'applications',
      title: 'Applications',
      shortTitle: 'Applications',
      color: 'pink'
    }
  ]
}

const Nav = styled.nav`
  padding: ${props => props.theme.padding.medium};
  padding-top: 0;
`

const NavItem = styled(Link)`
  padding: ${props => props.theme.padding.small} ${props => props.theme.padding.medium};
  background: ${props => props.theme.color.grey.lightest};
  display: block;
  margin: ${props => props.theme.padding.extraSmall};
  display: flex;
  justify-content: space-between;

  &:after {
    position: absolute;
    left: 0;
    top: 0;
    background: ${props => props.theme.color[props.item.color]};
    content: '';
    width: 15px;
    height: 100%;
  }
`

const NavItemTitle = styled.div`
  font-size: ${props => props.theme.padding.mediumSmall};
`

const NavItemArrow = styled.div`
  font-size: ${props => props.theme.padding.mediumSmall};
`

const navItems = data.categories.map(item => {
  return (
    <NavItem key={item.slug} to={`/${item.slug}`} item={item}>
      <NavItemTitle>{item.title}</NavItemTitle>
      <NavItemArrow>→</NavItemArrow>
    </NavItem>
  )
})

const UnstyledIndexPage = ({
  className
}) => {
  return (
    <div className={className}>
      <Layout>
        <main>
          <Header>
            <Logo src={logoSrc}/>
            <Headline>PCS SOLUTIONS FOR HEAT MANAGEMENT IN LIGHTING</Headline>
          </Header>
          <Nav>
            {navItems}
          </Nav>
        </main>
      </Layout>
    </div>
  )
}

const IndexPage = styled(UnstyledIndexPage)`
  
`

export default IndexPage 