import React,{useState} from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout'
import AccordianLayout from '../../components/accordians/index'
import Header from '../../components/header-page'

const data = {
  solutions: [
    {
      title: 'Makrolon® TC8030',
      descriptor: 'Descriptor',
      subTitle: 'Subtitle',
      color: 'blue',
      copy: 'Copy'
    },
    {
      title: 'Makrolon® TC8030',
      descriptor: 'Descriptor',
      subTitle: 'Subtitle',
      color: 'blue',
      copy: 'Copy'
    },
    {
      title: 'Makrolon® TC8030',
      descriptor: 'Descriptor',
      subTitle: 'Subtitle',
      color: 'blue',
      copy: 'Copy'
    },
    {
      title: 'Makrolon® TC8030',
      descriptor: 'Descriptor',
      subTitle: 'Subtitle',
      color: 'blue',
      copy: 'Copy'
    },
    {
      title: 'Makrolon® TC8030',
      descriptor: 'Descriptor',
      subTitle: 'Subtitle',
      color: 'blue',
      copy: 'Copy'
    },
    {
      title: 'Makrolon® TC8030',
      descriptor: 'Descriptor',
      subTitle: 'Subtitle',
      color: 'blue',
      copy: 'Copy'
    },
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