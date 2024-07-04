import React, { Component } from 'react'

interface SearchInputState {
  searchTerm: string
}

class SearchInput extends Component<{}, SearchInputState> {
  constructor(props: {}) {
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

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSearch = () => {
    const searchTerm = this.state.searchTerm.trim()
    localStorage.setItem('searchTerm', searchTerm)
    window.dispatchEvent(new CustomEvent('search', { detail: searchTerm }))
  }

  handleErrorClick = () => {
    throw new Error('Test Error')
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
