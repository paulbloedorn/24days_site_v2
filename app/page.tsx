import { Calendar, Stethoscope, GraduationCap, Play, Users, CheckCircle, Star } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import ConsultationModal from "@/components/consultation-modal";
import TrailerModal from "@/components/trailer-modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import posterImage from "@assets/poster_24_days_1752421477308.png";
import { client } from "../tina/__generated__/client";

export default async function Home() {
  const result = await client.queries.pages({
    relativePath: "home.json",
  });
  const data = result.data.pages;
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Movie Poster */}
      <section className="py-20 bg-cream-100 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-display font-bold leading-tight text-gray-800">
                {data?.hero?.title ?? "We all take childbirth for granted..."}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {data?.hero?.description ?? "On March 22, 2020, Annie and Tony checked into the hospital for what should have been a routine delivery of their baby boy. What followed was 24 days that would change their lives forever."}
              </p>
              <div className="pt-4">
                <TrailerModal>
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold inline-flex items-center space-x-2 shadow-lg">
                    <Play className="h-6 w-6" />
                    <span>Watch Trailer</span>
                  </Button>
                </TrailerModal>
              </div>
            </div>
            <div className="relative">
              <div className="max-w-lg mx-auto">
                <Image 
                  src={posterImage} 
                  alt="24 Days Without You movie poster featuring Annie and her baby" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                  width={500}
                  height={750}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Film Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-800 mb-4">
              {data?.aboutTheFilm?.title ?? "About the Film"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {data?.aboutTheFilm?.description ?? "Address urgent healthcare priorities with an authentic patient story that improves clinical competency, reduces medical errors, and enhances trauma-informed care across your organization."}
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-cream-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-teal-800 mb-4">
              {data?.aboutTheFilm?.mainContent?.title ?? "Award-Winning Documentary with Complete Education Packages"}
            </h3>
            <p className="text-gray-700 mb-4">
              {data?.aboutTheFilm?.mainContent?.description1 ?? "Meet continuing education requirements while addressing critical healthcare challenges. This powerful case study transforms abstract concepts into lived experiences, helping healthcare teams understand the real impact of their clinical decisions on patients and families."}
            </p>
            <p className="text-gray-700">
              {data?.aboutTheFilm?.mainContent?.description2 ?? "Whether you need CME-accredited conference content, staff competency training, or real-world curriculum enhancement, our flexible educational packages provide the authentic patient perspective your audience needs to improve care quality and reduce medical errors."}
            </p>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-teal-800">
              {data?.aboutTheFilm?.features?.title ?? "Flexible Solutions for Every Educational Need"}
            </h3>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <ul className="space-y-4">
                {(data?.aboutTheFilm?.features?.items ?? [
                  "56-minute documentary with institutional licensing or classroom streaming",
                  "Live or virtual speaking engagements with AFE survivor and medical experts",
                  "Discussion guides mapped to educational standards and competencies",
                  "CME accreditation support and continuing education credits",
                  "Assessment tools and reflection exercises for deeper learning"
                ]).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How Our Educational Package Works */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-teal-800">
              {data?.aboutTheFilm?.howItWorks?.title ?? "How Our Educational Package Works"}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {(data?.aboutTheFilm?.howItWorks?.steps ?? [
                {
                  step: 1,
                  title: "Watch & Learn",
                  description: "Screen the 56-minute documentary with your audience. Available for individual institutional licenses or classroom streaming passes."
                },
                {
                  step: 2,
                  title: "Engage & Discuss",
                  description: "Add live speaking engagements with Annie (AFE survivor) and/or her medical team. Use our expertly crafted discussion guides and facilitation materials."
                },
                {
                  step: 3,
                  title: "Transform Practice",
                  description: "Implement trauma-informed care principles in your practice with ongoing support materials and assessment tools."
                }
              ]).map((step, index) => (
                <Card key={index} className="text-center border-2 border-teal-100 hover:border-teal-300 transition-colors">
                  <CardContent className="pt-8">
                    <div className="bg-teal-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-4">
                      {step?.step ?? index + 1}
                    </div>
                    <h4 className="text-xl font-semibold mb-3 text-teal-800">{step?.title ?? ""}</h4>
                    <p className="text-gray-600">{step?.description ?? ""}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Package Options */}
          <div className="bg-cream-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8 text-teal-800">Choose Your Package</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {(data?.aboutTheFilm?.packages ?? [
                {
                  title: "Film + Materials Package",
                  description: "Perfect for self-facilitated screenings and classroom use",
                  features: [
                    "Documentary streaming or institutional license",
                    "Discussion guides and educational handouts",
                    "Assessment tools and reflection worksheets",
                    "Post-screening survey templates"
                  ]
                },
                {
                  title: "Full Experience Package",
                  description: "Complete solution with live speaking engagement",
                  features: [
                    "Everything in Film + Materials Package",
                    "Live virtual or in-person speaking engagement",
                    "Q&A session with Annie and/or medical team",
                    "CME credit coordination",
                    "Custom content for your organization"
                  ]
                }
              ]).map((pkg, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-teal-800 mb-3">{pkg?.title ?? ""}</h4>
                  <p className="text-gray-600 mb-4">{pkg?.description ?? ""}</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {(pkg?.features ?? []).map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 bg-cream-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            {data?.testimonials?.title ?? "What People Are Saying"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {(data?.testimonials?.items ?? [
              {
                quote: "Raw, powerful, and deeply moving. This film doesn't just tell a story—it invites you to feel every moment and leaves you thinking long after the credits roll.",
                author: "Denise Amundson, RN Labor and Delivery",
                badge: "Conference"
              },
              {
                quote: "I'm a better nurse for having the opportunity to see their story. This film should be essential viewing for all healthcare professionals.",
                author: "Julie O'Hara, RN, Neonatology",
                badge: "Hospital"
              },
              {
                quote: "This film should be essential viewing for all healthcare professionals who are involved in obstetric care.",
                author: "Catherine Hermann, MD",
                badge: "Education"
              }
            ]).map((testimonial, index) => {
              const iconMap: Record<string, typeof Calendar> = {
                Conference: Calendar,
                Hospital: Stethoscope,
                Education: GraduationCap
              };
              const Icon = iconMap[testimonial?.badge ?? ""] ?? Calendar;
              
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Icon className="h-6 w-6 text-teal-600 mr-2" />
                      <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                        {testimonial?.badge ?? ""}
                      </Badge>
                    </div>
                    <blockquote className="text-lg italic text-gray-700 mb-4">
                      "{testimonial?.quote ?? ""}"
                    </blockquote>
                    <footer className="text-sm font-medium text-gray-600">
                      — {testimonial?.author ?? ""}
                    </footer>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audience Cards Section */}
      <section className="bg-teal-500 text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
              {data?.audienceCards?.title ?? "Tailored Solutions for Healthcare Education Leaders"}
            </h2>
            <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto">
              {data?.audienceCards?.subtitle ?? "Meet your specific educational goals with flexible packages designed for continuing education, staff competency, and curriculum enhancement"}
            </p>
          </div>

          {/* Three Audience Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {(data?.audienceCards?.cards ?? [
              {
                title: "Medical Conference Planners",
                subtitle: "Meet continuing education requirements with compelling content",
                icon: "Calendar",
                benefits: [
                  "ACCME-compliant content addressing current healthcare challenges",
                  "Expert panels with real patient perspective boost engagement",
                  "Complete logistics support: licensing, A/V, and promotional materials"
                ]
              },
              {
                title: "Hospital Nurse Educators",
                subtitle: "Improve patient outcomes through staff competency training",
                icon: "Stethoscope",
                benefits: [
                  "Evidence-based training aligned to AACN & AWHONN competencies",
                  "Reduces medical errors through trauma-informed care principles",
                  "Flexible delivery: grand rounds, unit training, or self-paced modules"
                ]
              },
              {
                title: "Medical School Professors",
                subtitle: "Enhance curriculum with real-world case studies",
                icon: "GraduationCap",
                benefits: [
                  "Case studies mapped to AAMC competencies and learning objectives",
                  "Cross-curricular applications: OB-GYN, psychiatry, ethics, health systems",
                  "LMS-ready assessments and authentic patient perspectives"
                ]
              }
            ]).map((card, index) => {
              const iconMap: Record<string, typeof Calendar> = {
                Calendar: Calendar,
                Stethoscope: Stethoscope,
                GraduationCap: GraduationCap
              };
              const Icon = iconMap[card?.icon ?? ""] ?? Calendar;
              const roleMap: Record<string, string> = {
                "Medical Conference Planners": "conference",
                "Hospital Nurse Educators": "hospital",
                "Medical School Professors": "education"
              };
              const defaultRole = roleMap[card?.title ?? ""] ?? "conference";
              
              return (
                <Card key={index} className="bg-white text-gray-800 shadow-2xl border-0 hover:shadow-3xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-teal-600" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-teal-800 mb-2">
                        {card?.title ?? ""}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">{card?.subtitle ?? ""}</p>
                    </div>
                    <div className="space-y-4 mb-8">
                      {(card?.benefits ?? []).map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <ConsultationModal defaultRole={defaultRole}>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg font-semibold">
                        Schedule a Consult
                      </Button>
                    </ConsultationModal>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Metrics Bar */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-center">
            {(data?.metrics?.stats ?? [
              {
                number: "6,500+",
                label: "clinicians trained",
                icon: "Users"
              },
              {
                number: "97%",
                label: "said session will change practice",
                icon: "Star"
              }
            ]).map((stat, index) => {
              const iconMap: Record<string, typeof Users> = {
                Users: Users,
                Star: Star
              };
              const Icon = iconMap[stat?.icon ?? ""] ?? Users;
              
              return (
                <div key={index} className="flex items-center space-x-2">
                  <Icon className="h-8 w-8 text-teal-600" />
                  <div>
                    <div className="text-3xl font-bold text-teal-800">{stat?.number ?? ""}</div>
                    <div className="text-sm text-gray-600">{stat?.label ?? ""}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="bg-teal-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Ready to Transform Your Practice?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss how 24 Days Without You can enhance your educational programs and improve patient care.
          </p>
          <ConsultationModal>
            <Button className="bg-white text-teal-700 px-12 py-4 hover:bg-cream-100 transition-colors duration-200 text-lg font-semibold">
              Schedule a Consult
            </Button>
          </ConsultationModal>
        </div>
      </section>

      <Footer />
    </div>
  );
}