import { useTina } from "tinacms/dist/react";
import { client } from "@/lib/tina";
import { Calendar, Stethoscope, GraduationCap, Play, Users, CheckCircle, Star } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import ConsultationModal from "@/components/consultation-modal";
import TrailerModal from "@/components/trailer-modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";

export default function HomeTina() {
  // First, load the data using React Query
  const { data: initialData, isLoading, error } = useQuery({
    queryKey: ['tina-home'],
    queryFn: async () => {
      const result = await client.queries.pages({
        relativePath: 'home.json'
      });
      return result;
    }
  });

  // Use Tina hook for visual editing
  const { data } = useTina({
    query: initialData?.query || '',
    variables: initialData?.variables || {},
    data: initialData?.data || { pages: {} }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading content...</p>
        </div>
      </div>
    );
  }

  if (error || !data?.pages) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Failed to load content</p>
        </div>
      </div>
    );
  }

  const content = data.pages;

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Movie Poster */}
      {content.hero && (
        <section className="py-20 bg-cream-100 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl lg:text-5xl font-display font-bold leading-tight text-gray-800">
                  {content.hero.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {content.hero.description}
                </p>
                <div className="pt-4">
                  <TrailerModal>
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold inline-flex items-center space-x-2 shadow-lg">
                      <Play className="h-6 w-6" />
                      <span>{content.hero.buttonText || 'Watch Trailer'}</span>
                    </Button>
                  </TrailerModal>
                </div>
              </div>
              <div className="relative">
                <div className="max-w-lg mx-auto">
                  {content.hero.posterImage && (
                    <img 
                      src={content.hero.posterImage} 
                      alt={content.hero.posterAlt || "24 Days Without You movie poster"} 
                      className="w-full h-auto rounded-lg shadow-2xl"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About the Film Section */}
      {content.aboutTheFilm && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-6 text-gray-800">
                {content.aboutTheFilm.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {content.aboutTheFilm.description}
              </p>
            </div>

            {content.aboutTheFilm.mainContent && (
              <div className="bg-teal-50 rounded-2xl p-12 mb-16">
                <h3 className="text-3xl font-display font-bold mb-6 text-teal-900">
                  {content.aboutTheFilm.mainContent.title}
                </h3>
                <p className="text-lg text-teal-800 mb-6">
                  {content.aboutTheFilm.mainContent.description1}
                </p>
                <p className="text-lg text-teal-800">
                  {content.aboutTheFilm.mainContent.description2}
                </p>
              </div>
            )}

            {content.aboutTheFilm.features && (
              <div className="mb-16">
                <h3 className="text-2xl font-display font-bold mb-8 text-gray-800">
                  {content.aboutTheFilm.features.title}
                </h3>
                <div className="space-y-4">
                  {content.aboutTheFilm.features.items?.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {content.aboutTheFilm.howItWorks && (
              <div className="mb-16">
                <h3 className="text-2xl font-display font-bold mb-12 text-center text-gray-800">
                  {content.aboutTheFilm.howItWorks.title}
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {content.aboutTheFilm.howItWorks.steps?.map((step) => (
                    <div key={step.step} className="text-center">
                      <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                        {step.step}
                      </div>
                      <h4 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {content.aboutTheFilm.packages && (
              <div className="grid md:grid-cols-2 gap-8">
                {content.aboutTheFilm.packages.map((pkg, index) => (
                  <Card key={index} className="border-2 border-gray-200 hover:border-teal-600 transition-colors">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-display font-bold mb-4 text-gray-800">
                        {pkg.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{pkg.description}</p>
                      {pkg.items && (
                        <ul className="space-y-3 mb-8">
                          {pkg.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {pkg.ctaText && (
                        <ConsultationModal>
                          <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                            {pkg.ctaText}
                          </Button>
                        </ConsultationModal>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {content.testimonials && content.testimonials.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-display font-bold text-center mb-16 text-gray-800">
              What Healthcare Professionals Are Saying
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.author}</p>
                      {testimonial.badge && (
                        <Badge variant="secondary" className="mt-2">
                          {testimonial.badge}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Impact Metrics */}
      {content.metrics && content.metrics.length > 0 && (
        <section className="py-24 bg-teal-600 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-display font-bold text-center mb-16">
              Our Impact
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {content.metrics.map((metric, index) => (
                <div key={index}>
                  <div className="text-5xl font-bold mb-2">{metric.number}</div>
                  <div className="text-xl opacity-90">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recognition Section */}
      {content.recognition && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-display font-bold text-center mb-12 text-gray-800">
              {content.recognition.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {content.recognition.awards?.map((award, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <p className="text-gray-700">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Screening Types */}
      {content.screeningTypes && (
        <section className="py-24 bg-cream-100">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-display font-bold text-center mb-16 text-gray-800">
              {content.screeningTypes.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.screeningTypes.types?.map((type, index) => {
                const IconComponent = {
                  Calendar,
                  Stethoscope,
                  GraduationCap,
                  Users
                }[type.icon] || Calendar;

                return (
                  <Card key={index} className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-8 text-center">
                      <IconComponent className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">{type.title}</h3>
                      <p className="text-gray-600 mb-4">{type.description}</p>
                      <a href={type.link} className="text-teal-600 font-semibold hover:underline">
                        Learn More →
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA */}
      {content.cta && (
        <section className="py-24 bg-teal-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              {content.cta.title}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {content.cta.description}
            </p>
            <ConsultationModal>
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                {content.cta.buttonText}
              </Button>
            </ConsultationModal>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}