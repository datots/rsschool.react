// src/__tests__/CardList.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import CardList from '../components/CardList'

// Mock data
const mockCards = [
  { id: 1, title: 'Card 1', description: 'Description 1' },
  { id: 2, title: 'Card 2', description: 'Description 2' },
]

describe('CardList Component', () => {
  it('renders the correct number of cards', () => {
    const { getAllByTestId } = render(<CardList cards={mockCards} />)
    const renderedCards = getAllByTestId('card')
    expect(renderedCards.length).toBe(mockCards.length)
  })

  it('displays appropriate message if no cards are present', () => {
    const { queryByTestId } = render(<CardList cards={[]} />)
    const message = queryByTestId('no-cards-message')
    expect(message).toBeInTheDocument()
    expect(message).toHaveTextContent('No cards found')
  })
})
