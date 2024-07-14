// src/__tests__/Card.test.tsx

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Card from '../components/Card'

const mockCard = { id: 1, title: 'Test Card', description: 'Test Description' }

describe('Card Component', () => {
  it('renders card data correctly', () => {
    const { getByText } = render(<Card card={mockCard} />)
    expect(getByText(mockCard.title)).toBeInTheDocument()
    expect(getByText(mockCard.description)).toBeInTheDocument()
  })

  it('triggers onClick event to open detailed card', () => {
    const mockOpenDetail = jest.fn()
    const { getByTestId } = render(
      <Card card={mockCard} openDetail={mockOpenDetail} />
    )
    fireEvent.click(getByTestId('card'))
    expect(mockOpenDetail).toHaveBeenCalledTimes(1)
  })

  // Add more tests for API call on click if applicable
})
