import { createBrowserRouter } from 'react-router-dom'
import { BooksPage } from './pages/books-page'
import { QuotesPage } from './pages/quotes-page'
import { BooksDetailPage } from './pages/books-detail-page'
import { Layout } from './components/layout'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <BooksPage />,
        },
        {
          path: '/books',
          element: <BooksPage />,
        },
        {
          path: 'books/:id',
          element: <BooksDetailPage />,
        },
        {
          path: '/quotes',
          element: <QuotesPage />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.VITE_BASE_NAME || '/',
  },
)
