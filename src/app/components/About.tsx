import { Code2, Palette, Rocket, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const skills = [
    {
      icon: Code2,
      title: 'Przemyślana od strony technicznej',
      description:
        'Strona zbudowana czysto i solidnie, bez przypadkowych wtyczek i rozwiązań, które psują się po kilku miesiącach',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'Design, który ma cel',
      description:
        'Nie tylko ładna - czytelna, logiczna i zaprojektowana pod użytkownika, żeby łatwo było skontaktować się z Twoją firmą',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Rocket,
      title: 'Szybka & Mobilna',
      description:
        'Tworzona z naciskiem na wydajność i niezawodność. Działa płynnie na telefonach, tabletach i komputerach',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Users,
      title: 'Dla Klientów',
      description: 'Zaprojektowana, aby przekształcać odwiedzających w płacących klientów',
      color: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            O Mnie
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Pomagam właścicielom małych firm rozwijać się online, tworząc{' '}
            <b>solidne, dopracowane strony internetowe</b>, które naprawdę wspierają sprzedaż i
            budują zaufanie klientów.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Jestem programistką 👩‍💻 z <b>8-letnim doświadczeniem komercyjnym</b>. Na co dzień pracuję
            przy profesjonalnych projektach, a po godzinach tworzę strony dla małych firm, które
            oczekują jakości, stabilności i spokoju we współpracy.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Moje strony są <b>szybkie, niezawodne i wolne od błędów</b>, bo powstają w oparciu o
            dobre praktyki programistyczne, a nie gotowe „klikane szablony”.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Wiem, że prowadzenie firmy to dużo obowiązków, dlatego dbam o{' '}
            <b>jasną komunikację, prosty proces i brak stresu po Twojej stronie</b>. Jesteś w stałym
            kontakcie ze mną i dokładnie wiesz, na jakim etapie jest projekt.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Jeśli potrzebujesz strony, która będzie <b>pracować na Twój biznes każdego dnia</b>, z
            przyjemnością pomogę. 🚀
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, ${skill.color.includes('blue') ? '#3b82f6' : skill.color.includes('pink') ? '#ec4899' : skill.color.includes('orange') ? '#f97316' : '#8b5cf6'} 0%, transparent 100%)`,
                }}
              />
              <motion.div
                className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-4 shadow-lg relative z-10`}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -10, 10, -10, 0],
                }}
                transition={{ duration: 0.5 }}
              >
                <skill.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl mb-3 text-gray-900 relative z-10">{skill.title}</h3>
              <p className="text-gray-600 relative z-10">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
