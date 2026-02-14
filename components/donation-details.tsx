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
        <div className="mb-12 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-lg p-8 border-2 border-accent/30 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <Bank className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-gray-900">Donate via Bank Transfer</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6 border-2 border-primary/30 shadow-md">
              <p className="text-sm text-gray-700 font-semibold mb-2">BANK NAME</p>
              <p className="text-xl font-bold text-gray-900">Habib Bank Limited (HBL)</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-6 border-2 border-accent/40 shadow-md">
              <p className="text-sm text-gray-700 font-semibold mb-2">ACCOUNT NAME</p>
              <p className="text-xl font-bold text-gray-900">Muhammad Yaar Khan</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-yellow-100 rounded-lg p-6 border-2 border-primary/30 shadow-md">
              <p className="text-sm text-gray-700 font-semibold mb-2">ACCOUNT NUMBER</p>
              <p className="text-xl font-bold text-gray-900 font-mono">PK74HABB0013537902173003</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 text-center">Every donation is secure and transparent</p>
        </div>

        {/* Donation Impact Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-100 to-yellow-100 rounded-lg p-8 border-2 border-primary/20">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">How Your Donation Helps</h4>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">✓</span>
              <span><strong>300 PKR</strong> provides Iftar for one person</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">✓</span>
              <span><strong>5000 PKR</strong> supplies essential utilities for two weeks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">✓</span>
              <span><strong>20000 PKR</strong> Iftar Dastarkhwaan</span>
            </li>
          </ul>
          {/* QR Codes Section */}
          <div className="mt-8 flex gap-6 justify-center">
            {/* Instagram QR Code */}
            <div className="flex flex-col items-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center"
              >
                <img
                  src="/path/to/instagram-qr.png" // Replace with the actual path to your Instagram QR code
                  alt="Instagram QR Code"
                  className="w-32 h-32 object-contain"
                />
                <span className="mt-2 text-gray-700">Instagram</span>
              </a>
            </div>

            {/* Bank Transfer QR Code */}
            <div className="flex flex-col items-center">
              <a
                href="https://bank-details-link" // Replace with the actual link to the bank account
                target="_blank"
                rel="noopener noreferrer"
                className="text-center"
              >
                <img
                  src="public/hblqr.jpeg" // Replace with the actual path to your bank transfer QR code
                  alt="Bank QR Code"
                  className="w-32 h-32 object-contain"
                />
                <span className="mt-2 text-gray-700">Bank Transfer</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
