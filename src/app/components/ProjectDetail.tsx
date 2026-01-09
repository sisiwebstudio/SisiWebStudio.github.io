import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectDetailProps {
  projectId: number;
  onBack: () => void;
}

export function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const projectDetails = [
    {
      id: 0,
      title: 'Portfolio fotografki ślubnej',
      description:
        'Anna Kowalska to profesjonalna fotografka ślubna z pasją do uwieczniania najważniejszych chwil. Potrzebowała eleganckiej strony portfolio, która prezentuje jej unikalny styl i pomaga parom młodym poznać jej twórczość przed podjęciem decyzji o współpracy.',
      screenshot: '/wedding-photographer.png',
      liveUrl: 'https://lofiwebstudio.github.io/wedding-photos-portfolio/',
      features: [
        'Galeria zdjęć z podziałem na sesje i kategorie',
        'Formularz kontaktowy z wyborem pakietu',
        'Prezentacja pakietów i cennika',
        'O mnie - historia i filozofia pracy',
        'Referencje i opinie zadowolonych par',
        'Blog z poradami dla par młodych',
      ],
      technologies: ['React', 'Tailwind CSS', 'Galeria zdjęć', 'Responsywny design'],
      gradient: 'from-amber-100 to-orange-200',
    },
    {
      id: 1,
      title: 'Trener Personalny - Fitness & Zdrowie',
      subtitle: 'Platforma dla trenera personalnego',
      description:
        'Profesjonalny trener personalny potrzebował nowoczesnej strony internetowej, która pomoże mu dotrzeć do nowych klientów i zarządzać treningami. Strona łączy w sobie prezentację usług, system rezerwacji treningów online oraz motywujący blog z poradami fitness.',
      screenshot: '/trener.png',
      liveUrl: 'https://lofiwebstudio.github.io/trener-personalny',
      features: [
        'Prezentacja usług i pakietów treningowych',
        'System rezerwacji treningów online',
        'Kalkulatory BMI, kalorii i makroskładników',
        'Galeria transformacji klientów',
        'Blog z poradami treningowymi i żywieniowymi',
        'Formularze kontaktowe i konsultacyjne',
      ],
      technologies: ['React', 'Booking System', 'Kalkulatory zdrowia', 'Blog CMS'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 2,
      title: 'Korepetycje online z języka angielskiego',
      subtitle: 'Strona internetowa dla nauczyciela języka angielskiego',
      description:
        'Projekt został stworzony dla doświadczonego nauczyciela języka angielskiego, który potrzebował nowoczesnej i przejrzystej strony internetowej wspierającej pozyskiwanie uczniów oraz kontakt z rodzicami. Strona w czytelny sposób prezentuje ofertę, doświadczenie oraz umożliwia szybkie sprawdzenie dostępności i rezerwację zajęć.',
      screenshot: '/korepetytor.png',
      liveUrl: 'https://lofiwebstudio.github.io/korepetytor/',
      features: [
        'Prezentacja doświadczenia i kwalifikacji nauczyciela',
        'Rezerwacja terminów korepetycji online',
        'Cennik z elastycznymi pakietami zajęć',
        'Opinie i rekomendacje uczniów',
        'Blog z poradami oraz materiałami do nauki',
        'Formularz kontaktowy dla uczniów i rodziców',
      ],
      technologies: ['React', 'System rezerwacji', 'CMS blogowy', 'Responsywny design'],
      gradient: 'from-indigo-500 to-blue-500',
    },
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
        </motion.div>

        {/* Screenshot */}
        <motion.div
          className="mb-8 rounded-2xl overflow-hidden shadow-2xl"
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

        {/* Live Demo Button */}
        {project.liveUrl && (
          <motion.div
            className="mb-12 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${project.gradient} text-white rounded-full hover:shadow-2xl transition-all text-lg shadow-lg`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              <span>Zobacz demo live</span>
            </motion.a>
          </motion.div>
        )}

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
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                    >
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
                    transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div
              className={`bg-gradient-to-br ${project.gradient} rounded-2xl shadow-lg p-6 text-white`}
            >
              <h3 className="text-lg mb-4">Zainteresowany podobnym projektem?</h3>
              <p className="text-white/90 text-sm mb-6">
                Stworzę dla Twojej firmy profesjonalną stronę internetową dostosowaną do Twoich
                potrzeb.
              </p>

              <motion.button
                onClick={onBack}
                className="w-full py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Zobacz cennik</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
