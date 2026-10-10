import React, { useState, useMemo } from 'react';
import { Search, RotateCcw, Compass } from 'lucide-react';
import { toursData } from '../data/tours';
import { TourCard } from '../components/cards/TourCard';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { useLanguage } from '../i18n/LanguageContext';

export const ToursPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'rating' | 'price-asc' | 'price-desc'>('rating');

  const categories = [
    { id: 'all', label: 'Все туры', labelEn: 'All Tours' },
    { id: 'culture', label: 'Культура и история', labelEn: 'Culture & History' },
    { id: 'wellness', label: 'Wellness & Спа', labelEn: 'Wellness & Spa' },
    { id: 'mountains', label: 'Горы и трекинг', labelEn: 'Mountains' },
    { id: 'nature', label: 'Природа и вода', labelEn: 'Nature & Water' },
    { id: 'gastronomy', label: 'Гастрономия', labelEn: 'Gastronomy' },
    { id: 'architecture', label: 'Архитектура', labelEn: 'Architecture' },
    { id: 'adventure', label: 'Приключения', labelEn: 'Adventure' },
    { id: 'family', label: 'Семейный отдых', labelEn: 'Family' }
  ];

  const filteredTours = useMemo(() => {
    return toursData
      .filter((tour) => {
        const matchesQuery =
          tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tour.destination.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory =
          selectedCategory === 'all' || tour.category === selectedCategory;

        return matchesQuery && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        return 0;
      });
  }, [searchQuery, selectedCategory, sortBy]);

  const handleReset = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('rating');
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: t.nav.tours }]} />

      {/* Header */}
      <div className="py-8 space-y-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#337F6A] block">
          Экспедиции и маршруты
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#173F36] font-medium leading-tight">
          Авторские путешествия
        </h1>
        <p className="text-stone-600 text-sm sm:text-base max-w-2xl leading-relaxed">
          Коллекция из 16 продуманных до мелочей авторских программ: от гранд-туров по Шелковому пути до уединенных горных ретритов и полетов на воздушных шарах.
        </p>
      </div>

      {/* Filters Bar */}
      <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs mb-10 space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по названию или локации тура..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#337F6A]"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500 font-medium">Сортировка:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3.5 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-700 focus:outline-none cursor-pointer"
            >
              <option value="rating">По рейтингу</option>
              <option value="price-asc">Сначала доступные</option>
              <option value="price-desc">Сначала премиальные</option>
            </select>

            {(searchQuery || selectedCategory !== 'all') && (
              <button
                onClick={handleReset}
                className="p-2.5 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
                title="Сбросить фильтры"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1 border-t border-stone-100">
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

      {/* Grid or Empty */}
      {filteredTours.length === 0 ? (
        <div className="py-20 text-center bg-white rounded-2xl border border-stone-200/80 p-8 space-y-4">
          <Compass className="w-10 h-10 text-stone-300 mx-auto" />
          <h3 className="font-serif-luxury text-2xl text-stone-700">Туры не найдены</h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            Попробуйте изменить поисковый запрос или выбрать другую категорию.
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
            Найдено туров: {filteredTours.length}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
