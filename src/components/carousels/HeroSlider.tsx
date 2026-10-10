import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { BookingSearchPanel } from '../search/BookingSearchPanel';
import { Link, useNavigate } from '../../router/Router';
import { useLanguage } from '../../i18n/LanguageContext';

export interface HeroSlide {
  id: string;
  image: string;
  location: string;
  country: string;
  headline: string;
  headlineEn: string;
  subheadline: string;
  subheadlineEn: string;
  link: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-chimgan',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2560&q=85',
    location: 'Чимган, Тянь-Шань',
    country: 'Узбекистан',
    headline: 'Ваше место силы — уже ближе, чем кажется',
    headlineEn: 'Your sanctuary of power is closer than you think',
    subheadline: 'Откройте мир кедровых шале, подогреваемых инфинити-бассейнов и кристального горного воздуха.',
    subheadlineEn: 'Discover cedar chalets, heated alpine infinity pools, and pure restorative mountain air.',
    link: '/resorts/resort-amirsoy-chalets'
  },
  {
    id: 'slide-samarkand',
    image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=2560&q=85',
    location: 'Самарканд, Регистан',
    country: 'Узбекистан',
    headline: 'Лазурная магия Великого Шёлкового пути',
    headlineEn: 'Azure Magic of the Great Silk Road',
    subheadline: 'Монументальное величие площади Регистан, усыпальницы Тимуридов и восточное гостеприимство высшей пробы.',
    subheadlineEn: 'Monumental glory of Registan Square, Timurid architecture, and royal Silk Road hospitality.',
    link: '/destinations/samarkand'
  },
  {
    id: 'slide-charvak',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=85',
    location: 'Чарвак, Бирюзовая ривьера',
    country: 'Узбекистан',
    headline: 'Зеркальная гладь и уединенный отдых у воды',
    headlineEn: 'Mirror Waters and Secluded Lakefront Solitude',
    subheadline: 'Виллы над горным озером, приватный яхтинг на закате и средиземноморская безмятежность.',
    subheadlineEn: 'Cliffside villas over turquoise waters, private sunset sailing, and tranquil mountain horizons.',
    link: '/destinations/charvak'
  },
  {
    id: 'slide-dolomites',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2560&q=85',
    location: 'Доломитовые Альпы',
    country: 'Италия',
    headline: 'Альпийское совершенство над облаками',
    headlineEn: 'High Alpine Perfection Above the Clouds',
    subheadline: 'Парящие бассейны со стеклянным дном, целебные сенокосные спа-ритуалы и драматичные пики ЮНЕСКО.',
    subheadlineEn: 'Cantilevered glass infinity pools, botanical hay wellness, and dramatic UNESCO limestone peaks.',
    link: '/destinations/dolomites'
  },
  {
    id: 'slide-cappadocia',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2560&q=85',
    location: 'Каппадокия',
    country: 'Турция',
    headline: 'Рассветные шары над лунными долинами',
    headlineEn: 'Dawn Flight of Balloons Across Volcanic Valleys',
    subheadline: 'Дизайнерские пещерные сьюты в древней скальной породе и утренний кофе с видом на парящее небо.',
    subheadlineEn: 'Bespoke cave suites carved in ancient volcanic tufa and morning coffee watching floating skies.',
    link: '/destinations/cappadocia'
  }
];

export const HeroSlider: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = heroSlides.length;
  const currentSlide = heroSlides[currentIndex];

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, totalSlides]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, totalSlides]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 pb-12 sm:pb-16 text-white select-none">
      {/* Background Image Carousel with controlled overlay */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ transition: 'opacity 1s ease-in-out, transform 8s ease-out' }}
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.location}
              className="w-full h-full object-cover"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        {/* Cinematic gradient overlays for optimal text readability and realistic atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#173F36]/90 via-[#173F36]/35 to-[#173F36]/60" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center py-8">
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          {/* Tag Pill with slide location */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs tracking-wider uppercase font-semibold text-[#E2F1EB]">
            <Sparkles className="w-3.5 h-3.5 text-[#9BD8CA]" />
            <span>{currentSlide.location} • {currentSlide.country}</span>
          </div>

          {/* Editorial Serif Headline */}
          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12] drop-shadow-md">
            {language === 'ru' ? currentSlide.headline : currentSlide.headlineEn}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-stone-100 max-w-2xl font-light leading-relaxed drop-shadow-sm">
            {language === 'ru' ? currentSlide.subheadline : currentSlide.subheadlineEn}
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <Link
              to={currentSlide.link}
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#337F6A] hover:bg-[#9BD8CA] hover:text-[#173F36] text-white font-medium text-sm sm:text-base flex items-center gap-2 transition-all duration-300 shadow-xl shadow-black/25 hover:-translate-y-0.5"
            >
              <span>{language === 'ru' ? 'Найти свой отдых ↗' : 'Find Your Sanctuary ↗'}</span>
            </Link>

            <Link
              to="/destinations"
              className="px-6 py-3 sm:py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-medium text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>{language === 'ru' ? 'Открыть коллекцию' : 'Explore Collection'}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Glass Booking Panel & Photographic Preview Thumbnails */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto space-y-5">
        <BookingSearchPanel variant="floating" />

        {/* Bottom Bar: Slide Counter, 3 Preview Thumbnails, and Prev/Next controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          {/* Slide Counter & Progress */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm tracking-widest text-[#9BD8CA] font-bold">
              0{currentIndex + 1} <span className="text-white/40 font-normal">/ 0{totalSlides}</span>
            </span>

            {/* Micro progress line */}
            <div className="w-24 h-0.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#9BD8CA] transition-all duration-500 ease-out"
                style={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
              />
            </div>
          </div>

          {/* 3 Interactive Destination Preview Thumbnails */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-wider text-stone-300 font-semibold mr-1">
              Коллекция:
            </span>
            {heroSlides.slice(0, 3).map((slide, idx) => (
              <div
                key={slide.id}
                onClick={() => goToSlide(idx)}
                className={`group relative w-28 h-14 rounded-xl overflow-hidden cursor-pointer border transition-all duration-300 ${
                  currentIndex === idx
                    ? 'border-[#9BD8CA] ring-2 ring-[#9BD8CA]/50 scale-105'
                    : 'border-white/30 opacity-70 hover:opacity-100 hover:border-white/60'
                }`}
              >
                <img src={slide.image} alt={slide.location} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 flex items-end p-1.5">
                  <span className="text-[10px] font-semibold text-white truncate drop-shadow">
                    {slide.location.split(',')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
