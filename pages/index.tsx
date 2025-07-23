// pages/index.tsx
import { useTina, tinaField } from 'tinacms/dist/react'
import { client } from '../tina/__generated__/client'
import { PagesDocument, PagesQuery } from '../tina/__generated__/types'
import type { InferGetStaticPropsType } from 'next'
import Layout from '../components/Layout'
import { useState } from 'react'

// TypeScript interfaces for better type safety
interface HeroSection {
  title?: string
  description?: string
  buttonText?: string
}

interface AboutSection {
  title?: string
  description?: string
  mainContent?: {
    title?: string
    description1?: string
    description2?: string
  }
  features?: {
    title?: string
    items?: string[]
  }
  howItWorks?: {
    title?: string
    steps?: {
      step?: number
      title?: string
      description?: string
    }[]
  }
  packages?: {
    title?: string
    description?: string
    features?: string[]
  }[]
}

interface TestimonialsSection {
  title?: string
  items?: {
    quote?: string
    author?: string
    badge?: string
  }[]
}

interface AudienceCardsSection {
  title?: string
  subtitle?: string
  cards?: {
    title?: string
    subtitle?: string
    icon?: string
    benefits?: string[]
  }[]
}

interface MetricsSection {
  title?: string
  stats?: {
    number?: string
    label?: string
    icon?: string
  }[]
}

interface FAQSection {
  title?: string
  sections?: {
    title?: string
    questions?: {
      question?: string
      answer?: string
    }[]
  }[]
}

export const getStaticProps = async () => {
  const data = await client.queries.pages({
    relativePath: 'home.json',
  })

  return {
    props: {
      ...data,
    },
  }
}

export default function HomePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useTina<PagesQuery>({
    query: PagesDocument,
    variables: { relativePath: 'home.json' },
    data: props.data,
  })

  const [openFAQ, setOpenFAQ] = useState<string | null>(null)

  const hero = data.pages?.hero as HeroSection
  const aboutTheFilm = data.pages?.aboutTheFilm as AboutSection
  const testimonials = data.pages?.testimonials as TestimonialsSection
  const audienceCards = data.pages?.audienceCards as AudienceCardsSection
  const metrics = data.pages?.metrics as MetricsSection
  const faq = data.pages?.faq as FAQSection

  if (!hero) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Could not load homepage content
            </h2>
            <p className="text-gray-600">Please check your CMS data.</p>
          </div>
        </div>
      </Layout>
    )
  }

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Calendar':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      case 'Stethoscope':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'GraduationCap':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
          </svg>
        )
      case 'Users':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
          </svg>
        )
      case 'Star':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        )
      default:
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
    }
  }

  return (
    <Layout>
      <div className="space-y-0">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white -mx-6 md:-mx-8 -mt-6 md:-mt-8">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative px-6 md:px-8 py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" data-tina-field={tinaField(data.pages, 'hero')}>
                {hero.title || 'Untitled'}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto" data-tina-field={tinaField(data.pages, 'hero')}>
                {hero.description || 'No description available.'}
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl" data-tina-field={tinaField(data.pages, 'hero')}>
                {hero.buttonText || 'Click here'}
              </button>
            </div>
          </div>
        </section>

        {/* About the Film Section */}
        {aboutTheFilm && (
          <section className="py-20 -mx-6 md:-mx-8 bg-white">
            <div className="px-6 md:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-tina-field={tinaField(data.pages, 'aboutTheFilm')}>
                    {aboutTheFilm.title}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-tina-field={tinaField(data.pages, 'aboutTheFilm')}>
                    {aboutTheFilm.description}
                  </p>
                </div>

                {/* Main Content */}
                {aboutTheFilm.mainContent && (
                  <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center" data-tina-field={tinaField(data.pages, 'aboutTheFilm')}>
                      {aboutTheFilm.mainContent.title}
                    </h3>
                    <div className="space-y-6 text-lg text-gray-700 max-w-4xl mx-auto">
                      <p data-tina-field={tinaField(data.pages, 'aboutTheFilm')}>{aboutTheFilm.mainContent.description1}</p>
                      <p data-tina-field={tinaField(data.pages, 'aboutTheFilm')}>{aboutTheFilm.mainContent.description2}</p>
                    </div>
                  </div>
                )}

                {/* Features */}
                {aboutTheFilm.features && (
                  <div className="mb-16">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center" data-tina-field={tinaField(data.pages, 'aboutTheFilm')}>
                      {aboutTheFilm.features.title}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {aboutTheFilm.features.items?.map((item, index) => (
                        <div key={index} className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
                          <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-gray-700 font-medium" data-tina-field={tinaField(data.pages, 'aboutTheFilm')}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* How It Works */}
                {aboutTheFilm.howItWorks && (
                  <div className="mb-16">
                    <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center" data-tina-field={tinaField(data.pages, 'aboutTheFilm')}>
                      {aboutTheFilm.howItWorks.title}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                      {aboutTheFilm.howItWorks.steps?.map((step, index) => (
                        <div key={index} className="text-center">
                          <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6" data-tina-field={tinaField(data.pages, 'aboutTheFilm')}>
                            {step.step}
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(data.pages, 'aboutTheFilm')}>{step.title}</h4>
                          <p className="text-gray-600 leading-relaxed" data-tina-field={tinaField(data.pages, 'aboutTheFilm')}>{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Packages */}
                {aboutTheFilm.packages && (
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                      Choose Your Package
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      {aboutTheFilm.packages.map((pkg, index) => (
                        <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-300 transition-colors">
                          <h4 className="text-2xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(data.pages, 'aboutTheFilm')}>{pkg.title}</h4>
                          <p className="text-gray-600 mb-6" data-tina-field={tinaField(data.pages, 'aboutTheFilm')}>{pkg.description}</p>
                          <ul className="space-y-3">
                            {pkg.features?.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700" data-tina-field={tinaField(data.pages, 'aboutTheFilm')}>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Section */}
        {testimonials && (
          <section className="py-20 -mx-6 md:-mx-8 bg-gray-50">
            <div className="px-6 md:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center" data-tina-field={tinaField(data.pages, 'testimonials')}>
                  {testimonials.title}
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {testimonials.items?.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="mb-6">
                        <svg className="w-8 h-8 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6" data-tina-field={tinaField(data.pages, 'testimonials')}>"{testimonial.quote}"</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900" data-tina-field={tinaField(data.pages, 'testimonials')}>{testimonial.author}</p>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full" data-tina-field={tinaField(data.pages, 'testimonials')}>
                          {testimonial.badge}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Audience Cards Section */}
        {audienceCards && (
          <section className="py-20 -mx-6 md:-mx-8 bg-white">
            <div className="px-6 md:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-tina-field={tinaField(data.pages, 'audienceCards')}>
                    {audienceCards.title}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto" data-tina-field={tinaField(data.pages, 'audienceCards')}>
                    {audienceCards.subtitle}
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {audienceCards.cards?.map((card, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-200 transition-colors">
                      <div className="text-blue-600 mb-6">
                        {getIcon(card.icon)}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3" data-tina-field={tinaField(data.pages, 'audienceCards')}>{card.title}</h3>
                      <p className="text-gray-600 mb-6" data-tina-field={tinaField(data.pages, 'audienceCards')}>{card.subtitle}</p>
                      <ul className="space-y-3">
                        {card.benefits?.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-3">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 text-sm" data-tina-field={tinaField(data.pages, 'audienceCards')}>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Metrics Section */}
        {metrics && (
          <section className="py-20 -mx-6 md:-mx-8 bg-blue-900 text-white">
            <div className="px-6 md:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-16" data-tina-field={tinaField(data.pages, 'metrics')}>{metrics.title}</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  {metrics.stats?.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-blue-300 mb-4 flex justify-center">
                        {getIcon(stat.icon)}
                      </div>
                      <div className="text-5xl md:text-6xl font-bold mb-2" data-tina-field={tinaField(data.pages, 'metrics')}>{stat.number}</div>
                      <div className="text-xl text-blue-200" data-tina-field={tinaField(data.pages, 'metrics')}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {faq && (
          <section className="py-20 -mx-6 md:-mx-8 bg-gray-50">
            <div className="px-6 md:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center" data-tina-field={tinaField(data.pages, 'faq')}>
                  {faq.title}
                </h2>
                <div className="space-y-8">
                  {faq.sections?.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6" data-tina-field={tinaField(data.pages, 'faq')}>{section.title}</h3>
                      <div className="space-y-4">
                        {section.questions?.map((item, itemIndex) => {
                          const faqId = `faq-${sectionIndex}-${itemIndex}`
                          return (
                            <div key={itemIndex} className="bg-white rounded-lg shadow-sm border border-gray-200">
                              <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                                onClick={() => toggleFAQ(faqId)}
                              >
                                <span className="font-semibold text-gray-900" data-tina-field={tinaField(data.pages, 'faq')}>{item.question}</span>
                                <svg
                                  className={`w-5 h-5 text-gray-500 transition-transform ${
                                    openFAQ === faqId ? 'transform rotate-180' : ''
                                  }`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                              {openFAQ === faqId && (
                                <div className="px-6 pb-4">
                                  <p className="text-gray-700 leading-relaxed" data-tina-field={tinaField(data.pages, 'faq')}>{item.answer}</p>
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="py-20 -mx-6 md:-mx-8 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Healthcare Education?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Book a screening today and bring this powerful story to your healthcare community.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Schedule Your Screening
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
