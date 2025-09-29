export function ProductsShowcaseSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-accent">Produk Kami</span>
          </h2>
          <h3 className="text-2xl text-primary italic">Our Products</h3>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="space-y-16">
          {/* Marine Coating & Floor Coating */}
          <div className="space-y-8">
            <div className="text-right">
              <h3 className="text-2xl font-bold text-primary">Marine Coating</h3>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden bg-white shadow-lg">
              <img
                src="/company-profile-images/products-marine-floor.png"
                alt="Marine and Floor Coating Products"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-left">
              <h3 className="text-2xl font-bold text-primary">Floor Coating</h3>
            </div>
          </div>

          {/* Industrial & Protective Coating */}
          <div className="space-y-8">
            <div className="text-right">
              <h3 className="text-2xl font-bold text-primary">Industrial Coating</h3>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden bg-white shadow-lg">
              <img
                src="/company-profile-images/products-industrial.png"
                alt="Industrial and Protective Coating Products"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-left">
              <h3 className="text-2xl font-bold text-primary">Protective Coating</h3>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Marine Paint", description: "Specialized coatings for marine environments" },
            { name: "Floor Coating", description: "Durable industrial floor solutions" },
            { name: "Industrial Paint", description: "Heavy-duty industrial applications" },
            { name: "Protective Coating", description: "Advanced protection systems" },
          ].map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h4 className="font-bold text-primary mb-2">{product.name}</h4>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
