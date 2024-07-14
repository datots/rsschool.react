import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface PaginationProps {
  totalPages: number
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const goToPage = (page: number) => {
    const searchParams = new URLSearchParams(location.search)
    searchParams.set('page', String(page))
    navigate({ search: searchParams.toString() })
  }

  return (
    <div>
      {Array.from({ length: totalPages }, (_, index) => (
        <button key={index} onClick={() => goToPage(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  )
}

export default Pagination
