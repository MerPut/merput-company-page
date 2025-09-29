import { Button } from "@/components/ui/button"

export function CompanyHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-2xl"></div>
      </div>

      {/* MERPUT Logo */}
      <div className="absolute top-8 right-8 z-10">
        <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-primary">
          <div className="text-primary font-bold text-xl">MERPUT</div>
          <div className="text-xs text-muted-foreground">PAINT</div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-primary leading-tight">Company Profile</h1>
              <p className="text-xl text-muted-foreground">PT. Fauzi Manufacturing Industri</p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Leading manufacturer of high-quality industrial paints and coatings, serving Indonesia's infrastructure
                development since 2022.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explore Our Products
                </Button>
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                  <img
                    src="/company-profile-images/company-profile-cover.png"
                    alt="Golden Gate Bridge"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src="/professional-painter-applying-premium-paint-to-mod.jpg"
                    alt="Professional painting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src="/modern-paint-manufacturing-facility-with-color-mix.jpg"
                    alt="Manufacturing facility"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                  <img
                    src="/sleek-corporate-office-interior-with-professional-.jpg"
                    alt="Corporate office"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
