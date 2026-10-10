import React from 'react';
import { Sparkles, Compass, Flame, TreePine, Heart, Utensils, Mountain } from 'lucide-react';
import { toursData } from '../data/tours';
import { TourCard } from '../components/cards/TourCard';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Link } from '../router/Router';
import { useLanguage } from '../i18n/LanguageContext';

export const ExperiencesPage: React.FC = () => {
  const { t } = useLanguage();

  const experienceThemes = [
    {
      title: 'Горный велнес и альпийский покой',
      subtitle: 'Чимган, Амирсай и высокогорные спа-шале',
      icon: <Mountain className="w-5 h-5 text-[#337F6A]" />,
      tours: toursData.filter((t) => t.category === 'wellness' || t.category === 'mountains').slice(0, 3)
    },
    {
      title: 'Наследие Шёлкового пути и архитектура',
      subtitle: 'Самарканд, Бухара, Хива и монументальные ансамбли',
      icon: <Sparkles className="w-5 h-5 text-[#337F6A]" />,
      tours: toursData.filter((t) => t.category === 'culture' || t.category === 'architecture').slice(0, 3)
    },
    {
      title: 'Великая гастрономия и вкусы Востока',
      subtitle: 'Плов от ошпазов, винные погреба и чайные церемонии',
      icon: <Utensils className="w-5 h-5 text-[#337F6A]" />,
      tours: toursData.filter((t) => t.category === 'gastronomy').slice(0, 3)
    }
  ];

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <Breadcrumbs items={[{ label: t.nav.experiences }]} />

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#337F6A] block">
          Кураторская селекция
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#173F36] font-medium leading-tight">
          {t.sections.experiencesTitle}
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          {t.sections.experiencesSubtitle}. Моменты, созданные на стыке дикой природы, тысячелетней культуры и исключительного комфорта.
        </p>
      </div>

      {/* Experience Themes Sections */}
      <div className="space-y-16">
        {experienceThemes.map((theme, idx) => (
          <div key={idx} className="space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
              <div className="p-2.5 rounded-xl bg-[#E2F1EB]">
                {theme.icon}
              </div>
              <div>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#173F36] font-medium">
                  {theme.title}
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  {theme.subtitle}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {theme.tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
