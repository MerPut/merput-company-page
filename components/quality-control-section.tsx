export function QualityControlSection() {
  const qualityTests = [
    { name: "GLOSS METER TEST", icon: "📊" },
    { name: "PULL-OFF ADHESION TEST", icon: "🔧" },
    { name: "DRY FILM THICKNESS TEST", icon: "📏" },
    { name: "VISCO TEST NK2", icon: "🧪" },
    { name: "RESISTIVITY", icon: "⚡" },
    { name: "HARDNESS PENCIL", icon: "✏️" },
    { name: "COLORIMETER", icon: "🎨" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-accent">Pengendalian Mutu</span>
          </h2>
          <h3 className="text-2xl text-primary italic">Quality Control</h3>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {qualityTests.map((test, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-orange-200 hover:border-orange-400 transition-colors"
            >
              <div className="text-4xl mb-4">{test.icon}</div>
              <h4 className="font-bold text-primary text-sm">{test.name}</h4>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-primary rounded-full shadow-lg">
            <div className="text-white text-5xl">✓</div>
          </div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive quality control ensures every product meets the highest standards through rigorous testing
            and continuous monitoring.
          </p>
        </div>
      </div>
    </section>
  )
}
