import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-primary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 mb-16">
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 bg-white rounded-full p-4">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/company-profile-images/contact-us.png"
                  alt="MERPUT Paint Facility"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-2">Hubungi Kami</h2>
            <h3 className="text-2xl font-medium text-white italic">Contact Us</h3>
          </div>
        </div>
        {/* </CHANGE> */}

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="border-0 bg-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                    <Input
                      placeholder="Last Name"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <Input
                    placeholder="Email Address"
                    type="email"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  />
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  />
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  />
                  <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="grid gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-white">Call Us</h3>
                  <p className="text-white/80">021 5020 8099</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-white">Email Us</h3>
                  <p className="text-white/80">info@merput.id</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-white">Visit Our Factory</h3>
                  <p className="text-white/80">
                    Kawasan Industri Jababeka II
                    <br />
                    Jl. Industri Selatan IIIA Blok GG 2C
                    <br />
                    Cikarang Selatan Kab. Bekasi
                    <br />
                    Jawa Barat, 17530
                  </p>
                </div>
              </div>
              {/* </CHANGE> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
