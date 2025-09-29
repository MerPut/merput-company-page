export function ResearchDevelopmentSection() {
  const testingMethods = [
    {
      title: "SPRAY TEST",
      description: "Pemeriksaan kesesuaian warna, area tebal, ketebalan dan aspek kualitas lainnya",
    },
    {
      title: "THICKNESS CHECK",
      description: "Pemeriksaan Ketebalan Cat / Ketebalan Film Kering",
    },
    {
      title: "HARDNESS & GLOSS CHECK",
      description: "Pemeriksaan kekuatan dan menggunakan kekuatan pensil dan pengukuran intensitas kilap (glossy)",
    },
    {
      title: "PULL OFF TEST",
      description: "Memeriksa kekuatan Cat",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-accent">Penelitian & Pengembangan</span>
          </h2>
          <h3 className="text-2xl text-primary italic">Research & Development</h3>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-accent/10 p-8 rounded-2xl">
              <p className="text-accent leading-relaxed">
                Tim Ahli kami terus berinovasi seiring dengan perkembangan teknologi dan standar internasional. Kami
                konsisten melakukan riset untuk menghasilkan standar produk unggulan terbaik.
              </p>
            </div>

            <div className="bg-primary/10 p-8 rounded-2xl">
              <p className="text-primary leading-relaxed">
                Our expert team continues to innovate in line with the advancements in technology and both local and
                international standards. We consistently conduct research to produce the best flagship products.
              </p>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden bg-white shadow-lg">
              <img
                src="/company-profile-images/research-development.png"
                alt="Research equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content - Testing Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">Testing Methods</h3>

            <div className="grid grid-cols-2 gap-4">
              {testingMethods.map((method, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-primary mb-2">{method.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{method.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-primary rounded-full">
                <div className="text-white text-2xl">🔬</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
