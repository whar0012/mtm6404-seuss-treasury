import { Link } from 'react-router-dom'
import './navigation.css'

export const Navigation = () => {
  return (
    <div className="navigation">
      <span className="brand">Seuss Treasury</span>
      <Link to="/books">Books</Link>
      <Link to="/quotes">Quotes</Link>
    </div>
  )
}
