import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Pagination from './Pagination'
import { BrowserRouter } from 'react-router-dom'

test('updates URL query parameter when page changes', () => {
  render(
    <BrowserRouter>
      <Pagination totalPages={5} />
    </BrowserRouter>
  )
  const nextButton = screen.getByText('Next')
  fireEvent.click(nextButton)
  expect(window.location.search).toBe('?page=2')
})
