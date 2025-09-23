import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-light text-balance leading-tight">
                Premium quality meets
                <span className="text-accent font-medium"> exceptional craftsmanship</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Transform your spaces with ColorCraft Paints' premium paint solutions. We combine innovative
                formulations with expert application techniques to deliver lasting beauty and protection for your most
                important projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg overflow-hidden">
              <img
                src="/professional-painter-applying-premium-paint-to-mod.jpg"
                alt="Professional paint application"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
