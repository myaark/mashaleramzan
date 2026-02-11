import { Card } from '@/components/ui/card'
import { Heart, Users, Target, TrendingUp } from 'lucide-react'

export default function DonationDetails() {
  const impacts = [
    {
      icon: Users,
      title: 'Families Helped',
      value: '1,250+',
      description: 'Direct support to families in need'
    },
    {
      icon: Heart,
      title: 'Meals Provided',
      value: '5,400+',
      description: 'Nutritious food during Ramzan'
    },
    {
      icon: Target,
      title: 'Relief Packages',
      value: '850+',
      description: 'Essential supplies distributed'
    },
    {
      icon: TrendingUp,
      title: 'Lives Touched',
      value: '8,900+',
      description: 'Community members supported'
    }
  ]

  return (
    <section className="w-full bg-gradient-to-b from-yellow-50 to-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Your Impact Matters</h3>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            See how your generous contributions create meaningful change in our community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <Card 
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden"
              >
                <div className="bg-gradient-to-br from-primary to-blue-400 p-6 text-white">
                  <Icon className="w-10 h-10 mb-2" />
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm font-medium mb-2">{impact.title}</p>
                  <p className="text-3xl font-bold text-primary mb-3">{impact.value}</p>
                  <p className="text-gray-700 text-sm">{impact.description}</p>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-100 to-yellow-100 rounded-lg p-8 border-2 border-primary/20">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">How Your Donation Helps</h4>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">✓</span>
              <span><strong>$25</strong> provides one meal for a family</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">✓</span>
              <span><strong>$50</strong> supplies essential utilities for a week</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">✓</span>
              <span><strong>$100</strong> provides a comprehensive relief package</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">✓</span>
              <span><strong>$250</strong> supports a family throughout Ramzan</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
