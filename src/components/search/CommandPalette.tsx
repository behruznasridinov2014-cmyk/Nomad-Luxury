import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Building, Compass, BookOpen, X, ArrowRight } from 'lucide-react';
import { destinationsData } from '../../data/destinations';
import { resortsData } from '../../data/resorts';
import { toursData } from '../../data/tours';
import { articlesData } from '../../data/articles';
import { useNavigate } from '../../router/Router';
import { useLanguage } from '../../i18n/LanguageContext';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Build searchable items
  const items = React.useMemo(() => {
    const list: Array<{
      id: string;
      title: string;
      subtitle: string;
      category: 'destination' | 'resort' | 'tour' | 'article';
      path: string;
    }> = [];

    destinationsData.forEach(d => {
      list.push({
        id: `dest-${d.id}`,
        title: language === 'ru' ? d.name : d.nameEn,
        subtitle: `${d.region}, ${d.country}`,
        category: 'destination',
        path: `/destinations/${d.id}`
      });
    });

    resortsData.forEach(r => {
      list.push({
        id: `resort-${r.id}`,
        title: language === 'ru' ? r.name : r.nameEn,
        subtitle: `${r.location} • $${r.pricePerNight}/ночь`,
        category: 'resort',
        path: `/resorts/${r.id}`
      });
    });

    toursData.forEach(t => {
      list.push({
        id: `tour-${t.id}`,
        title: language === 'ru' ? t.title : t.titleEn,
        subtitle: `${t.duration} • $${t.price}`,
        category: 'tour',
        path: `/tours/${t.id}`
      });
    });

    articlesData.forEach(a => {
      list.push({
        id: `art-${a.id}`,
        title: language === 'ru' ? a.title : a.titleEn,
        subtitle: `${a.category} • ${a.readTime}`,
        category: 'article',
        path: `/journal/${a.slug}`
      });
    });

    if (!query.trim()) return list.slice(0, 8);

    const q = query.toLowerCase();
    return list.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q)
    ).slice(0, 10);
  }, [query, language]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % items.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + items.length) % items.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (items[selectedIndex]) {
          navigate(items[selectedIndex].path);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, items, selectedIndex, navigate, onClose]);

  if (!isOpen) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'destination': return <MapPin className="w-4 h-4 text-emerald-600" />;
      case 'resort': return <Building className="w-4 h-4 text-teal-600" />;
      case 'tour': return <Compass className="w-4 h-4 text-amber-600" />;
      case 'article': return <BookOpen className="w-4 h-4 text-stone-600" />;
      default: return <Search className="w-4 h-4 text-stone-400" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'destination': return 'Направление';
      case 'resort': return 'Резорт';
      case 'tour': return 'Тур';
      case 'article': return 'Журнал';
      default: return '';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-stone-900/60 backdrop-blur-md animate-fade-in">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-stone-200 gap-3 bg-stone-50/50">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Поиск по курортам, направлениям, турам и статьям..."
            className="w-full bg-transparent text-sm sm:text-base text-stone-800 placeholder-stone-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/50 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 divide-y divide-stone-100">
          {items.length === 0 ? (
            <div className="py-12 text-center text-stone-500">
              <p className="text-sm">Ничего не найдено по запросу «{query}»</p>
              <p className="text-xs text-stone-400 mt-1">Попробуйте ввести «Самарканд», «Чимган», «Шале» или «Спа»</p>
            </div>
          ) : (
            items.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    navigate(item.path);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all ${
                    isSelected ? 'bg-[#E2F1EB] text-[#173F36]' : 'hover:bg-stone-100/70 text-stone-800'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center shrink-0 shadow-xs">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-sm truncate">{item.title}</div>
                      <div className="text-xs text-stone-400 truncate">{item.subtitle}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-stone-200/60 text-stone-600">
                      {getCategoryLabel(item.category)}
                    </span>
                    {isSelected && <ArrowRight className="w-3.5 h-3.5 text-[#337F6A]" />}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Keyboard Footer Hints */}
        <div className="px-4 py-2.5 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-400">
          <div className="flex items-center gap-3">
            <span>↑↓ Навигация</span>
            <span>↵ Выбрать</span>
            <span>ESC Закрыть</span>
          </div>
          <span>NOMAD Fast Search</span>
        </div>
      </div>
    </div>
  );
};
