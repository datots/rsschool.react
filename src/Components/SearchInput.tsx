import React, { ChangeEvent } from 'react'
import useSearchTerm from './useSearchTerm'

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useSearchTerm()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim()
    window.dispatchEvent(
      new CustomEvent('search', { detail: trimmedSearchTerm })
    )
  }

  const throwError = () => {
    throw new Error('Test Error')
  }

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter search term..."
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={throwError}>Throw Error</button>{' '}
      {/* Button to throw error */}
    </div>
  )
}

export default SearchInput
