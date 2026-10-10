import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { useLanguage } from '../i18n/LanguageContext';

export const FAQPage: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      q: 'Как работает бронирование на сайте NOMAD LUXURY?',
      a: 'Сайт функционирует в режиме клиентской демонстрации фронтенд-архитектуры. Вы можете выбрать даты, количество гостей, категорию шале или программу тура и оформить демонстрационную бронь, которая безопасно сохранится в localStorage вашего браузера с уникальным референс-номером. Реальные платежи не взимаются.'
    },
    {
      q: 'Включены ли трансферы и спа-услуги в стоимость проживания?',
      a: 'Во всех наших флагманских объектах (например, Amirsoy Alpine Chalets, Samarkand Regency) спа-комплекс, термальные сауны и подогреваемый инфинити-бассейн уже включены в стоимость. Индивидуальные трансферы на автомобилях представительского класса или вертолетах заказываются через консьержа.'
    },
    {
      q: 'Можно ли приехать с домашними животными?',
      a: 'Большинство наших загородных вилл и горных шале в Чимгане и Заамине поддерживают формат Pet-Friendly при предварительном согласовании с консьержем.'
    },
    {
      q: 'Как работает языковой переключатель (RU / EN)?',
      a: 'Язык интерфейса переключается в верхнем навигационном меню в один клик. Выбранное значение сохраняется в локальной памяти браузера и автоматически подгружается при повторных визитах.'
    },
    {
      q: 'Как сбросить или удалить сохраненные бронирования и избранное?',
      a: 'На странице «Политика конфиденциальности и локальное хранилище» или в разделе «Бронирование» доступна кнопка очистки локальных данных браузера в один клик.'
    }
  ];

  return (
    <div className="pt-28 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <Breadcrumbs items={[{ label: t.nav.faq }]} />

      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#337F6A] block">
          База знаний
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#173F36] font-medium leading-tight">
          Часто задаваемые вопросы
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Все, что нужно знать о правилах бронирования, сервисе, особенностях резортов и демонстрационном режиме работы сайта.
        </p>
      </div>

      <div className="space-y-4">
        {faqItems.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-6 text-left font-serif-luxury text-xl font-bold text-[#173F36] flex items-center justify-between hover:bg-stone-50 cursor-pointer transition-colors"
              >
                <span>{item.q}</span>
                <ChevronDown className={`w-5 h-5 text-stone-400 shrink-0 ml-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 pt-2 text-stone-600 text-sm leading-relaxed border-t border-stone-100">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
