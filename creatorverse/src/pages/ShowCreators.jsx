import React, { useState, useEffect } from 'react'
import { supabase } from '../client'
import Hero from '../components/Hero'
import CreatorCard from '../components/CreatorCard'

export default function ShowCreators() {
  const [creators, setCreators] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .order('id', { ascending: true })

        if (error) throw error
        setCreators(data || [])
      } catch (error) {
        console.error('Error fetching creators:', error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCreators()
  }, [])

  return (
    <div>
      <Hero />
      <section id="creators" className="container-fluid" style={{ padding: '0 2rem' }}>
        <h2>Explore the Universe</h2>
        
        {loading ? (
          <p aria-busy="true">Loading creators from your database...</p>
        ) : creators.length === 0 ? (
          <article style={{ textAlign: 'center', padding: '3rem' }}>
            <h3>No Creators Found 🌌</h3>
            <p>Your Creatorverse is empty! Click "Add Creator" at the top to register your first favorite channel.</p>
          </article>
        ) : (
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {creators.map((creator) => (
              <CreatorCard 
                key={creator.id}
                id={creator.id}
                name={creator.name}
                url={creator.url}
                description={creator.description}
                imageURL={creator.imageURL}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}