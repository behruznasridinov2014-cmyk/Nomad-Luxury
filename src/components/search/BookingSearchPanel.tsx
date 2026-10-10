import React, { useState } from 'react';
import { MapPin, Calendar, Users, ArrowUpRight } from 'lucide-react';
import { destinationsData } from '../../data/destinations';
import { useNavigate } from '../../router/Router';
import { useLanguage } from '../../i18n/LanguageContext';

interface BookingSearchPanelProps {
  className?: string;
  variant?: 'floating' | 'inline';
}

export const BookingSearchPanel: React.FC<BookingSearchPanelProps> = ({
  className = '',
  variant = 'floating'
}) => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const [selectedDestination, setSelectedDestination] = useState<string>('');
  const [checkIn, setCheckIn] = useState<string>('2026-10-20');
  const [checkOut, setCheckOut] = useState<string>('2026-10-25');
  const [guests, setGuests] = useState<number>(2);
  const [showGuestMenu, setShowGuestMenu] = useState<boolean>(false);
  const [dateError, setDateError] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (checkIn && checkOut && new Date(checkOut) <= new Date(checkIn)) {
      setDateError(t.searchPanel.invalidDates);
      return;
    }
    setDateError('');

    const params = new URLSearchParams();
    if (selectedDestination) params.set('destination', selectedDestination);
    if (checkIn) params.set('checkIn', checkIn);
    if (checkOut) params.set('checkOut', checkOut);
    if (guests) params.set('guests', guests.toString());

    navigate(`/resorts?${params.toString()}`);
  };

  const isFloating = variant === 'floating';

  return (
    <div
      className={`w-full ${
        isFloating
          ? 'glass-panel rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/70'
          : 'bg-white/95 rounded-2xl p-5 shadow-lg border border-stone-200'
      } ${className}`}
    >
      <form onSubmit={handleSearch} className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-4">
        {/* Destination picker */}
        <div className="flex-1 min-w-[200px] flex items-center gap-3 px-4 py-3 rounded-xl bg-white/70 border border-stone-200/60 hover:border-[#337F6A]/50 transition-colors">
          <MapPin className="w-5 h-5 text-[#337F6A] shrink-0" />
          <div className="flex-1 text-left">
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-500">
              {t.searchPanel.destination}
            </label>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-stone-800 focus:outline-none cursor-pointer"
            >
              <option value="">{t.searchPanel.allDestinations}</option>
              {destinationsData.map((d) => (
                <option key={d.id} value={d.id}>
                  {language === 'ru' ? d.name : d.nameEn} ({d.country})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Check-in date */}
        <div className="flex-1 min-w-[150px] flex items-center gap-3 px-4 py-3 rounded-xl bg-white/70 border border-stone-200/60 hover:border-[#337F6A]/50 transition-colors">
          <Calendar className="w-5 h-5 text-[#337F6A] shrink-0" />
          <div className="flex-1 text-left">
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-500">
              {t.searchPanel.checkIn}
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-stone-800 focus:outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Check-out date */}
        <div className="flex-1 min-w-[150px] flex items-center gap-3 px-4 py-3 rounded-xl bg-white/70 border border-stone-200/60 hover:border-[#337F6A]/50 transition-colors">
          <Calendar className="w-5 h-5 text-[#337F6A] shrink-0" />
          <div className="flex-1 text-left">
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-500">
              {t.searchPanel.checkOut}
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-stone-800 focus:outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Guests selector */}
        <div className="relative flex-1 min-w-[140px]">
          <div
            onClick={() => setShowGuestMenu(!showGuestMenu)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/70 border border-stone-200/60 hover:border-[#337F6A]/50 transition-colors cursor-pointer"
          >
            <Users className="w-5 h-5 text-[#337F6A] shrink-0" />
            <div className="flex-1 text-left">
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-500">
                {t.searchPanel.guests}
              </label>
              <span className="text-sm font-medium text-stone-800">
                {guests} {guests === 1 ? t.searchPanel.guestSingular : t.searchPanel.guestPlural}
              </span>
            </div>
          </div>

          {/* Stepper Popover */}
          {showGuestMenu && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-stone-200 p-4 z-50 animate-fade-in">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-stone-700">Гости</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-7 h-7 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:bg-stone-100 font-bold"
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-semibold text-sm">{guests}</span>
                  <button
                    type="button"
                    onClick={() => setGuests(Math.min(10, guests + 1))}
                    className="w-7 h-7 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:bg-stone-100 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowGuestMenu(false)}
                className="mt-3 w-full py-1 text-xs text-center font-medium text-[#173F36] hover:bg-[#E2F1EB] rounded"
              >
                Готово
              </button>
            </div>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="h-13 px-7 rounded-xl bg-[#173F36] hover:bg-[#337F6A] text-[#F7F6F0] font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg shadow-[#173F36]/20 cursor-pointer shrink-0"
        >
          <span>{t.searchPanel.searchAction}</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </form>

      {dateError && (
        <div className="mt-2 text-xs text-rose-600 font-medium">
          {dateError}
        </div>
      )}
    </div>
  );
};
