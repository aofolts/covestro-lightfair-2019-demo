import React, { useState } from 'react'
import styled from 'styled-components'

const Title = styled.div`
  color: ${props => props.theme.color[props.color]};
  font-size: ${props => props.theme.padding.small};
  font-weight: 500;
  margin-right: ${props => props.theme.padding.small};
`
const Descriptor = styled.div`
  font-size: 2rem;
  font-weight: 500;
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
`

const SubTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: ${props => props.theme.padding.small};
`

const Copy = styled.div`
  font-size: 1.6rem;
`

const Body = styled.div`
  display: ${props => props.isOpen === true ? 'flex' : 'none'};
  padding: ${props => props.theme.padding.small};
  justify-content: space-between;
  font-size: 2rem;

  & li {
    list-style-type: disc;
    font-size: 2rem;
  }
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
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
`

const UnstyledAccordian = ({
  className,
  color,
  item
}) => {
  const [isOpen,setIsOpen] = useState(false)

  const handleClick = e => {
    setIsOpen(!isOpen)
  }

  const graphic = () => {
    if (!item.graphic) return null

    return <Graphic src={item.graphic}/>
  }

  const image = () => {
    if (!item.image) return null

    return <Image src={item.image}/>
  }

  return (
    <div className={className}>
      <Header onClick={e => handleClick(e)}>
        <Nav>
          <Title color={color}>{item.title}</Title>
          <Descriptor>{item.descriptor}</Descriptor>
        </Nav>
        <Toggle isOpen={isOpen}/>
      </Header>
      <Body isOpen={isOpen}>
        <TextContent>
          <SubTitle>{item.subTitle}</SubTitle>
          <Copy dangerouslySetInnerHTML={{__html: item.content}}/>
          {graphic()}
        </TextContent>
        <ImageContainer>
          {image()}
        </ImageContainer>
      </Body>
    </div>
  )
}

const Accordian = styled(UnstyledAccordian)`
  border-bottom: 2px solid ${props => props.theme.color.grey.light};
`

export default Accordian