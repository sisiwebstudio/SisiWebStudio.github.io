import { Code2, Palette, Rocket, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const skills = [
    {
      icon: Code2,
      title: 'Łatwa Aktualizacja',
      description: 'Proste narzędzia, dzięki którym możesz samodzielnie zarządzać treścią',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Piękny Design',
      description: 'Wyróżnij się na tle konkurencji profesjonalnym wyglądem budującym zaufanie',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Rocket,
      title: 'Szybka & Mobilna',
      description: 'Twoi klienci są na telefonach - Twoja strona będzie działać na każdym urządzeniu',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Users,
      title: 'Dla Klientów',
      description: 'Zaprojektowana, aby przekształcać odwiedzających w płacących klientów',
      color: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
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
            Pasjonuję się pomaganiem właścicielom małych firm w odnoszeniu sukcesów online! Przez ostatnie 5 lat 
            współpracowałem z lokalnymi sklepami, usługodawcami i przedsiębiorcami, tworząc strony internetowe, 
            które rzeczywiście przyciągają klientów. Wiem, że jesteś zajęty prowadzeniem swojego biznesu, 
            więc cały proces czynię prostym i bezstresowym. 💡
          </motion.p>
          <motion.p 
            className="text-lg text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Niezależnie od tego, czy dopiero zaczynasz, czy jesteś gotowy, aby przenieść swój biznes na wyższy poziom, 
            zasługujesz na stronę internetową, która pracuje tak ciężko jak Ty. Tworzę strony, które wyglądają 
            niesamowicie, są łatwe w zarządzaniu i co najważniejsze - pomagają Ci zarabiać więcej pieniędzy. 
            Zbudujmy coś wspaniałego razem! 🚀
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
                  background: `linear-gradient(135deg, ${skill.color.includes('blue') ? '#3b82f6' : skill.color.includes('pink') ? '#ec4899' : skill.color.includes('orange') ? '#f97316' : '#8b5cf6'} 0%, transparent 100%)`
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