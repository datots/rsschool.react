import { Component } from 'react'

interface SearchResult {
  name: string
  description: string
}

interface SearchResultsState {
  results: SearchResult[]
  loading: boolean
}

interface ApiResult {
  name: string
  gender: string
}

interface ApiResponse {
  results: ApiResult[]
}

interface SearchResultsProps {}

class SearchResults extends Component<SearchResultsProps, SearchResultsState> {
  constructor(props: SearchResultsProps) {
    super(props)
    this.state = {
      results: [],
      loading: false,
    }
  }

  componentDidMount() {
    this.fetchData()
    window.addEventListener('search', this.handleSearchEvent)
  }

  componentWillUnmount() {
    window.removeEventListener('search', this.handleSearchEvent)
  }

  handleSearchEvent = (event: Event) => {
    const searchTerm = (event as CustomEvent).detail
    this.fetchData(searchTerm)
  }

  fetchData = (searchTerm: string = '') => {
    this.setState({ loading: true })
    const apiUrl = searchTerm
      ? `https://swapi.dev/api/people/?search=${searchTerm}`
      : 'https://swapi.dev/api/people/'

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data: ApiResponse) => {
        const results = data.results.map((item) => ({
          name: item.name,
          description: item.gender,
        }))
        this.setState({ results, loading: false })
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        this.setState({ loading: false })
      })
  }

  render() {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Search Results</h2>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {this.state.results.map((result, index) => (
              <li key={index} className="mb-2">
                <h3 className="text-lg">{result.name}</h3>
                <p className="text-gray-600">{result.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default SearchResults
