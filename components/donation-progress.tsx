'use client'

import { Progress } from '@/components/ui/progress'
import { Card } from '@/components/ui/card'

export default function DonationProgress() {
  const currentDonation = 450000
  const goalDonation = 1200000
  const percentage = (currentDonation / goalDonation) * 100

  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-yellow-50 p-8">
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Our Campaign Progress</h3>
            <p className="text-gray-700">Help us reach our goal and make a lasting impact</p>
          </div>

          <div className="space-y-4">
            <Progress
              value={percentage}
              className="h-6 bg-blue-100 rounded-full"
            />

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  {currentDonation.toLocaleString()} PKR
                </p>
                <p className="text-sm text-gray-600 mt-1">Raised</p>
              </div>

              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-accent">
                  {percentage.toFixed(0)}%
                </p>
                <p className="text-sm text-gray-600 mt-1">Complete</p>
              </div>

              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gray-900">
                  {goalDonation.toLocaleString()}PKR
                </p>
                <p className="text-sm text-gray-600 mt-1">Goal</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
