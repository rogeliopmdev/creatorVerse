import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../client'

export default function EditCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  })

  // Pull down original values so the developer/user doesn't start with a blank form
  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id)
          .single()

        if (error) throw error
        setFormData({
          name: data.name,
          url: data.url,
          description: data.description,
          imageURL: data.imageURL || ''
        })
      } catch (error) {
        console.error('Error loading item row data:', error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCreator()
  }, [id])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const { error } = await supabase
        .from('creators')
        .update(formData)
        .eq('id', id)

      if (error) throw error
      navigate(`/view/${id}`) // Send user straight to the updated info card view
    } catch (error) {
      alert('Update failed: ' + error.message)
    }
  }

  const handleDelete = async () => {
    const confirmDeletion = window.confirm(`Are you absolutely sure you want to remove ${formData.name}?`)
    if (!confirmDeletion) return

    try {
      const { error } = await supabase
        .from('creators')
        .delete()
        .eq('id', id)

      if (error) throw error
      navigate('/') // Wiped clean! Send user back to your home view
    } catch (error) {
      alert('Deletion sequence failed: ' + error.message)
    }
  }

  if (loading) return <section className="container"><p aria-busy="true">Loading current values...</p></section>

  return (
    <section className="container" style={{ maxWidth: '700px', marginTop: '2rem' }}>
      <article>
        <h2>Modify Creator Information</h2>
        <form onSubmit={handleUpdate}>
          <label htmlFor="name">Creator Name</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />

          <label htmlFor="url">Channel / Profile URL</label>
          <input type="url" id="url" name="url" required value={formData.url} onChange={handleChange} />

          <label htmlFor="description">Profile Description</label>
          <textarea id="description" name="description" required rows="4" value={formData.description} onChange={handleChange} />

          <label htmlFor="imageURL">Display Image URL</label>
          <input type="url" id="imageURL" name="imageURL" value={formData.imageURL} onChange={handleChange} />

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <button type="submit" style={{ flex: 2 }}>Save Changes</button>
            <button type="button" className="secondary" onClick={handleDelete} style={{ flex: 1, backgroundColor: '#b62323', borderColor: '#b62323', color: '#fff' }}>
              Delete Creator
            </button>
          </div>
        </form>
      </article>
    </section>
  )
}