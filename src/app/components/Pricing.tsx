import { motion } from 'motion/react';
import { Check, Clock, MessageSquare, Sparkles, Star } from 'lucide-react';

interface PricingProps {
  onSelectPackage: (page: 'contact', packageName: string) => void;
}

export function Pricing({ onSelectPackage }: PricingProps) {
  const packages = [
    {
      name: 'MINI',
      price: '1 400 zł',
      color: 'from-emerald-500 to-green-500',
      icon: '🟢',
      subtitle: 'Dla bardzo małych firm i usług lokalnych',
      features: [
        '1 strona (one-page) lub do 3 sekcji',
        'wersja mobilna',
        'formularz kontaktowy',
        'mapa Google',
        'podstawowe SEO',
        'wdrożenie i publikacja'
      ],
      time: 'do 5 dni',
      revisions: '1 runda poprawek',
      popular: false
    },
    {
      name: 'STANDARD',
      price: '2 000 zł',
      color: 'from-amber-500 to-orange-500',
      icon: '🟡',
      subtitle: 'Najlepszy stosunek ceny do zakresu',
      features: [
        'do 5 podstron',
        'responsywny design',
        'formularz + CTA',
        'podstawowe SEO',
        'Google Analytics',
        'krótka instrukcja obsługi'
      ],
      time: 'do 7 dni',
      revisions: '2 rundy poprawek',
      popular: true
    },
    {
      name: 'PLUS',
      price: '2 600 zł',
      color: 'from-blue-500 to-indigo-500',
      icon: '🔵',
      subtitle: 'Dla firm, które chcą wyglądać solidnie',
      features: [
        'do 8 podstron',
        'lepsza optymalizacja szybkości',
        'dodatkowe sekcje (FAQ, opinie)',
        'pełne testy + wdrożenie'
      ],
      time: 'do 10 dni',
      revisions: '3 rundy poprawek',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-6 h-6 text-violet-600" />
            <h1 className="text-4xl md:text-6xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Cennik
            </h1>
            <Sparkles className="w-6 h-6 text-pink-600" />
          </motion.div>
          <motion.p 
            className="text-lg text-gray-700 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Proste, przejrzyste ceny bez ukrytych kosztów. Wybierz pakiet dopasowany do potrzeb Twojej firmy! 💼
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-violet-600 scale-105 md:scale-110' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <motion.div 
                  className="absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Star className="w-3 h-3" />
                  <span>Najpopularniejszy</span>
                </motion.div>
              )}

              {/* Header */}
              <div className={`p-8 bg-gradient-to-br ${pkg.color} relative overflow-hidden`}>
                <motion.div
                  className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <div className="relative z-10">
                  <div className="text-4xl mb-2">{pkg.icon}</div>
                  <h3 className="text-2xl text-white mb-2">Pakiet {pkg.name}</h3>
                  <p className="text-white/90 text-sm mb-4">{pkg.subtitle}</p>
                  <div className="text-4xl text-white">
                    {pkg.price}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-sm uppercase text-gray-500 mb-4">W cenie:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Time & Revisions */}
                <div className="border-t border-gray-200 pt-6 space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4 text-violet-600" />
                    <span className="text-sm">⏱️ Termin: <strong>{pkg.time}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MessageSquare className="w-4 h-4 text-violet-600" />
                    <span className="text-sm">💬 {pkg.revisions}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={() => onSelectPackage('contact', pkg.name)}
                  className={`mt-8 w-full py-3 rounded-full text-center block transition-all cursor-pointer ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Wybieram ten pakiet
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl mb-4 text-gray-900">💡 Dodatkowe informacje</h3>
            <div className="text-gray-600 space-y-2 text-sm">
              <p>✅ Wszystkie pakiety zawierają hosting na pierwszy miesiąc gratis</p>
              <p>✅ Możliwość płatności w 2 ratach (50% przed rozpoczęciem, 50% po zakończeniu)</p>
              <p>✅ Gwarancja wsparcia technicznego przez 30 dni po wdrożeniu</p>
              <p>✅ Potrzebujesz czegoś innego? <button onClick={() => onSelectPackage('contact', 'INDYWIDUALNY')} className="text-violet-600 hover:underline cursor-pointer">Skontaktuj się</button> - stworzę ofertę na miarę!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}