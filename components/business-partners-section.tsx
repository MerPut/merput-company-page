import Image from "next/image";

// All logos set to placeholder as requested
const partners = [
  { name: "Bakrie Metal Industries", logo: "/placeholder.svg" },
  { name: "PT. DUTA HITA JAYA", logo: "/placeholder.svg" },
  { name: "KAI", logo: "/placeholder.svg" },
  { name: "ICHIRO", logo: "/placeholder.svg" },
  { name: "PT. SURYA CEMERLANG TEKNINDO", logo: "/placeholder.svg" },
  { name: "KARYA INDAH", logo: "/placeholder.svg" },
  { name: "TEMINDO", logo: "/placeholder.svg" },
  { name: "PT. GLOBAL SHIPPING INDONESIA", logo: "/placeholder.svg" },
  { name: "AIP", logo: "/placeholder.svg" },
  { name: "PT ENCO TEHNIK INDONESIA", logo: "/placeholder.svg" },
  { name: "Adlin", logo: "/placeholder.svg" },
  { name: "PT. KIREI MITRA MANDIRI", logo: "/placeholder.svg" },
  { name: "VASANTA INNOPARK", logo: "/placeholder.svg" },
  { name: "BPS", logo: "/placeholder.svg" },
  { name: "MBI", logo: "/placeholder.svg" },
  { name: "SPI", logo: "/placeholder.svg" },
  { name: "PT. MAJU WIRA PERSADA", logo: "/placeholder.svg" },
  { name: "SATRIA TIRTA PERKASA", logo: "/placeholder.svg" },
  { name: "CJP", logo: "/placeholder.svg" },
  { name: "PT. KARUNA MANINGSAL SEJAHTERA", logo: "/placeholder.svg" },
  { name: "CV. TAKTA JAYA", logo: "/placeholder.svg" },
  { name: "NUSA DAYA", logo: "/placeholder.svg" },
  { name: "FOSROC INDONESIA", logo: "/placeholder.svg" },
];

export function BusinessPartnersSection() {
  return (
    <section
      id="partners"
      className="py-16 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-2">
            Mitra Bisnis
          </h2>
          <h3 className="text-2xl font-medium text-red-500 italic">
            Business Partners
          </h3>
          <div className="w-24 h-1 bg-red-500 mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[100px]"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                width={120}
                height={60}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are proud to work with these trusted business partners who share
            our commitment to quality and excellence in the paint and coating
            industry.
          </p>
        </div>
      </div>
    </section>
  );
}
