import React from 'react';
import { Heart, Clock, ArrowUpRight, Compass } from 'lucide-react';
import { Destination } from '../../types';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { StarRating } from '../ui/StarRating';
import { Link } from '../../router/Router';
import { useLanguage } from '../../i18n/LanguageContext';
import { useFavorites } from '../../context/FavoritesContext';

interface DestinationCardProps {
  destination: Destination;
  className?: string;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, className = '' }) => {
  const { language, t } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(destination.id);

  return (
    <div
      className={`group relative flex flex-col rounded-2xl bg-white border border-stone-200/80 overflow-hidden luxury-card shadow-sm ${className}`}
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Image Area with Zoom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden image-zoom-container">
        <ImageWithFallback
          src={destination.heroImage}
          alt={destination.name}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Favorite Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(destination.id, 'destination');
          }}
          className="absolute top-3.5 right-3.5 p-2 rounded-full bg-white/70 backdrop-blur-md border border-white/60 hover:bg-white text-stone-700 transition-transform active:scale-90 shadow-sm cursor-pointer z-10"
          aria-label={t.cards.save}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              favorite ? 'text-rose-500 fill-rose-500' : 'text-stone-700'
            }`}
          />
        </button>

        {/* Region & Country Tag */}
        <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#173F36]/80 backdrop-blur-md border border-white/20 text-[11px] font-semibold tracking-wider uppercase text-white">
          {language === 'ru' ? destination.region : destination.regionEn}
        </div>

        {/* Bottom image overlay information */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <StarRating rating={destination.rating} className="text-white drop-shadow" />
          <div className="flex items-center gap-1 opacity-90 drop-shadow">
            <Clock className="w-3.5 h-3.5" />
            <span>{destination.suggestedDuration}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-serif-luxury text-xl font-medium text-[#173F36] group-hover:text-[#337F6A] transition-colors">
              {language === 'ru' ? destination.name : destination.nameEn}
            </h3>
            <span className="text-xs text-stone-400 font-medium">
              {destination.country}
            </span>
          </div>

          <p className="text-xs text-stone-500 line-clamp-2 mt-1.5 leading-relaxed">
            {language === 'ru' ? destination.shortDescription : destination.shortDescriptionEn}
          </p>
        </div>

        {/* Highlights Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {destination.categories.slice(0, 2).map((cat, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded-full bg-[#E2F1EB] text-[#173F36] text-[10px] font-medium tracking-wide"
            >
              {cat}
            </span>
          ))}
          {destination.altitude && (
            <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 text-[10px] font-medium">
              {destination.altitude}
            </span>
          )}
        </div>

        {/* Footer Link */}
        <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
          <Link
            to={`/destinations/${destination.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#173F36] group-hover:text-[#337F6A] transition-colors"
          >
            <span>{t.cards.details}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
