import React from 'react'
import styled from 'styled-components'
import Layout from '../layout'
import AccordianLayout from '../accordians/index'

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
  border-bottom: 2px solid ${props => props.theme.color.grey.lighter};
  width: 100%;
  justify-content: space-between;
  z-index: 1000;
`

const Title = styled.div`
 font-size: 25px;
 color: ${props => props.theme.color.green}; 
  text-transform: uppercase;
`

const Pad = styled.div`
  height: ${props => props.theme.padding.medium};
`

const Main = styled.div`
  padding: ${props => props.theme.padding.medium};
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`

const Exit = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.color.grey.lightest};

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%) rotate(-45deg);
    width: 2px;
    height: 60%;
    background: ${props => props.theme.color.grey.medium};
  }

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%) rotate(-135deg);
    width: 2px;
    height: 60%;
    background: ${props => props.theme.color.grey.medium};
  }
`

const UnstyledPage = ({
  className,
  setActivePageSlug,
  activePageSlug
}) => {
  return (
    <div className={className}>
      <Layout>
        <Main>
          <Header>
            <Title>Materials</Title>
            <Exit onClick={() => setActivePageSlug('index')}/>
          </Header>
          <Pad/>
          <AccordianLayout items={data.solutions} color='pink' activePageSlug={activePageSlug}/>
        </Main>
      </Layout>
    </div>
  )
}

const Page = styled(UnstyledPage)`
  
`

export default Page 