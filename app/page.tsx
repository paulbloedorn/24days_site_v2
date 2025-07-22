import { Calendar, Stethoscope, GraduationCap, Play, Users, CheckCircle, Star } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import ConsultationModal from "@/components/consultation-modal";
import TrailerModal from "@/components/trailer-modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import posterImage from "@assets/poster_24_days_1752421477308.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Movie Poster */}
      <section className="py-20 bg-cream-100 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-display font-bold leading-tight text-gray-800">
                We all take childbirth for granted...
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                On March 22, 2020, Annie and Tony checked into the hospital for what should have been a routine delivery of their baby boy. What followed was 24 days that would change their lives forever.
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
                <img 
                  src={posterImage} 
                  alt="24 Days Without You movie poster featuring Annie and her baby" 
                  className="w-full h-auto rounded-lg shadow-2xl"
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
            <h2 className="text-4xl font-display font-bold mb-6">About the Film</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Address urgent healthcare priorities with an authentic patient story that improves clinical competency, reduces medical errors, and enhances trauma-informed care across your organization.
            </p>
          </div>
          
          {/* Core Value Proposition */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-teal-800 mb-6">Award-Winning Documentary with Complete Education Packages</h3>
              <p className="text-lg text-gray-700 mb-6">
                Meet continuing education requirements while addressing critical healthcare challenges. This powerful case study transforms abstract concepts into lived experiences, helping healthcare teams understand the real impact of their clinical decisions on patients and families.
              </p>
              <p className="text-lg text-gray-700">
                Whether you need CME-accredited conference content, staff competency training, or real-world curriculum enhancement, our flexible educational packages provide the authentic patient perspective your audience needs to improve care quality and reduce medical errors.
              </p>
            </div>
            
            <div className="bg-teal-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-teal-800 mb-4">Flexible Solutions for Every Educational Need</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">56-minute documentary with institutional licensing or classroom streaming</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Live or virtual speaking engagements with AFE survivor and medical experts</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Discussion guides mapped to educational standards and competencies</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">CME accreditation support and continuing education credits</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Assessment tools and reflection exercises for deeper learning</span>
                </div>
              </div>
            </div>
          </div>

          {/* How Our Educational Package Works */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-teal-800">How Our Educational Package Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-2 border-teal-100 hover:border-teal-300 transition-colors">
                <CardContent className="pt-8">
                  <div className="bg-teal-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-4">1</div>
                  <h4 className="text-xl font-semibold mb-3 text-teal-800">Watch & Learn</h4>
                  <p className="text-gray-600">
                    Screen the 56-minute documentary with your audience. Available for individual institutional licenses or classroom streaming passes.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-2 border-teal-100 hover:border-teal-300 transition-colors">
                <CardContent className="pt-8">
                  <div className="bg-teal-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-4">2</div>
                  <h4 className="text-xl font-semibold mb-3 text-teal-800">Engage & Discuss</h4>
                  <p className="text-gray-600">
                    Add live speaking engagements with Annie (AFE survivor) and/or her medical team. Use our expertly crafted discussion guides and facilitation materials.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-2 border-teal-100 hover:border-teal-300 transition-colors">
                <CardContent className="pt-8">
                  <div className="bg-teal-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-4">3</div>
                  <h4 className="text-xl font-semibold mb-3 text-teal-800">Transform Practice</h4>
                  <p className="text-gray-600">
                    Implement trauma-informed care principles in your practice with ongoing support materials and assessment tools.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Package Options */}
          <div className="bg-cream-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8 text-teal-800">Choose Your Package</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-teal-800 mb-3">Film + Materials Package</h4>
                <p className="text-gray-600 mb-4">Perfect for self-facilitated screenings and classroom use</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Documentary streaming or institutional license</li>
                  <li>• Discussion guides and educational handouts</li>
                  <li>• Assessment tools and reflection worksheets</li>
                  <li>• Post-screening survey templates</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-teal-800 mb-3">Full Experience Package</h4>
                <p className="text-gray-600 mb-4">Complete solution with live speaking engagement</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Everything in Film + Materials Package</li>
                  <li>• Live virtual or in-person speaking engagement</li>
                  <li>• Q&A session with Annie and/or medical team</li>
                  <li>• CME credit coordination</li>
                  <li>• Custom content for your organization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 bg-cream-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-center mb-12">What People Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Conference Testimonial */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-teal-600 mr-2" />
                  <Badge variant="secondary" className="bg-teal-100 text-teal-800">Conference</Badge>
                </div>
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "Raw, powerful, and deeply moving. This film doesn't just tell a story—it invites you to feel every moment and leaves you thinking long after the credits roll."
                </blockquote>
                <footer className="text-sm font-medium text-gray-600">
                  — Denise Amundson, RN Labor and Delivery
                </footer>
              </CardContent>
            </Card>

            {/* Hospital Testimonial */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Stethoscope className="h-6 w-6 text-teal-600 mr-2" />
                  <Badge variant="secondary" className="bg-teal-100 text-teal-800">Hospital</Badge>
                </div>
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "I'm a better nurse for having the opportunity to see their story. This film should be essential viewing for all healthcare professionals."
                </blockquote>
                <footer className="text-sm font-medium text-gray-600">
                  — Julie O'Hara, RN, Neonatology
                </footer>
              </CardContent>
            </Card>

            {/* Education Testimonial */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-teal-600 mr-2" />
                  <Badge variant="secondary" className="bg-teal-100 text-teal-800">Education</Badge>
                </div>
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "This film should be essential viewing for all healthcare professionals who are involved in obstetric care."
                </blockquote>
                <footer className="text-sm font-medium text-gray-600">
                  — Catherine Hermann, MD
                </footer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Audience Cards Section */}
      <section className="bg-teal-500 text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
              Tailored Solutions for Healthcare Education Leaders
            </h2>
            <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto">
              Meet your specific educational goals with flexible packages designed for continuing education, staff competency, and curriculum enhancement
            </p>
          </div>

          {/* Three Audience Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Conference Planners Card */}
            <Card className="bg-white text-gray-800 shadow-2xl border-0 hover:shadow-3xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-teal-800 mb-2">
                    Medical Conference Planners
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">Meet continuing education requirements with compelling content</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">ACCME-compliant content addressing current healthcare challenges</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Expert panels with real patient perspective boost engagement</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete logistics support: licensing, A/V, and promotional materials</span>
                  </div>
                </div>
                <ConsultationModal defaultRole="conference">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg font-semibold">
                    Schedule a Consult
                  </Button>
                </ConsultationModal>
              </CardContent>
            </Card>

            {/* Hospital Nurse Educators Card */}
            <Card className="bg-white text-gray-800 shadow-2xl border-0 hover:shadow-3xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-teal-800 mb-2">
                    Hospital Nurse Educators
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">Improve patient outcomes through staff competency training</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Evidence-based training aligned to AACN & AWHONN competencies</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Reduces medical errors through trauma-informed care principles</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Flexible delivery: grand rounds, unit training, or self-paced modules</span>
                  </div>
                </div>
                <ConsultationModal defaultRole="hospital">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg font-semibold">
                    Schedule a Consult
                  </Button>
                </ConsultationModal>
              </CardContent>
            </Card>

            {/* Medical School Professors Card */}
            <Card className="bg-white text-gray-800 shadow-2xl border-0 hover:shadow-3xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-teal-800 mb-2">
                    Medical School Professors
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">Enhance curriculum with real-world case studies</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Case studies mapped to AAMC competencies and learning objectives</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Cross-curricular applications: OB-GYN, psychiatry, ethics, health systems</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">LMS-ready assessments and authentic patient perspectives</span>
                  </div>
                </div>
                <ConsultationModal defaultRole="education">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg font-semibold">
                    Schedule a Consult
                  </Button>
                </ConsultationModal>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Metrics Bar */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-center">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-teal-600" />
              <div>
                <div className="text-3xl font-bold text-teal-800">6,500+</div>
                <div className="text-sm text-gray-600">clinicians trained</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-8 w-8 text-teal-600" />
              <div>
                <div className="text-3xl font-bold text-teal-800">97%</div>
                <div className="text-sm text-gray-600">said session will change practice</div>
              </div>
            </div>
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