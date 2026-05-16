import React from 'react'
import { Link } from 'react-router-dom'

export default function CreatorCard({ id, name, url, description, imageURL }) {
  return (
    <article style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        {imageURL && (
          <img 
            src={imageURL} 
            alt={name} 
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }} 
          />
        )}
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      
      <footer>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <a href={url} target="_blank" rel="noopener noreferrer" role="button" className="secondary outline" style={{ flex: 1 }}>
            Visit Channel
          </a>
          <Link to={`/view/${id}`} role="button" className="outline" style={{ flex: 1 }}>
            View Details
          </Link>
        </div>
      </footer>
    </article>
  )
}