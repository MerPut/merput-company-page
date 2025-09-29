export function CompanyValuesSection() {
  const values = [
    {
      title: "INTEGRITAS",
      titleEn: "INTEGRITY",
      description:
        "Selalu berupaya menerapkan Etika Bisnis yang baik dan meningkatkan standar mutu dan moral, dengan mengedepankan prinsip kejujuran, transparansi, dan konsistensi dengan menghargai waktu. Menerapkan SOP, membangun budaya kerja yang sehat, dan religius.",
      descriptionEn:
        "Always striving to apply good Business Ethics and improve standards of quality and morality, by prioritizing the principles of honesty, transparency, and consistency while respecting time, keeping SOP compliance, building a healthy work culture, and being religious.",
    },
    {
      title: "INOVATIF",
      titleEn: "INNOVATIVE",
      description:
        "Sebagai perusahaan industri cat, inovasi merupakan pondasi yang kami tekankan dengan mengintegrasikan nilai-nilai seperti kepedulian, kualitas, dan keunggulan dalam setiap produk yang kami hasilkan. Kami terus mendorong tim untuk mengembangkan solusi inovatif yang tidak hanya memenuhi kebutuhan pelanggan tetapi juga memberikan dampak positif bagi lingkungan.",
      descriptionEn:
        "As a paint industry company, innovation is the main foundation that we emphasize by integrating values such as responsibility, quality, and excellence into every product we produce. We continuously encourage our team to develop innovative solutions that not only meet customer needs but also have a positive impact on the environment.",
    },
    {
      title: "KEPUASAN PELANGGAN",
      titleEn: "CUSTOMER SATISFACTION",
      description:
        "Kepuasan pelanggan merupakan prioritas utama yang selaras dengan nilai-nilai kami yang mengutamakan kejujuran, kualitas, dan pelayanan terbaik. Kami berkomitmen untuk memberikan pengalaman pelanggan yang memuaskan melalui produk-produk berkualitas tinggi dan layanan yang responsif. Setiap interaksi dengan pelanggan kami diperlakukan dengan penuh hormat dan profesionalisme, karena kami percaya bahwa kepuasan pelanggan adalah cerminan dari integritas dan dedikasi kami dalam menjalankan bisnis.",
      descriptionEn:
        "Customer satisfaction is our top priority, aligned with our values that prioritize honesty, quality, and excellent service. We are committed to providing a satisfying customer experience through high-quality products and responsive services. Every interaction with our customers is treated with full respect and professionalism, because we believe that customer satisfaction reflects our integrity and dedication in running the business.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-accent">Nilai Nilai Perusahaan</span>
          </h2>
          <h3 className="text-2xl text-primary italic">Our Values</h3>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="space-y-12">
          {values.map((value, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-accent/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-accent mb-4">{value.title}</h3>
                <p className="text-accent leading-relaxed">{value.description}</p>
              </div>
              <div className="bg-primary/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-primary mb-4">{value.titleEn}</h3>
                <p className="text-primary leading-relaxed">{value.descriptionEn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
