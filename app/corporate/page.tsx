import { Building2, Clock, Video, CheckCircle } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScreeningForm from "@/components/screening-form";
import ConsultationModal from "@/components/consultation-modal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { promises as fs } from "fs";
import path from "path";

export default async function Corporate() {
  // Read JSON file instead of using Tina
  const filePath = path.join(process.cwd(), "content/pages/corporate.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const content = JSON.parse(fileContents);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-teal-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <Building2 className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-display font-bold mb-6">{content.hero?.title || content.title || "Corporate Screenings"}</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {content.hero?.description || "24 Days Without You is an inspiring and informative centerpiece to bring awareness and foster an open conversation on maternal health at your corporate event."}
          </p>
          <div className="mt-8">
            <ConsultationModal>
              <Button className="bg-white text-teal-600 px-8 py-4 hover:bg-cream-100 transition-colors duration-200 text-lg font-semibold">
                Schedule Your Corporate Screening
              </Button>
            </ConsultationModal>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-8">
              <blockquote className="text-2xl font-display italic text-center text-gray-700 mb-6">
                "Equal parts heart, courage, and cinematic sparkle. Your film doesn't just tell a story; 
                it breaks stigma, builds bridges, and teaches compassion in a world sorely needing all three."
              </blockquote>
              <footer className="text-center text-gray-600 font-medium">
                — Glynne Barber Bassi, CFP
              </footer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-cream-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold">Corporate Wellness & Awareness</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg text-gray-700 leading-relaxed">
                  24 Days Without You is an inspiring and informative centerpiece to bring awareness 
                  and foster an open conversation on maternal health at your corporate event.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-teal-500" />
                  <span className="text-gray-700">56 minutes long</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Video className="h-6 w-6 text-teal-500" />
                  <span className="text-gray-700">Vimeo streaming</span>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-teal-800 mb-4">{content.highlight?.title || "Morgan Stanley Event"}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {content.highlight?.description || "24 Days Without You was hosted by one of Morgan Stanley's women's wellness groups in honor of Maternal Mental Health Awareness Day. They rented a theater and provided snacks and beverages. Conversation with Annie and Rebecca followed the film."}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Form Section */}
          <div className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold mb-4">Inquire About Corporate Screening</h2>
              <p className="text-xl text-gray-600">
                Include 24 Days Without You at your corporate event!
              </p>
            </div>
            <ScreeningForm screeningType="corporate" title="Corporate" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-12">{content.benefits?.title || "Corporate Benefits"}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {(content.benefits?.items || [
                "Employee wellness program enhancement",
                "Diversity and inclusion awareness",
                "Workplace empathy development",
                "Healthcare benefits understanding",
                "Employee resource group engagement",
                "Corporate social responsibility initiatives"
              ]).map((benefit: string, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-cream-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-12">{content.process?.title || "How It Works"}</h2>
            <div className="space-y-8">
              {(content.process?.steps || [
                { title: "Corporate Consultation", description: "Discuss your company's wellness goals, employee demographics, and how the screening can support your corporate initiatives." },
                { title: "Program Customization", description: "Tailor the screening experience to align with your corporate values, wellness programs, and employee engagement objectives." },
                { title: "Employee Screening & Discussion", description: "Host the screening with facilitated discussions about healthcare awareness, family support, and workplace wellness." }
              ]).map((step: any, index: number) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Request Your Corporate Screening</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to bring this powerful story to your workplace? Fill out the form below and we'll help you create an impactful screening experience.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ScreeningForm screeningType="corporate" title="Corporate Screening Request" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}