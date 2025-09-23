import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Modern Residential Complex",
    category: "Residential",
    image: "/modern-apartment-building-exterior-with-premium-pa.jpg",
    description:
      "Complete exterior renovation of 120-unit residential complex with weather-resistant premium coatings.",
  },
  {
    title: "Corporate Headquarters",
    category: "Commercial",
    image: "/sleek-corporate-office-interior-with-professional-.jpg",
    description:
      "Interior transformation of 50,000 sq ft office space with custom color schemes and specialty finishes.",
  },
  {
    title: "Historic Restoration",
    category: "Specialty",
    image: "/historic-building-restoration-with-period-appropri.jpg",
    description:
      "Careful restoration of century-old landmark building using period-appropriate materials and techniques.",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Featured Projects</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-balance">
            Showcasing our
            <span className="text-accent font-medium"> finest work</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 bg-card overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-accent">{project.category}</span>
                </div>
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
