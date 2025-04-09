import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    const abortController = new AbortController()

    const fetchData = async () => {
      setLoading(true)
      setError(null)
      setData([])

      const response = await fetch(url, {
        signal: abortController.signal,
      })

      if (!response.ok) {
        setError('Failed to fetch data')
        setLoading(false)
        setData([])
        return
      }

      const json = await response.json()
      setLoading(false)
      setError(null)
      setData(json)
    }

    fetchData()
    return () => abortController.abort()
  }, [])

  return {
    loading,
    error,
    data,
  }
}
