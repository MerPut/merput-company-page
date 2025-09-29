export function ManufacturingSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-accent">Produksi</span>
          </h2>
          <h3 className="text-2xl text-primary italic">Manufacturing</h3>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-primary/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Production Capacity
              </h3>
              <p className="text-primary leading-relaxed mb-4">
                Merput Paint currently has a manufacturing capacity of up to
                100,000 kg / month, which can still be extended to 300,000 kg /
                month.
              </p>
            </div>

            <div className="bg-accent/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-accent mb-4">
                Kapasitas Produksi
              </h3>
              <p className="text-accent leading-relaxed">
                Merput Paint saat ini memiliki kapasitas Produksi sampai dengan
                100.000 Kg / bulan dan masih bisa di extend hingga 300.000 Kg /
                bulan.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-primary">100,000</div>
                <div className="text-sm text-muted-foreground">
                  Kg / Month Current
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-accent">300,000</div>
                <div className="text-sm text-muted-foreground">
                  Kg / Month Extended
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Manufacturing Images */}
          <div className="space-y-6">
            <div className="aspect-video rounded-2xl overflow-hidden bg-muted">
              <img
                src="/placeholder.svg"
                alt="Manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-xl overflow-hidden bg-muted">
                <img
                  src="/modern-paint-manufacturing-facility-with-color-mix.jpg"
                  alt="Paint mixing facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden bg-muted">
                <img
                  src="/professional-painter-applying-premium-paint-to-mod.jpg"
                  alt="Quality control"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
