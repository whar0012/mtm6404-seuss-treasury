import './quotes-grid.css'

export const QuotesGrid = ({ quotes }) => {
  return (
    <div id="quotes-grid">
      {quotes.map(({ id, text, book: { title } }) => {
        return (
          <div className="quotes-grid-item" key={id}>
            <p>{text}</p>
            <span>
              — Dr. Seuss in <em>{title}</em>
            </span>
          </div>
        )
      })}
    </div>
  )
}
