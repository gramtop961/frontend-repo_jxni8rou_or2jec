import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-200 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-50" />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-900 leading-tight">
            Fresh Squashes, Crafted with Real Fruit
          </h1>
          <p className="mt-6 text-lg text-emerald-800/80">
            MU Foods brings you vibrant, refreshing beverages made with honest ingredients. No
            artificial colors. No shortcuts. Just pure flavor.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-white font-semibold shadow hover:bg-emerald-700 transition">
              Shop Beverages
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full border-2 border-emerald-600 px-8 py-3 text-emerald-700 font-semibold hover:bg-emerald-50 transition">
              Learn More
            </a>
          </div>
          <div className="mt-6 text-sm text-emerald-900/70">Cold-pressed • No preservatives • Vegan friendly</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <img src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=1200&q=80&auto=format&fit=crop" alt="Fresh beverages" className="rounded-3xl shadow-xl" />
          <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow p-4">
            <p className="text-sm font-semibold text-emerald-800">100% Real Fruit</p>
            <p className="text-xs text-emerald-700/70">Bottled fresh every week</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
