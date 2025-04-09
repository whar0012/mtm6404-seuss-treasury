import { BookGrid } from '../components/book-grid'
import { useFetch } from '../hooks/use-fetch'

export const BooksPage = () => {
  const { loading, error, data } = useFetch('https://seussology.info/api/books')

  if (loading) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <BookGrid books={data} />
    </div>
  )
}
