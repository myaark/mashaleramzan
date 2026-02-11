import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="flex-1 flex items-center justify-center bg-gradient-to-b from-blue-50 to-yellow-50 px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
          Be the Light in Someone{"'"}s Life
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 text-pretty leading-relaxed">
          Mashal-e-Ramzan brings hope and support to those in need. Every contribution,
          no matter the size, helps us spread kindness, provide essential support, and
          create positive change in our community during this blessed month.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        </div>
      </div>
    </section>
  )
}
