import React from 'react'
import Card from '../ui/Card'

export interface FeatureCardProps {
  title: string
  subtitle?: string
  icon?: string
  benefits?: string[]
  description?: string
  className?: string
}

// Simple icon mapping - you can expand this or use a proper icon library
const iconMap: Record<string, React.ReactNode> = {
  Calendar: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Stethoscope: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  GraduationCap: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  Users: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  ),
  Star: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  subtitle,
  icon,
  benefits,
  description,
  className = ''
}) => {
  const iconElement = icon && iconMap[icon] ? iconMap[icon] : null

  return (
    <Card 
      className={`h-full ${className}`}
      padding="lg"
      hover={true}
    >
      <div className="flex flex-col h-full">
        {/* Header with Icon */}
        <div className="flex items-start space-x-4 mb-6">
          {iconElement && (
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
              {iconElement}
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {title}
            </h3>
            {subtitle && (
              <p className="text-gray-600 text-sm leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        
        {/* Description */}
        {description && (
          <p className="text-gray-700 mb-6 leading-relaxed">
            {description}
          </p>
        )}
        
        {/* Benefits List */}
        {benefits && benefits.length > 0 && (
          <div className="flex-1">
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Decorative Bottom Border */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
        </div>
      </div>
    </Card>
  )
}

export default FeatureCard