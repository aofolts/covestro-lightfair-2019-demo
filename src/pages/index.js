import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import logoSrc from '../images/logo.png'
import Materials from './covestro-materials'
import DesignSolutions from './design-solutions'
import {useState} from 'react'

const videoWidth = '1100px'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${props => props.theme.padding.small} auto;
  width: ${videoWidth};
`

const Logo = styled.img`
  width: 15rem;
  height: 15rem;
  margin-left: ${props => props.theme.padding.medium};
`

const Headline = styled.h1`
  font-size: 3rem;
  margin-bottom: 0;
  text-transform: uppercase;
  color: ${props => props.theme.color.grey.darkest};
`

const Pink = styled.span`
  color: ${props => props.theme.color.pink};
  font-weight: 500;
`

const VideoContainer = styled.div`
  width: ${videoWidth};
  margin-left: auto;
  margin-right: auto;
`

const IFrameContainer = styled.div`
  padding-bottom: 56.25%;
  background: grey;
`

const Video = styled.iframe`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  height: 100%;
  background: grey;
`

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Index = ({
  className,
  setActivePageSlug
}) => {
  const navItems = data.categories.map(item => {
    const handleClick = () => {
      setActivePageSlug(item.slug)
    }

    return (
      <NavItem key={item.slug} onClick={handleClick} item={item}>
        <NavItemTitle>{item.title}</NavItemTitle>
      </NavItem>
    )
  })

  return (
    <div className={className}>
      <Layout>
        <Main>
          <Header>
            <Headline>Thermally Conductive <Pink>Makrolon®</Pink> provides innovative, cost-saving solutions</Headline>
            <Logo src={logoSrc}/>
          </Header>
          <VideoContainer>
            <IFrameContainer>
              <Video/>
            </IFrameContainer>
          </VideoContainer>
          <Nav>
            {navItems}
          </Nav>
        </Main>
      </Layout>
    </div>
  )
}

const pages = {
  'covestro-materials': Materials,
  'design-solutions': DesignSolutions,
  'index': Index
}

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

data.categoriesBySlug = data.categories.reduce((obj,item) => {
  obj[item.slug] = item

  return obj
})

const Nav = styled.nav`
  padding-top: 0;
  display: flex;
`

const NavItem = styled.div`
  padding: ${props => props.theme.padding.mediumSmall} ${props => props.theme.padding.small};
  text-align: center;
  background: ${props => props.theme.color.grey.lightest};
  display: block;
  margin: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:after {
    position: absolute;
    left: 0;
    top: 0;
    background: ${props => props.theme.color[props.item.color]};
    content: '';
    height: 10px;
    width: 100%;
  }
`

const NavItemTitle = styled.div`
  font-size: 2.2rem;
  color: ${props => props.theme.color.grey.darkest};
`

const PageWrapper = styled.div`
  pointer-events: ${props => props.slug === props.activePageSlug ? 'default' : 'none'};
  opacity: ${props => props.slug === props.activePageSlug ? '100%' : '0'};
  ${props => console.log(props.activePageSlug)}
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`

const UnstyledIndexPage = ({
  className
}) => {
  const [activePageSlug,setActivePageSlug] = useState('index')

  const pagesRenderer = () => Object.keys(pages).map(slug => {
    const Page = pages[slug]

    const props = {
      activePageSlug,
      setActivePageSlug,
      slug
    }

    return (
      <PageWrapper {...props} key={slug}>
        <Page {...props}/>
      </PageWrapper>
    )
  })

  return (
    <div className={className}>
      {pagesRenderer()}
    </div>
  )
}

const IndexPage = styled(UnstyledIndexPage)`
  
`

export default IndexPage 