"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import productsData from "@/data/products.json"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-primary">MERPUT</span>
            <span className="text-sm text-muted-foreground">PAINT</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#vision-mission" className="text-muted-foreground hover:text-foreground transition-colors">
              Vision & Mission
            </a>
            <a href="#values" className="text-muted-foreground hover:text-foreground transition-colors">
              Values
            </a>
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors">
                <span>Products</span>
                <ChevronDown size={16} className={`transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-md shadow-lg py-2">
                  <Link
                    href="/products"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    All Products
                  </Link>
                  <div className="border-t border-border my-2"></div>
                  {productsData.categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/products#${category.id}`}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <a href="#partners" className="text-muted-foreground hover:text-foreground transition-colors">
              Partners
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Get Quote
            </Button>
            <Button size="sm">Contact Us</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#vision-mission" className="text-muted-foreground hover:text-foreground transition-colors">
                Vision & Mission
              </a>
              <a href="#values" className="text-muted-foreground hover:text-foreground transition-colors">
                Values
              </a>
              <div className="space-y-2">
                <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  Products
                </Link>
                <div className="pl-4 space-y-2">
                  {productsData.categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/products#${category.id}`}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              <a href="#partners" className="text-muted-foreground hover:text-foreground transition-colors">
                Partners
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  Get Quote
                </Button>
                <Button size="sm">Contact Us</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
