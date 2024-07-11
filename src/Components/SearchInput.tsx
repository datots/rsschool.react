import React, { Component, ChangeEvent } from 'react'

interface SearchInputProps {}

interface SearchInputState {
  searchTerm: string
}

class SearchInput extends Component<SearchInputProps, SearchInputState> {
  constructor(props: SearchInputProps) {
    super(props)
    this.state = {
      searchTerm: '',
    }
  }

  componentDidMount() {
    const savedSearchTerm = localStorage.getItem('searchTerm')
    if (savedSearchTerm) {
      this.setState({ searchTerm: savedSearchTerm })
    }
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSearch = () => {
    const searchTerm = this.state.searchTerm.trim()
    localStorage.setItem('searchTerm', searchTerm)
    window.dispatchEvent(new CustomEvent('search', { detail: searchTerm }))
  }

  handleErrorClick = () => {
    try {
      throw new Error('Test Error')
    } catch (error) {
      console.error('Error occurred:', error)
      // Handle the error gracefully, e.g., show an error message to the user
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          placeholder="Enter search term..."
          className="border border-gray-300 px-4 py-2 mr-2"
        />
        <button
          onClick={this.handleSearch}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Search
        </button>
        <button
          onClick={this.handleErrorClick}
          className="bg-red-500 text-white px-4 py-2 ml-2"
        >
          Throw Error
        </button>
      </div>
    )
  }
}

export default SearchInput
