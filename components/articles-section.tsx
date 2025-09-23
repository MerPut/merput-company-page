import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "2024 Color Trends: Warm Earth Tones Take Center Stage",
    excerpt:
      "Discover the latest color trends that are transforming homes this year. From terracotta to sage green, learn how to incorporate these trending hues into your space.",
    category: "Color Trends",
    readTime: "5 min read",
    date: "March 15, 2024",
    image: "/modern-living-room-with-warm-earth-tone-paint-colo.jpg",
  },
  {
    id: 2,
    title: "The Complete Guide to Exterior Paint Preparation",
    excerpt:
      "Proper preparation is key to a long-lasting exterior paint job. Learn the essential steps to prep your home's exterior for painting success.",
    category: "How-To Guide",
    readTime: "8 min read",
    date: "March 10, 2024",
    image: "/house-exterior-being-prepared-for-painting-with-pr.jpg",
  },
  {
    id: 3,
    title: "Eco-Friendly Paint Options: Better for You and the Planet",
    excerpt:
      "Explore sustainable paint choices that reduce environmental impact without compromising on quality or durability.",
    category: "Sustainability",
    readTime: "6 min read",
    date: "March 5, 2024",
    image: "/eco-friendly-paint-cans-with-green-leaves-and-natu.jpg",
  },
]

export function ArticlesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Latest Articles & Tips</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our expert insights on paint trends, techniques, and industry news
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="group bg-transparent">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
