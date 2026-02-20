import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Calendar as CalendarIcon, 
  Grid, 
  List, 
  Clock, 
  ChevronRight, 
  X, 
  Moon, 
  Sun,
  Download,
  Filter,
  BookOpen,
  Atom,
  Users,
  Copyright,
  Factory,
  Palette,
  PenTool,
  Lightbulb,
  Info
} from 'lucide-react';
import { EVENTS, CATEGORIES, Category, EventData } from './constants';

// --- Components ---

const IconMap: Record<string, React.ElementType> = {
  BookOpen, Atom, Users, Copyright, Factory, Palette, PenTool, Lightbulb
};

const CategoryBadge = ({ category, className = '' }: { category: Category; className?: string }) => {
  const config = CATEGORIES[category];
  const Icon = IconMap[config.icon];
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-white shadow-sm ${config.color} ${className}`}>
      <Icon size={12} />
      {category}
    </span>
  );
};

const EventModal = ({ event, onClose }: { event: EventData | null; onClose: () => void }) => {
  if (!event) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }} 
          animate={{ scale: 1, opacity: 1, y: 0 }} 
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg overflow-hidden glass-panel rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`h-24 ${CATEGORIES[event.category].color} relative overflow-hidden`}>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
             <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
             >
                <X size={20} />
             </button>
             <div className="absolute bottom-4 left-6 text-white">
                <div className="flex items-center gap-2 text-sm font-medium opacity-90 mb-1">
                  <CalendarIcon size={14} />
                  {new Date().getFullYear()}-{event.date}
                </div>
             </div>
          </div>
          
          <div className="p-6 pt-4">
            <CategoryBadge category={event.category} className="-mt-8 mb-4 border-2 border-white dark:border-slate-900 relative z-10" />
            
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3">
              {event.title}
            </h2>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {event.description}
            </p>

            <div className="flex justify-end">
              <button 
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Countdown = ({ nextEvent }: { nextEvent: EventData | null }) => {
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number, seconds: number} | null>(null);
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    if (!nextEvent) return;

    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const eventDateStr = `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
      
      if (nextEvent.date === eventDateStr) {
        setIsToday(true);
        setTimeLeft(null);
        return;
      }
      
      setIsToday(false);
      let targetDate = new Date(`${currentYear}-${nextEvent.date}T00:00:00`);

      // If date has passed this year (and it's not today), look at next year
      if (targetDate < now && nextEvent.date !== eventDateStr) {
        targetDate = new Date(`${currentYear + 1}-${nextEvent.date}T00:00:00`);
      }

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft(null);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [nextEvent]);

  if (!nextEvent) return null;

  return (
    <div className="glass-panel rounded-xl p-4 flex items-center gap-4 border-l-4 border-l-purple-500">
      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
        <Clock size={24} />
      </div>
      <div>
        <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
          {isToday ? 'Acontecendo Agora' : 'Próximo Evento'}
        </div>
        <div className="font-display font-bold text-slate-900 dark:text-white text-lg truncate max-w-[200px] sm:max-w-xs">
          {nextEvent.title}
        </div>
        {isToday ? (
          <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mt-1 animate-pulse">
            É hoje! Celebre esta data.
          </div>
        ) : timeLeft ? (
          <div className="flex gap-2 text-sm font-mono text-slate-600 dark:text-slate-300 mt-1">
            <span>{timeLeft.days}d</span>
            <span>{timeLeft.hours}h</span>
            <span>{timeLeft.minutes}m</span>
            <span>{timeLeft.seconds}s</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todos'>('Todos');
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  // Theme Toggle
  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      return;
    }
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      return;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Data Logic
  const currentYear = new Date().getFullYear();
  
  const sortedEvents = useMemo(() => {
    return [...EVENTS].sort((a, b) => {
      // Simple string comparison works for MM-DD format
      return a.date.localeCompare(b.date);
    });
  }, []);

  const filteredEvents = useMemo(() => {
    return sortedEvents.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            event.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || event.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [sortedEvents, searchQuery, selectedCategory]);

  const nextEvent = useMemo(() => {
    const now = new Date();
    const todayStr = `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    
    // Find first event today or after
    let next = sortedEvents.find(e => e.date >= todayStr);
    // If no event left this year, wrap around to first event of next year
    if (!next && sortedEvents.length > 0) {
      next = sortedEvents[0];
    }
    return next || null;
  }, [sortedEvents]);

  const exportEvents = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(EVENTS, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "eventos_pi.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const scrollToToday = () => {
    const now = new Date();
    const todayStr = `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const upcoming = sortedEvents.find(e => e.date >= todayStr);
    
    if (upcoming) {
      const element = document.getElementById(`event-${upcoming.id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Highlight effect could be added here
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-purple-500 selection:text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-400/20 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-400/20 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full glass-panel border-b-0 rounded-none border-b border-white/20 dark:border-slate-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-2 rounded-lg shadow-lg">
                <Lightbulb size={24} />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300">
                  Todo Dia é Dia de PI
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <button 
                onClick={scrollToToday}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              >
                <CalendarIcon size={16} />
                Ir para hoje
              </button>
              
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                aria-label="Alternar tema"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">
              Celebre a <span className="text-purple-600 dark:text-purple-400">PI</span> todos os dias.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
              Um calendário interativo dedicado àPropriedade Intelectual e suas interfaces com a Inovação, Indústria, Ciência, Tecnologia e Educação. Explore os marcos que transformam o mundo.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-2">
              <button onClick={exportEvents} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/40 rounded-lg transition-colors">
                <Download size={16} />
                Exportar Calendário
              </button>
            </div>
          </div>

          <div className="lg:col-span-1 w-full">
            <Countdown nextEvent={nextEvent} />
          </div>
        </div>

        {/* Controls Bar */}
        <div className="sticky top-20 z-30 glass-panel rounded-xl p-4 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between gap-4 transition-all duration-300">
          
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar eventos..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-900 dark:text-white placeholder-slate-400"
            />
          </div>

          {/* Filters & View Toggle */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 shadow-sm text-purple-600 dark:text-purple-400' : 'text-slate-500 dark:text-slate-400'}`}
              >
                <Grid size={18} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 shadow-sm text-purple-600 dark:text-purple-400' : 'text-slate-500 dark:text-slate-400'}`}
              >
                <List size={18} />
              </button>
            </div>

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1" />

            <div className="flex gap-2">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as Category | 'Todos')}
                className="appearance-none pl-3 pr-8 py-2 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
              >
                <option value="Todos">Todas Categorias</option>
                {Object.keys(CATEGORIES).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Events Grid/List */}
        <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"}>
          <AnimatePresence mode='popLayout'>
            {filteredEvents.map((event) => (
              <motion.div
                layout
                key={event.id}
                id={`event-${event.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedEvent(event)}
                className={`
                  group cursor-pointer glass-card rounded-xl overflow-hidden relative
                  ${viewMode === 'list' ? 'flex items-center gap-6 p-4' : 'flex flex-col h-full'}
                  ${event.isHighlight ? 'ring-2 ring-purple-500/50 dark:ring-purple-400/50' : ''}
                `}
              >
                {/* Date Badge */}
                <div className={`
                  flex flex-col items-center justify-center text-center
                  ${viewMode === 'list' ? 'w-20 h-20 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0' : 'h-32 w-full relative'}
                `}>
                  {viewMode === 'grid' && (
                    <div className={`absolute inset-0 opacity-10 ${CATEGORIES[event.category].color}`} />
                  )}
                  <span className={`font-display font-bold ${viewMode === 'list' ? 'text-2xl' : 'text-4xl'} text-slate-900 dark:text-white`}>
                    {event.date.split('-')[1]}
                  </span>
                  <span className={`text-xs uppercase font-medium tracking-wider text-slate-500 dark:text-slate-400`}>
                    {new Date(2024, parseInt(event.date.split('-')[0]) - 1).toLocaleString('pt-BR', { month: 'short' }).replace('.', '')}
                  </span>
                </div>

                {/* Content */}
                <div className={`flex-1 ${viewMode === 'grid' ? 'p-5' : ''}`}>
                  <div className="flex justify-between items-start mb-2">
                    <CategoryBadge category={event.category} />
                    {event.isHighlight && (
                      <span className="text-xs font-bold text-purple-600 dark:text-purple-400 animate-pulse">
                        ★ Destaque
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {event.title}
                  </h3>
                  
                  {viewMode === 'grid' && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                      {event.description}
                    </p>
                  )}
                </div>

                {/* Action Icon (Hover) */}
                <div className={`
                  absolute right-4 bottom-4 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300
                  ${viewMode === 'list' ? 'static opacity-100 translate-x-0' : ''}
                `}>
                  <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300">
                    <ChevronRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
              <Info size={32} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-medium text-slate-900 dark:text-white">Nenhum evento encontrado</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Tente ajustar seus filtros ou busca.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('Todos'); }}
              className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
            >
              Limpar filtros
            </button>
          </div>
        )}

        <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
          <p>© {currentYear} Todo Dia é Dia de PI. Promovendo a cultura da propriedade intelectual e da inovação.</p>
        </footer>

      </main>

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}
