// SearchResultDetails.tsx
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

interface ApiResult {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
}

const SearchResultDetails: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [result, setResult] = useState<ApiResult | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDetails = async (id: string) => {
      setLoading(true)
      try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`)
        if (!response.ok) {
          throw new Error(
            `Failed to fetch details for ID ${id}: ${response.status} ${response.statusText}`
          )
        }
        const data: ApiResult = await response.json()
        setResult(data)
      } catch (error) {
        console.error('Error fetching details:', error)
        setError('Error fetching details. Please try again.')
        navigate('/') // Redirect to home or handle error appropriately
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchDetails(id)
    }
  }, [id, navigate])

  const handleClose = () => {
    navigate('/') // Navigate back to home
  }

  return (
    <div>
      {loading ? (
        <div>Loading details...</div>
      ) : error ? (
        <div>{error}</div>
      ) : result ? (
        <div>
          <h2>{result.name}</h2>
          <p>Height: {result.height}</p>
          <p>Mass: {result.mass}</p>
          <p>Hair Color: {result.hair_color}</p>
          <p>Skin Color: {result.skin_color}</p>
          <p>Eye Color: {result.eye_color}</p>
          <p>Birth Year: {result.birth_year}</p>
          <p>Gender: {result.gender}</p>
          <button onClick={handleClose}>Close Details</button>
        </div>
      ) : (
        <div>Details not found.</div>
      )}
    </div>
  )
}

export default SearchResultDetails
