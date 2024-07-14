// src/Components/useSearchTerm.ts

import { useState, useEffect } from 'react'

const useSearchTerm = (): [string, (value: string) => void] => {
  const [searchTerm, setSearchTerm] = useState<string>(() => {
    return localStorage.getItem('searchTerm') || ''
  })

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm)
  }, [searchTerm])

  return [searchTerm, setSearchTerm]
}

export default useSearchTerm
