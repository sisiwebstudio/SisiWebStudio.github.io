import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Calendar, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectDetailProps {
  projectId: number;
  onBack: () => void;
}

export function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const projectDetails = [
    {
      id: 0,
      title: 'Kawiarnia "Słoneczna"',
      subtitle: 'Strona internetowa dla lokalnej kawiarni',
      description: 'Kawiarnia "Słoneczna" to przytulne miejsce w centrum miasta, które potrzebowało nowoczesnej strony internetowej. Celem było stworzenie ciepłej, przyjaznej przestrzeni online, która odzwierciedla atmosferę kawiarni i ułatwia klientom zapoznanie się z ofertą.',
      screenshot: 'https://images.unsplash.com/photo-1745211212450-92eca26775ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwcmVzdGF1cmFudCUyMHdlYnNpdGV8ZW58MXx8fHwxNzY3ODY5NjcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Interaktywne menu z cenami i zdjęciami',
        'System rezerwacji stolików online',
        'Galeria zdjęć z atmosferą kawiarni',
        'Mapa dojazdu i godziny otwarcia',
        'Integracja z social media',
        'Responsywny design na wszystkie urządzenia'
      ],
      technologies: ['React', 'Tailwind CSS', 'Google Maps API', 'Rezerwacje Online'],
      gradient: 'from-amber-500 to-orange-500',
      date: 'Listopad 2025',
      duration: '5 dni'
    },
    {
      id: 1,
      title: 'Piekarnia "Babci Marysi"',
      subtitle: 'Sklep internetowy z tradycyjnym pieczywem',
      description: 'Piekarnia "Babci Marysi" to rodzinny biznes z 30-letnią tradycją. Właściciele chcieli rozszerzyć sprzedaż o kanał online, umożliwiając klientom zamawianie świeżego pieczywa i ciast z dostawą do domu.',
      screenshot: 'https://images.unsplash.com/photo-1642333328966-f248191ff0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBwYXN0cnklMjB3ZWJzaXRlfGVufDF8fHx8MTc2Nzg2OTY3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Katalog produktów z możliwością filtrowania',
        'Koszyk zakupowy i płatności online',
        'System zarządzania zamówieniami',
        'Kalkulator kosztów dostawy',
        'Newsletter z cotygodniowymi promocjami',
        'Panel administracyjny dla właściciela'
      ],
      technologies: ['E-commerce', 'Stripe Payments', 'CMS', 'Email Marketing'],
      gradient: 'from-pink-500 to-rose-500',
      date: 'Grudzień 2025',
      duration: '7 dni'
    },
    {
      id: 2,
      title: 'Studio Jogi "Harmonia"',
      subtitle: 'Portal wellness z zapisami na zajęcia',
      description: 'Studio Jogi "Harmonia" oferuje różnorodne zajęcia z jogi, medytacji i pilatesu. Potrzebowali platformy, która ułatwi klientom przeglądanie grafiku, zapisywanie się na zajęcia oraz dostęp do materiałów edukacyjnych.',
      screenshot: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzY3ODY5NjcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Interaktywny kalendarz zajęć',
        'System zapisów i płatności za karnety',
        'Profile instruktorów z ich specjalizacjami',
        'Blog ze zdrowymi przepisami i poradami',
        'Galeria wideo z krótkimi sesjami jogi',
        'Panel klienta z historią zapisów'
      ],
      technologies: ['React', 'Calendar API', 'Video Streaming', 'Blog CMS'],
      gradient: 'from-violet-500 to-purple-500',
      date: 'Styczeń 2026',
      duration: '8 dni'
    }
  ];

  const project = projectDetails[projectId];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-gray-600 hover:text-violet-600 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Powrót do projektów</span>
        </motion.button>

        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm mb-4`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Projekt przykładowy
          </motion.div>
          <h1 className="text-4xl md:text-6xl mb-4 text-gray-900">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{project.subtitle}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-violet-600" />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-violet-600" />
              <span>Czas realizacji: {project.duration}</span>
            </div>
          </div>
        </motion.div>

        {/* Screenshot */}
        <motion.div
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative">
            <ImageWithFallback
              src={project.screenshot}
              alt={project.title}
              className="w-full h-auto"
            />
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl mb-4 text-gray-900">O projekcie</h2>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl mb-6 text-gray-900">Funkcjonalności</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg mb-4 text-gray-900">Technologie</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className={`bg-gradient-to-br ${project.gradient} rounded-2xl shadow-lg p-6 text-white`}>
              <h3 className="text-lg mb-4">Zainteresowany podobnym projektem?</h3>
              <p className="text-white/90 text-sm mb-6">
                Stworzę dla Twojej firmy profesjonalną stronę internetową dostosowaną do Twoich potrzeb.
              </p>
              <motion.button
                onClick={onBack}
                className="w-full py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Zobacz cennik</span>
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
