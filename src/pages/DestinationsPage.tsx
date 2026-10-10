import React, { useState, useMemo } from 'react';
import { Search, MapPin, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { destinationsData } from '../data/destinations';
import { DestinationCard } from '../components/cards/DestinationCard';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const DestinationsPage: React.FC = () => {
  const { t, language } = useLanguage();
  useScrollReveal();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'rating' | 'name'>('rating');

  const categories = [
    { id: 'all', label: 'Все категории', labelEn: 'All Categories' },
    { id: 'Культура', label: 'Культура', labelEn: 'Culture' },
    { id: 'Горы', label: 'Горы', labelEn: 'Mountains' },
    { id: 'Wellness', label: 'Wellness', labelEn: 'Wellness' },
    { id: 'Архитектура', label: 'Архитектура', labelEn: 'Architecture' },
    { id: 'Природа', label: 'Природа', labelEn: 'Nature' },
    { id: 'История', label: 'История', labelEn: 'History' }
  ];

  const filteredDestinations = useMemo(() => {
    return destinationsData
      .filter((dest) => {
        const matchesQuery =
          dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dest.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dest.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dest.country.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory =
          selectedCategory === 'all' || dest.categories.includes(selectedCategory);

        return matchesQuery && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
      });
  }, [searchQuery, selectedCategory, sortBy]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('rating');
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: t.nav.destinations }]} />

      {/* Header */}
      <div className="py-8 space-y-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#337F6A] block">
          География путешествий
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#173F36] font-medium leading-tight">
          {t.sections.destinationsTitle}
        </h1>
        <p className="text-stone-600 text-sm sm:text-base max-w-2xl leading-relaxed">
          {t.sections.destinationsSubtitle}. Откройте для себя 12 уникальных локаций с тысячелетней историей и первозданной природой.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/80 shadow-xs mb-10 space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по названию или региону..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#337F6A]"
            />
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-stone-500 font-medium">Сортировка:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'rating' | 'name')}
              className="px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-700 focus:outline-none cursor-pointer"
            >
              <option value="rating">По рейтингу</option>
              <option value="name">По алфавиту</option>
            </select>

            {(searchQuery || selectedCategory !== 'all') && (
              <button
                onClick={handleReset}
                className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
                title="Сбросить фильтры"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#173F36] text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200/70'
              }`}
            >
              {language === 'ru' ? cat.label : cat.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Grid or Empty State */}
      {filteredDestinations.length === 0 ? (
        <div className="py-20 text-center bg-white rounded-2xl border border-stone-200/80 p-8 space-y-4">
          <MapPin className="w-10 h-10 text-stone-300 mx-auto" />
          <h3 className="font-serif-luxury text-2xl text-stone-700">Ничего не найдено</h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            По вашему запросу направлений не обнаружено. Попробуйте сбросить параметры поиска.
          </p>
          <button
            onClick={handleReset}
            className="px-5 py-2 rounded-full bg-[#173F36] text-white text-xs font-semibold"
          >
            Сбросить фильтры
          </button>
        </div>
      ) : (
        <>
          <div className="text-xs text-stone-400 font-medium mb-6">
            Найдено направлений: {filteredDestinations.length}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDestinations.map((dest) => (
              <div key={dest.id} className="reveal-item">
                <DestinationCard destination={dest} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
