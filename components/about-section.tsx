export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-medium text-accent uppercase tracking-wider">About ColorCraft</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-light text-balance">
                Crafting color experiences for over
                <span className="text-accent font-medium"> 25 years</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in 1998, ColorCraft Paints has been at the forefront of paint innovation, developing premium
                formulations that combine durability with stunning aesthetics. Our commitment to quality has made us the
                preferred choice for architects, designers, and homeowners who demand excellence.
              </p>
              <p>
                From our state-of-the-art manufacturing facility to our expert application teams, every aspect of our
                operation is designed to deliver superior results. We believe that great paint is more than just
                color—it's about creating environments that inspire and endure.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-light text-accent">25+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-accent">10K+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-accent">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Color Options</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden">
              <img
                src="/modern-paint-manufacturing-facility-with-color-mix.jpg"
                alt="ColorCraft manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
