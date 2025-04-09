import './book-detail.css'

export const BookDetail = ({ book: { title, image, description } }) => {
  return (
    <div className="book-detail">
      <img src={image} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
