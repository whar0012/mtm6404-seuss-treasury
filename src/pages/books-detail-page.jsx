import { useParams } from 'react-router-dom'
import { BookDetail } from '../components/book-detail'
import { useFetch } from '../hooks/use-fetch'

export const BooksDetailPage = () => {
  const { id } = useParams()
  const { loading, error, data } = useFetch(
    `https://seussology.info/api/books/${id}`,
  )

  if (loading) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return <BookDetail book={data} />
}
