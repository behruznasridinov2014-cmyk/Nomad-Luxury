import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Calendar,
  Users,
  CheckCircle2,
  Trash2,
  AlertTriangle,
  Building,
  Compass,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { resortsData } from '../data/resorts';
import { toursData } from '../data/tours';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { useLanguage } from '../i18n/LanguageContext';
import { useBooking } from '../context/BookingContext';
import { useLocation, Link } from '../router/Router';
import { BookingRequest } from '../types';

export const BookingPage: React.FC = () => {
  const { t } = useLanguage();
  const { search } = useLocation();
  const { bookings, createBooking, cancelBooking, deleteBooking } = useBooking();

  const query = new URLSearchParams(search);
  const initialType = (query.get('type') === 'tour' ? 'tour' : 'resort') as 'resort' | 'tour';
  const initialItemId = query.get('itemId') || (initialType === 'resort' ? resortsData[0].id : toursData[0].id);

  const [bookingType, setBookingType] = useState<'resort' | 'tour'>(initialType);
  const [selectedId, setSelectedId] = useState<string>(initialItemId);
  const [checkIn, setCheckIn] = useState<string>(query.get('checkIn') || '2026-11-10');
  const [checkOut, setCheckOut] = useState<string>(query.get('checkOut') || '2026-11-14');
  const [guests, setGuests] = useState<number>(Number(query.get('guests')) || 2);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [step, setStep] = useState<number>(1);
  const [lastCreatedBooking, setLastCreatedBooking] = useState<BookingRequest | null>(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string; dates?: string }>({});

  const selectedResort = resortsData.find((r) => r.id === selectedId) || resortsData[0];
  const selectedTour = toursData.find((t) => t.id === selectedId) || toursData[0];

  const [selectedRoomId, setSelectedRoomId] = useState<string>(selectedResort.roomTypes[0]?.id || '');

  // Calculate duration
  const nights = React.useMemo(() => {
    if (bookingType === 'tour') return 1;
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diff = Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  }, [checkIn, checkOut, bookingType]);

  const totalPrice = React.useMemo(() => {
    if (bookingType === 'resort') {
      const room = selectedResort.roomTypes.find(r => r.id === selectedRoomId);
      const rate = room ? room.price : selectedResort.pricePerNight;
      return rate * nights;
    } else {
      return selectedTour.price * (guests > 1 ? guests : 1);
    }
  }, [bookingType, selectedResort, selectedRoomId, nights, selectedTour, guests]);

  const validateDetails = () => {
    const errs: { name?: string; email?: string; dates?: string } = {};
    if (!customerName.trim()) errs.name = 'Пожалуйста, укажите ваше имя';
    if (!customerEmail.trim() || !customerEmail.includes('@')) errs.email = 'Укажите корректный email';
    if (bookingType === 'resort' && checkIn && checkOut && new Date(checkOut) <= new Date(checkIn)) {
      errs.dates = 'Дата выезда должна быть позже даты заезда';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateDetails()) return;

    const itemTitle = bookingType === 'resort' ? selectedResort.name : selectedTour.title;
    const itemImage = bookingType === 'resort' ? selectedResort.heroImage : selectedTour.heroImage;
    const room = selectedResort.roomTypes.find(r => r.id === selectedRoomId);

    const newBooking = createBooking({
      type: bookingType,
      itemId: selectedId,
      itemTitle,
      itemImage,
      checkIn: bookingType === 'resort' ? checkIn : undefined,
      checkOut: bookingType === 'resort' ? checkOut : undefined,
      nights: bookingType === 'resort' ? nights : undefined,
      guests,
      roomTypeId: bookingType === 'resort' ? selectedRoomId : undefined,
      roomTypeName: bookingType === 'resort' ? room?.name : undefined,
      customerName,
      customerEmail,
      customerPhone,
      specialRequests,
      totalPrice,
      currency: 'USD'
    });

    setLastCreatedBooking(newBooking);
    setStep(3); // Confirmation screen
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <Breadcrumbs items={[{ label: t.booking.title }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#337F6A] block">
          Онлайн бронирование
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#173F36] font-medium leading-tight">
          {t.booking.title}
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          {t.booking.subtitle}. Расчет прозрачен, а данные сохраняются локально в вашем браузере.
        </p>
      </div>

      {/* Important Demo Notice Banner */}
      <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-4 text-xs sm:text-sm text-amber-950">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="font-semibold block text-amber-900">
            Демонстрационный режим заявки:
          </strong>
          <p className="leading-relaxed">
            {t.booking.demoDisclaimer} Номер банковской карты не запрашивается, списание средств не производится.
          </p>
        </div>
      </div>

      {step < 3 ? (
        /* WIZARD FORM */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Side (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-lg space-y-8">
            {/* Type Switcher */}
            <div className="flex p-1.5 rounded-2xl bg-stone-100 max-w-md">
              <button
                type="button"
                onClick={() => {
                  setBookingType('resort');
                  setSelectedId(resortsData[0].id);
                }}
                className={`flex-1 py-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  bookingType === 'resort'
                    ? 'bg-[#173F36] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Building className="w-3.5 h-3.5" />
                <span>Резорт или отель</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setBookingType('tour');
                  setSelectedId(toursData[0].id);
                }}
                className={`flex-1 py-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  bookingType === 'tour'
                    ? 'bg-[#173F36] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Авторский тур</span>
              </button>
            </div>

            {/* Target Item Selector */}
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-wider font-bold text-stone-500">
                {bookingType === 'resort' ? 'Выберите объект проживания:' : 'Выберите программу тура:'}
              </label>
              <select
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm font-medium text-stone-800 focus:outline-none cursor-pointer"
              >
                {bookingType === 'resort'
                  ? resortsData.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} — ${r.pricePerNight}/ночь ({r.location})
                      </option>
                    ))
                  : toursData.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.title} — ${t.price} ({t.duration})
                      </option>
                    ))}
              </select>
            </div>

            {/* Dates & Guests */}
            {bookingType === 'resort' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-stone-500 mb-1">
                    {t.booking.checkInDate}
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm font-medium text-stone-800 focus:outline-none cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-stone-500 mb-1">
                    {t.booking.checkOutDate}
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm font-medium text-stone-800 focus:outline-none cursor-pointer"
                  />
                </div>
              </div>
            )}

            {errors.dates && (
              <div className="text-xs text-rose-600 font-medium">
                {errors.dates}
              </div>
            )}

            {/* Room selection for resort */}
            {bookingType === 'resort' && (
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider font-bold text-stone-500">
                  {t.booking.roomCategory}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedResort.roomTypes.map((room) => (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                        selectedRoomId === room.id
                          ? 'border-[#337F6A] bg-[#E2F1EB]/40 ring-2 ring-[#337F6A]/20'
                          : 'border-stone-200 bg-white hover:border-stone-300'
                      }`}
                    >
                      <div className="font-semibold text-xs text-[#173F36]">{room.name}</div>
                      <div className="text-xs text-[#337F6A] font-bold mt-1">${room.price} / ночь</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Guests Count Stepper */}
            <div className="space-y-1">
              <label className="block text-xs uppercase tracking-wider font-bold text-stone-500">
                {t.booking.guestsCount}
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-10 h-10 rounded-xl border border-stone-300 flex items-center justify-center font-bold text-stone-600 hover:bg-stone-50 cursor-pointer"
                >
                  -
                </button>
                <span className="w-12 text-center font-bold text-sm">{guests}</span>
                <button
                  type="button"
                  onClick={() => setGuests(Math.min(10, guests + 1))}
                  className="w-10 h-10 rounded-xl border border-stone-300 flex items-center justify-center font-bold text-stone-600 hover:bg-stone-50 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Guest Contact Details */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <h3 className="font-serif-luxury text-xl font-bold text-[#173F36]">
                {t.booking.step4}
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1">
                    {t.booking.nameLabel} *
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Например: Рустам Ахмедов"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-800 focus:outline-none focus:border-[#337F6A]"
                  />
                  {errors.name && <span className="text-xs text-rose-600 mt-1 block">{errors.name}</span>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">
                      {t.booking.emailLabel} *
                    </label>
                    <input
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="guest@luxury.com"
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-800 focus:outline-none focus:border-[#337F6A]"
                    />
                    {errors.email && <span className="text-xs text-rose-600 mt-1 block">{errors.email}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">
                      {t.booking.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="+998 90 123 45 67"
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-800 focus:outline-none focus:border-[#337F6A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1">
                    {t.booking.requestsLabel}
                  </label>
                  <textarea
                    rows={2}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Трансфер из аэропорта, диетическое питание, подготовка сауны..."
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-800 focus:outline-none focus:border-[#337F6A]"
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleConfirmReservation}
              className="w-full py-4 rounded-xl bg-[#173F36] hover:bg-[#337F6A] text-white text-xs font-semibold uppercase tracking-wider text-center block transition-all shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              {t.booking.confirmAction}
            </button>
          </div>

          {/* Live Summary Sidebar (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 glass-panel rounded-3xl p-6 sm:p-8 border border-white/80 shadow-2xl space-y-6">
              <h3 className="font-serif-luxury text-2xl font-bold text-[#173F36]">
                Детали бронирования
              </h3>

              <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-stone-200">
                <img
                  src={bookingType === 'resort' ? selectedResort.heroImage : selectedTour.heroImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#337F6A] block">
                  {bookingType === 'resort' ? selectedResort.categoryLabel : selectedTour.categoryLabel}
                </span>
                <h4 className="font-serif-luxury text-xl font-bold text-[#173F36] mt-0.5">
                  {bookingType === 'resort' ? selectedResort.name : selectedTour.title}
                </h4>
              </div>

              <div className="space-y-3 text-xs text-stone-600 divide-y divide-stone-100">
                {bookingType === 'resort' ? (
                  <>
                    <div className="pt-2 flex justify-between">
                      <span>Даты заезда:</span>
                      <span className="font-semibold text-stone-800">{checkIn} — {checkOut} ({nights} ночи)</span>
                    </div>
                    <div className="pt-3 flex justify-between">
                      <span>Гости:</span>
                      <span className="font-semibold text-stone-800">{guests} чел.</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="pt-2 flex justify-between">
                      <span>Длительность тура:</span>
                      <span className="font-semibold text-stone-800">{selectedTour.duration}</span>
                    </div>
                    <div className="pt-3 flex justify-between">
                      <span>Участники:</span>
                      <span className="font-semibold text-stone-800">{guests} чел.</span>
                    </div>
                  </>
                )}

                <div className="pt-3 flex items-baseline justify-between text-sm font-bold text-[#173F36]">
                  <span>Расчетная сумма:</span>
                  <span className="font-serif-luxury text-2xl">${totalPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* STEP 3: CONFIRMATION SUCCESS SCREEN */
        lastCreatedBooking && (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-2xl text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#E2F1EB] text-[#173F36] flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9 text-[#337F6A]" />
            </div>

            <div className="space-y-2">
              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#173F36] font-medium">
                {t.booking.successTitle}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t.booking.successSub}
              </p>
              <div className="inline-block px-5 py-2 rounded-xl bg-stone-100 font-mono text-base font-bold text-[#173F36] tracking-widest border border-stone-200">
                {lastCreatedBooking.referenceNumber}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-left text-xs text-stone-600 space-y-2">
              <div className="flex justify-between">
                <strong>Объект:</strong>
                <span>{lastCreatedBooking.itemTitle}</span>
              </div>
              <div className="flex justify-between">
                <strong>Гость:</strong>
                <span>{lastCreatedBooking.customerName}</span>
              </div>
              <div className="flex justify-between">
                <strong>Email:</strong>
                <span>{lastCreatedBooking.customerEmail}</span>
              </div>
              <div className="flex justify-between">
                <strong>Сумма:</strong>
                <span className="font-bold text-[#173F36]">${lastCreatedBooking.totalPrice}</span>
              </div>
            </div>

            <p className="text-xs text-stone-500 max-w-md mx-auto leading-relaxed">
              {t.booking.savedInBrowser}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 rounded-full bg-[#173F36] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#337F6A] transition-colors cursor-pointer"
              >
                {t.booking.newBooking}
              </button>
              <Link
                to="/"
                className="px-6 py-3 rounded-full border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50"
              >
                На главную
              </Link>
            </div>
          </div>
        )
      )}

      {/* SAVED LOCAL RESERVATIONS LIST */}
      <div className="pt-12 border-t border-stone-200 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#173F36] font-medium">
            {t.booking.myBookings} ({bookings.length})
          </h2>
        </div>

        {bookings.length === 0 ? (
          <div className="p-8 rounded-2xl bg-white border border-stone-200 text-center text-xs text-stone-500">
            {t.booking.noBookings}
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((b) => (
              <div
                key={b.id}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-stone-200">
                    <img src={b.itemImage} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#337F6A]">
                        {b.referenceNumber}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                        b.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {b.status === 'confirmed' ? 'Активно (Демо)' : 'Отменено'}
                      </span>
                    </div>
                    <h4 className="font-serif-luxury text-lg font-bold text-[#173F36] mt-0.5">
                      {b.itemTitle}
                    </h4>
                    <p className="text-xs text-stone-400">
                      Гость: {b.customerName} • ${b.totalPrice} {b.nights ? `(${b.nights} ночи)` : ''}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  {b.status === 'confirmed' && (
                    <button
                      onClick={() => cancelBooking(b.id)}
                      className="px-3.5 py-1.5 rounded-lg border border-stone-300 text-xs text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
                    >
                      {t.booking.cancelBooking}
                    </button>
                  )}
                  <button
                    onClick={() => deleteBooking(b.id)}
                    className="p-2 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                    title="Удалить из истории"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
