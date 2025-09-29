"use client";

import { useState, useMemo } from "react";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import Image from "next/image";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter products based on search query and selected category
  const filteredData = useMemo(() => {
    if (!searchQuery && !selectedCategory) {
      return productsData;
    }

    const filtered = productsData.categories
      .map((category) => {
        // Filter by category if selected
        if (selectedCategory && category.id !== selectedCategory) {
          return null;
        }

        // Filter products within category based on search query
        const filteredProducts = category.products.filter((product) => {
          const searchLower = searchQuery.toLowerCase();
          return (
            product.name.toLowerCase().includes(searchLower) ||
            product.description.toLowerCase().includes(searchLower) ||
            product.features.some((feature) =>
              feature.toLowerCase().includes(searchLower)
            ) ||
            product.applications.some((app) =>
              app.toLowerCase().includes(searchLower)
            ) ||
            category.name.toLowerCase().includes(searchLower)
          );
        });

        return filteredProducts.length > 0
          ? { ...category, products: filteredProducts }
          : null;
      })
      .filter(
        (category): category is NonNullable<typeof category> =>
          category !== null
      );

    return { categories: filtered };
  }, [searchQuery, selectedCategory]);

  const totalProducts = filteredData.categories.reduce(
    (total, category) => total + category.products.length,
    0
  );

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
  };
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

      {/* Search Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products by name, description, features, applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-base"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All Categories
              </Button>
              {productsData.categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Search Results Summary */}
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                {searchQuery || selectedCategory ? (
                  <>
                    Showing {totalProducts} product
                    {totalProducts !== 1 ? "s" : ""}
                    {searchQuery && ` matching "${searchQuery}"`}
                    {selectedCategory &&
                      ` in ${
                        productsData.categories.find(
                          (c) => c.id === selectedCategory
                        )?.name
                      }`}
                    {(searchQuery || selectedCategory) && (
                      <Button
                        variant="link"
                        size="sm"
                        onClick={clearFilters}
                        className="ml-2 h-auto p-0 text-primary hover:text-primary/80"
                      >
                        Clear filters
                      </Button>
                    )}
                  </>
                ) : (
                  `Browse all ${productsData.categories.reduce(
                    (total, cat) => total + cat.products.length,
                    0
                  )} products`
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredData.categories.length === 0 ? (
            <div className="text-center py-12">
              <div className="mb-4">
                <Search className="mx-auto h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No products found
              </h3>
              <p className="text-muted-foreground mb-4">
                No products match your search criteria. Try adjusting your
                search terms or clear the filters.
              </p>
              <Button
                onClick={clearFilters}
                variant="outline"
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            filteredData.categories.map((category, categoryIndex) => (
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
                {categoryIndex < filteredData.categories.length - 1 && (
                  <div className="mt-16 border-t border-border"></div>
                )}
              </div>
            ))
          )}
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
