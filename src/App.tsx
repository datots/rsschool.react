import React, { Component } from 'react'
import SearchInput from './Components/SearchInput'
import SearchResults from './Components/SearchResult'
import ErrorBoundary from './Components/ErrorBoundry'

class App extends Component {
  render() {
    return (
      <div className="container mx-auto mt-8">
        <ErrorBoundary>
          <div className="mb-4">
            <SearchInput />
          </div>
          <div>
            <SearchResults />
          </div>
        </ErrorBoundary>
      </div>
    )
  }
}

export default App
