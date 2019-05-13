import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: ${props => props.theme.padding.medium};
`
const PlaceholderHeader = styled.header`
  opacity: 0;
`

const Title = styled.h1`
  font-size: 2.5px;
  margin-bottom: ${props => props.theme.padding.mediumSmall};
  color: ${props => props.theme.color.grey.medium};
`

const UnstyledSubPageHeader = ({
  className,
  children,
  title
}) => {
  return (
    <div className={className}>
      <Header>
        <Title>{title}</Title>
        {children}
      </Header>
      <PlaceholderHeader>
        <Title>{title}</Title>
        {children}
      </PlaceholderHeader>
    </div>
  )
}

const SubPageHeader = styled(UnstyledSubPageHeader)`
  
`

export default SubPageHeader