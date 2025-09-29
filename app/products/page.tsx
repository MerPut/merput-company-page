import type { Metadata } from "next";
import productsData from "@/data/products.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Products - MERPUT Paint",
  description:
    "Explore our comprehensive range of industrial paint and coating solutions including marine, floor, industrial, and protective coatings.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary py-[100px] text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Produk Kami
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 italic mb-2">
              Our Products
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              Comprehensive range of high-quality industrial paint and coating
              solutions designed to meet diverse industry needs with superior
              performance and durability.
            </p>
          </div>
        </div>
      </section>

      {/* Products Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {productsData.categories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className="mb-16"
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                  {category.name}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product) => (
                  <Card
                    key={product.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48 bg-muted">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-accent">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm text-accent mb-2">
                          Key Features:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {product.features.map((feature, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Applications */}
                      <div>
                        <h4 className="font-semibold text-sm text-accent mb-2">
                          Applications:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {product.applications.map((application, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {application}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Separator between categories */}
              {categoryIndex < productsData.categories.length - 1 && (
                <div className="mt-16 border-t border-border"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-accent mb-4">
            Need Custom Solutions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our expert team can develop customized coating solutions tailored to
            your specific requirements. Contact us to discuss your project
            needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Contact Our Experts
          </a>
        </div>
      </section>
    </div>
  );
}
