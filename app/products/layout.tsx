import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - MERPUT Paint",
  description:
    "Explore our comprehensive range of industrial paint and coating solutions including marine, floor, industrial, and protective coatings. Search and filter through our products to find the perfect coating solution for your needs.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
