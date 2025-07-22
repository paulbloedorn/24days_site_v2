import { Hospital, Clock, Video, CheckCircle } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScreeningForm from "@/components/screening-form";
import ConsultationModal from "@/components/consultation-modal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { promises as fs } from "fs";
import path from "path";

export default async function HospitalClinic() {
  // Read JSON file instead of using Tina
  const filePath = path.join(process.cwd(), "content/pages/hospital.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const content = JSON.parse(fileContents);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-teal-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <Hospital className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-display font-bold mb-6">{content.hero?.title || content.title || "Hospital & Clinic Screenings"}</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {content.hero?.description || "24 Days Without You encourages discussion and reflection among medical professionals in recurring staff meetings or special events."}
          </p>
          <div className="mt-8">
            <ConsultationModal>
              <Button className="bg-white text-teal-600 px-8 py-4 hover:bg-cream-100 transition-colors duration-200 text-lg font-semibold">
                Schedule Your Hospital Screening
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
                "I'm a better nurse for having the opportunity to see their story."
              </blockquote>
              <footer className="text-center text-gray-600 font-medium">
                — Julie O'Hara, RN, Neonatology
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
              <h2 className="text-3xl font-display font-bold">For Medical Professionals</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg text-gray-700 leading-relaxed">
                  24 Days Without You encourages discussion and reflection among medical professionals 
                  in recurring staff meetings or special events.
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
                <h3 className="text-xl font-semibold text-teal-800 mb-4">{content.highlight?.title || "Angela's Event Highlight"}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {content.highlight?.description || "24 Days Without You was shown to all L&D staff in one of the hospital campus classrooms one evening in June. The event was sponsored by an OBGYN group working at the hospital and featured snacks, drinks, and discussion after the film screening."}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Form Section */}
          <div className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold mb-4">Inquire About a Hospital Screening</h2>
              <p className="text-xl text-gray-600">
                Host a screening at your clinic or hospital!
              </p>
            </div>
            <ScreeningForm screeningType="hospital" title="Hospital/Clinic" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-12">{content.benefits?.title || "Benefits for Your Healthcare Team"}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {(content.benefits?.items || [
                "Enhanced patient safety awareness",
                "Improved trauma-informed care practices",
                "Staff education and team building",
                "Policy development support",
                "Reduced medical liability risks",
                "Better patient communication skills"
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
            <h2 className="text-3xl font-display font-bold text-center mb-12">{content.process?.title || "Implementation Process"}</h2>
            <div className="space-y-8">
              {(content.process?.steps || [
                { title: "Needs Assessment", description: "We evaluate your current training needs and identify specific areas where the screening can enhance your team's capabilities." },
                { title: "Custom Program Design", description: "Develop a tailored screening program that aligns with your hospital's policies, procedures, and educational goals." },
                { title: "Staff Training & Implementation", description: "Conduct the screening session with follow-up discussions, practical workshops, and ongoing support for implementation." }
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
            <h2 className="text-3xl font-display font-bold mb-6">Request Your Hospital Screening</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to bring this powerful story to your healthcare team? Fill out the form below and we'll help you create an impactful training experience.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ScreeningForm screeningType="hospital" title="Hospital/Clinic Screening Request" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}