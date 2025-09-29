import Image from "next/image"

const partners = [
  { name: "Bakrie Metal Industries", logo: "/bakrie-metal-industries-logo.jpg" },
  { name: "PT. DUTA HITA JAYA", logo: "/dhj-pt-duta-hita-jaya-logo-blue-octagon.jpg" },
  { name: "KAI", logo: "/kai-indonesian-railway-company-logo-blue-orange.jpg" },
  { name: "ICHIRO", logo: "/ichiro-pt-ichiro-industry-indonesia-logo.jpg" },
  { name: "PT. SURYA CEMERLANG TEKNINDO", logo: "/surya-cemerlang-teknindo-logo-red-s.jpg" },
  { name: "KARYA INDAH", logo: "/karya-indah-project-store-ki-logo-red-oval.jpg" },
  { name: "TEMINDO", logo: "/temindo-pt-temindo-jaya-setia-logo-green.jpg" },
  { name: "PT. GLOBAL SHIPPING INDONESIA", logo: "/global-shipping-indonesia-logo-blue-wave.jpg" },
  { name: "AIP", logo: "/aip-aristek-indonusantara-logo-blue-triangle.jpg" },
  { name: "PT ENCO TEHNIK INDONESIA", logo: "/enco-tehnik-indonesia-logo-blue-white.jpg" },
  { name: "Adlin", logo: "/adlin-indonesia-logo-red-yellow-script.jpg" },
  { name: "PT. KIREI MITRA MANDIRI", logo: "/kmm-kirei-mitra-mandiri-logo-blue-circle.jpg" },
  { name: "VASANTA INNOPARK", logo: "/vasanta-innopark-logo-blue-star-compass.jpg" },
  { name: "BPS", logo: "/bps-logo-circular-badge.jpg" },
  { name: "MBI", logo: "/mbi-mahakeru-baja-indonesia-logo-black-triangle.jpg" },
  { name: "SPI", logo: "/placeholder.svg?height=60&width=120&text=SPI" },
  { name: "PT. MAJU WIRA PERSADA", logo: "/placeholder.svg?height=60&width=120&text=MAJU+WIRA" },
  { name: "SATRIA TIRTA PERKASA", logo: "/placeholder.svg?height=60&width=120&text=SATRIA+TIRTA" },
  { name: "CJP", logo: "/placeholder.svg?height=60&width=120&text=CJP" },
  { name: "PT. KARUNA MANINGSAL SEJAHTERA", logo: "/placeholder.svg?height=60&width=120&text=KARUNA" },
  { name: "CV. TAKTA JAYA", logo: "/placeholder.svg?height=60&width=120&text=TAKTA+JAYA" },
  { name: "NUSA DAYA", logo: "/placeholder.svg?height=60&width=120&text=NUSA+DAYA" },
  { name: "FOSROC INDONESIA", logo: "/placeholder.svg?height=60&width=120&text=FOSROC" },
]

export function BusinessPartnersSection() {
  return (
    <section id="partners" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-2">Mitra Bisnis</h2>
          <h3 className="text-2xl font-medium text-red-500 italic">Business Partners</h3>
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
            We are proud to work with these trusted business partners who share our commitment to quality and excellence
            in the paint and coating industry.
          </p>
        </div>
      </div>
    </section>
  )
}
