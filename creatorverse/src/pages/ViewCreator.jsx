import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { supabase } from '../client'

export default function ViewCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [creator, setCreator] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id)
          .single() 

        if (error) throw error
        setCreator(data)
      } catch (error) {
        console.error('Error loading creator profile:', error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCreator()
  }, [id])

  if (loading) return <section className="container"><p aria-busy="true">Loading profile details...</p></section>
  if (!creator) return <section className="container"><h3>Creator not found!</h3><Link to="/">Back to Home</Link></section>

  return (
    <section className="container" style={{ maxWidth: '800px', marginTop: '2rem' }}>
      <article style={{ padding: '2rem' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0 }}>{creator.name}</h2>
          <Link to={`/edit/${id}`} role="button" className="secondary outline">Edit/Delete</Link>
        </header>

        {creator.imageURL && (
          <img 
            src={creator.imageURL} 
            alt={creator.name} 
            style={{ width: '100%', maxHeight: '450px', objectFit: 'cover', borderRadius: '8px', margin: '1.5rem 0' }}
          />
        )}

        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>{creator.description}</p>

        <footer>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href={creator.url} target="_blank" rel="noopener noreferrer" role="button" style={{ flex: 1 }}>
              Visit Official Channel
            </a>
            <button className="outline secondary" onClick={() => navigate('/')} style={{ flex: 1 }}>
              Back to Showroom
            </button>
          </div>
        </footer>
      </article>
    </section>
  )
}