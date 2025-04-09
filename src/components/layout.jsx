import { Outlet } from 'react-router-dom'
import { Navigation } from './navigation'
import './layout.css'

export const Layout = () => {
  return (
    <div className="layout">
      <Navigation />
      <h1 id="banner">Seuss Treasury</h1>
      <div id="content">
        <Outlet />
      </div>
    </div>
  )
}
