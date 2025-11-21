export default function About() {
  return (
    <section id="about" className="bg-emerald-50 py-20">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">Our Story</h2>
          <p className="mt-4 text-emerald-800/80">
            MU Foods started with a simple promise: beverages that taste like real fruit because they are
            made from real fruit. We handpick seasonal produce, cold-press to protect nutrients, and
            craft small batches to ensure quality in every sip.
          </p>
          <ul className="mt-6 space-y-3 text-emerald-900">
            <li>• Locally sourced ingredients</li>
            <li>• No artificial colors or flavors</li>
            <li>• Recyclable packaging</li>
          </ul>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&q=80&auto=format&fit=crop" alt="MU Foods Story" className="rounded-2xl shadow" />
        </div>
      </div>
    </section>
  )
}
