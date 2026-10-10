import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Users,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { useParams, useNavigate } from '../router/Router';
import { toursData } from '../data/tours';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { StarRating } from '../components/ui/StarRating';
import { useLanguage } from '../i18n/LanguageContext';
import { useBooking } from '../context/BookingContext';

export const TourDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const { setSelectedBookingTarget } = useBooking();

  const tour = toursData.find((item) => item.id === id) || toursData[0];
  const [activeDay, setActiveDay] = useState<number | null>(1);

  const handleBookTour = () => {
    setSelectedBookingTarget({ type: 'tour', id: tour.id });
    navigate(`/booking?type=tour&itemId=${tour.id}`);
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <Breadcrumbs
        items={[
          { label: t.nav.tours, to: '/tours' },
          { label: language === 'ru' ? tour.title : tour.titleEn }
        ]}
      />

      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#337F6A]">
          <MapPin className="w-3.5 h-3.5" />
          <span>{language === 'ru' ? tour.destination : tour.destinationEn}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#173F36] font-medium leading-tight max-w-4xl">
            {language === 'ru' ? tour.title : tour.titleEn}
          </h1>
          <StarRating rating={tour.rating} size="md" />
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-xl border border-stone-200">
        <ImageWithFallback
          src={tour.heroImage}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-3 text-xs sm:text-sm font-medium">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md">
              {language === 'ru' ? tour.duration : tour.durationEn}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md">
              Сложность: {tour.difficulty}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md">
              Группа: до {tour.maxGroupSize} чел.
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs uppercase tracking-wider block opacity-75">Стоимость</span>
            <span className="font-serif-luxury text-3xl font-bold">${tour.price}</span>
          </div>
        </div>
      </div>

      {/* Narrative & Itinerary Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Itinerary & Inclusions (8 cols) */}
        <div className="lg:col-span-8 space-y-10">
          <div className="space-y-4">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#173F36] font-medium">
              Концепция путешествия
            </h2>
            <p className="text-base text-stone-700 leading-relaxed font-light">
              {language === 'ru' ? tour.shortDescription : tour.shortDescriptionEn}
            </p>
          </div>

          {/* Day by Day Program Accordion */}
          <div className="space-y-4">
            <h3 className="font-serif-luxury text-2xl text-[#173F36] font-medium">
              Программа по дням
            </h3>

            <div className="space-y-3">
              {tour.itinerary.map((day) => {
                const isOpen = activeDay === day.day;
                return (
                  <div
                    key={day.day}
                    className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-all"
                  >
                    <button
                      onClick={() => setActiveDay(isOpen ? null : day.day)}
                      className="w-full p-5 text-left flex items-center justify-between hover:bg-stone-50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 rounded-full bg-[#173F36] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                          {day.day}
                        </span>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-[#337F6A] block">
                            День {day.day}
                          </span>
                          <h4 className="font-serif-luxury text-lg font-bold text-[#173F36]">
                            {language === 'ru' ? day.title : day.titleEn}
                          </h4>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-stone-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-2 border-t border-stone-100 space-y-3 text-xs sm:text-sm text-stone-600">
                        <p className="leading-relaxed">
                          {language === 'ru' ? day.description : day.descriptionEn}
                        </p>
                        {day.activities && day.activities.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {day.activities.map((act, i) => (
                              <span key={i} className="px-2.5 py-1 rounded-full bg-[#E2F1EB] text-[#173F36] text-xs font-medium">
                                ✓ {act}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Included Features */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-4">
            <h3 className="font-serif-luxury text-xl font-medium text-[#173F36] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#337F6A]" />
              <span>Что включено в программу</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {(language === 'ru' ? tour.included : tour.includedEn).map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Booking Box (4 cols) */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 glass-panel rounded-3xl p-6 sm:p-7 border border-white/80 shadow-2xl space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-400 block">
                Стоимость участия
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="font-serif-luxury text-4xl font-bold text-[#173F36]">
                  ${tour.price}
                </span>
                <span className="text-xs text-stone-500">/ персона</span>
              </div>
            </div>

            <div className="space-y-3 text-xs text-stone-600 divide-y divide-stone-100">
              <div className="pt-2 flex justify-between">
                <span>Длительность:</span>
                <span className="font-semibold text-stone-800">{tour.duration}</span>
              </div>
              <div className="pt-3 flex justify-between">
                <span>Размер группы:</span>
                <span className="font-semibold text-stone-800">До {tour.maxGroupSize} человек</span>
              </div>
              <div className="pt-3 flex justify-between">
                <span>Уровень комфорта:</span>
                <span className="font-semibold text-emerald-700">Премиум 5*</span>
              </div>
            </div>

            <button
              onClick={handleBookTour}
              className="w-full py-4 rounded-xl bg-[#173F36] hover:bg-[#337F6A] text-white text-xs font-semibold uppercase tracking-wider text-center block transition-all shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              Забронировать участие ↗
            </button>

            <p className="text-[10px] text-center text-stone-400 leading-tight">
              Демонстрационный режим. Заявка сохранится локально в вашем браузере.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
