import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ProjectsProps {
  onProjectClick: (projectId: number) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      id: 0,
      title: 'Strona fotografa ślubnego',
      description:
        'Profesjonalna strona dla fotografa ślubnego z galerią zdjęć, cennikiem i formularzem kontaktowym',
      image: '/wedding-photographer.png',
      tags: ['Fotograf', 'Cennik', 'Rezerwacje'],
      gradient: 'from-amber-100 to-orange-200',
    },
    {
      id: 1,
      title: 'Trener Personalny - Fitness',
      description:
        'Nowoczesna strona dla trenera personalnego z cennikiem, opiniami od klientów formularzem kontaktowym',
      image: '/trener.png',
      tags: ['Fitness', 'Rezerwacje', 'Formularz kontaktowy'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 2,
      title: 'Korepetycje online z angielskiego',
      description:
        'Nowoczesna strona dla nauczyciela języka angielskiego z systemem rezerwacji, cennikiem i opiniami uczniów',
      image: '/korepetytor.png',
      tags: ['Edukacja', 'Rezerwacje', 'Blog'],
      gradient: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-6 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Ostatnie realizacje
          </motion.h2>
          <motion.div
            className="w-16 h-0.5 bg-gradient-to-r from-orange-600 to-pink-600 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="text-base text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Poniżej prezentuję przykładowe realizacje, które pokazują mój styl pracy, podejście
            techniczne i sposób projektowania stron dla małych firm.
          </motion.p>
          <motion.p
            className="text-sm text-gray-500 max-w-2xl mx-auto mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            *To projekty koncepcyjne - stworzone w celach prezentacyjnych
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative border border-white/50 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => onProjectClick(project.id)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.15 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute top-3 right-3"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{
                    scale: hoveredIndex === index ? 1 : 0,
                    rotate: hoveredIndex === index ? 0 : -180,
                  }}
                  transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
                ></motion.div>
              </div>

              <div className="p-5">
                <motion.div
                  className="flex items-start justify-between gap-2 mb-2"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-base font-semibold text-gray-900">{project.title}</h3>
                  <motion.div
                    animate={hoveredIndex === index ? { x: [0, 3, 0] } : {}}
                    transition={{ duration: 1, repeat: hoveredIndex === index ? Infinity : 0 }}
                    className="flex-shrink-0"
                  >
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-violet-600" />
                  </motion.div>
                </motion.div>
                <motion.p
                  className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {project.description}
                </motion.p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-2.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + tagIndex * 0.05, type: 'spring' }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
