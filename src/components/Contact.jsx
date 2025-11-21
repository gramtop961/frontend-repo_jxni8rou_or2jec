import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.ok) {
        setStatus({ ok: true, msg: 'Thanks! We will get back to you shortly.' })
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        throw new Error(data.detail || 'Failed to submit')
      }
    } catch (e) {
      setStatus({ ok: false, msg: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 text-center">Get in Touch</h2>
        <p className="text-center text-emerald-700/70 mt-2">Wholesale, events, or feedback—drop us a line.</p>
        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="px-4 py-3 border rounded-lg w-full" required />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email address" className="px-4 py-3 border rounded-lg w-full" required />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (optional)" className="px-4 py-3 border rounded-lg w-full" />
          <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="px-4 py-3 border rounded-lg w-full" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="px-4 py-3 border rounded-lg w-full md:col-span-2 h-32" required />
          <button disabled={loading} className="md:col-span-2 bg-emerald-600 text-white font-semibold rounded-lg px-6 py-3 hover:bg-emerald-700 transition">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {status && (
          <div className={`mt-4 text-center font-medium ${status.ok ? 'text-emerald-700' : 'text-red-600'}`}>
            {status.msg}
          </div>
        )}
      </div>
    </section>
  )
}
