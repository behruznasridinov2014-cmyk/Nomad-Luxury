import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Calendar,
  Sparkles,
  Mountain,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Share2,
  Check
} from 'lucide-react';
import { useParams, Link } from '../router/Router';
import { destinationsData } from '../data/destinations';
import { resortsData } from '../data/resorts';
import { toursData } from '../data/tours';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { StarRating } from '../components/ui/StarRating';
import { ResortCard } from '../components/cards/ResortCard';
import { TourCard } from '../components/cards/TourCard';
import { useLanguage } from '../i18n/LanguageContext';

export const DestinationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const destination = destinationsData.find((d) => d.id === id) || destinationsData[0];

  const allImages = [destination.heroImage, ...(destination.gallery || [])];

  const relatedResorts = resortsData.filter(
    (r) => destination.relatedResorts?.includes(r.id) || r.location.toLowerCase().includes(destination.name.toLowerCase())
  );

  const relatedTours = toursData.filter(
    (t) => destination.relatedTours?.includes(t.id) || t.destinationId === destination.id
  );

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <Breadcrumbs
        items={[
          { label: t.nav.destinations, to: '/destinations' },
          { label: language === 'ru' ? destination.name : destination.nameEn }
        ]}
      />

      {/* Hero Showcase with Gallery */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#337F6A] mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{destination.region}, {destination.country}</span>
            </div>
            <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#173F36] font-medium leading-tight">
              {language === 'ru' ? destination.name : destination.nameEn}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <StarRating rating={destination.rating} size="md" />
            <button
              onClick={handleShare}
              className="p-2.5 rounded-full bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 transition-colors cursor-pointer shadow-xs"
              title="Поделиться ссылкой"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Featured Main Image */}
        <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-xl border border-stone-200">
          <ImageWithFallback
            src={allImages[activeImageIndex]}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          {/* Image Navigation overlay */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <button
              onClick={() => setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)}
              className="p-2 rounded-full bg-white/70 hover:bg-white text-stone-800 backdrop-blur-md transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-white font-mono bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full">
              {activeImageIndex + 1} / {allImages.length}
            </span>
            <button
              onClick={() => setActiveImageIndex((prev) => (prev + 1) % allImages.length)}
              className="p-2 rounded-full bg-white/70 hover:bg-white text-stone-800 backdrop-blur-md transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gallery Thumbnails */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
          {allImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                activeImageIndex === idx
                  ? 'border-[#337F6A] ring-2 ring-[#337F6A]/30 scale-105'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Main Narrative & Practical Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Story & Highlights (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="prose prose-stone max-w-none space-y-4">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#173F36] font-medium">
              О направлении
            </h2>
            <p className="text-base text-stone-700 leading-relaxed font-light">
              {language === 'ru' ? destination.fullDescription : destination.fullDescriptionEn}
            </p>
          </div>

          {/* Highlights */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-4">
            <h3 className="font-serif-luxury text-xl font-medium text-[#173F36] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#337F6A]" />
              <span>Главные впечатления и акценты</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {(language === 'ru' ? destination.highlights : destination.highlightsEn).map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-stone-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#337F6A] mt-2 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Quick Travel Facts (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-5">
            <h3 className="font-serif-luxury text-xl font-medium text-[#173F36]">
              Практическая информация
            </h3>

            <div className="space-y-4 text-xs text-stone-600 divide-y divide-stone-100">
              <div className="pt-2 flex items-center justify-between">
                <span className="text-stone-400">Рекомендуемый сезон:</span>
                <span className="font-medium text-stone-800 text-right">{destination.bestSeason}</span>
              </div>
              <div className="pt-3 flex items-center justify-between">
                <span className="text-stone-400">Длительность поездки:</span>
                <span className="font-medium text-stone-800">{destination.suggestedDuration}</span>
              </div>
              {destination.altitude && (
                <div className="pt-3 flex items-center justify-between">
                  <span className="text-stone-400">Высота над уровнем моря:</span>
                  <span className="font-medium text-stone-800">{destination.altitude}</span>
                </div>
              )}
              <div className="pt-3 flex items-center justify-between">
                <span className="text-stone-400">Категории:</span>
                <span className="font-medium text-[#173F36]">{destination.categories.join(', ')}</span>
              </div>
            </div>

            <Link
              to={`/booking?destination=${destination.id}`}
              className="w-full py-3.5 rounded-xl bg-[#173F36] hover:bg-[#337F6A] text-white text-xs font-semibold uppercase tracking-wider text-center block transition-all shadow-md"
            >
              Забронировать поездку ↗
            </Link>
          </div>
        </div>
      </div>

      {/* Related Resorts */}
      {relatedResorts.length > 0 && (
        <div className="pt-10 border-t border-stone-200 space-y-6">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#173F36] font-medium">
            Рекомендуемые резорты и отели
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedResorts.map((resort) => (
              <ResortCard key={resort.id} resort={resort} />
            ))}
          </div>
        </div>
      )}

      {/* Related Tours */}
      {relatedTours.length > 0 && (
        <div className="pt-10 border-t border-stone-200 space-y-6">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#173F36] font-medium">
            Авторские туры в эту локацию
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
