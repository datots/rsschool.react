import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useSearchTerm from './useSearchTerm'
import Pagination from './Pagination' // Adjust the import path as needed

interface SearchResult {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
}

interface ApiResponse {
  results: {
    name: string
    height: string
    mass: string
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: string
    gender: string
  }[]
}

const SearchResults: React.FC = () => {
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [searchTerm, setSearchTerm] = useSearchTerm()
  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [currentPage, searchTerm]) // Ensure useEffect dependency on searchTerm

  const fetchData = () => {
    setLoading(true)
    let apiUrl = `https://swapi.dev/api/people/?page=${currentPage}`

    if (searchTerm) {
      apiUrl += `&search=${searchTerm}`
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data: ApiResponse) => {
        const mappedResults = data.results.map((item) => ({
          name: item.name,
          height: item.height,
          mass: item.mass,
          hair_color: item.hair_color,
          skin_color: item.skin_color,
          eye_color: item.eye_color,
          birth_year: item.birth_year,
          gender: item.gender,
        }))
        setResults(mappedResults)
        setTotalPages(Math.ceil(data.results.length / 10)) // Assuming 10 results per page
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })
  }

  const handleResultClick = (id: number) => {
    navigate(`/details/${id}`)
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Search Results</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ul>
            {results.map((result, index) => (
              <li
                key={index}
                className="mb-2"
                onClick={() => handleResultClick(index + 1)}
              >
                <h3 className="text-lg">{result.name}</h3>
              </li>
            ))}
          </ul>
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </div>
  )
}

export default SearchResults
