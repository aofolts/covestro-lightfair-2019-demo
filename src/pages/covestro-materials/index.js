import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout'
import AccordianLayout from '../../components/accordians/index'

import tc8030 from './materials/tc8030'
import tc8010 from './materials/tc8010'
import tc611 from './materials/tc611'
import tc110 from './materials/tc110'

const data = {
  solutions: [
    tc8030,
    tc8010,
    tc611,
    tc110
  ]
}

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  padding: 0 ${props => props.theme.padding.medium};
  height: ${props => props.theme.padding.large};
  display: flex;
  align-items: center;
`

const Title = styled.div`
 font-size: 2.5rem;
 color: ${props => props.theme.color.green}; 
`

const Pad = styled.div`
  height: ${props => props.theme.padding.medium};
`

const UnstyledPage = ({
  className
}) => {
  return (
    <div className={className}>
      <Layout>
        <Header>
          <Title>Materials</Title>
        </Header>
        <Pad/>
        <AccordianLayout items={data.solutions} color='pink'/>
      </Layout>
    </div>
  )
}

const Page = styled(UnstyledPage)`
  
`

export default Page 