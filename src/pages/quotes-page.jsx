import { QuotesGrid } from '../components/quotes-grid'
import { useFetch } from '../hooks/use-fetch'

export const QuotesPage = () => {
  const { loading, error, data } = useFetch(
    'https://seussology.info/api/quotes/random/10',
  )

  if (loading) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <QuotesGrid quotes={data} />
    </div>
  )
}
