import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  
`

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: ${props => props.theme.padding.mediumSmall};
`

const UnstyledSubPageHeader = ({
  className,
  children,
  title
}) => {
  console.log(title)
  return (
    <div className={className}>
      <Header>
        <Title>{title}</Title>
        {children}
      </Header>
    </div>
  )
}

const SubPageHeader = styled(UnstyledSubPageHeader)`
  
`

export default SubPageHeader