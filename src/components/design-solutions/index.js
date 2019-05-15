import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Layout from '../layout'

const data = {
  solutions: [
    {
      title: 'PAR30 Downlight',
      color: 'blue',
      description: 'Consolidated Downlight Designs',
      videoKey: '334524759'
    },
    {
      title: 'In-Mold Assembly',
      color: 'green',
      description: 'In-Mold Electronics Assembly',
      videoKey: '336116568'
    },
    {
      title: 'Two Shot Reflector',
      color: 'yellow',
      description: 'Thermally Conductive 2K Reflectors',
      videoKey: '336116689'
    },
  ]
}

const Header = styled.header`
  padding: ${props => props.theme.padding.small};
  padding-left: 0;
  padding-top: 0;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: ${props => props.theme.padding.small} 60px;
`

const Video = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: ${props => props.activeItemIndex === props.index ? '100%' : '0'};
  pointer-events: ${props => props.activeItemIndex === props.index ? 'default' : 'none'};
`

const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 0;
  color: ${props => props.theme.color.blue};
`

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const NavItem = styled.div`
  padding: 0 ${props => props.theme.padding.small};
  height: 60px;
  display: flex;
  align-items: center;
  background: ${props => props.theme.color.grey.lightest};
  margin-right: ${props => props.theme.padding.extraSmall};
  font-size: 20px;

  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${
      props => props.index === props.activeItemIndex 
        ? props.theme.color.blue
        : '#999'
    };
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

const VideoContainer = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  background: grey;
`

const Description = styled.div`
  font-size: 14px;
  padding: ${props => props.theme.padding.extraSmall} ${props => props.theme.padding.small};
  padding-left: 0;
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

const Exit = styled.div`
  width: ${props => props.theme.padding.mediumLarge}; 
  height: 60px;
  background: ${props => props.theme.color.grey.lightest};  
  display: block;
`

const LeftExitLine = styled(ExitLine)`
  transform: translate(-50%,-50%) rotate(-45deg);
`

const RightExitLine = styled(ExitLine)`
  transform: translate(-50%,-50%) rotate(45deg);
`

const VideoSection = styled.div`
  
`

const UnstyledIndexPage = ({
  className,
  setActivePageSlug,
  activePageSlug
}) => {
  const [activeItemIndex,setActiveItemIndex] = useState(0)

  useEffect(() => {
    if (activePageSlug === 'index') setActiveItemIndex(0)
  })

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

  const videos = () => {
    return data.solutions.map((item,index) => {
      const videoKey = item.videoKey

      const videoQuery = `loop=1&color=ffffff&title=0&byline=0&portrait=0`

      const props = {
        src: `https://player.vimeo.com/video/${videoKey}?${videoQuery}`,
        frameborder: 0,
        allow: `fullscreen`,
        activeItemIndex,
        index,
        key: index
      }

      return <Video {...props}/>
    })
  }

  return (
    <div className={className}>
      <Layout>
        <Main>
          <Header title='Design Solutions'>
            <Title>Cost Saving Design Solutions</Title>
          </Header>
          <VideoSection>
            <Nav>
              <NavMenu>
                {navItems}
              </NavMenu>
              <Exit onClick={() => setActivePageSlug('index')}>
                <LeftExitLine/>
                <RightExitLine/>
              </Exit>
            </Nav>
            <VideoContainer>
              {videos()}
            </VideoContainer>
            <Description>{data.solutions[activeItemIndex].description}</Description>
          </VideoSection>
        </Main>
      </Layout>
    </div>
  )
}

const IndexPage = styled(UnstyledIndexPage)`
  
`

export default IndexPage 