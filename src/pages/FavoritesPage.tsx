import React, { useState } from 'react';
import { Heart, Trash2, ArrowUpRight } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { destinationsData } from '../data/destinations';
import { resortsData } from '../data/resorts';
import { toursData } from '../data/tours';
import { DestinationCard } from '../components/cards/DestinationCard';
import { ResortCard } from '../components/cards/ResortCard';
import { TourCard } from '../components/cards/TourCard';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Link } from '../router/Router';
import { useLanguage } from '../i18n/LanguageContext';

export const FavoritesPage: React.FC = () => {
  const { favorites, clearFavorites } = useFavorites();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'destination' | 'resort' | 'tour'>('all');

  const savedDestinations = destinationsData.filter((d) =>
    favorites.some((f) => f.id === d.id && f.type === 'destination')
  );

  const savedResorts = resortsData.filter((r) =>
    favorites.some((f) => f.id === r.id && f.type === 'resort')
  );

  const savedTours = toursData.filter((t) =>
    favorites.some((f) => f.id === t.id && f.type === 'tour')
  );

  const totalCount = savedDestinations.length + savedResorts.length + savedTours.length;

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <Breadcrumbs items={[{ label: t.favorites.title }]} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#337F6A] block">
            Ваша персональная коллекция
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#173F36] font-medium leading-tight">
            {t.favorites.title} ({totalCount})
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mt-1">
            {t.favorites.subtitle}
          </p>
        </div>

        {totalCount > 0 && (
          <button
            onClick={clearFavorites}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-rose-300 text-rose-700 hover:bg-rose-50 text-xs font-semibold transition-colors cursor-pointer self-start sm:self-auto"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{t.favorites.clearAll}</span>
          </button>
        )}
      </div>

      {/* Tabs */}
      {totalCount > 0 && (
        <div className="flex items-center gap-2 border-b border-stone-200 pb-3">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#173F36] text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Все ({totalCount})
          </button>
          <button
            onClick={() => setActiveTab('destination')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'destination'
                ? 'bg-[#173F36] text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Направления ({savedDestinations.length})
          </button>
          <button
            onClick={() => setActiveTab('resort')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'resort'
                ? 'bg-[#173F36] text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Резорты ({savedResorts.length})
          </button>
          <button
            onClick={() => setActiveTab('tour')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'tour'
                ? 'bg-[#173F36] text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Туры ({savedTours.length})
          </button>
        </div>
      )}

      {/* Empty State */}
      {totalCount === 0 ? (
        <div className="py-24 text-center bg-white rounded-3xl border border-stone-200/80 p-8 space-y-4 max-w-xl mx-auto shadow-sm">
          <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto">
            <Heart className="w-8 h-8" />
          </div>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-stone-800">
            {t.favorites.emptyTitle}
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 max-w-sm mx-auto leading-relaxed">
            {t.favorites.emptySub}
          </p>
          <div className="pt-2">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#173F36] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#337F6A] transition-colors"
            >
              <span>{t.favorites.exploreDestinations}</span>
            </Link>
          </div>
        </div>
      ) : (
        /* Favorites Grid */
        <div className="space-y-12">
          {/* Destinations Section */}
          {(activeTab === 'all' || activeTab === 'destination') && savedDestinations.length > 0 && (
            <div className="space-y-6">
              <h2 className="font-serif-luxury text-2xl text-[#173F36] font-medium">
                Направления ({savedDestinations.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {savedDestinations.map((d) => (
                  <DestinationCard key={d.id} destination={d} />
                ))}
              </div>
            </div>
          )}

          {/* Resorts Section */}
          {(activeTab === 'all' || activeTab === 'resort') && savedResorts.length > 0 && (
            <div className="space-y-6">
              <h2 className="font-serif-luxury text-2xl text-[#173F36] font-medium">
                Резорты и шале ({savedResorts.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {savedResorts.map((r) => (
                  <ResortCard key={r.id} resort={r} />
                ))}
              </div>
            </div>
          )}

          {/* Tours Section */}
          {(activeTab === 'all' || activeTab === 'tour') && savedTours.length > 0 && (
            <div className="space-y-6">
              <h2 className="font-serif-luxury text-2xl text-[#173F36] font-medium">
                Авторские туры ({savedTours.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {savedTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
