import { HStack } from '@chakra-ui/react'
import React from 'react'

import { homeCards } from '../../utils/cards'
import Card from './elements/Card'

const AboutCards: React.FC = function () {
  return (
    <HStack>
      {
        homeCards.map((card, index) => <Card
          key={index}
          title={card.title}
          description={card.description}
        />)
      }
    </HStack>
  )
}

export default AboutCards
