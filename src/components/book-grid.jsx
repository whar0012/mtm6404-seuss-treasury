import { Link } from 'react-router-dom'
import './book-grid.css'

export const BookGrid = ({ books }) => {
  return (
    <div id="book-grid">
      {books.map(({ id, image, title }) => {
        return (
          <Link className="book-grid-item" key={id} to={`/books/${id}`}>
            <img src={image} alt={`Cover image for book: ${title}`} />
          </Link>
        )
      })}
    </div>
  )
}
