// src/Components/__tests__/SearchInput.test.tsx
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchInput from '../SearchInput'

test('renders search input and button', () => {
  render(<SearchInput />)
  const inputElement = screen.getByPlaceholderText(/Enter search term.../i)
  const buttonElement = screen.getByText(/Search/i)
  expect(inputElement).toBeInTheDocument()
  expect(buttonElement).toBeInTheDocument()
})

test('changes input value and dispatches search event', () => {
  render(<SearchInput />)
  const inputElement = screen.getByPlaceholderText(/Enter search term.../i)
  const buttonElement = screen.getByText(/Search/i)

  fireEvent.change(inputElement, { target: { value: 'Luke' } })
  expect(inputElement).toHaveValue('Luke')

  const customEvent = new CustomEvent('search', { detail: 'Luke' })
  jest.spyOn(window, 'dispatchEvent')

  fireEvent.click(buttonElement)
  expect(window.dispatchEvent).toHaveBeenCalledWith(customEvent)
})
