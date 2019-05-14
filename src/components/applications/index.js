import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout'
import AccordianLayout from '../../components/accordians/index'

import ENEREF from './applications/eneref'
import Kenall from './applications/kenall'
import ALP from './applications/alp'
import SLP from './applications/slp'

const data = {
  applications: [
    ENEREF,
    Kenall,
    ALP,
    SLP
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
  background: white;
  z-index: 1000;
`

const Title = styled.div`
  font-size: 25px;
  color: ${props => props.theme.color.purple}; 
  text-transform: uppercase;
`

const Pad = styled.div`
  height: ${props => props.theme.padding.medium};
`

const Main = styled.div`
  padding: ${props => props.theme.padding.medium};
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
  setActivePageSlug
}) => {
  return (
    <div className={className}>
      <Layout>
        <Main>
          <Header>
            <Title>Applications</Title>
            <Exit onClick={() => setActivePageSlug('index')}/>
          </Header>
          <Pad/>
          <AccordianLayout items={data.applications} color='purple'/>
        </Main>
      </Layout>
    </div>
  )
}

const Page = styled(UnstyledPage)`
  
`

export default Page 