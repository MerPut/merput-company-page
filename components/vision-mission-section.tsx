export function VisionMissionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-accent">Visi & Misi</span>
          </h2>
          <h3 className="text-2xl text-primary italic">Vision & Mission</h3>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Vision */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-accent text-center">VISI</h3>
            <div className="bg-muted/50 p-8 rounded-2xl">
              <p className="text-accent leading-relaxed">
                Terus tumbuh lebih besar dan lebih baik di pasar industri manufaktur cat & Coating, dengan fokus pada
                kualitas produk yang berkelanjutan dan mengikuti perkembangan teknologi industri cat dengan tata kelola
                perusahaan yang baik dan peduli terhadap lingkungan.
              </p>
            </div>

            <h3 className="text-3xl font-bold text-primary text-center">VISION</h3>
            <div className="bg-primary/10 p-8 rounded-2xl">
              <p className="text-primary leading-relaxed">
                To continue growing larger and better in the paint & coating manufacturing industry market, focusing on
                sustainable product quality and keeping up with the technological advancements in the paint industry
                with good corporate governance and an environmental concern.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-accent text-center">MISI</h3>
            <div className="bg-muted/50 p-8 rounded-2xl">
              <p className="text-accent leading-relaxed">
                Terus berinovasi untuk memenuhi kebutuhan dan keinginan pelanggan sehingga menghasilkan produk terbaik
                dan berkelanjutan, agar menjadi nilai tambah bagi pelanggan dan bermanfaat bagi masyarakat Indonesia
                secara umum seperti meningkatkan pelatihan SDM, menciptakan lingkungan kerja yang kondusif, dan
                menyediakan lapangan kerja yang luas.
              </p>
            </div>

            <h3 className="text-3xl font-bold text-primary text-center">MISSION</h3>
            <div className="bg-primary/10 p-8 rounded-2xl">
              <p className="text-primary leading-relaxed">
                To keep innovating to meet the needs of customers, thus producing the best and sustainable products, to
                added value for customers and benefit the Indonesian society at large, such as enhancing human resources
                training, creating a conducive work environment, and providing extensive employment opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Mission Icon */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-lg border-4 border-primary/20">
            <div className="text-4xl">🤝</div>
          </div>
        </div>
      </div>
    </section>
  )
}
