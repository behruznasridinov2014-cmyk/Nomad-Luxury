import React, { useState } from 'react';
import {
  MapPin,
  Check,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  Sparkles,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { useParams, useNavigate } from '../router/Router';
import { resortsData } from '../data/resorts';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { StarRating } from '../components/ui/StarRating';
import { useLanguage } from '../i18n/LanguageContext';
import { useBooking } from '../context/BookingContext';

export const ResortDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const { setSelectedBookingTarget } = useBooking();

  const resort = resortsData.find((r) => r.id === id) || resortsData[0];
  const allImages = [resort.heroImage, ...(resort.gallery || [])];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(resort.roomTypes[0] || null);
  const [checkIn, setCheckIn] = useState('2026-10-20');
  const [checkOut, setCheckOut] = useState('2026-10-23');
  const [guestsCount, setGuestsCount] = useState(2);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Calculate nights
  const nights = React.useMemo(() => {
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diff = Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  }, [checkIn, checkOut]);

  const currentPricePerNight = selectedRoom ? selectedRoom.price : resort.pricePerNight;
  const estimatedTotal = currentPricePerNight * nights;

  const handleBookNow = () => {
    setSelectedBookingTarget({ type: 'resort', id: resort.id });
    const params = new URLSearchParams({
      type: 'resort',
      itemId: resort.id,
      roomTypeId: selectedRoom?.id || '',
      checkIn,
      checkOut,
      guests: guestsCount.toString()
    });
    navigate(`/booking?${params.toString()}`);
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <Breadcrumbs
        items={[
          { label: t.nav.resorts, to: '/resorts' },
          { label: language === 'ru' ? resort.name : resort.nameEn }
        ]}
      />

      {/* Demonstration Banner */}
      {resort.isDemo && (
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3 text-xs text-amber-900">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
          <span>
            <strong>Демонстрационный объект:</strong> Данный курорт представлен в образовательных и демонстрационных целях для показа интерфейса и взаимодействия.
          </span>
        </div>
      )}

      {/* Header Info */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#337F6A]">
          <MapPin className="w-3.5 h-3.5" />
          <span>{resort.location}, {resort.country}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#173F36] font-medium leading-tight">
            {language === 'ru' ? resort.name : resort.nameEn}
          </h1>
          <StarRating rating={resort.rating} reviewsCount={resort.reviewsCount} size="md" />
        </div>
      </div>

      {/* Main Photographic Gallery */}
      <div className="space-y-4">
        <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-xl border border-stone-200">
          <ImageWithFallback
            src={allImages[activeImageIndex]}
            alt={resort.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          {/* Navigation Controls */}
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

        {/* Thumbnails */}
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

      {/* Main Content + Interactive Booking Widget */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Description, Amenities, Rooms, FAQ (8 cols) */}
        <div className="lg:col-span-8 space-y-10">
          {/* Story Narrative */}
          <div className="space-y-4">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#173F36] font-medium">
              О курорте и концепции
            </h2>
            <p className="text-base text-stone-700 leading-relaxed font-light">
              {language === 'ru' ? resort.fullDescription : resort.fullDescriptionEn}
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-4">
            <h3 className="font-serif-luxury text-xl font-medium text-[#173F36] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#337F6A]" />
              <span>Эксклюзивные удобства и спа-сервис</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {resort.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                  <div className="w-2 h-2 rounded-full bg-[#337F6A] shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Room Selection */}
          <div className="space-y-5">
            <h3 className="font-serif-luxury text-2xl text-[#173F36] font-medium">
              Категории резиденций и шале
            </h3>
            <div className="space-y-4">
              {resort.roomTypes.map((room) => {
                const isSelected = selectedRoom?.id === room.id;
                return (
                  <div
                    key={room.id}
                    onClick={() => setSelectedRoom(room)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row gap-5 items-stretch ${
                      isSelected
                        ? 'border-[#337F6A] bg-[#E2F1EB]/30 ring-2 ring-[#337F6A]/20 shadow-md'
                        : 'border-stone-200 bg-white hover:border-stone-300 shadow-xs'
                    }`}
                  >
                    <div className="sm:w-44 h-32 rounded-xl overflow-hidden shrink-0">
                      <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 flex flex-col justify-between space-y-2">
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif-luxury text-lg font-bold text-[#173F36]">
                            {language === 'ru' ? room.name : room.nameEn}
                          </h4>
                          <span className="font-serif-luxury text-lg font-bold text-[#337F6A]">
                            ${room.price} <span className="text-xs font-normal text-stone-500">/ ночь</span>
                          </span>
                        </div>
                        <div className="text-xs text-stone-400 font-medium mt-0.5">
                          {room.sizeM2} м² • до {room.capacity} гостей
                        </div>
                        <p className="text-xs text-stone-600 mt-2 line-clamp-2">
                          {language === 'ru' ? room.description : room.descriptionEn}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {room.features.map((f, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FAQ Accordion */}
          {resort.faq && resort.faq.length > 0 && (
            <div className="space-y-4 pt-4">
              <h3 className="font-serif-luxury text-2xl text-[#173F36] font-medium flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#337F6A]" />
                <span>Вопросы и ответы об отдыхе</span>
              </h3>
              <div className="space-y-3">
                {resort.faq.map((item, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="border border-stone-200 rounded-xl overflow-hidden bg-white shadow-xs"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full px-5 py-4 text-left font-medium text-sm text-[#173F36] flex items-center justify-between hover:bg-stone-50 transition-colors"
                      >
                        <span>{language === 'ru' ? item.question : item.questionEn}</span>
                        <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4 text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                          {language === 'ru' ? item.answer : item.answerEn}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Live Booking Calculator Widget (4 cols) */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 glass-panel rounded-3xl p-6 sm:p-7 border border-white/80 shadow-2xl space-y-6">
            <div className="flex items-baseline justify-between pb-4 border-b border-stone-200">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-400 block">
                  Тариф проживания
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif-luxury text-3xl font-bold text-[#173F36]">
                    ${currentPricePerNight}
                  </span>
                  <span className="text-xs text-stone-500">/ ночь</span>
                </div>
              </div>
              <span className="text-xs font-semibold text-[#337F6A] bg-[#E2F1EB] px-2.5 py-1 rounded-full">
                {selectedRoom?.name.split(' ')[0] || 'Стандарт'}
              </span>
            </div>

            {/* Date Pickers */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-xl bg-white border border-stone-200 text-left">
                  <label className="block text-[10px] uppercase font-bold text-stone-400">
                    Заезд
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full text-xs font-medium text-stone-800 bg-transparent focus:outline-none cursor-pointer mt-1"
                  />
                </div>
                <div className="p-3 rounded-xl bg-white border border-stone-200 text-left">
                  <label className="block text-[10px] uppercase font-bold text-stone-400">
                    Выезд
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full text-xs font-medium text-stone-800 bg-transparent focus:outline-none cursor-pointer mt-1"
                  />
                </div>
              </div>

              {/* Guest Stepper */}
              <div className="p-3 rounded-xl bg-white border border-stone-200 flex items-center justify-between">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-stone-400">
                    Гости
                  </label>
                  <span className="text-xs font-medium text-stone-800">
                    {guestsCount} гостя(-ей)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                    className="w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center text-xs font-bold hover:bg-stone-100"
                  >
                    -
                  </button>
                  <button
                    onClick={() => setGuestsCount(Math.min(resort.capacity, guestsCount + 1))}
                    className="w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center text-xs font-bold hover:bg-stone-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="pt-2 border-t border-stone-200 space-y-2 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>${currentPricePerNight} × {nights} ночи</span>
                <span className="font-semibold text-stone-800">${currentPricePerNight * nights}</span>
              </div>
              <div className="flex justify-between">
                <span>Курортный сбор и спа-доступ</span>
                <span className="text-emerald-700 font-semibold">Включено</span>
              </div>
              <div className="pt-2 border-t border-stone-200 flex justify-between text-sm font-bold text-[#173F36]">
                <span>Итоговая оценка:</span>
                <span className="font-serif-luxury text-xl">${estimatedTotal}</span>
              </div>
            </div>

            {/* Action */}
            <button
              onClick={handleBookNow}
              className="w-full py-4 rounded-xl bg-[#173F36] hover:bg-[#337F6A] text-white text-xs font-semibold uppercase tracking-wider text-center block transition-all shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              Забронировать отдых ↗
            </button>

            <p className="text-[10px] text-center text-stone-400 leading-tight">
              Демонстрационный режим. Никаких платежей и кредитных карт не требуется.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
