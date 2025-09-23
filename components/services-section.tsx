import { Card, CardContent } from "@/components/ui/card"
import { Palette, Home, Building, Brush } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Color Consultation",
    description: "Expert color matching and palette development tailored to your vision and space requirements.",
  },
  {
    icon: Home,
    title: "Residential Painting",
    description: "Complete interior and exterior painting services for homes, from single rooms to full renovations.",
  },
  {
    icon: Building,
    title: "Commercial Projects",
    description: "Large-scale commercial and industrial painting solutions with specialized coatings and finishes.",
  },
  {
    icon: Brush,
    title: "Specialty Finishes",
    description: "Decorative techniques including faux finishes, textures, and custom artistic applications.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-balance">
            Comprehensive paint solutions for
            <span className="text-accent font-medium"> every project</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            From initial consultation to final application, we provide end-to-end paint services that exceed
            expectations and deliver lasting results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 bg-card/50 hover:bg-card transition-colors group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
