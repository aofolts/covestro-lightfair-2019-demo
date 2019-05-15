import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout'
import CostAnimation from './cost-animation.gif'
import CostBottom from './cost-bottom.jpg'
import CostTop from './cost-top.jpg'
import Thermal from './thermal.jpg'
import WeightAnimation from './weight-animation.gif'
import WeightTop from './weight-top.jpg'
import WeightBottom from './weight-bottom.jpg'

const data = {
  caseStudies: [
    {
      title: 'Thermal Performance',
      color: 'pink',
      description: '1',
      videoKey: '235337101',
      images: [
        Thermal
      ]
    },
    {
      title: 'Cost Savings',
      color: 'pink',
      description: '2',
      videoKey: '233971214',
      images: [
        CostTop,
        CostAnimation,
        CostBottom
      ]
    },
    {
      title: 'Weight Savings',
      color: 'yellow',
      description: '3',
      videoKey: '212869493',
      images: [
        WeightTop,
        WeightAnimation,
        WeightBottom
      ]
    },
  ]
}

const Header = styled.header`
  padding: ${props => props.theme.padding.small};
  padding-bottom: 0;
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  border-bottom: 2px solid ${props => props.theme.color.grey.lighter};
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: ${props => props.theme.padding.small};
`

const CaseStudy = styled.div`
  display: ${props => props.activeItemIndex === props.index ? 'block' : 'none'};
`

const Title = styled.h1`
  font-size: 20px;
  margin-bottom: ${props => props.theme.padding.small};
  color: ${props => props.theme.color.grey.darkest};
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
  margin-bottom: 0;
  font-size: 20px;

  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${
      props => props.index === props.activeItemIndex 
        ? props.theme.color.yellow
        : '#999'
    };
    content: '';
    width: 100%;
    height: 7px;
  }
`

const NavMenu = styled.div`
  display: flex;
`

const NavItemTitle = styled.div`
  font-weight: 500;
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

const NavWrap = styled.div`
  width: 100%;
`

const Image = styled.img`
  width: 100%;
`

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 130px;
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

  const navItems = data.caseStudies.map((item,index) => {
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

  const caseStudies = () => {
    return data.caseStudies.map((item,index) => {
      const props = {
        activeItemIndex,
        index,
        key: index
      }

      const images = () => {
        return item.images.map(src => {
          return <Image src={src} key={src}/>
        })
      }

      return (
        <CaseStudy {...props}>
          {images()}
        </CaseStudy>
      )
    })
  }

  return (
    <div className={className}>
      <Layout>
        <Header>
          <Title>Value Proposition Case Studies</Title>
          <NavWrap>
            <Nav>
              <NavMenu>
                {navItems}
              </NavMenu>
              <Exit onClick={() => setActivePageSlug('index')}>
                <LeftExitLine/>
                <RightExitLine/>
              </Exit>
            </Nav>
          </NavWrap>
        </Header>
        <Main>
          <VideoSection>
            <Content>
              {caseStudies()}
            </Content>
          </VideoSection>
        </Main>
      </Layout>
    </div>
  )
}

const IndexPage = styled(UnstyledIndexPage)`
  
`

export default IndexPage 