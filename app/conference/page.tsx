"use client";

import { Users, Clock, Video, CheckCircle } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScreeningForm from "@/components/screening-form";
import ConsultationModal from "@/components/consultation-modal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScreeningContent } from "@/hooks/usePageContent";

export default function Conference() {
  const { data: content, isLoading, error } = useScreeningContent('conference');

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-lg">Loading conference information...</div>
        </div>
      </div>
    );
  }

  if (error || !content) {
    // Fallback to existing content if CMS data fails
    return <ConferencePageFallback />;
  }
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-teal-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <Users className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-display font-bold mb-6">{content.title}</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {content.description}
          </p>
          <div className="mt-8">
            <ConsultationModal>
              <Button className="bg-white text-teal-600 px-8 py-4 hover:bg-cream-100 transition-colors duration-200 text-lg font-semibold">
                Schedule Your Conference Screening
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
                "Raw, powerful, and deeply moving. This film doesn't just tell a story—it invites you to feel every moment and leaves you thinking long after the credits roll."
              </blockquote>
              <footer className="text-center text-gray-600 font-medium">
                — Denise Amundson, RN Labor and Delivery
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
              <h2 className="text-3xl font-display font-bold">Perfect for Conference Settings</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                24 Days Without You serves as a powerful opening, closing, or plenary session for conferences. 
                We highly recommend hosting a panel discussion following a screening of the film.
              </p>
              
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
                <h3 className="text-xl font-semibold text-teal-800 mb-4">AIM Conference Highlight</h3>
                <p className="text-gray-700 leading-relaxed">
                  24 Days Without You was shown in a plenary session at the Alliance for Innovation on Maternal Health's 
                  national conference in February 2025. It was followed by a panel discussion with Annie's OBGYN, 
                  Annie's father, and Annie.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  AIM also enabled their audience members to submit questions directly to Annie. She answered those 
                  questions and spoke at the close of the conference.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Form Section */}
          <div className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold mb-4">Inquire About a Conference Screening</h2>
              <p className="text-xl text-gray-600">
                Bring 24 Days Without You to your next conference!
              </p>
            </div>
            <ScreeningForm screeningType="conference" title="Conference" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-12">{content.benefits.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {content.benefits.items.map((benefit: string, index: number) => (
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
            <h2 className="text-3xl font-display font-bold text-center mb-12">{content.process.title}</h2>
            <div className="space-y-8">
              {content.process.steps.map((step: any, index: number) => (
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
            <h2 className="text-3xl font-display font-bold mb-6">Request Your Conference Screening</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to bring this powerful story to your medical conference? Fill out the form below and we'll help you create an impactful screening experience.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ScreeningForm screeningType="conference" title="Conference Screening Request" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Fallback component with original content
function ConferencePageFallback() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Original conference page content as fallback */}
      <section className="bg-teal-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <Users className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-display font-bold mb-6">Conference Screenings</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            24 Days Without You serves as a powerful opening, closing, or plenary session for conferences. 
            We highly recommend hosting a panel discussion following a screening of the film.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}