import React, { useState, useMemo } from 'react';
import { Search, RotateCcw, Filter, Building } from 'lucide-react';
import { resortsData } from '../data/resorts';
import { destinationsData } from '../data/destinations';
import { ResortCard } from '../components/cards/ResortCard';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { useLanguage } from '../i18n/LanguageContext';
import { useLocation } from '../router/Router';

export const ResortsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const { search } = useLocation();

  // Parse initial destination from URL query if present
  const queryParams = new URLSearchParams(search);
  const initialDestination = queryParams.get('destination') || 'all';

  const [selectedDestination, setSelectedDestination] = useState<string>(initialDestination);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(700);
  const [sortBy, setSortBy] = useState<'rating' | 'price-asc' | 'price-desc'>('rating');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Все категории', labelEn: 'All Categories' },
    { id: 'alpine', label: 'Альпийские шале', labelEn: 'Alpine Chalets' },
    { id: 'heritage', label: 'Отели наследия', labelEn: 'Heritage Hotels' },
    { id: 'nature', label: 'Ретриты у воды', labelEn: 'Lake & Nature' },
    { id: 'spa', label: 'Спа и термы', labelEn: 'Spa & Thermal' },
    { id: 'lodge', label: 'Эко-лоджи', labelEn: 'Eco-Lodges' },
    { id: 'contemporary', label: 'В скале / Бутик', labelEn: 'Cave / Boutique' }
  ];

  const filteredResorts = useMemo(() => {
    return resortsData
      .filter((resort) => {
        const matchesQuery =
          resort.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          resort.location.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory =
          selectedCategory === 'all' || resort.category === selectedCategory;

        const matchesDestination =
          selectedDestination === 'all' ||
          resort.location.toLowerCase().includes(selectedDestination.toLowerCase()) ||
          resort.id.toLowerCase().includes(selectedDestination.toLowerCase());

        const matchesPrice = resort.pricePerNight <= maxPrice;

        return matchesQuery && matchesCategory && matchesDestination && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'price-asc') return a.pricePerNight - b.pricePerNight;
        if (sortBy === 'price-desc') return b.pricePerNight - a.pricePerNight;
        return 0;
      });
  }, [searchQuery, selectedCategory, selectedDestination, maxPrice, sortBy]);

  const handleReset = () => {
    setSelectedDestination('all');
    setSelectedCategory('all');
    setMaxPrice(700);
    setSortBy('rating');
    setSearchQuery('');
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: t.nav.resorts }]} />

      {/* Header */}
      <div className="py-8 space-y-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#337F6A] block">
          Коллекция гостеприимства
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#173F36] font-medium leading-tight">
          {t.sections.resortsTitle}
        </h1>
        <p className="text-stone-600 text-sm sm:text-base max-w-2xl leading-relaxed">
          {t.sections.resortsSubtitle}. Откройте альпийские шале с подогреваемыми бассейнами, бутик-отели в старинных дворцах и уединенные природные лоджи.
        </p>
      </div>

      {/* Filter and Control Bar */}
      <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs mb-10 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Search text */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по названию или локации..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-[#337F6A]"
            />
          </div>

          {/* Destination dropdown */}
          <div>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm font-medium text-stone-700 focus:outline-none cursor-pointer"
            >
              <option value="all">Все локации</option>
              {destinationsData.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} ({d.country})
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between text-xs text-stone-500 font-medium mb-1">
              <span>До: ${maxPrice}/ночь</span>
              <span className="text-[10px] text-stone-400">$200 - $700</span>
            </div>
            <input
              type="range"
              min="200"
              max="700"
              step="20"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="accent-[#337F6A] cursor-pointer"
            />
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-700 focus:outline-none cursor-pointer"
            >
              <option value="rating">По рейтингу</option>
              <option value="price-asc">Сначала доступные</option>
              <option value="price-desc">Сначала премиальные</option>
            </select>

            <button
              onClick={handleReset}
              className="p-2.5 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors shrink-0"
              title="Сбросить фильтры"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Pills */}
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

      {/* Grid or Empty State */}
      {filteredResorts.length === 0 ? (
        <div className="py-20 text-center bg-white rounded-2xl border border-stone-200/80 p-8 space-y-4">
          <Building className="w-10 h-10 text-stone-300 mx-auto" />
          <h3 className="font-serif-luxury text-2xl text-stone-700">Отели не найдены</h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            Попробуйте расширить ценовой диапазон или сбросить фильтры по категориям.
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
            Найдено вариантов размещения: {filteredResorts.length}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredResorts.map((resort) => (
              <ResortCard key={resort.id} resort={resort} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
