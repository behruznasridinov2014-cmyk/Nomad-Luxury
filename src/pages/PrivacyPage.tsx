import React, { useState } from 'react';
import { ShieldCheck, Database, Trash2, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { useLanguage } from '../i18n/LanguageContext';

export const PrivacyPage: React.FC = () => {
  const { t } = useLanguage();
  const [cleared, setCleared] = useState(false);

  const handleClearAllStorage = () => {
    localStorage.removeItem('nomad_favorites');
    localStorage.removeItem('nomad_bookings');
    localStorage.removeItem('nomad_saved_itinerary');
    setCleared(true);
    setTimeout(() => setCleared(false), 3000);
  };

  return (
    <div className="pt-28 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <Breadcrumbs items={[{ label: 'Конфиденциальность' }]} />

      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#337F6A] block">
          Прозрачность и безопасность
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl text-[#173F36] font-medium leading-tight">
          Политика конфиденциальности и локальное хранилище
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Этот проект ценит вашу приватность. Мы не передаем ваши персональные данные третьим лицам и не используем скрытые рекламные трекеры.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6 text-sm text-stone-700 leading-relaxed font-light">
        <h2 className="font-serif-luxury text-2xl font-bold text-[#173F36]">
          Какие данные сохраняются в вашем браузере?
        </h2>
        <p>
          Вся работа демонстрационного сайта NOMAD LUXURY построена на стандартном веб-хранилище браузера (<strong>localStorage</strong>):
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>nomad_language</strong>: выбранный язык интерфейса (RU или EN).</li>
          <li><strong>nomad_favorites</strong>: список идентификаторов объектов, которые вы отметили значком «Сердце».</li>
          <li><strong>nomad_bookings</strong>: демонстрационные бронирования с референс-номерами, датами и введенными именами.</li>
          <li><strong>nomad_saved_itinerary</strong>: индивидуальный маршрут, созданный в конструкторе поездки.</li>
        </ul>

        <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4 mt-6">
          <h3 className="font-serif-luxury text-lg font-bold text-[#173F36] flex items-center gap-2">
            <Database className="w-5 h-5 text-[#337F6A]" />
            <span>Управление локальными данными</span>
          </h3>
          <p className="text-xs text-stone-500">
            Вы можете в любой момент полностью очистить сохраненные данные бронирований и избранного на этом устройстве.
          </p>

          <button
            onClick={handleClearAllStorage}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
            <span>Очистить все демонстрационные данные</span>
          </button>

          {cleared && (
            <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold pt-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>Данные успешно удалены из localStorage.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
