import { motion } from 'motion/react';
import { Home, DollarSign, Mail } from 'lucide-react';

interface NavigationProps {
  currentPage: 'home' | 'pricing' | 'contact';
  onNavigate: (page: 'home' | 'pricing' | 'contact') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          className="text-xl bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => onNavigate('home')}
        >
          Alex Morgan
        </motion.div>
        
        <div className="flex gap-2">
          <motion.button
            onClick={() => onNavigate('home')}
            className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
              currentPage === 'home' 
                ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Strona Główna</span>
          </motion.button>
          
          <motion.button
            onClick={() => onNavigate('pricing')}
            className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all relative ${
              currentPage === 'pricing' 
                ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <DollarSign className="w-4 h-4" />
            <span className="hidden sm:inline">Cennik</span>
            {currentPage !== 'pricing' && (
              <motion.span 
                className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.button>

          <motion.button
            onClick={() => onNavigate('contact')}
            className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
              currentPage === 'contact' 
                ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Kontakt</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}