import React from 'react'
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
`

const TextContent = styled.div`
  
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
`

const Nav = styled.div`
  display: flex;
  align-items: center;
`

const Toggle = styled.div`
  
`

const UnstyledAccordian = ({
  className,
  color,
  item
}) => {
  return (
    <div className={className}>
      <Header>
        <Nav>
          <Title color={color}>{item.title}</Title>
          <Descriptor>{item.descriptor}</Descriptor>
        </Nav>
        <Toggle/>
      </Header>
      <Body>
        <TextContent>
          <SubTitle>{item.subTitle}</SubTitle>
          <Copy>{item.copy}</Copy>
        </TextContent>
      </Body>
    </div>
  )
}

const Accordian = styled(UnstyledAccordian)`
  border-bottom: 2px solid ${props => props.theme.color.grey.light};
`

export default Accordian