import { Card } from '@/components/ui/card'
import { Heart, Users, Target, TrendingUp, Ban as Bank } from 'lucide-react'

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
        {/* Bank Details Card */}
        <div className="mb-12 bg-white rounded-lg p-8 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <Bank className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-gray-900">Donate via Bank Transfer</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-primary/20">
              <p className="text-sm text-gray-600 font-semibold mb-2">BANK NAME</p>
              <p className="text-xl font-bold text-gray-900">Al-Baraka Bank</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-primary/20">
              <p className="text-sm text-gray-600 font-semibold mb-2">ACCOUNT NAME</p>
              <p className="text-xl font-bold text-gray-900">Mashal-e-Ramzan</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-primary/20">
              <p className="text-sm text-gray-600 font-semibold mb-2">ACCOUNT NUMBER</p>
              <p className="text-xl font-bold text-gray-900 font-mono">1234567890123</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 text-center">Every donation is secure and transparent</p>
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
