import React from 'react'
import Card from '../ui/Card'

export interface TestimonialCardProps {
  quote: string
  author: string
  badge?: string
  className?: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  badge,
  className = ''
}) => {
  return (
    <Card 
      className={`relative ${className}`}
      padding="lg"
      hover={true}
    >
      {/* Quote Icon */}
      <div className="absolute top-6 left-6 text-blue-600 opacity-20">
        <svg width="40" height="32" viewBox="0 0 40 32" fill="currentColor">
          <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16zm8 0c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8-8 3.582-8 8z"/>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Quote */}
        <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
          "{quote}"
        </blockquote>
        
        {/* Author Info */}
        <div className="flex items-center justify-between">
          <div>
            <cite className="not-italic font-semibold text-gray-900 block">
              {author}
            </cite>
          </div>
          
          {/* Badge */}
          {badge && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
              {badge}
            </span>
          )}
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-transparent rounded-full opacity-50 transform translate-x-10 translate-y-10"></div>
    </Card>
  )
}

export default TestimonialCard