import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout'
import AccordianLayout from '../../components/accordians/index'

import WallThickness from './items/wall-thickness'
import DraftAngle from './items/draft-angle'
import JoiningTechniques from './items/joining-techniques'
import Decorations from './items/decorations'
import RidgedInserts from './items/ridged-inserts'
import GateRunner from './items/gate-runner-systems'
import Ejection from './items/ejection'
import MoldCooling from './items/mold-cooling'
import Computational from './items/computational-fluid-dynamics'

const data = {
  items: [
    WallThickness,
    DraftAngle,
    JoiningTechniques,
    Decorations,
    RidgedInserts,
    GateRunner,
    Ejection,
    MoldCooling,
    Computational
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
  z-index: 10;
`

const Title = styled.div`
 font-size: 25px;
 color: ${props => props.theme.color.orange}; 
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
            <Title>Design Considerations</Title>
            <Exit onClick={() => setActivePageSlug('index')}/>
          </Header>
          <Pad/>
          <AccordianLayout items={data.items} color='orange' activePageSlug={activePageSlug}/>
        </Main>
      </Layout>
    </div>
  )
}

const Page = styled(UnstyledPage)`
  
`

export default Page 