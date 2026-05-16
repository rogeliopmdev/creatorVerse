import React from 'react'

export default function Hero() {
  const heroStyle = {
  
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("/earth.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    minHeight: '580px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
    borderRadius: '8px',
    marginBottom: '3rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
  }

  return (
    <div style={heroStyle}>
      <div style={{ maxWidth: '800px', padding: '1rem' }}>
        <h1 style={{ color: '#ffffff', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.55)', fontWeight: '800', fontSize: '2.5rem', marginBottom: '1rem' }}>
          Welcome To Creatorverse
        </h1>
        <p style={{ color: '#f1f5f9', textShadow: '1px 1px 4px rgba(0,0,0,0.6)', fontSize: '1.25rem', lineHeight: '1.6', margin: 0 }}>
          A curated space for sharing and tracking your favorite corner of the internet. 
          Creatorverse helps you keep all your beloved creators in one place.
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#creators" role="button" className="primary outline" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
              View All
            </a>

            <a href="/new" role="button" className="secondary outline" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
              Add Creator
            </a>
        </div>
      </div>
    </div>
  )
}