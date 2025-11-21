import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ProductGrid() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState('')

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async (params = {}) => {
    setLoading(true)
    const url = new URL(`${API_BASE}/api/beverages`)
    if (params.q) url.searchParams.set('q', params.q)
    if (params.tag) url.searchParams.set('tag', params.tag)
    try {
      const res = await fetch(url)
      const data = await res.json()
      setItems(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const onSearch = (e) => {
    e.preventDefault()
    fetchProducts({ q: query, tag })
  }

  return (
    <section id="shop" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">Our Beverages</h2>
            <p className="text-emerald-700/70 mt-2">Small batch, big flavor. Explore our seasonal collection.</p>
          </div>
          <form onSubmit={onSearch} className="flex flex-col sm:flex-row gap-3">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search flavors..." className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <select value={tag} onChange={(e) => setTag(e.target.value)} className="px-4 py-2 border rounded-lg">
              <option value="">All tags</option>
              <option value="citrus">Citrus</option>
              <option value="tropical">Tropical</option>
              <option value="vegan">Vegan</option>
              <option value="best-seller">Best Seller</option>
            </select>
            <button type="submit" className="px-5 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">Filter</button>
          </form>
        </div>

        {loading ? (
          <div className="text-center text-emerald-700">Loading beverages...</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((p, idx) => (
              <article key={idx} className="border border-emerald-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <img src={p.image_url || 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=1200&q=80'} alt={p.name} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-emerald-900">{p.name}</h3>
                  <p className="text-emerald-700/80 text-sm">{p.flavor}</p>
                  <p className="mt-2 text-sm text-emerald-800/70 line-clamp-2">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-emerald-900 font-bold">${p.price.toFixed(2)}</div>
                    <span className="text-xs text-emerald-700/70">{p.size_ml} ml</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {!loading && items.length === 0 && (
          <div className="text-center text-emerald-700 mt-6">
            No beverages found. Try adjusting filters.
          </div>
        )}
      </div>
    </section>
  )
}
