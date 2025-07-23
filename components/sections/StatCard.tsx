import React from 'react'
import Card from '../ui/Card'

export interface StatCardProps {
  number: string
  label: string
  icon?: string
  className?: string
  variant?: 'default' | 'accent'
}

// Simple icon mapping - matches the FeatureCard icons
const iconMap: Record<string, React.ReactNode> = {
  Users: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  ),
  Star: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  TrendingUp: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  Award: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  )
}

const StatCard: React.FC<StatCardProps> = ({
  number,
  label,
  icon,
  className = '',
  variant = 'default'
}) => {
  const iconElement = icon && iconMap[icon] ? iconMap[icon] : null
  
  const variantClasses = {
    default: 'bg-white border-gray-200',
    accent: 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200'
  }
  
  return (
    <Card 
      className={`text-center relative overflow-hidden ${variantClasses[variant]} ${className}`}
      padding="lg"
      hover={true}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-600 rounded-full transform -translate-x-12 translate-y-12"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        {iconElement && (
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
              {iconElement}
            </div>
          </div>
        )}
        
        {/* Number */}
        <div className="mb-3">
          <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {number}
          </span>
        </div>
        
        {/* Label */}
        <p className="text-gray-700 font-medium text-lg leading-tight">
          {label}
        </p>
        
        {/* Decorative Line */}
        <div className="mt-4 flex justify-center">
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
        </div>
      </div>
    </Card>
  )
}

export default StatCard