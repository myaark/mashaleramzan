import { Heart } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-primary to-blue-400 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full p-2">
            <Heart className="w-8 h-8 text-primary fill-primary" />
          </div>
          <h1 className="text-3xl font-bold text-white">Mashal-e-Ramzan</h1>
        </div>
        <p className="text-white text-sm font-medium hidden sm:block">
          Spreading Light and Hope
        </p>
      </div>
    </header>
  )
}
