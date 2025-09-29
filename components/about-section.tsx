export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-muted/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-accent">Tentang Perusahaan</span>
          </h2>
          <h3 className="text-2xl text-primary italic">About Us</h3>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-accent/10 p-8 rounded-2xl">
              <p className="text-accent leading-relaxed mb-4">
                Merput Paint merupakan Merk Produksi dari kami yaitu PT. Fauzi
                Manufacturing Industri.
              </p>
              <p className="text-accent leading-relaxed mb-4">
                Perusahaan yang didirikan pada Tahun 2022 dan mulai beroperasi
                Produksi sejak Bulan Mei Tahun 2023.
              </p>
              <p className="text-accent leading-relaxed">
                Berawal dari pengalaman Tim Ahli PT Fauzi Manufacturing Industri
                telah memproduks cat besi (metal protective coating), cat lantai
                (floor coating), cat anti karat, cat anti-bocor (waterproofing),
                cat kapal laut (marine paint), cat aerosol, cat kendaran dan cat
                tahan api.
              </p>
            </div>

            <div className="bg-primary/10 p-8 rounded-2xl">
              <p className="text-primary leading-relaxed mb-4">
                Merput Paint is a brand manufactured by PT. Fauzi Manufacturing
                Industri.
              </p>
              <p className="text-primary leading-relaxed mb-4">
                The company was established in 2022 and began its production
                operations in May 2023.
              </p>
              <p className="text-primary leading-relaxed">
                Starting from the experience of the expert team of PT Fauzi
                Manufacturing Industri, we have now produced metal protective
                coating, floor coating, anti-rust paint, waterproofing paint,
                marine paint, aerosol paint, car refinish paint, and fire
                protection paint.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-muted-foreground leading-relaxed">
                Beragam produk cat ini siap memenuhi kebutuhan pasar serta
                mendukung kemajuan infrastruktur Indonesia.
              </p>
              <p className="text-primary leading-relaxed mt-4">
                These various paint products are ready to provide market needs
                and support the progress of Indonesia's infrastructure.
              </p>
            </div>
            {/* </CHANGE> */}
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg"
                alt="MERPUT Paint facility"
                className="w-full h-full object-cover"
              />
            </div>
            {/* </CHANGE> */}
          </div>
        </div>
      </div>
    </section>
  );
}
