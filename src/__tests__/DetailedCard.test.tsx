// src/__tests__/DetailedCard.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import DetailedCard from '../components/DetailedCard'

const mockCardDetail = {
  id: 1,
  title: 'Detailed Card Title',
  description: 'Detailed Card Description',
}

describe('DetailedCard Component', () => {
  it('displays loading indicator while fetching data', () => {
    const { getByTestId } = render(<DetailedCard cardId={1} />)
    const loadingIndicator = getByTestId('loading-indicator')
    expect(loadingIndicator).toBeInTheDocument()
  })

  it('displays detailed card data correctly', async () => {
    const { findByText } = render(<DetailedCard cardId={1} />)
    const title = await findByText(mockCardDetail.title)
    const description = await findByText(mockCardDetail.description)
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('hides the component when close button is clicked', () => {
    const { getByTestId, queryByTestId } = render(<DetailedCard cardId={1} />)
    const closeButton = getByTestId('close-button')
    fireEvent.click(closeButton)
    const detailedCard = queryByTestId('detailed-card')
    expect(detailedCard).not.toBeInTheDocument()
  })
})
