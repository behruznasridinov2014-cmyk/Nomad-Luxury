import React from 'react';
import { Heart, MapPin, Users, ArrowUpRight, Sparkles } from 'lucide-react';
import { Resort } from '../../types';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { StarRating } from '../ui/StarRating';
import { Link, useNavigate } from '../../router/Router';
import { useLanguage } from '../../i18n/LanguageContext';
import { useFavorites } from '../../context/FavoritesContext';
import { useBooking } from '../../context/BookingContext';

interface ResortCardProps {
  resort: Resort;
  className?: string;
}

export const ResortCard: React.FC<ResortCardProps> = ({ resort, className = '' }) => {
  const { language, t } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { setSelectedBookingTarget } = useBooking();
  const navigate = useNavigate();

  const favorite = isFavorite(resort.id);

  const handleQuickBook = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedBookingTarget({ type: 'resort', id: resort.id });
    navigate(`/booking?type=resort&itemId=${resort.id}`);
  };

  return (
    <div
      className={`group relative flex flex-col rounded-2xl bg-white border border-stone-200/80 overflow-hidden luxury-card shadow-sm ${className}`}
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Photograph Container with zoom */}
      <div className="relative aspect-[16/10] w-full overflow-hidden image-zoom-container">
        <ImageWithFallback
          src={resort.heroImage}
          alt={resort.name}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Favorite Action Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(resort.id, 'resort');
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

        {/* Category Pill */}
        <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#173F36]/85 backdrop-blur-md border border-white/20 text-[11px] font-semibold tracking-wider uppercase text-white">
          {language === 'ru' ? resort.categoryLabel : resort.categoryLabelEn}
        </div>

        {/* Bottom image overlay: Rating & Demo Badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <StarRating rating={resort.rating} reviewsCount={resort.reviewsCount} className="text-white drop-shadow" />
          {resort.isDemo && (
            <span className="px-2 py-0.5 rounded bg-black/40 backdrop-blur-xs text-[10px] text-stone-300 font-mono">
              {t.cards.demoBadge}
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-[#337F6A] font-medium mb-1">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{resort.location}, {resort.country}</span>
          </div>

          <h3 className="font-serif-luxury text-xl font-medium text-[#173F36] group-hover:text-[#337F6A] transition-colors line-clamp-1">
            {language === 'ru' ? resort.name : resort.nameEn}
          </h3>

          <p className="text-xs text-stone-500 line-clamp-2 mt-1.5 leading-relaxed">
            {language === 'ru' ? resort.shortDescription : resort.shortDescriptionEn}
          </p>
        </div>

        {/* Amenities Preview */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {resort.amenities.slice(0, 3).map((amenity, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 text-[10px] font-medium truncate max-w-[150px]"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* Price & Actions */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">
              {t.cards.from}
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-serif-luxury text-xl font-bold text-[#173F36]">
                ${resort.pricePerNight}
              </span>
              <span className="text-[11px] text-stone-500">
                / {t.cards.night}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/resorts/${resort.id}`}
              className="px-3.5 py-2 rounded-full border border-[#173F36]/25 hover:border-[#173F36] text-[#173F36] text-xs font-semibold tracking-wider transition-colors"
            >
              {t.cards.details}
            </Link>
            <button
              onClick={handleQuickBook}
              className="px-3.5 py-2 rounded-full bg-[#173F36] hover:bg-[#337F6A] text-[#F7F6F0] text-xs font-semibold tracking-wider transition-all cursor-pointer shadow-xs"
            >
              {t.cards.book}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
