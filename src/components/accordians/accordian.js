import React, { useState,useEffect } from 'react'
import styled from 'styled-components'

const Title = styled.div`
  color: ${props => props.theme.color[props.color]};
  font-size: ${props => props.theme.padding.small};
  font-weight: 500;
  margin-right: ${props => props.theme.padding.mediumSmall};
`
const Descriptor = styled.div`
  font-size: 18px;
  font-weight: 400;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  background: ${props => props.theme.color.grey.lightest};
  padding: ${props => props.theme.padding.small};
  justify-content: space-between;
`

const TextContent = styled.div`
  width: 50%;
  padding-right: ${props => props.theme.padding.small};
  font-size: 18px;
  margin-bottom: ${props => props.theme.padding.small};

  p {
    font-size: 18px;
  }

  b {
    font-weight: 500;
    color: ${props => props.theme.color.pink};
  }
`

// const SubTitle = styled.div`
//   font-size: 1.8px;
//   font-weight: 500;
//   margin-bottom: ${props => props.theme.padding.small};
// `

const Copy = styled.div`
  font-size: 16px;
`

const Body = styled.div`
  transition: max-height .2s ease-in-out;
  max-height: ${props => props.isOpen === true ? '1000px' : '0'};
  overflow: hidden;
  font-size: 18px;

  & li {
    list-style-type: disc;
    font-size: 18px;

    & + li {
      margin-top: 10px;
    }
  }
`

const HalfWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

const Nav = styled.div`
  display: flex;
  align-items: center;
`

const Toggle = styled.div`
  width: ${props => props.theme.padding.extraSmall};
  height: ${props => props.theme.padding.extraSmall};
  border: 2px solid ${props => props.theme.color.grey.medium};
  border-width: 2px 2px 0 0;
  transform: ${props => props.isOpen ? `translateY(20%) rotate(-45deg)` : `translateY(-10%) rotate(135deg)`};
`

const Graphic = styled.img`
  width: 100%;
`

const ImageContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const HalfImage = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`

const Image = styled.img`
  width: 100%;
  display: block;
`

const TopImage = styled(Image)`
  margin-bottom: ${props => props.theme.padding.small};
`


const LearnMore = styled.a`
  text-decoration: underline;
  font-size: 18px;
  display: block;
`

const Content = styled.div`
  padding: ${props => props.theme.padding.small};
`

const UnstyledAccordian = ({
  className,
  color,
  item,
  activePageSlug,
  ...rest,
}) => {
  const [isOpen,setIsOpen] = useState(rest.isOpen)

  const handleClick = e => {
    setIsOpen(!isOpen)
  }

  const graphic = () => {
    if (!item.graphic) return null

    return <Graphic src={item.graphic}/>
  }

  const image = () => {
    if (!item.image) return null

    return <HalfImage src={item.image}/>
  }

  const link = () => {
    if (!item.link) return null

    else return (
      <LearnMore href={item.link} target='__blank'>Click here to learn more</LearnMore>
    )
  }

  const topImage = () => {
    if (!item.topImage) return null

    return <TopImage src={item.topImage}/>
  }

  const bottomImage = () => {
    if (!item.bottomImage) return null

    return <Image src={item.bottomImage}/>
  }

  const leftImage = () => {
    if (!item.leftImage) return null

    return <HalfImage src={item.leftImage}/>
  }

  const rightImage = () => {
    if (!item.rightImage) return null

    return <HalfImage src={item.rightImage}/>
  }

  const images = () => {
    if (!item.images) return null

    return item.images.map(src => {
      return <Image src={src} key={src}/>
    })
  }

  useEffect(() => {
    if (activePageSlug === 'index' && isOpen === true) setIsOpen(false)
  })

  return (
    <div className={className}>
      <Header onClick={e => handleClick(e)}>
        <Nav>
          <Title color={color}>{item.title}</Title>
          <Descriptor>{item.subTitle}</Descriptor>
        </Nav>
        <Toggle isOpen={isOpen}  activePageSlug={activePageSlug}/>
      </Header>
      <Body isOpen={isOpen} activePageSlug={activePageSlug}>
        <Content>
          {topImage()}
          <HalfWrap>
            <TextContent>
              <Copy dangerouslySetInnerHTML={{__html: item.content}}/>
              {graphic()}
              {leftImage()}
            </TextContent>
            <ImageContainer>
              {image()}
              {link()}
              {rightImage()}
            </ImageContainer>
          </HalfWrap>
          {bottomImage()}
          {images()}
        </Content>
      </Body>
    </div>
  )
}

const Accordian = styled(UnstyledAccordian)`
  border-bottom: 2px solid ${props => props.theme.color.grey.light};
`

export default Accordian