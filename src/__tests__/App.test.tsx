// src/__tests__/App.test.tsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders search input', () => {
  render(<App />)
  const searchInput = screen.getByPlaceholderText(/Enter search term.../i)
  expect(searchInput).toBeInTheDocument()
})
