import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'

export default function App() {
  // Define our client-side routing structure
  const element = useRoutes([
    { path: '/', element: <ShowCreators /> },
    { path: '/view/:id', element: <ViewCreator /> },
    { path: '/new', element: <AddCreator /> },
    { path: '/edit/:id', element: <EditCreator /> },
  ])

  return (
    <div className="App">
      {/* Universal Navigation Header Bar */}
      <header className="container-fluid" style={{ padding: '0 2rem' }}>
        <nav>
          <ul>
            <li>
              <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', color: 'var(--text-h)' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: 'var(--accent)' }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
                <strong style={{ fontSize: '1.3rem', letterSpacing: '-0.5px' }}>Creatorverse</strong>
              </Link>
            </li>
          </ul>
          <ul>
            <li><Link to="/#creators" role="button" className="outline">View All</Link></li>
            <li><Link to="/new" role="button">Add Creator</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Page Render Target */}
      <main>
        <div className="All"></div>
        {element}
      </main>
    </div>
  )
}