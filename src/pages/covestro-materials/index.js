import React,{useState} from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout'
import AccordianLayout from '../../components/accordians/index'
import Header from '../../components/header-page'

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

const UnstyledPage = ({
  className
}) => {
  return (
    <div className={className}>
      <Layout>
        <Header title='Materials'/>
        <AccordianLayout items={data.solutions} color='green'/>
      </Layout>
    </div>
  )
}

const Page = styled(UnstyledPage)`
  
`

export default Page 