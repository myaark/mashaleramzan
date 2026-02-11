import { Instagram, Heart, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gradient-to-r from-primary to-blue-500 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 fill-white" />
              <h3 className="text-xl font-bold">Mashal-e-Ramzan</h3>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Spreading light and hope throughout the community. Every donation
              makes a real difference in someone's life.
            </p>
          </div>

          {/* Get In Touch - Right Side */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-blue-100 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-semibold">@mashal.ramzan</span>
              </a>
              <div className="flex items-center gap-2 text-blue-100">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 my-8" />
      </div>
    </footer>
  )
}
