import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-orange-400 shadow" />
            <div>
              <div className="text-xl font-extrabold text-emerald-900">MU Foods</div>
              <div className="text-xs text-emerald-700/70 -mt-1">Fresh Squashes</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-emerald-800">
            <a href="#shop" className="hover:text-emerald-600">Shop</a>
            <a href="#about" className="hover:text-emerald-600">About</a>
            <a href="#contact" className="hover:text-emerald-600">Contact</a>
          </nav>
          <a href="#shop" className="hidden sm:inline-flex rounded-full bg-emerald-600 px-5 py-2 text-white font-semibold shadow hover:bg-emerald-700">
            Order Now
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <ProductGrid />
        <About />
        <Contact />
      </main>

      <footer className="bg-emerald-900 text-emerald-50">
        <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl font-extrabold">MU Foods</div>
            <p className="text-emerald-100/80 mt-2 text-sm">Freshly crafted squashes and beverages. Taste the real fruit.</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Explore</div>
            <ul className="space-y-1 text-emerald-100/80 text-sm">
              <li><a href="#shop" className="hover:underline">Shop</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Contact</div>
            <ul className="space-y-1 text-emerald-100/80 text-sm">
              <li>support@mufoods.example</li>
              <li>+1 (555) 123-4567</li>
              <li>M–F 9:00–18:00</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Follow</div>
            <div className="flex gap-3 text-emerald-100/80 text-sm">
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-emerald-800 text-center py-4 text-xs text-emerald-200/80">© {new Date().getFullYear()} MU Foods. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
