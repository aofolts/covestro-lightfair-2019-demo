import React from 'react'
import styled from 'styled-components'
import Accordian from './accordian'

const UnstyledAccordianLayout = ({
  className,
  items,
  color
}) => {
  const accordians = items.map(item => {
    return (
      <Accordian item={item} color={color} key={item.title}/>
    )
  })

  return (
    <div className={className}>
      {accordians}
    </div>
  )
}

const AccordianLayout = styled(UnstyledAccordianLayout)`
  height: calc(100vh - 115px);
  overflow-y: scroll;
`

export default AccordianLayout