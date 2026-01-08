import { Mail, Github, Linkedin, Twitter, Send, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div 
          className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <motion.div
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-violet-600" />
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Rozwijmy Twój Biznes
            </motion.h2>
            <motion.div
              animate={{ rotate: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Sparkles className="w-6 h-6 text-pink-600" />
            </motion.div>
          </div>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-violet-600 to-pink-600 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Gotowy, aby zaistnieć w internecie lub odnowić swoją obecną stronę? 💬
            Chętnie porozmawiam o Twoich celach i zobaczę, jak mogę pomóc. Bez zobowiązań, tylko przyjazne porady! ✨
          </motion.p>
        </motion.div>

        <motion.a 
          href="mailto:hello@alexmorgan.dev" 
          className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white rounded-full hover:shadow-2xl transition-all text-lg mb-12 group shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          >
            <Mail className="w-5 h-5" />
          </motion.div>
          hello@alexmorgan.dev
          <motion.div
            whileHover={{ x: [0, 3, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <Send className="w-5 h-5" />
          </motion.div>
        </motion.a>

        <motion.div 
          className="flex justify-center gap-6 pt-8 border-t-2 border-gradient-to-r from-violet-200 to-pink-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { icon: Github, href: 'https://github.com', color: 'from-gray-600 to-gray-800' },
            { icon: Linkedin, href: 'https://linkedin.com', color: 'from-blue-600 to-blue-800' },
            { icon: Twitter, href: 'https://twitter.com', color: 'from-sky-500 to-blue-600' }
          ].map((social, index) => (
            <motion.a 
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all`}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, -10, 10, 0],
                y: -5
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20, scale: 0 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.p 
          className="text-gray-500 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          © 2026 Alex Morgan. Stworzone z 💜 i dużą ilością ☕
        </motion.p>
      </div>
    </section>
  );
}