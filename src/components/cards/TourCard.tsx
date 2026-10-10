import React from 'react';
import { Heart, Clock, Compass, Users } from 'lucide-react';
import { Tour } from '../../types';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { StarRating } from '../ui/StarRating';
import { Link, useNavigate } from '../../router/Router';
import { useLanguage } from '../../i18n/LanguageContext';
import { useFavorites } from '../../context/FavoritesContext';
import { useBooking } from '../../context/BookingContext';

interface TourCardProps {
  tour: Tour;
  className?: string;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, className = '' }) => {
  const { language, t } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { setSelectedBookingTarget } = useBooking();
  const navigate = useNavigate();

  const favorite = isFavorite(tour.id);

  const handleBookTour = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedBookingTarget({ type: 'tour', id: tour.id });
    navigate(`/booking?type=tour&itemId=${tour.id}`);
  };

  return (
    <div
      className={`group relative flex flex-col rounded-2xl bg-white border border-stone-200/80 overflow-hidden luxury-card shadow-sm ${className}`}
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Photograph Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden image-zoom-container">
        <ImageWithFallback
          src={tour.heroImage}
          alt={tour.title}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Favorite Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(tour.id, 'tour');
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

        {/* Category Badge */}
        <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#337F6A]/90 backdrop-blur-md border border-white/20 text-[11px] font-semibold tracking-wider uppercase text-white">
          {language === 'ru' ? tour.categoryLabel : tour.categoryLabelEn}
        </div>

        {/* Bottom image overlay: Rating & Duration */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <StarRating rating={tour.rating} className="text-white drop-shadow" />
          <div className="flex items-center gap-1 opacity-90 drop-shadow">
            <Clock className="w-3.5 h-3.5" />
            <span>{language === 'ru' ? tour.duration : tour.durationEn}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <span className="text-xs text-[#337F6A] font-semibold tracking-wider uppercase block mb-1">
            {language === 'ru' ? tour.destination : tour.destinationEn}
          </span>

          <h3 className="font-serif-luxury text-xl font-medium text-[#173F36] group-hover:text-[#337F6A] transition-colors line-clamp-2">
            {language === 'ru' ? tour.title : tour.titleEn}
          </h3>

          <p className="text-xs text-stone-500 line-clamp-2 mt-1.5 leading-relaxed">
            {language === 'ru' ? tour.shortDescription : tour.shortDescriptionEn}
          </p>
        </div>

        {/* Metadata pills */}
        <div className="flex items-center gap-2 pt-1 text-[11px] text-stone-500">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100">
            {tour.difficulty}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100">
            до {tour.maxGroupSize} гостей
          </span>
        </div>

        {/* Price & Actions */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">
              {t.cards.from}
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-serif-luxury text-xl font-bold text-[#173F36]">
                ${tour.price}
              </span>
              <span className="text-[11px] text-stone-500">
                / тур
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/tours/${tour.id}`}
              className="px-3.5 py-2 rounded-full border border-[#173F36]/25 hover:border-[#173F36] text-[#173F36] text-xs font-semibold tracking-wider transition-colors"
            >
              {t.cards.details}
            </Link>
            <button
              onClick={handleBookTour}
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
