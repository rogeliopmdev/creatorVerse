import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../client'

export default function AddCreator() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { error } = await supabase
        .from('creators')
        .insert([formData]) // Insert the dictionary straight into Supabase rows

      if (error) throw error
      navigate('/') // Smoothly push user back to your newly updated landing grid
    } catch (error) {
      alert('Error creating profile: ' + error.message)
    }
  }

  return (
    <section className="container" style={{ maxWidth: '700px', marginTop: '2rem' }}>
      <article>
        <h2>Register Content Creator</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Creator Name *</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g. Marques Brownlee" />

          <label htmlFor="url">Channel / Profile URL *</label>
          <input type="url" id="url" name="url" required value={formData.url} onChange={handleChange} placeholder="https://youtube.com/..." />

          <label htmlFor="description">Profile Description *</label>
          <textarea id="description" name="description" required rows="4" value={formData.description} onChange={handleChange} placeholder="Provide a short description of their content style..." />

          <label htmlFor="imageURL">Display Avatar/Banner Image URL (Optional)</label>
          <input type="url" id="imageURL" name="imageURL" value={formData.imageURL} onChange={handleChange} placeholder="https://images.unsplash.com/..." />

          <button type="submit" style={{ marginTop: '1rem' }}>Submit Creator Profile</button>
        </form>
      </article>
    </section>
  )
}